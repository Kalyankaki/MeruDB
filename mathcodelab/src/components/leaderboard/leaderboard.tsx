"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TierBadge, TierType, getTierFromRating } from "./tier-badge";
import { RatingChange } from "./rating-change";
import { cn } from "@/lib/utils";
import { Crown, Medal, Award, Trophy } from "lucide-react";

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  displayName: string;
  avatar: string | null;
  rating: number;
  ratingChange: number;
  tier: TierType;
  gamesPlayed: number;
  winRate: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  currentUserId?: string;
  title?: string;
  showTopThree?: boolean;
  maxHeight?: string;
}

function getRankIcon(rank: number) {
  switch (rank) {
    case 1:
      return <Crown className="h-5 w-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />;
    case 2:
      return <Medal className="h-5 w-5 text-slate-300 drop-shadow-[0_0_6px_rgba(203,213,225,0.4)]" />;
    case 3:
      return <Award className="h-5 w-5 text-amber-600 drop-shadow-[0_0_6px_rgba(217,119,6,0.4)]" />;
    default:
      return null;
  }
}

function getRankStyle(rank: number) {
  switch (rank) {
    case 1:
      return "bg-gradient-to-r from-yellow-500/10 via-yellow-400/5 to-transparent border-l-2 border-l-yellow-400";
    case 2:
      return "bg-gradient-to-r from-slate-400/10 via-slate-300/5 to-transparent border-l-2 border-l-slate-300";
    case 3:
      return "bg-gradient-to-r from-amber-600/10 via-amber-500/5 to-transparent border-l-2 border-l-amber-600";
    default:
      return "";
  }
}

