"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    await authClient.signUp.email({
      name,
      email,
      password,
    });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={signup} className="bg-black text-white p-2 w-full">
          Sign up
        </button>
      </div>
    </div>
  );
}
