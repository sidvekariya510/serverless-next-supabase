import { Suspense } from "react";
import { VerifyOtpForm } from "@/components/verify-otp-form";

export default function VerifyOtpPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Suspense fallback={<div>Loading...</div>}>
          <VerifyOtpForm />
        </Suspense>
      </div>
    </div>
  );
}