function TopThreeCard({ entry, position }: { entry: LeaderboardEntry; position: 1 | 2 | 3 }) {
  const positionStyles = {
    1: {
      container: "order-2 scale-110 z-10",
      card: "bg-gradient-to-b from-yellow-500/20 via-yellow-400/10 to-transparent border-yellow-500/30",
      crown: "text-yellow-400",
      glow: "shadow-[0_0_30px_rgba(250,204,21,0.15)]",
    },
    2: {
      container: "order-1",
      card: "bg-gradient-to-b from-slate-400/20 via-slate-300/10 to-transparent border-slate-400/30",
      crown: "text-slate-300",
      glow: "shadow-[0_0_20px_rgba(203,213,225,0.1)]",
    },
    3: {
      container: "order-3",
      card: "bg-gradient-to-b from-amber-600/20 via-amber-500/10 to-transparent border-amber-500/30",
      crown: "text-amber-600",
      glow: "shadow-[0_0_20px_rgba(217,119,6,0.1)]",
    },
  };

  const style = positionStyles[position];

  return (
    <div className={cn("flex-1 px-2", style.container)}>
      <Card className={cn("border backdrop-blur-sm", style.card, style.glow)}>
        <CardContent className="pt-6 pb-4 flex flex-col items-center">
          <div className="relative mb-3">
            {position === 1 && (
              <Crown className="absolute -top-4 left-1/2 -translate-x-1/2 h-6 w-6 text-yellow-400 animate-pulse" />
            )}
            <Avatar className={cn(
              "border-2",
              position === 1 ? "h-20 w-20 border-yellow-400" : "h-16 w-16",
              position === 2 && "border-slate-300",
              position === 3 && "border-amber-600"
            )}>
              <AvatarImage src={entry.avatar || undefined} alt={entry.displayName} />
              <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-bold">
                {entry.displayName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="text-center">
            <p className={cn(
              "font-bold truncate max-w-[120px]",
              position === 1 ? "text-lg text-yellow-400" : "text-base"
            )}>
              {entry.displayName}
            </p>
            <p className="text-xs text-muted-foreground">@{entry.username}</p>
          </div>

          <div className="mt-3 text-center">
            <p className={cn(
              "font-bold font-mono",
              position === 1 ? "text-2xl" : "text-xl"
            )}>
              {entry.rating.toLocaleString()}
            </p>
            <RatingChange change={entry.ratingChange} size="sm" />
          </div>

          <div className="mt-3">
            <TierBadge tier={entry.tier} size="sm" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function LeaderboardRow({ 
  entry, 
  isCurrentUser 
}: { 
  entry: LeaderboardEntry; 
  isCurrentUser: boolean;
}) {
  const rankIcon = getRankIcon(entry.rank);
  const rankStyle = getRankStyle(entry.rank);

  return (
    <div
      className={cn(
        "flex items-center gap-4 px-4 py-3 transition-all hover:bg-white/5 rounded-lg",
        rankStyle,
        isCurrentUser && "bg-violet-500/10 border border-violet-500/30 ring-1 ring-violet-500/20"
      )}
    >
      {/* Rank */}
      <div className="w-12 flex items-center justify-center">
        {rankIcon || (
          <span className={cn(
            "font-mono font-bold text-lg",
            entry.rank <= 10 ? "text-foreground" : "text-muted-foreground"
          )}>
            {entry.rank}
          </span>
        )}
      </div>

      {/* Avatar & Name */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <Avatar className="h-10 w-10 border border-border">
          <AvatarImage src={entry.avatar || undefined} alt={entry.displayName} />
          <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-sm font-bold">
            {entry.displayName.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="font-semibold truncate">{entry.displayName}</p>
          <p className="text-xs text-muted-foreground truncate">@{entry.username}</p>
        </div>
      </div>

      {/* Tier */}
      <div className="hidden sm:block">
        <TierBadge tier={entry.tier} size="sm" />
      </div>

      {/* Rating */}
      <div className="text-right min-w-[80px]">
        <p className="font-bold font-mono text-lg">{entry.rating.toLocaleString()}</p>
        <RatingChange change={entry.ratingChange} size="sm" />
      </div>
    </div>
  );
}

export function Leaderboard({
  entries,
  currentUserId,
  title = "Global Rankings",
  showTopThree = true,
  maxHeight = "600px",
}: LeaderboardProps) {
  const topThree = showTopThree ? entries.slice(0, 3) : [];
  const restOfLeaderboard = showTopThree ? entries.slice(3) : entries;

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="border-b border-border/50">
        <div className="flex items-center gap-3">
          <Trophy className="h-6 w-6 text-violet-400" />
          <CardTitle className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {/* Top 3 Podium */}
        {showTopThree && topThree.length === 3 && (
          <div className="flex items-end justify-center gap-2 mb-8 pt-4">
            <TopThreeCard entry={topThree[1]} position={2} />
            <TopThreeCard entry={topThree[0]} position={1} />
            <TopThreeCard entry={topThree[2]} position={3} />
          </div>
        )}

        {/* Rest of Leaderboard */}
        <ScrollArea style={{ maxHeight }} className="pr-4">
          <div className="space-y-1">
            {restOfLeaderboard.map((entry) => (
              <LeaderboardRow
                key={entry.userId}
                entry={entry}
                isCurrentUser={entry.userId === currentUserId}
              />
            ))}
          </div>
        </ScrollArea>

        {entries.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Trophy className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No rankings available yet.</p>
            <p className="text-sm">Be the first to climb the leaderboard!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Demo data generator for preview
export function generateDemoLeaderboardData(count: number = 20): LeaderboardEntry[] {
  const names = [
    { display: "MathWizard", username: "mathwizard" },
    { display: "AlgebraMaster", username: "algebramaster" },
    { display: "CalculusKing", username: "calculusking" },
    { display: "GeometryGuru", username: "geometryguru" },
    { display: "NumberNinja", username: "numberninja" },
    { display: "PrimeHunter", username: "primehunter" },
    { display: "EquationExpert", username: "equationexpert" },
    { display: "TheProver", username: "theprover" },
    { display: "IntegralIvan", username: "integralivan" },
    { display: "DerivativeQueen", username: "derivativequeen" },
    { display: "MatrixMage", username: "matrixmage" },
    { display: "SetTheorySteve", username: "settheorysteve" },
    { display: "LogicLord", username: "logiclord" },
    { display: "FibonaccieFan", username: "fibonaccifan" },
    { display: "EulerEnthusiast", username: "eulerenthusiast" },
    { display: "PythagorasPro", username: "pythagoraspro" },
    { display: "TrigTitan", username: "trigtitan" },
    { display: "StatsSavant", username: "statssavant" },
    { display: "ProbabilityPro", username: "probabilitypro" },
    { display: "DiscreteDan", username: "discretedan" },
  ];

  const baseRatings = [3100, 2900, 2750, 2600, 2450, 2300, 2150, 2000, 1900, 1800, 1700, 1650, 1600, 1550, 1500, 1450, 1400, 1350, 1300, 1250];

  return names.slice(0, count).map((name, index) => {
    const rating = baseRatings[index] + Math.floor(Math.random() * 50);
    return {
      rank: index + 1,
      userId: `user_${index + 1}`,
      username: name.username,
      displayName: name.display,
      avatar: null,
      rating,
      ratingChange: Math.floor(Math.random() * 60) - 20,
      tier: getTierFromRating(rating),
      gamesPlayed: Math.floor(Math.random() * 500) + 50,
      winRate: Math.floor(Math.random() * 30) + 50,
    };
  });
}
