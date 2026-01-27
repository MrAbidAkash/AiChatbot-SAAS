import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient();

const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

const Session = async () => {
  const data = await authClient.getSession();
  return data;
};

console.log(await Session());

export default authClient;
export { signIn, Session };
