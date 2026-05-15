"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/contexts/authContext";

export default function SignupPage() {
  const router = useRouter();

  const { register } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(
        formData.username,
        formData.email,
        formData.password,
        formData.name,
      );

      alert("Registration successful");

      router.push("/login");
    } catch (error) {
      console.log(error);

      alert("Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-100 rounded-lg bg-white p-6 shadow"
      >
        <h1 className="mb-5 text-3xl font-bold">Signup</h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="mb-4 w-full border p-3"
        />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="mb-4 w-full border p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 w-full border p-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="mb-4 w-full border p-3"
        />

        <button className="w-full rounded bg-pink-500 py-3 text-white">
          Signup
        </button>
      </form>
    </div>
  );
}
