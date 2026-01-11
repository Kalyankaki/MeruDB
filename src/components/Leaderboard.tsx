import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown, Minus } from "lucide-react"

// Mock data
const leaderboardData = [
  { id: 1, rank: 1, username: "EulerTheGreat", avatar: "", rating: 2850, tier: "Archmage", change: 15 },
  { id: 2, rank: 2, username: "GaussPrince", avatar: "", rating: 2810, tier: "Archmage", change: 8 },
  { id: 3, rank: 3, username: "RiemannRider", avatar: "", rating: 2750, tier: "Grand Wizard", change: -5 },
  { id: 4, rank: 4, username: "NoetherQueen", avatar: "", rating: 2720, tier: "Grand Wizard", change: 22 },
  { id: 5, rank: 5, username: "TerenceTaoFan", avatar: "", rating: 2680, tier: "Wizard", change: 0 },
  { id: 6, rank: 6, username: "RamanujanSpirit", avatar: "", rating: 2650, tier: "Wizard", change: -12 },
  { id: 7, rank: 7, username: "HypatiaLogic", avatar: "", rating: 2600, tier: "Sorcerer", change: 5 },
]

export function Leaderboard() {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-card/50 backdrop-blur border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
          🏆 Top Mathemagicians
        </CardTitle>
        <CardDescription>
          The highest rated problem solvers in the realm.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-muted/50 border-b-border/50">
              <TableHead className="w-[80px]">Rank</TableHead>
              <TableHead>Player</TableHead>
              <TableHead>Tier</TableHead>
              <TableHead className="text-right">Rating</TableHead>
              <TableHead className="w-[100px] text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((user) => (
              <TableRow key={user.id} className="hover:bg-muted/50 border-b-border/50">
                <TableCell className="font-medium text-muted-foreground">#{user.rank}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-primary/20">
                      <AvatarImage src={user.avatar} alt={user.username} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {user.username.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-foreground">{user.username}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                    {user.tier}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono font-bold text-foreground">
                  {user.rating}
                </TableCell>
                <TableCell className="text-right">
                  <div className={`flex items-center justify-end gap-1 font-medium ${
                    user.change > 0 ? "text-green-500" : user.change < 0 ? "text-red-500" : "text-muted-foreground"
                  }`}>
                    {user.change > 0 && <ArrowUp className="h-3 w-3" />}
                    {user.change < 0 && <ArrowDown className="h-3 w-3" />}
                    {user.change === 0 && <Minus className="h-3 w-3" />}
                    {Math.abs(user.change)}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
