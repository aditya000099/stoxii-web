"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/auth";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export default function PurchasePage({ params }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/transactions/initiate`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId: params.courseId }),
      });

      const data = await response.json();
      if (data.success) {
        window.location.href = data.paymentUrl;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error("Payment initiation failed");
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h1 className="text-2xl font-bold mb-6">Purchase Course</h1>
        <div className="space-y-4">
          {/* Course details */}
          <button
            onClick={handlePurchase}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
