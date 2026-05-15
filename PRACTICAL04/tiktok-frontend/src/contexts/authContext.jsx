"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { jwtDecode } from "jwt-decode";

import api from "@/lib/api-config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);

        setUser(decoded);
      } catch (error) {
        localStorage.removeItem("token");
      }
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await api.post("/users/login", {
      email,
      password,
    });

    localStorage.setItem("token", response.data.token);

    setUser(response.data);

    return response.data;
  };

  const register = async (username, email, password, name) => {
    const response = await api.post("/users/register", {
      username,
      email,
      password,
      name,
    });

    return response.data;
  };

  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
