import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain,BookOpen, Briefcase, Heart, User, Star, Clock, Flame, CloudRain, Crown, Sun, Skull, Shield, Zap, Target, Users, HelpCircle, Apple, ActivitySquare, Wind, ShieldAlert, MessageSquare, Compass, ThumbsUp, ArrowUpDown, UserPlus, HeartPulse, Cloud, Focus, ShieldOff, UserMinus, Sparkles, MessageCircle, Repeat, Ear, Timer, Gauge, Frown, AlertCircle, Gavel, Smile, Utensils, Eye, FlameKindling, Baby, Link2, MessagesSquare, Activity, AlertTriangle, Lightbulb, Scissors, Scale, ShieldX, Grip, CheckSquare } from "lucide-react"

const categories = [
  {
    id: "Entrepreneuriat",
    name: "Entrepreneuriat",
    description: "Évaluez vos connaissances et compétences dans le domaine de l'entrepreneuriat",
    icon: Briefcase,
    color: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-500",
    questionCount: 500,
  },
  {
    id: "ADHD",
    name: "ADHD",
    description: "Mesurez votre compréhension du trouble déficitaire de l'attention avec hyperactivité",
    icon: Brain,
    color: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500",
    questionCount: 400,
  },
  {
    id: "l'alimentation émotionnelle",
    name: "l'alimentation émotionnelle",
    description: "Découvrez votre relation entre les émotions et l'alimentation",
    icon: Heart,
    color: "bg-rose-100 dark:bg-rose-900",
    iconColor: "text-rose-500",
    questionCount: 450,
  },
  {
    id: "Révélation de Soi",
    name: "Révélation de Soi",
    description: "Testez votre niveau d'ouverture et de partage de vos sentiments avec les autres",
    icon: User,
    color: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-500",
    questionCount: 600,
  },
  {
    id: "Narcissisme",
    name: "Narcissisme",
    description: "Évaluez les tendances narcissiques dans votre personnalité",
    icon: Crown,
    color: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500",
    questionCount: 400,
  },
  {
    id: "Névrosisme",
    name: "Névrosisme",
    description: "Mesurez votre tendance à éprouver des émotions négatives",
    icon: CloudRain,
    color: "bg-slate-100 dark:bg-slate-900",
    iconColor: "text-slate-500",
    questionCount: 550,
  },
  {
    id: "Burnout",
    name: "Burnout",
    description: "Identifiez les signes d'épuisement professionnel",
    icon: Flame,
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500",
    questionCount: 400,
  },
  {
    id: "Ménopause",
    name: "Ménopause",
    description: "Évaluez vos connaissances sur la ménopause et ses symptômes",
    icon: Clock,
    color: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-500",
    questionCount: 480,
  },
  {
    id: "Charisme",
    name: "Charisme",
    description: "Découvrez votre niveau de charisme et d'influence sur les autres",
    icon: Star,
    color: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-500",
    questionCount: 700,
  },
  {
    id: "Optimisme",
    name: "Optimisme",
    description: "Mesurez votre tendance à avoir une vision positive de la vie",
    icon: Sun,
    color: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-500",
    questionCount: 400,
  },
  {
    id: "Psychopathie",
    name: "Psychopathie",
    description: "Évaluez les traits psychopathiques dans votre personnalité",
    icon: Skull,
    color: "bg-zinc-100 dark:bg-zinc-900",
    iconColor: "text-zinc-500",
    questionCount: 500,
  },
  {
    id: "Parentalité Hélicoptère",
    name: "Parentalité Hélicoptère",
    description: "Identifiez votre tendance à surprotéger et surveiller excessivement vos enfants",
    icon: Shield,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
    questionCount: 400,
  },
  {
    id: "Procrastination",
    name: "Procrastination",
    description: "Évaluez votre tendance à remettre les tâches à plus tard",
    icon: Clock,
    color: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-500",
    questionCount: 480,
  },
  {
    id: "Gestion de la Colère",
    name: "Gestion de la Colère",
    description: "Mesurez votre capacité à gérer et contrôler votre colère",
    icon: Zap,
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500",
    questionCount: 700,
  },
  {
    id: "Perfectionnisme",
    name: "Perfectionnisme",
    description: "Découvrez votre niveau d'exigence envers vous-même et les autres",
    icon: Target,
    color: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500",
    questionCount: 400,
  },
  {
    id: "Coopération en Équipe",
    name: "Coopération en Équipe",
    description: "Évaluez vos compétences en matière de travail collaboratif",
    icon: Users,
    color: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-500",
    questionCount: 500,
  },
  {
    id: "Estime de Soi",
    name: "Estime de Soi",
    description: "Mesurez votre niveau de confiance et d'appréciation personnelle",
    icon: Heart,
    color: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-500",
    questionCount: 500,
  },
  {
    id: "Fonction Exécutive",
    name: "Fonction Exécutive",
    description: "Évaluez vos capacités d'organisation, de planification et de prise de décision",
    icon: Brain,
    color: "bg-violet-100 dark:bg-violet-900",
    iconColor: "text-violet-500",
    questionCount: 400,
  },
  {
    id: "Ai-je besoin de thérapie ?",
    name: "Ai-je besoin de thérapie ?",
    description: "Découvrez si vous pourriez bénéficier d'un soutien thérapeutique",
    icon: HelpCircle,
    color: "bg-cyan-100 dark:bg-cyan-900",
    iconColor: "text-cyan-500",
    questionCount: 450,
  },
  {
    id: "Nutrition (Vitamines)",
    name: "Nutrition (Vitamines)",
    description: "Testez vos connaissances sur les vitamines et la nutrition",
    icon: Apple,
    color: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500",
    questionCount: 600,
  },
  {
    id: "À quel point êtes-vous stressé ?",
    name: "À quel point êtes-vous stressé ?",
    description: "Mesurez votre niveau de stress actuel",
    icon: ActivitySquare,
    color: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-500",
    questionCount: 400,
  },
  {
    id: "Trouble Anxieux Généralisé",
    name: "Trouble Anxieux Généralisé",
    description: "Évaluez les symptômes d'anxiété généralisée que vous pourriez ressentir",
    icon: Wind,
    color: "bg-sky-100 dark:bg-sky-900",
    iconColor: "text-sky-500",
    questionCount: 500,
  },
  {
    id: "Limites",
    name: "Limites",
    description: "Découvrez votre capacité à établir des limites saines dans vos relations",
    icon: ShieldAlert,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
    questionCount: 400,
  },
  {
    id: "Sagesse",
    name: "Sagesse",
    description: "Mesurez votre niveau de sagesse et de discernement",
    icon: BookOpen,
    color: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-500",
    questionCount: 480,
  },
  {
    id: "Gentillesse",
    name: "Gentillesse",
    description: "Évaluez votre tendance à la gentillesse et à la bienveillance",
    icon: Heart,
    color: "bg-rose-100 dark:bg-rose-900",
    iconColor: "text-rose-500",
    questionCount: 350,
  },
  {
    id: "Sarcasme",
    name: "Sarcasme",
    description: "Découvrez votre propension à utiliser le sarcasme",
    icon: MessageSquare,
    color: "bg-slate-100 dark:bg-slate-900",
    iconColor: "text-slate-500",
    questionCount: 400,
  },
  {
    id: "Satisfaction Relationnelle",
    name: "Satisfaction Relationnelle",
    description: "Mesurez votre niveau de satisfaction dans vos relations personnelles",
    icon: Target,
    color: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-500",
    questionCount: 700,
  },
  {
    id: "Plaisir aux Autres",
    name: "Plaisir aux Autres",
    description: "Évaluez votre tendance à vouloir faire plaisir aux autres",
    icon: ThumbsUp,
    color: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500",
    questionCount: 550,
  },
  {
    id: "Locus de Contrôle",
    name: "Locus de Contrôle",
    description: "Découvrez si vous attribuez les événements à des causes internes ou externes",
    icon: Compass,
    color: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-500",
    questionCount: 500,
  },
  {
    id: "Trouble Bipolaire",
    name: "Trouble Bipolaire",
    description: "Identifiez les symptômes du trouble bipolaire dans votre expérience",
    icon: ArrowUpDown,
    color: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500",
    questionCount: 600,
  },
  {
    id: "Gestion du Temps",
    name: "Gestion du Temps",
    description: "Évaluez votre capacité à gérer efficacement votre temps",
    icon: Clock,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
    questionCount: 600,
  },
  {
    id: "Anxiété Sociale",
    name: "Anxiété Sociale",
    description: "Mesurez votre niveau d'anxiété dans les situations sociales",
    icon: Users,
    color: "bg-sky-100 dark:bg-sky-900",
    iconColor: "text-sky-500",
    questionCount: 600,
  },
  {
    id: "Introversion / Extroversion",
    name: "Introversion / Extroversion",
    description: "Découvrez où vous vous situez sur le spectre introversion-extroversion",
    icon: UserPlus,
    color: "bg-violet-100 dark:bg-violet-900",
    iconColor: "text-violet-500",
    questionCount: 600,
  },
  {
    id: "intelligence émotionnelle",
    name: "intelligence émotionnelle",
    description: "Évaluez votre capacité à reconnaître et gérer vos émotions et celles des autres",
    icon: Brain,
    color: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-500",
    questionCount: 600,
  },
  {
    id: "Machiavélisme",
    name: "Machiavélisme",
    description: "Mesurez votre tendance à la manipulation et aux stratégies de pouvoir",
    icon: Target,
    color: "bg-zinc-100 dark:bg-zinc-900",
    iconColor: "text-zinc-500",
    questionCount: 600,
  },
  {
    id: "Mode de Vie Sain",
    name: "Mode de Vie Sain",
    description: "Évaluez la qualité de vos habitudes de vie et pratiques de santé",
    icon: HeartPulse,
    color: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500",
    questionCount: 600,
  },
  {
    id: "Trouble Affectif Saisonniers",
    name: "Trouble Affectif Saisonniers",
    description: "Identifiez les symptômes de dépression saisonnière",
    icon: Cloud,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
    questionCount: 600,
  },
  {
    id: "Concentration",
    name: "Concentration",
    description: "Mesurez votre capacité à maintenir votre attention et votre focus",
    icon: Focus,
    color: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500",
    questionCount: 600,
  },
  {
    id: "Fixation d'Objectifs",
    name: "Fixation d'Objectifs",
    description: "Évaluez votre efficacité à définir et atteindre des objectifs",
    icon: Target,
    color: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-500",
    questionCount: 600,
  },
  {
    id: "Évitement de Conflit",
    name: "Évitement de Conflit",
    description: "Découvrez votre tendance à éviter les situations conflictuelles",
    icon: ShieldOff,
    color: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-500",
    questionCount: 600,
  },
  {
    id: "Partenaire Narcissique",
    name: "Partenaire Narcissique",
    description: "Identifiez les signes d'un partenaire narcissique dans votre relation",
    icon: UserMinus,
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500",
    questionCount: 600,
  },
  {
    id: "Personnalité en Flirt (Femmes)",
    name: "Personnalité en Flirt (Femmes)",
    description: "Découvrez votre style de séduction",
    icon: Sparkles,
    color: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-500",
    questionCount: 600,
  },
  {
    id: "Motivation Professionnelle",
    name: "Motivation Professionnelle",
    description: "Évaluez vos sources de motivation au travail",
    icon: Briefcase,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
    questionCount: 600,
  },
  {
    id: "Asertivité",
    name: "Asertivité",
    description: "Mesurez votre capacité à vous affirmer et à exprimer vos besoins",
    icon: MessageCircle,
    color: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-500",
    questionCount: 600,
  },
  {
    id: "Pessimisme",
    name: "Pessimisme",
    description: "Évaluez votre tendance à voir le côté négatif des situations",
    icon: CloudRain,
    color: "bg-slate-100 dark:bg-slate-900",
    iconColor: "text-slate-500",
    questionCount: 600,
  },
  {
    id: "Résilience",
    name: "Résilience",
    description: "Découvrez votre capacité à rebondir face aux difficultés",
    icon: Repeat,
    color: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-500",
    questionCount: 600,
  },
  {
    id: "Engagement Relationnel",
    name: "Engagement Relationnel",
    description: "Mesurez votre capacité à vous investir dans vos relations",
    icon: Link2,
    color: "bg-rose-100 dark:bg-rose-900",
    iconColor: "text-rose-500",
    questionCount: 600,
  },
  {
    id: "Compétences d'Écoute",
    name: "Compétences d'Écoute",
    description: "Évaluez votre capacité à écouter activement les autres",
    icon: Ear,
    color: "bg-cyan-100 dark:bg-cyan-900",
    iconColor: "text-cyan-500",
    questionCount: 600,
  },  
  {
    id: "Attachement Relationnel",
    name: "Attachement Relationnel",
    description: "Découvrez votre style d'attachement dans vos relations intimes",
    icon: Target,
    color: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-500",
    questionCount: 600,
  },  
  {
    id: "Vieillissement Positif",
    name: "Vieillissement Positif",
    description: "Évaluez votre attitude face au vieillissement",
    icon: Timer,
    color: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500",
    questionCount: 600,
  },  
  {
    id: "régulation émotionnelle",
    name: "régulation émotionnelle",
    description: "Mesurez votre capacité à gérer et contrôler vos émotions",
    icon: Gauge,
    color: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500",
    questionCount: 600,
  },  
  {
    id: "Personnalité en Flirt (Hommes)",
    name: "Personnalité en Flirt (Hommes)",
    description: "Découvrez votre style de séduction",
    icon: Sparkles,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
    questionCount: 600,
  },  
  {
    id: "Parentalité Autoritairel",
    name: "Parentalité Autoritaire",
    description: "Identifiez vos tendances à un style parental strict et autoritaire",
    icon: Gavel,
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500",
    questionCount: 600,
  },  
  {
    id: "Syndrome de l'Imposteur",
    name: "Syndrome de l'Imposteur",
    description: "Évaluez votre sentiment d'imposture malgré vos réussites",
    icon: AlertCircle,
    color: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-500",
    questionCount: 600,
  },  
  {
    id: "Mentalité Victime",
    name: "Mentalité Victime",
    description: "Découvrez votre tendance à vous percevoir comme une victime",
    icon: Frown,
    color: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-500",
    questionCount: 600,
  },  
  {
    id: "agréabilité",
    name: "agréabilité",
    description: "Mesurez votre niveau de sympathie et d'altruisme envers les autres",
    icon: Smile,
    color: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-500",
    questionCount: 600,
  },  
  {
    id: "Comportement Alimentaire Désordonné",
    name: "Comportement Alimentaire Désordonné",
    description: "Identifiez les signes de troubles alimentaires dans vos habitudes",
    icon: Utensils,
    color: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-500",
    questionCount: 600,
  },  
  {
    id: "Empathie",
    name: "Empathie",
    description: "Évaluez votre capacité à comprendre et ressentir les émotions des autres",
    icon: Heart,
    color: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-500",
    questionCount: 600,
  },  
  {
    id: "Jalousie (Hommes)",
    name: "Jalousie (Hommes)",
    description: "Mesurez votre niveau de jalousie dans vos relations",
    icon: Eye,
    color: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500",
    questionCount: 600,
  },  
  {
    id: "Jalousie (Femmes)",
    name: "Jalousie (Femmes)",
    description: "Mesurez votre niveau de jalousie dans vos relations",
    icon: Eye,
    color: "bg-pink-100 dark:bg-pink-900",
    iconColor: "text-pink-500",
    questionCount: 600,
  },  
  {
    id: "Gaslighting",
    name: "Gaslighting",
    description: "Identifiez les signes de manipulation psychologique dans vos relations",
    icon: FlameKindling,
    color: "bg-orange-100 dark:bg-orange-900",
    iconColor: "text-orange-500",
    questionCount: 600,
  },  
  {
    id: "Mémoire",
    name: "Mémoire",
    description: "Évaluez vos capacités de mémorisation et de rappel",
    icon: Brain,
    color: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500",
    questionCount: 600,
  },  
  {
    id: "ADHD enfants",
    name: "ADHD enfants",
    description: "Identifiez les signes de TDAH chez les enfants",
    icon: Baby,
    color: "bg-cyan-100 dark:bg-cyan-900",
    iconColor: "text-cyan-500",
    questionCount: 600,
  }, 
  {
    id: "Conscienciosité",
    name: "Conscienciosité",
    description: "Mesurez votre niveau d'organisation, de fiabilité et de responsabilité",
    icon: CheckSquare,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
    questionCount: 600,
  }, 
  {
    id: "À quel point êtes-vous contrôlant ?",
    name: "À quel point êtes-vous contrôlant ?",
    description: "Découvrez votre tendance à vouloir contrôler les situations et les autres",
    icon: Grip,
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500",
    questionCount: 600,
  }, 
  {
    id: "Sensibilité au Rejet",
    name: "Sensibilité au Rejet",
    description: "Évaluez votre sensibilité face aux refus et aux critiques",
    icon: ShieldX,
    color: "bg-rose-100 dark:bg-rose-900",
    iconColor: "text-rose-500",
    questionCount: 600,
  }, 
  {
    id: "À quel point êtes-vous éthique ?",
    name: "À quel point êtes-vous éthique ?",
    description: "Mesurez votre niveau d'adhésion aux principes moraux et éthiques",
    icon: Scale,
    color: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-500",
    questionCount: 600,
  }, 
  {
    id: "Rôles de Genre — Hommes",
    name: "Rôles de Genre — Hommes",
    description: "Découvrez votre perception des rôles masculins traditionnels",
    icon: Target,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500",
    questionCount: 600,
  }, 
  {
    id: "Traitement Mental",
    name: "Traitement Mental",
    description: "Évaluez votre style de traitement de l'information et de pensée",
    icon: Brain,
    color: "bg-violet-100 dark:bg-violet-900",
    iconColor: "text-violet-500",
    questionCount: 600,
  }, 
  {
    id: "Compétences en Négociation",
    name: "Compétences en Négociation",
    description: "Mesurez votre efficacité dans les situations de négociation",
    icon: MessageSquare,
    color: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-500",
    questionCount: 600,
  }, 
  {
    id: "Divorce",
    name: "Divorce",
    description: "Évaluez votre expérience et votre adaptation suite à un divorce",
    icon: Scissors,
    color: "bg-slate-100 dark:bg-slate-900",
    iconColor: "text-slate-500",
    questionCount: 600,
  }, 
  {
    id: "Résolution Créative de Problèmes",
    name: "Résolution Créative de Problèmes",
    description: "Découvrez votre approche créative face aux défis et problèmes",
    icon: Lightbulb,
    color: "bg-yellow-100 dark:bg-yellow-900",
    iconColor: "text-yellow-500",
    questionCount: 600,
  }, 
  {
    id: "Ouverture à l'Expérience",
    name: "Ouverture à l'Expérience",
    description: "Mesurez votre curiosité et votre ouverture aux nouvelles idées",
    icon: Compass,
    color: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-500",
    questionCount: 600,
  }, 
  {
    id: "Stabilité Émotionnelle",
    name: "Stabilité Émotionnelle",
    description: "Évaluez votre équilibre émotionnel face aux situations stressantes",
    icon: HeartPulse,
    color: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500",
    questionCount: 600,
  }, 
  {
    id: "Trouble de Stress Post-Traumatique",
    name: "Trouble de Stress Post-Traumatique",
    description: "Identifiez les symptômes de TSPT dans votre expérience",
    icon: AlertTriangle,
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-500",
    questionCount: 600,
  }, 
  {
    id: "Recherche de Sensations",
    name: "Recherche de Sensations",
    description: "Découvrez votre attrait pour les expériences nouvelles et stimulantes",
    icon: Activity,
    color: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500",
    questionCount: 600,
  }, 
  {
    id: "Compétences Sociales",
    name: "Compétences Sociales",
    description: "Évaluez votre aisance et votre efficacité dans les interactions sociales",
    icon: Users,
    color: "bg-sky-100 dark:bg-sky-900",
    iconColor: "text-sky-500",
    questionCount: 600,
  }, 
  {
    id: "Compétences en Communication Interpersonnelles",
    name: "Compétences en Communication Interpersonnelle",
    description: "Mesurez votre efficacité à communiquer avec les autres",
    icon: MessagesSquare,
    color: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-500",
    questionCount: 600,
  }, 
  {
    id: "Votre Santé Mentale Aujourd'hui",
    name: "Votre Santé Mentale Aujourd'hui",
    description: "Évaluez votre bien-être émotionnel et psychologique actuel",
    icon: HeartPulse,
    color: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-600",
    questionCount: 600,
  },
  {
    id: "Personnalité Romantique",
    name: "Personnalité Romantique",
    description: "Découvrez vos traits de personnalité dans les relations amoureuses",
    icon: Heart,
    color: "bg-rose-100 dark:bg-rose-900",
    iconColor: "text-rose-600",
    questionCount: 600,
  }

]

export default function CategoriesPage() {
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
            <Link href="/categories" className="font-medium text-primary">
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

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Quiz Categories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez parmi une variété de catégories pour tester vos connaissances et vous mettre au défi avec des questions générées par l'IA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className={`${category.color}`}>
                  <div className="flex justify-between items-start">
                    <category.icon className={`h-8 w-8 ${category.iconColor}`} />
                    <Badge variant="secondary">{category.questionCount}+ Questions</Badge>
                  </div>
                  <CardTitle className="mt-4">{category.name}</CardTitle>
                  <CardDescription className="text-foreground/70">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Facile</Badge>
                    <Badge variant="outline">Moyen</Badge>
                    <Badge variant="outline">difficile</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/quiz/new?category=${category.id}`} className="w-full">
                    <Button className="w-full">Commencer le quiz</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
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

