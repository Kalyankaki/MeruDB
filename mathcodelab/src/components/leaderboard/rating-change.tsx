"use client";

import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface RatingChangeProps {
  change: number;
  size?: "sm" | "md" | "lg";
}

export function RatingChange({ change, size = "md" }: RatingChangeProps) {
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const iconSize = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  if (change === 0) {
    return (
      <div className={cn("flex items-center gap-1 text-muted-foreground", sizeClasses[size])}>
        <Minus size={iconSize[size]} />
        <span>0</span>
      </div>
    );
  }

  const isPositive = change > 0;

  return (
    <div
      className={cn(
        "flex items-center gap-1 font-medium",
        sizeClasses[size],
        isPositive ? "text-emerald-400" : "text-red-400"
      )}
    >
      {isPositive ? (
        <TrendingUp size={iconSize[size]} className="text-emerald-400" />
      ) : (
        <TrendingDown size={iconSize[size]} className="text-red-400" />
      )}
      <span>{isPositive ? `+${change}` : change}</span>
    </div>
  );
}
