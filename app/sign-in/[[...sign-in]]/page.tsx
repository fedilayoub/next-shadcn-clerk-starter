"use client";

import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { AuthLoading } from "@/components/auth-loading";
import { useAuth } from "@/hooks/useAuth";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, isLoaded, handleSignIn } = useAuth();

  if (!isLoaded) {
    return (
      <section className="px-4 flex items-center justify-center min-h-screen bg-white dark:bg-black">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <Suspense fallback={<AuthLoading />}>
              <AuthLoading />
            </Suspense>
          </CardContent>
        </Card>
      </section>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSignIn({ email, password });
  };

  return (
    <section className="px-4 flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
              />
            </div>
            {error && (
              <div className="text-sm text-red-500 text-center">{error}</div>
            )}
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link 
            href="/forgot-password"
            className="text-sm text-gray-600 hover:text-primary dark:hover:text-white"
          >
            Forgot your password?
          </Link>
          <div className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link 
              href="/sign-up"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
} 