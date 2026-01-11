import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaderboard, type LeaderboardEntry } from "@/components/leaderboard";
import {
  Sparkles,
  Trophy,
  Zap,
  Target,
  Users,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Brain,
  Award,
} from "lucide-react";
import Link from "next/link";

// Force dynamic rendering to avoid SSG issues with demo data
export const dynamic = "force-dynamic";

// Static demo data for the homepage leaderboard
const staticDemoData: LeaderboardEntry[] = [
  { rank: 1, userId: "user_1", username: "mathwizard", displayName: "MathWizard", avatar: null, rating: 3120, ratingChange: 25, tier: "GRANDMASTER", gamesPlayed: 450, winRate: 78 },
  { rank: 2, userId: "user_2", username: "algebramaster", displayName: "AlgebraMaster", avatar: null, rating: 2915, ratingChange: -12, tier: "GRANDMASTER", gamesPlayed: 380, winRate: 72 },
  { rank: 3, userId: "user_3", username: "calculusking", displayName: "CalculusKing", avatar: null, rating: 2765, ratingChange: 18, tier: "MASTER", gamesPlayed: 320, winRate: 68 },
  { rank: 4, userId: "user_4", username: "geometryguru", displayName: "GeometryGuru", avatar: null, rating: 2610, ratingChange: 5, tier: "MASTER", gamesPlayed: 290, winRate: 65 },
  { rank: 5, userId: "user_5", username: "numberninja", displayName: "NumberNinja", avatar: null, rating: 2455, ratingChange: -8, tier: "MASTER", gamesPlayed: 260, winRate: 62 },
  { rank: 6, userId: "user_6", username: "primehunter", displayName: "PrimeHunter", avatar: null, rating: 2310, ratingChange: 15, tier: "DIAMOND", gamesPlayed: 240, winRate: 60 },
  { rank: 7, userId: "user_7", username: "equationexpert", displayName: "EquationExpert", avatar: null, rating: 2160, ratingChange: -3, tier: "DIAMOND", gamesPlayed: 220, winRate: 58 },
  { rank: 8, userId: "user_8", username: "theprover", displayName: "TheProver", avatar: null, rating: 2005, ratingChange: 22, tier: "DIAMOND", gamesPlayed: 200, winRate: 56 },
  { rank: 9, userId: "user_9", username: "integralivan", displayName: "IntegralIvan", avatar: null, rating: 1910, ratingChange: -15, tier: "PLATINUM", gamesPlayed: 180, winRate: 54 },
  { rank: 10, userId: "user_10", username: "derivativequeen", displayName: "DerivativeQueen", avatar: null, rating: 1805, ratingChange: 8, tier: "PLATINUM", gamesPlayed: 160, winRate: 52 },
];

export default function Home() {
  const demoLeaderboardData = staticDemoData;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-background to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <span className="text-sm text-violet-300">Welcome to the arena</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Master Mathematics</span>
              <br />
              <span className="text-foreground">Through Competition</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Challenge yourself with curated math problems, climb the global rankings,
              and unlock your full potential as a{" "}
              <span className="text-violet-400 font-semibold">Mathemagician</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-8 h-12 text-lg glow-violet"
                asChild
              >
                <Link href="/problems">
                  Start Solving
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-violet-500/50 hover:bg-violet-500/10 h-12 text-lg"
                asChild
              >
                <Link href="/leaderboard">
                  <Trophy className="mr-2 h-5 w-5 text-yellow-400" />
                  View Rankings
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              {[
                { icon: Users, label: "Active Users", value: "10,000+" },
                { icon: BookOpen, label: "Problems", value: "500+" },
                { icon: Trophy, label: "Competitions", value: "50+" },
                { icon: Award, label: "Achievements", value: "100+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-6 w-6 text-violet-400 mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-violet-950/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Level Up</span> Your Math Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience learning like never before with our gamified approach to mathematics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Adaptive Difficulty",
                description: "Problems tailored to your skill level that grow with you as you improve.",
                gradient: "from-violet-500 to-purple-500",
              },
              {
                icon: TrendingUp,
                title: "ELO Rating System",
                description: "Chess-style competitive rating that accurately reflects your mathematical prowess.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Zap,
                title: "Daily Challenges",
                description: "Fresh problems every day to keep your skills sharp and earn bonus XP.",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                icon: Brain,
                title: "Multiple Categories",
                description: "From algebra to calculus, discrete math to probability - master them all.",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: Trophy,
                title: "Global Leaderboards",
                description: "Compete with mathematicians worldwide and prove your worth.",
                gradient: "from-emerald-500 to-green-500",
              },
              {
                icon: Award,
                title: "Achievements & Badges",
                description: "Unlock achievements as you progress and show off your accomplishments.",
                gradient: "from-indigo-500 to-violet-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="card-magical group hover:scale-[1.02] transition-transform duration-300"
              >
                <CardHeader>
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Info */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient-gold">Climb the Ranks</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Chess.com-inspired ranking system puts you in competition with
                mathematicians worldwide. Solve problems, gain rating, and rise through
                the tiers from Bronze to Grandmaster.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { tier: "Grandmaster", rating: "2800+", color: "text-red-400" },
                  { tier: "Master", rating: "2400-2799", color: "text-purple-400" },
                  { tier: "Diamond", rating: "2000-2399", color: "text-blue-400" },
                  { tier: "Platinum", rating: "1600-1999", color: "text-cyan-400" },
                  { tier: "Gold", rating: "1400-1599", color: "text-yellow-400" },
                  { tier: "Silver", rating: "1200-1399", color: "text-slate-300" },
                  { tier: "Bronze", rating: "< 1200", color: "text-amber-700" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`font-semibold ${item.color}`}>{item.tier}</span>
                    <span className="text-muted-foreground text-sm">{item.rating}</span>
                  </div>
                ))}
              </div>
              <Button
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500"
                asChild
              >
                <Link href="/leaderboard">
                  View Full Leaderboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Leaderboard Component */}
            <div className="lg:w-2/3">
              <Leaderboard
                entries={demoLeaderboardData}
                title="Top Mathemagicians"
                showTopThree={true}
                maxHeight="500px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-violet-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Become a{" "}
              <span className="text-gradient">Mathemagician</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of students, tutors, and math enthusiasts on their journey
              to mathematical mastery.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-10 h-14 text-lg glow-violet-lg"
            >
              Get Started Free
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-violet-400" />
              <span className="text-lg font-bold text-gradient">MathCodeLab</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 MathCodeLab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
