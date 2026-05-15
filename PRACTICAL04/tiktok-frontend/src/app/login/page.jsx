"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/contexts/authContext";

export default function LoginPage() {
  const router = useRouter();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);

      alert("Login successful");

      router.push("/");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-5">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-pink-500 text-white w-full py-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
