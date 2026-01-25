import { betterAuth } from "better-auth";
import { db } from "./db";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  database: db,

  emailPassword: {
    enabled: true,
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
  },
});
