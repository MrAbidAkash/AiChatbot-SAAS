import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

const signIn = async () => {
  return await authClient.signIn.social({
    provider: "google",
  });
};

const Session = async () => {
  return await authClient.getSession();
};

export default authClient;
export { signIn, Session };
