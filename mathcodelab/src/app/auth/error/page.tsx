"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const errorMessages: Record<string, string> = {
  Configuration: "There is a problem with the server configuration.",
  AccessDenied: "You do not have permission to sign in.",
  Verification: "The verification token has expired or has already been used.",
  Default: "An error occurred during authentication.",
};

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error") || "Default";
  const errorMessage = errorMessages[error] || errorMessages.Default;

  return (
    <Card className="w-full max-w-md card-magical relative z-10">
      <CardHeader className="text-center">
        <Link href="/" className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="h-10 w-10 text-violet-400" />
          <span className="text-2xl font-bold text-gradient">MathCodeLab</span>
        </Link>
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center">
          <AlertCircle className="h-8 w-8 text-red-400" />
        </div>
        <CardTitle className="text-2xl">Authentication Error</CardTitle>
        <CardDescription className="text-red-400">{errorMessage}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-sm text-muted-foreground">
          Please try signing in again. If the problem persists, contact support.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild variant="outline" className="flex-1">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild className="flex-1 bg-gradient-to-r from-violet-600 to-indigo-600">
            <Link href="/auth/signin">Try Again</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background math-pattern p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />

      <Suspense
        fallback={
          <Card className="w-full max-w-md card-magical relative z-10">
            <CardContent className="p-8">
              <div className="animate-pulse space-y-4">
                <div className="h-16 w-16 bg-secondary/50 rounded-full mx-auto" />
                <div className="h-6 bg-secondary/50 rounded" />
                <div className="h-4 bg-secondary/50 rounded w-3/4 mx-auto" />
              </div>
            </CardContent>
          </Card>
        }
      >
        <ErrorContent />
      </Suspense>
    </div>
  );
}
