import AuthForm from "@/components/ui/authForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="lg:w-1/2 p-8 my-auto bg-white">
      <div className="max-w-md mx-auto mt-8 text">
        <h3 className="text-[2rem] font-medium text-left mb-1">
          Welcome To Back!
        </h3>

        <p className="text-left text-[#707070] text-base font-medium mb-6">
          Enter your Credentials to access your account
        </p>
        <AuthForm showName={false} />
        <div className="text-center  mt-6">
          Create an account?{" "}
          <Link
            href={"/authentication/register"}
            className="text-blue-500 ml-1"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
