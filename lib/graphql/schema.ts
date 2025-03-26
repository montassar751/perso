import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Question {
    id: Int!
    text: String!
    category: String
    lang: String
  }

  type Query {
    getQuestions(
      category: String, 
      language: String, 
      limit: Int
    ): [Question!]!
  }
`