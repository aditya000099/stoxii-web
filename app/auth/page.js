"use client";
import PhoneLogin from "@/components/auth/PhoneLogin";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <PhoneLogin />
      </div>
    </div>
  );
}
