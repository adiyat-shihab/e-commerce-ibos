"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const AuthForm = ({ showName = true, handleSubmit }) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div>
      <form
        className="space-y-4"
        action={(form) => {
          const email = form.get("email");
          const password = form.get("password");
          handleSubmit(email, password);
        }}
      >
        <div className={`flex space-x-4 ${showName || "hidden"}`}>
          <Input
            placeholder="First name (optional)"
            className="w-1/2 rounded-sm"
          />

          <Input placeholder="Last name (optional)" className="w-1/2" />
        </div>
        <Input type="email" name={"email"} placeholder="Email address" />
        <div className="relative">
          <Input
            type={showPass ? "text" : "password"}
            name={"password"}
            placeholder="Password"
          />
          <div
            onClick={() => setShowPass(true)}
            className={`absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 ${showPass && "hidden"}`}
          >
            <Eye />
          </div>
          <div
            onClick={() => setShowPass(false)}
            className={`absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 ${showPass || "hidden"}`}
          >
            <EyeOff />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm">
            I agree to the Terms & Policy
          </label>
        </div>
        <Button className="w-full bg-black text-white">
          <input type={"submit"} value="Sign Up" />
        </Button>
      </form>
      <div className="flex items-center my-[0.9rem]">
        <hr className="flex-grow" />
        <span className="text-xs font-bold mb-1">or</span>
        <hr className="flex-grow" />
      </div>
      <div className=" flex items-center gap-4">
        <Button variant="outline" className="w-full">
          <Image
            src="/google.svg"
            alt="Google logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign in with Google
        </Button>
        <Button variant="outline" className="w-full">
          <Image
            src="/apple.svg"
            alt="Apple logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign in with Apple
        </Button>
      </div>
    </div>
  );
};

export default AuthForm;
