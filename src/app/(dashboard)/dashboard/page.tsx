import Dashboard from "@/components/Dashboard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <Dashboard
      session={{
        user: {
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
          image: session.user.image || null,
        },
        session: {
          id: session.session.id,
          expiresAt: session.session.expiresAt,
        },
      }}
    />
  );
}
