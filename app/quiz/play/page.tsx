"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Brain, Clock, ArrowRight, CheckCircle, XCircle } from "lucide-react"
import { generateQuestions } from "@/lib/quiz-generator"
import type { Question } from "@/lib/types"

// Define the answer option type
type AnswerOption = {
  label: string;
  value: string;
  size: string;
  color: string;
}

// Define the answer options
const ANSWER_OPTIONS: AnswerOption[] = [
  { label: "Fortement en désaccord", value: "keyLow", size: "w-20 h-20 md:w-24 md:h-24", color: "border-red-400 bg-red-400" },
  { label: "En désaccord", value: "keyLowShort", size: "w-16 h-16 md:w-20 md:h-20", color: "border-red-300 bg-red-300" },
  { label: "Neutre", value: "keyNeutral", size: "w-12 h-12 md:w-16 md:h-16", color: "border-blue-400 bg-blue-400" },
  { label: "D'accord", value: "keyHighShort", size: "w-16 h-16 md:w-20 md:h-20", color: "border-green-300 bg-green-300" },
  { label: "Fortement d'accord", value: "keyHigh", size: "w-20 h-20 md:w-24 md:h-24", color: "border-green-400 bg-green-400" },
]

export default function PlayQuizPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const category = searchParams.get("category") || "general"
  const difficulty = searchParams.get("difficulty") || "medium"
  const count = Number.parseInt(searchParams.get("count") || "10", 10)
  const timeLimit = Number.parseInt(searchParams.get("time") || "60", 10)

  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(timeLimit)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [loading, setLoading] = useState(true)

  // Generate questions on component mount
  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true)
      try {
        const generatedQuestions = await generateQuestions(category, difficulty, count)
        
        // Map generated questions to include answers from ANSWER_OPTIONS
        const questionsWithAnswers = generatedQuestions.map(question => ({
          ...question,
          answers: ANSWER_OPTIONS.map(option => ({
            label: option.label,
            value: option.value,
            size: option.size,
            color: option.color
          }))
        }))
        
        setQuestions(questionsWithAnswers)
      } catch (error) {
        console.error("Failed to generate questions:", error)
      } finally {
        setLoading(false)
      }
    }

    loadQuestions()
  }, [category, difficulty, count])

  // Timer effect
  useEffect(() => {
    if (loading || quizCompleted || !timeLimit) return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          if (!isAnswerSubmitted) {
            handleAnswerSubmit(null)
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [loading, quizCompleted, timeLimit, isAnswerSubmitted])

  const handleSelect = (answerValue: string) => {
    if (isAnswerSubmitted) return
    setSelectedAnswer(answerValue)
  }

  const handleAnswerSubmit = () => {
    if (isAnswerSubmitted || !questions[currentQuestionIndex]) return

    const currentQuestion = questions[currentQuestionIndex]
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer

    if (isCorrect) {
      setScore((prev) => prev + 1)
    }

    setIsAnswerSubmitted(true)

    // Move to next question after a delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
        setSelectedAnswer(null)
        setIsAnswerSubmitted(false)
        setTimeRemaining(timeLimit)
      } else {
        setQuizCompleted(true)
      }
    }, 1500)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Brain className="h-8 w-8 text-primary" />
                  <h1 className="text-2xl font-bold">QUIZ PERSO</h1>
                </div>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Brain className="h-16 w-16 text-primary mx-auto animate-pulse" />
            <h2 className="text-2xl font-bold mt-4">Generating Your Quiz...</h2>
            <p className="text-muted-foreground mt-2">Our AI is crafting challenging questions just for you</p>
          </div>
        </main>
      </div>
    )
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <div className="min-h-screen flex flex-col">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Brain className="h-8 w-8 text-primary" />
                  <h1 className="text-2xl font-bold">QUIZ PERSO</h1>
                </div>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="overflow-hidden">
                <div className="bg-primary h-2" style={{ width: `${percentage}%` }}></div>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">Quiz Completed!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-center">
                    {percentage >= 70 ? (
                      <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="h-12 w-12 text-green-500" />
                      </div>
                    ) : (
                      <div className="h-24 w-24 rounded-full bg-amber-100 flex items-center justify-center">
                        <Brain className="h-12 w-12 text-amber-500" />
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold">Votre score</h3>
                    <p className="text-5xl font-bold my-4">
                      {score} / {questions.length}
                      <span className="text-lg text-muted-foreground ml-2">({percentage}%)</span>
                    </p>
                    <p className="text-muted-foreground">
                      {percentage >= 90
                        ? "Outstanding! You're a true expert!"
                        : percentage >= 70
                          ? "Great job! You know your stuff!"
                          : percentage >= 50
                            ? "Good effort! Keep learning!"
                            : "Keep practicing! You'll improve with time!"}
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-muted/30">
                    <h4 className="font-semibold mb-2">Quiz Details</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Category:</div>
                      <div className="font-medium capitalize">{category}</div>
                      <div>Difficulty:</div>
                      <div className="font-medium capitalize">{difficulty}</div>
                      <div>Questions:</div>
                      <div className="font-medium">{questions.length}</div>
                      <div>Time Limit:</div>
                      <div className="font-medium">{timeLimit ? `${timeLimit} seconds` : "Aucune limite"}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="w-full sm:w-auto" onClick={() => router.push("/quiz/new")}>
                    New Quiz
                  </Button>
                  <Button className="w-full sm:w-auto" onClick={() => router.push("/")}>
                    Back to Home
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Brain className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold">QUIZ PERSO</h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="gap-1">
              <Brain className="h-4 w-4" />
              <span className="capitalize">{category}</span>
            </Badge>
            <Badge variant="outline" className="gap-1">
              <span className="capitalize">{difficulty}</span>
            </Badge>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-sm text-muted-foreground">Question</span>
                <h2 className="text-xl font-bold">
                  {currentQuestionIndex + 1} of {questions.length}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">category:</span>
                <Badge>{category}</Badge>
              </div>
              {timeLimit > 0 && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className={`font-mono ${timeRemaining < 10 ? "text-destructive animate-pulse" : ""}`}>
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              )}
            </div>

            <Progress value={(currentQuestionIndex / questions.length) * 100} className="mb-8" />

            {questions[currentQuestionIndex] && (
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="mb-8">
                    <fieldset>
                      <legend className="text-xl md:text-2xl font-extrabold mb-4 md:mb-6 text-center">
                        {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
                      </legend>
                      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {questions[currentQuestionIndex].answers.map((answer, aIndex) => (
                          <label key={aIndex} className="flex flex-col items-center w-full md:w-1/5">
                            <input
                              type="radio"
                              name={`question${currentQuestionIndex}`}
                              value={answer.value}
                              className="hidden"
                              onClick={() => handleSelect(answer.value)}
                            />
                            <span
                              className={`border-4 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-75 transition transform hover:scale-105 mb-2
                                ${answer.size} ${selectedAnswer === answer.value ? answer.color : 'bg-transparent ' + answer.color}`}
                            />
                            <span className="text-xs md:text-sm font-medium text-center">{answer.label}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full gap-2"
                    onClick={handleAnswerSubmit}
                    disabled={!selectedAnswer}
                  >
                    Submit Answer
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}