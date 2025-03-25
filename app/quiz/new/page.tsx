"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, ArrowRight, Clock, BarChart3 } from "lucide-react"

export default function NewQuizPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const preselectedCategory = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState(preselectedCategory || "")
  const [selectedDifficulty, setSelectedDifficulty] = useState(preselectedCategory ? "medium" : "medium")
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(10)
  const [selectedTimeLimit, setSelectedTimeLimit] = useState(60)



 

  const questionCounts = [5, 10, 15, 20]
  const timeLimits = [30, 60, 90, 120, 0] // 0 means no time limit

  const startQuiz = () => {
    
    // Add console logging for debugging
    console.log("Starting quiz with:", {
      category: selectedCategory,
      difficulty: selectedDifficulty,
      count: selectedQuestionCount,
      time: selectedTimeLimit,
    })

    router.push(
      `/quiz/play?category=${selectedCategory}&difficulty=${selectedDifficulty}&count=${selectedQuestionCount}&time=${selectedTimeLimit}`,
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
          <nav className="hidden md:flex gap-6">
          <Link href="/" className="font-medium hover:text-primary">
            Acceuil
            </Link>
            <Link href="/categories" className="font-medium hover:text-primary">
            Catégories
            </Link>
            <Link href="/leaderboard" className="font-medium hover:text-primary">
            Classement
            </Link>
            <Link href="/profile" className="font-medium hover:text-primary">
            profil
            </Link>
          </nav>
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Créez votre quiz</h1>
            
            <div className="flex flex-col items-center gap-8 mb-8">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 justify-center">
                    <BarChart3 className="h-5 w-5" />
                    Nombre de questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center flex-wrap gap-2">
                    {questionCounts.map((count) => (
                      <Button
                        key={count}
                        variant={selectedQuestionCount === count ? "default" : "outline"}
                        onClick={() => setSelectedQuestionCount(count)}
                      >
                        {count}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 justify-center">
                    <Clock className="h-5 w-5" />
                    Limite de temps (secondes)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center flex-wrap gap-2">
                    {timeLimits.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTimeLimit === time ? "default" : "outline"}
                        onClick={() => setSelectedTimeLimit(time)}
                      >
                        {time === 0 ? "Aucune limite" : time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="gap-2" onClick={startQuiz} disabled={!selectedCategory}>
              Commencer le quiz
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>


      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">QUIZ PERSO</span>
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} QUIZ PERSO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

