import { Leaderboard } from "@/components/Leaderboard"

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background text-foreground flex flex-col items-center pt-20">
      <div className="max-w-5xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-extrabold tracking-tight text-primary drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            MathCodeLab
          </h1>
          <p className="text-2xl text-muted-foreground font-light tracking-wide">
            Enter the realm of the Mathemagician. <br/>
            <span className="text-foreground font-medium">Solve. Compete. Ascend.</span>
          </p>
        </div>
        
        <Leaderboard />
      </div>
    </main>
  );
}
