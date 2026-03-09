import { getSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export async function requireAuth() {
  const session = await getSession();
  if (!session.data?.user) {
    redirect("/login");
  }
  return session.data.user;
}

export async function requireGuest() {
  const session = await getSession();
  if (session.data?.user) {
    redirect("/dashboard");
  }
  return null;
}
