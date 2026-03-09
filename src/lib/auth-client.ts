import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

const signIn = async () => {
  return await authClient.signIn.social({
    provider: "google",
  });
};

const signUp = async (email: string, password: string, name: string) => {
  return await authClient.signUp.email({
    email,
    password,
    name,
  });
};

const signInWithEmail = async (email: string, password: string) => {
  return await authClient.signIn.email({
    email,
    password,
  });
};

const signOut = async () => {
  return await authClient.signOut();
};

const getSession = async () => {
  return await authClient.getSession();
};

export default authClient;
export { signIn, signUp, signInWithEmail, signOut, getSession };
