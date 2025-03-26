export const generateQuestions = async (
  category: string, 
  difficulty: string, 
  count: number
) => {
  try {
    const response = await fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetQuestions($category: String, $language: String, $limit: Int) {
            getQuestions(category: $category, language: $language, limit: $limit) {
              id
              text
            }
          }
        `,
        variables: { 
          category, 
          language: 'fr', 
          limit: count 
        }
      })
    })

    const result = await response.json()
    
    // Transform the result into the format expected by PlayQuizPage
    return result.data.getQuestions.map((q: any) => ({
      question: q.text,
      options: [], // You'll need to add options logic
      correctAnswer: '' // Removed as per your requirement
    }))
  } catch (error) {
    console.error('Failed to generate questions:', error)
    throw error
  }
}