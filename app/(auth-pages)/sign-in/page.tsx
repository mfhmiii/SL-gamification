"use client";

import { signInAction, signUpAction } from "@/app/actions";
import { useState } from "react";
// import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
// import { SmtpMessage } from "../smtp-message";
import InputField from "@/components/input-fields";

export default function Login(props: {
  // searchParams: Promise<Message>;
}) {
  // const searchParams = await props.searchParams;
  // if ("message" in searchParams) {
  //   return (
  //     <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
  //       <FormMessage message={searchParams} />
  //     </div>
  //   );
  // }
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  return (
    <>
      <form className="flex flex-col w-full max-w-sm mx-auto">
        <div className="w-full max-w-sm bg-green-200 p-8 rounded-t-lg text-center">
          <h1 className="text-3xl font-bold text-gray-800">Daftar</h1>
        </div>
        {/* <h1 className="text-2xl font-medium">Sign up</h1> */}
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <InputField
            type="email"
            label="Email"
            icon={<FaUser className="text-green-500" />}
            placeholder="Masukan nama lengkap"
            name="email"
            value={email}
            // onChange={}
          />
          {/* <InputField
            type="text"
            label="Username"
            icon={<FaUser className="text-green-500" />}
            placeholder="Masukan username unik"
            name="username"
            value={username}
            // onChange={(e) => setUsername(e.target.value)}
          /> */}
          {/* Password Field with Eye Icon */}
          <div className="relative">
            <InputField
              type={showPassword ? "text" : "password"}
              label="Password"
              icon={<FaLock className="text-green-500" />}
              placeholder="Masukan password"
              name="password"
              value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-4 top-10 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password Field with Eye Icon */}
          {/* <div className="relative">
            <InputField
              type={showConfirmPassword ? "text" : "password"}
              label="Konfirmasi Password"
              icon={<FaLock className="text-green-500" />}
              placeholder="Ulangi password"
              name="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-4 top-10 text-gray-600"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div> */}
          
          {/* <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label htmlFor="username">Username</Label>
          <Input name="username" placeholder="daffa" required />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          /> */}
          <div className="flex justify-between mb-8">
            <p className="text-sm text-foreground">
              Don't have an account?{" "}
              <Link className="text-foreground font-medium underline" href="/sign-up">
                Sign up
              </Link>
            </p>
            <Link
              className="text-xs text-foreground underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <SubmitButton pendingText="Signing In..." formAction={signInAction}>
            Sign in
          </SubmitButton>
          {/* <FormMessage message={searchParams} /> */}
        </div>
      </form>
    </>
  );
}
