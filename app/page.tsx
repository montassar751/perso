"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Trophy, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">QUIZ PERSO</h1>
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
            <Link href="/login" passHref>
              <Button variant="outline" as="a">
                Login
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button as="a">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Explorez les méandres de votre esprit, laissez<span className="text-primary"> l'IA</span> dévoiler vos secrets enfouis.
              </h1>
              <p className="text-lg text-muted-foreground">
              ✨ Découvrez la puissance de votre personnalité !<br></br>
Nos quiz, basés sur des méthodes scientifiques éprouvées, 
dévoilent les facettes cachées de votre caractère, vos forces uniques et votre véritable potentiel.
 Ne laissez plus le hasard guider votre parcours : entamez dès aujourd’hui une exploration fascinante de vous-même et révélez la meilleure version de vous! 🧠
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/quiz/new" passHref>
                  <Button size="lg" className="gap-2" onClick={() => console.log("Start Quiz button clicked")}>
                    <Zap className="h-5 w-5" />
                    Commencer le quiz
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button size="lg" variant="outline">
                  Explorer
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative w-full h-[400px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-lg shadow-lg p-4 rotate-6 animate-float">
                  <div className="h-4 w-32 bg-primary/20 rounded mb-2"></div>
                  <div className="h-3 w-28 bg-primary/20 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-accent/30 rounded"></div>
                    <div className="h-3 w-full bg-accent/30 rounded"></div>
                    <div className="h-3 w-full bg-accent/30 rounded"></div>
                  </div>
                </div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-lg shadow-lg p-4 -rotate-3 animate-bounce-slow">
                  <div className="h-4 w-32 bg-primary/20 rounded mb-2"></div>
                  <div className="h-3 w-28 bg-primary/20 rounded mb-4"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 w-full bg-accent/30 rounded"></div>
                    <div className="h-8 w-full bg-accent/30 rounded"></div>
                    <div className="h-8 w-full bg-accent/30 rounded"></div>
                    <div className="h-8 w-full bg-accent/30 rounded"></div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Brain className="h-16 w-16 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Fonctionnalités puissantes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              QUIZ PERSO combine une intelligence artificielle avancée et des analyses psychologiques approfondies pour vous offrir une expérience unique et immersive. Découvrez qui vous êtes vraiment à travers des tests captivants, conçus pour révéler vos forces, vos talents cachés et votre potentiel inexploité.               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow quiz-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Questions Générées par l'IA</h3>
                <p className="text-muted-foreground">
                Notre intelligence artificielle crée des questions originales et personnalisées qui s'adaptent à votre personnalité </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow quiz-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Résultats détaillés</h3>
                <p className="text-muted-foreground">
                Analyse complète de vos traits de personnalité avec des informations exploitables.                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow quiz-card">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expérience ludique</h3>
                <p className="text-muted-foreground">
                Format de quiz captivant avec des éléments interactifs qui rendent la découverte de soi amusante.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Élever Votre Compréhension de Vous-Même ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Lancez votre premier quiz de personnalité dès maintenant et découvrez la puissance de l'IA pour révéler vos traits profonds, vos forces et votre potentiel caché.
            </p>
            <Link href="/quiz/new">
              <Button size="lg" variant="secondary" className="gap-2">
                <Zap className="h-5 w-5" />
                Démarrez le quiz ! 
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-muted/30 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">QUIZ PERSO</span>
            </div>
            <div className="flex gap-8">
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary">
                Terms
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} QUIZ PERSO. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

