'use client'

import { useState } from 'react'

export default function GraphQLTestPage() {
  const [questions, setQuestions] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [category, setCategory] = useState<string>('Entrepreneuriat') // Default category

  // Function to fetch questions from the GraphQL API
  const fetchQuestions = async () => {
    setLoading(true)
    setError(null)

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
                category
                lang
              }
            }
          `,
          variables: {
            category: category,    // Using the input category value
            language: "fr",        // Language is set to French
            limit: 20               // Number of questions to fetch
          }
        })
      })

      const result = await response.json()

      if (result.errors) {
        setError(result.errors[0].message)
      } else {
        setQuestions(result.data.getQuestions)
      }
    } catch (err) {
      setError('Failed to fetch questions')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GraphQL Question Test</h1>

      {/* Input field for category */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-lg font-semibold">Category:</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}  // Update the category on change
          className="border p-2 rounded mt-1 w-full"
          placeholder="Enter category (e.g., Entrepreneuriat)"
        />
      </div>

      {/* Button to trigger the fetch */}
      <button 
        onClick={fetchQuestions} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {loading ? 'Loading...' : 'Fetch Questions'}
      </button>

      {/* Error display */}
      {error && (
        <div className="text-red-500 mb-4">
          Error: {error}
        </div>
      )}

      {/* Displaying the questions */}
      {questions.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Questions:</h2>
          <ul>
            {questions.map(question => (
              <li 
                key={question.id} 
                className="border p-2 mb-2 rounded"
              >
                <p><strong>ID:</strong> {question.id}</p>
                <p><strong>Text:</strong> {question.text}</p>
                <p><strong>Category:</strong> {question.category}</p>
                <p><strong>Language:</strong> {question.lang}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
