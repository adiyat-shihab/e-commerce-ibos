"use client";
import AuthForm from "@/components/ui/authForm";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Page = () => {
  const { register, user } = useAuth();
  const router = useRouter();
  console.log(user);
  const handleSubmit = async (email, password) => {
    console.log(email, password);
    await register(email, password);
    if (user) {
      await router.push("/");
    }
  };
  return (
    <div className="lg:w-1/2 p-8 my-auto bg-white">
      <div className="max-w-md mx-auto mt-8 text">
        <h3 className="text-2xl font-bold text-center mb-1">Welcome To</h3>
        <h1 className="text-[2.5rem] font-bold text-center mb-2">
          Furni<span className="text-blue-500">Flex</span>
        </h1>
        <p className="text-center text-[#707070] text-base font-medium mb-6">
          Signup for purchase your desire products
        </p>
        <AuthForm handleSubmit={handleSubmit} />
        <div className="text-center mt-6">
          Have an account?
          <Link href={"/authentication/login"} className="text-blue-500 ml-1">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
