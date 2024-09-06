"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("user-session");
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/authentication/login");
    }
  }, []);
  return <div></div>;
};

export default Page;
