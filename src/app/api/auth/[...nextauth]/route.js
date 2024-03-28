import NextAuth from "next-auth/next";
import googleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "../../../../db/db";

export const authOptions = {
  // eslint-disable-next-line new-cap
  adapter: DrizzleAdapter(db),
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    error: "/auth/error",
  },
  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
};
// eslint-disable-next-line new-cap
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
