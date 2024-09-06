"use client";
import { AuthProvider } from "@/context/AuthContext";

const Context = ({ children }) => {
  return (
    <div>
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default Context;
