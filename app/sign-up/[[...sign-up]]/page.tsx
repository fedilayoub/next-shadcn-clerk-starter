"use client";

import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { AuthLoading } from "@/components/auth-loading";
import { useAuth } from "@/hooks/useAuth";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const { 
    error, 
    loading, 
    isLoaded, 
    pendingVerification,
    handleSignUp, 
    verifyEmail 
  } = useAuth();

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
    await handleSignUp({
      firstName,
      lastName,
      username,
      email,
      password,
    });
  };

  const handleVerifyEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    await verifyEmail(code);
  };

  return (
    <section className="px-4 flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
            {!pendingVerification 
              ? "Enter your information to create an account"
              : "Enter the verification code sent to your email"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!pendingVerification ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="johndoe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && (
                <div className="text-sm text-red-500 text-center">{error}</div>
              )}
              
              {/* CAPTCHA Widget */}
              <div 
                id="clerk-captcha" 
                data-cl-theme="auto" 
                data-cl-size="normal"
                className="mt-4"
              />

              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Sign Up"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyEmail} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">Verification Code</Label>
                <Input
                  id="code"
                  placeholder="Enter verification code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
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
                {loading ? "Verifying..." : "Verify Email"}
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link 
              href="/sign-in"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
} 