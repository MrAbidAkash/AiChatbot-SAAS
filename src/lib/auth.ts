import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { MongoClient } from "mongodb";

// Lazy initialization to avoid errors when env vars are not set
let authInstance: ReturnType<typeof betterAuth> | null = null;

function createAuth() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI environment variable is not set");
  }
  
  const client = new MongoClient(uri);
  const db = client.db();

  return betterAuth({
    baseURL: process.env.NEXT_PUBLIC_AUTH_BASE_URL,
    secret: process.env.BETTER_AUTH_SECRET || "development-secret-change-in-production",
    database: mongodbAdapter(db, {
      client,
    }),
    plugins: [nextCookies()],

    emailAndPassword: {
      enabled: true,
    },
    socialProviders: {
      ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
        ? {
            google: {
              clientId: process.env.GOOGLE_CLIENT_ID,
              clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            },
          }
        : {}),
      ...(process.env.APPLE_CLIENT_ID && process.env.APPLE_CLIENT_SECRET
        ? {
            apple: {
              clientId: process.env.APPLE_CLIENT_ID,
              clientSecret: process.env.APPLE_CLIENT_SECRET,
            },
          }
        : {}),
      ...(process.env.TWITTER_CLIENT_ID && process.env.TWITTER_CLIENT_SECRET
        ? {
            twitter: {
              clientId: process.env.TWITTER_CLIENT_ID,
              clientSecret: process.env.TWITTER_CLIENT_SECRET,
            },
          }
        : {}),
      ...(process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET
        ? {
            facebook: {
              clientId: process.env.FACEBOOK_CLIENT_ID,
              clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            },
          }
        : {}),
    },

    session: {
      expiresIn: 60 * 60 * 24 * 7, // 7 days
    },
  });
}

export const auth = new Proxy({} as ReturnType<typeof betterAuth>, {
  get(_, prop) {
    if (!authInstance) {
      authInstance = createAuth();
    }
    return (authInstance as Record<string, unknown>)[prop as string];
  },
});
