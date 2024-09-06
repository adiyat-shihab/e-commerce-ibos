"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "@/firebase/config";
import { useRouter } from "next/navigation";

const AuthContext = createContext(undefined);
const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        localStorage.setItem("user-session", JSON.stringify(user.uid));
      } else {
        localStorage.removeItem("user-session");
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  const login = async (email, password) => {
    let error = null;
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result.user) {
        router.push("/dashboard");
      }
    } catch (e) {
      error = e;
    }
  };
  const register = async (email, password) => {
    let error = null;
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (result.user) {
      }
    } catch (e) {
      error = e;
    }
  };
  const logOut = async () => {
    await signOut(auth).then(() => router.push("/authentication/register"));
  };
  return (
    <AuthContext.Provider value={{ user, login, register, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
