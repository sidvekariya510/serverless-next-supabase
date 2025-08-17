"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function VerifyOtpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get email from URL params if available
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    if (otp.length !== 6) {
      setError("Please enter a 6-digit OTP");
      return;
    }

    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });

      if (error) throw error;

      if (data.user && data.session) {
        // Successfully verified, redirect to protected area
        router.push("/protected");
      } else {
        setError("OTP verification failed. Please try again.");
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      setError("Email is required to resend OTP");
      return;
    }

    const supabase = createClient();
    setIsResending(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
      });

      if (error) throw error;
      setError(null);
      // Show success message
      alert("OTP resent successfully! Please check your email.");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Failed to resend OTP");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Verify Email</CardTitle>
          <CardDescription>
            Enter the 6-digit code sent to your email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerifyOtp}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="otp">OTP Code</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="123456"
                  required
                  maxLength={6}
                  pattern="[0-9]{6}"
                  value={otp}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setOtp(value);
                  }}
                  className="text-center text-lg tracking-widest"
                />
                <p className="text-xs text-muted-foreground">
                  Enter the 6-digit code from your email
                </p>
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              <Button
                type="button"
                variant="outline"
                onClick={handleResendOtp}
                disabled={isResending || !email}
                className="w-full mb-2"
              >
                {isResending ? "Resending..." : "Resend OTP"}
              </Button>
              <div className="text-muted-foreground">
                Didn&apos;t receive the code? &nbsp;
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={isResending || !email}
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  Resend
                </button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              <Link href="/auth/login" className="underline underline-offset-4">
                Back to Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
