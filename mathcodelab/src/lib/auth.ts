import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import prisma from "@/lib/prisma";
import { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // Fetch additional user data
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: {
            role: true,
            tier: true,
            username: true,
          },
        });
        if (dbUser) {
          session.user.role = dbUser.role;
          session.user.tier = dbUser.tier;
          session.user.username = dbUser.username;
        }
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account?.provider && user.email) {
        // Create initial rating for new users
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          include: { ratings: true },
        });

        if (existingUser && existingUser.ratings.length === 0) {
          // Create default rating
          await prisma.rating.create({
            data: {
              userId: existingUser.id,
              rating: 1200,
              category: "MIXED",
            },
          });
        }
      }
      return true;
    },
  },
  events: {
    async createUser({ user }) {
      // Create initial rating for new users
      if (user.id) {
        await prisma.rating.create({
          data: {
            userId: user.id,
            rating: 1200,
            category: "MIXED",
          },
        });
      }
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "database",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
