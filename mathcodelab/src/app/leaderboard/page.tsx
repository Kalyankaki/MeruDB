import { Navbar } from "@/components/layout/navbar";
import { Leaderboard, type LeaderboardEntry } from "@/components/leaderboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TierBadge } from "@/components/leaderboard/tier-badge";
import { Trophy, Filter, Globe, Calculator, Brain, Sigma } from "lucide-react";

// Force dynamic rendering to avoid SSG issues with demo data
export const dynamic = "force-dynamic";

// Static demo data for the leaderboard - in production, this would come from your database
const staticLeaderboardData: LeaderboardEntry[] = [
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
  { rank: 11, userId: "user_11", username: "matrixmage", displayName: "MatrixMage", avatar: null, rating: 1710, ratingChange: 12, tier: "PLATINUM", gamesPlayed: 145, winRate: 51 },
  { rank: 12, userId: "user_12", username: "settheorysteve", displayName: "SetTheorySteve", avatar: null, rating: 1655, ratingChange: -5, tier: "PLATINUM", gamesPlayed: 130, winRate: 50 },
  { rank: 13, userId: "user_13", username: "logiclord", displayName: "LogicLord", avatar: null, rating: 1605, ratingChange: 9, tier: "PLATINUM", gamesPlayed: 120, winRate: 49 },
  { rank: 14, userId: "user_14", username: "fibonaccifan", displayName: "FibonacciFan", avatar: null, rating: 1555, ratingChange: -2, tier: "GOLD", gamesPlayed: 110, winRate: 48 },
  { rank: 15, userId: "user_15", username: "eulerenthusiast", displayName: "EulerEnthusiast", avatar: null, rating: 1505, ratingChange: 6, tier: "GOLD", gamesPlayed: 100, winRate: 47 },
  { rank: 16, userId: "user_16", username: "pythagoraspro", displayName: "PythagorasPro", avatar: null, rating: 1455, ratingChange: -10, tier: "GOLD", gamesPlayed: 95, winRate: 46 },
  { rank: 17, userId: "user_17", username: "trigtitan", displayName: "TrigTitan", avatar: null, rating: 1405, ratingChange: 3, tier: "GOLD", gamesPlayed: 85, winRate: 45 },
  { rank: 18, userId: "user_18", username: "statssavant", displayName: "StatsSavant", avatar: null, rating: 1355, ratingChange: -7, tier: "SILVER", gamesPlayed: 75, winRate: 44 },
  { rank: 19, userId: "user_19", username: "probabilitypro", displayName: "ProbabilityPro", avatar: null, rating: 1305, ratingChange: 4, tier: "SILVER", gamesPlayed: 65, winRate: 43 },
  { rank: 20, userId: "user_20", username: "discretedan", displayName: "DiscreteDan", avatar: null, rating: 1255, ratingChange: -1, tier: "SILVER", gamesPlayed: 55, winRate: 42 },
];

export default function LeaderboardPage() {
  // Use static demo data - in production, this would come from your database
  const globalLeaderboard = staticLeaderboardData;
  
  const categories = [
    { id: "mixed", label: "Overall", icon: Globe, active: true },
    { id: "algebra", label: "Algebra", icon: Calculator },
    { id: "calculus", label: "Calculus", icon: Sigma },
    { id: "logic", label: "Logic", icon: Brain },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-yellow-400" />
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Global Rankings</span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Compete with mathematicians worldwide. Solve problems, gain rating, 
            and climb through the tiers from Bronze to Grandmaster.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Category Filter */}
            <Card className="card-magical">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="h-5 w-5 text-violet-400" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={category.active ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      category.active
                        ? "bg-violet-600/20 text-violet-300 hover:bg-violet-600/30"
                        : "hover:bg-secondary/50"
                    }`}
                  >
                    <category.icon className="mr-2 h-4 w-4" />
                    {category.label}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Tier Guide */}
            <Card className="card-magical">
              <CardHeader>
                <CardTitle className="text-lg">Tier Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { tier: "GRANDMASTER" as const, rating: "2800+" },
                  { tier: "MASTER" as const, rating: "2400-2799" },
                  { tier: "DIAMOND" as const, rating: "2000-2399" },
                  { tier: "PLATINUM" as const, rating: "1600-1999" },
                  { tier: "GOLD" as const, rating: "1400-1599" },
                  { tier: "SILVER" as const, rating: "1200-1399" },
                  { tier: "BRONZE" as const, rating: "< 1200" },
                ].map((item) => (
                  <div key={item.tier} className="flex items-center justify-between">
                    <TierBadge tier={item.tier} size="sm" />
                    <span className="text-xs text-muted-foreground font-mono">
                      {item.rating}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-magical">
              <CardHeader>
                <CardTitle className="text-lg">Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-4">
                  <p className="text-muted-foreground text-sm mb-2">Sign in to see your ranking</p>
                  <Button className="bg-gradient-to-r from-violet-600 to-indigo-600">
                    Sign In
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Leaderboard */}
          <div className="lg:col-span-3">
            <Leaderboard
              entries={globalLeaderboard}
              title="Top Mathemagicians"
              showTopThree={true}
              maxHeight="800px"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
