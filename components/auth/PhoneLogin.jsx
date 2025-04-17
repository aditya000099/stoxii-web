"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  sendPhoneOTP,
  verifyPhoneOTP,
  phoneLogin,
  phoneRegister,
} from "@/lib/auth";

export default function PhoneLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("PHONE"); // PHONE, OTP, REGISTER
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const router = useRouter();
  const { setUser } = useAuth();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await sendPhoneOTP(phone);
      if (response.success) {
        setStep("OTP");
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    }
    setLoading(false);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const verifyResponse = await verifyPhoneOTP(phone, otp);
      if (verifyResponse.success) {
        if (verifyResponse.isRegistered) {
          const loginResponse = await phoneLogin(phone);
          if (loginResponse.success) {
            setUser(loginResponse.data.user);
            router.push("/dashboard");
          }
        } else {
          setStep("REGISTER");
        }
      } else {
        setError(verifyResponse.message);
      }
    } catch (err) {
      setError("Failed to verify OTP. Please try again.");
    }
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await phoneRegister({
        phoneNumber: phone,
        ...registrationData,
      });

      if (response.success) {
        setUser(response.data.user);
        router.push("/dashboard");
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm">
      {step === "PHONE" && (
        <form onSubmit={handleSendOTP} className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Login to Stoxii</h2>
          <div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary"
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </form>
      )}

      {step === "OTP" && (
        <form onSubmit={handleVerifyOTP} className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Enter OTP</h2>
          <div>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      )}

      {step === "REGISTER" && (
        <form onSubmit={handleRegister} className="space-y-4">
          <h2 className="text-2xl font-bold text-center">
            Complete Registration
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              value={registrationData.firstName}
              onChange={(e) =>
                setRegistrationData((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              value={registrationData.lastName}
              onChange={(e) =>
                setRegistrationData((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              value={registrationData.email}
              onChange={(e) =>
                setRegistrationData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              placeholder="Email (optional)"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary"
          >
            {loading ? "Registering..." : "Complete Registration"}
          </button>
        </form>
      )}

      {error && (
        <div className="mt-4 text-red-600 text-sm text-center">{error}</div>
      )}
    </div>
  );
}
