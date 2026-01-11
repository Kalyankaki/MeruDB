import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/components/providers/session-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MathCodeLab - Gamified Learning Portal",
  description: "Master mathematics through gamified challenges. Compete, learn, and climb the ranks!",
  keywords: ["math", "learning", "gamification", "competitive", "education", "coding"],
  authors: [{ name: "MathCodeLab" }],
  openGraph: {
    title: "MathCodeLab - Gamified Learning Portal",
    description: "Master mathematics through gamified challenges",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-background math-pattern`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
