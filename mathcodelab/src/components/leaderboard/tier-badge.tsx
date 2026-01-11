"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type TierType = "BRONZE" | "SILVER" | "GOLD" | "PLATINUM" | "DIAMOND" | "MASTER" | "GRANDMASTER";

const tierConfig: Record<TierType, { label: string; color: string; icon: string; bgGradient: string }> = {
  BRONZE: {
    label: "Bronze",
    color: "text-amber-700",
    icon: "🥉",
    bgGradient: "bg-gradient-to-r from-amber-900/30 to-amber-700/20 border-amber-700/50",
  },
  SILVER: {
    label: "Silver",
    color: "text-slate-300",
    icon: "🥈",
    bgGradient: "bg-gradient-to-r from-slate-600/30 to-slate-400/20 border-slate-400/50",
  },
  GOLD: {
    label: "Gold",
    color: "text-yellow-400",
    icon: "🥇",
    bgGradient: "bg-gradient-to-r from-yellow-600/30 to-yellow-400/20 border-yellow-500/50",
  },
  PLATINUM: {
    label: "Platinum",
    color: "text-cyan-300",
    icon: "💎",
    bgGradient: "bg-gradient-to-r from-cyan-600/30 to-cyan-400/20 border-cyan-400/50",
  },
  DIAMOND: {
    label: "Diamond",
    color: "text-blue-300",
    icon: "💠",
    bgGradient: "bg-gradient-to-r from-blue-600/30 to-blue-400/20 border-blue-400/50",
  },
  MASTER: {
    label: "Master",
    color: "text-purple-400",
    icon: "🔮",
    bgGradient: "bg-gradient-to-r from-purple-600/30 to-purple-400/20 border-purple-400/50",
  },
  GRANDMASTER: {
    label: "Grandmaster",
    color: "text-red-400",
    icon: "👑",
    bgGradient: "bg-gradient-to-r from-red-600/30 to-red-400/20 border-red-500/50",
  },
};

interface TierBadgeProps {
  tier: TierType;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

export function TierBadge({ tier, showIcon = true, size = "md" }: TierBadgeProps) {
  const config = tierConfig[tier];
  
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        config.bgGradient,
        config.color,
        sizeClasses[size],
        "font-semibold border backdrop-blur-sm"
      )}
    >
      {showIcon && <span className="mr-1">{config.icon}</span>}
      {config.label}
    </Badge>
  );
}

export function getTierFromRating(rating: number): TierType {
  if (rating >= 2800) return "GRANDMASTER";
  if (rating >= 2400) return "MASTER";
  if (rating >= 2000) return "DIAMOND";
  if (rating >= 1600) return "PLATINUM";
  if (rating >= 1400) return "GOLD";
  if (rating >= 1200) return "SILVER";
  return "BRONZE";
}
