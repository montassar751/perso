import { query } from '../db'

export const resolvers = {
  Query: {
    getQuestions: async (_: any, args: {
      category?: string, 
      language?: string, 
      limit?: number
    }) => {
      const { category, language, limit = 10 } = args

      // Construct query conditions dynamically
      const conditions: string[] = []
      const params: any[] = []
      let paramCount = 1

      if (category) {
        conditions.push(`"Catégorie" ILIKE $${paramCount}`)
        params.push(`%${category}%`)
        paramCount++
      }

      if (language) {
        conditions.push(`lang = $${paramCount}`)
        params.push(language)
        paramCount++
      }

      // Construct the full SQL query
      const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ''
      const sqlQuery = `
        SELECT id, text, "Catégorie" as category, lang 
        FROM public.questions 
        ${whereClause}
        LIMIT $${paramCount}
      `
      params.push(limit)

      // Execute the query
      return await query(sqlQuery, params)
    }
  }
}