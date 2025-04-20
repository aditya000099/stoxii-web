"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  PlayCircleIcon,
  LockClosedIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { API_URL } from "@/lib/auth";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export default function VideoCourseClientPage({ courseId }) {
  const { user } = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [purchaseLoading, setPurchaseLoading] = useState(false);

  useEffect(() => {
    if (courseId) {
      console.log("Fetching course:", courseId); // Debug log
      fetchCourseDetails();
    }
  }, [courseId]);

  const fetchCourseDetails = async () => {
    try {
      const token = Cookies.get("token");
      const response = await fetch(
        `${API_URL}/video-course/single/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        console.log("Course data:", data); // Debug log
        setCourse(data.course);
        setHasPurchased(data.hasPurchased);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
      toast.error("Error fetching course details");
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async () => {
    if (!course || !course._id) {
      toast.error("Course not loaded");
      return;
    }
    try {
      setPurchaseLoading(true);
      const token = Cookies.get("token");
      if (!user || !user._id) {
        toast.error("User not logged in");
        return;
      }
      // Use the unified backend payment initiation route and include user's phone if available
      const response = await fetch(`${API_URL}/video-course/${course._id}/payment/initiate`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          paymentId: `${course._id}-${user._id}-${Date.now()}`,
          phone: user.phone || ""
        }),
      });

      const data = await response.json();
      if (data.success && data.paymentUrl) {
        // Ensure PhonePe Checkout SDK is loaded
        function loadPhonePeCheckoutScript(callback) {
          if (window.PhonePeCheckout && window.PhonePeCheckout.transact) {
            callback();
            return;
          }
          const scriptId = 'phonepe-checkout-js';
          if (document.getElementById(scriptId)) {
            // script is loading, wait and retry
            setTimeout(() => loadPhonePeCheckoutScript(callback), 200);
            return;
          }
          const script = document.createElement('script');
          script.src = 'https://mercury.phonepe.com/web/bundle/checkout.js';
          script.id = scriptId;
          script.defer = true;
          script.onload = callback;
          document.body.appendChild(script);
        }
        loadPhonePeCheckoutScript(() => {
          if (window.PhonePeCheckout && window.PhonePeCheckout.transact) {
            window.PhonePeCheckout.transact({ tokenUrl: data.paymentUrl });
          } else {
            // fallback if SDK fails to load
            window.location.href = data.paymentUrl;
          }
        });
      } else {
        throw new Error(data.message || "Failed to initiate payment");
      }
    } catch (error) {
      toast.error(error.message || "Failed to initiate purchase");
    } finally {
      setPurchaseLoading(false);
    }
  };

  if (loading)
    return (
      <DashboardLayout>
        <div className="text-center py-10">Loading...</div>
      </DashboardLayout>
    );

  // Check for payment status in URL
  const [paymentStatus, setPaymentStatus] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const payment = urlParams.get("payment");
      if (payment) setPaymentStatus(payment);
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto p-6">
        {paymentStatus === "PAYMENT_SUCCESS" && (
          <div className="mb-4 p-4 bg-green-50 text-green-700 border border-green-200 rounded">
            Payment successful! Course unlocked.
          </div>
        )}
        {paymentStatus === "PAYMENT_FAILED" && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 border border-red-200 rounded">
            Payment failed. Please try again.
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Course Header */}
          <div className="relative h-48 bg-gradient-to-r from-blue-600 to-indigo-600">
            <img
              src={course?.thumbnail || "/placeholder-course.jpg"}
              alt={course?.title || "Course Thumbnail"}
              className="w-full h-full object-cover opacity-50"
              onError={(e) => { e.target.src = "/placeholder-course.jpg"; }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl font-bold text-white text-center px-4">
                {course?.title}
              </h1>
            </div>
          </div>

          {/* Course Info */}
          <div className="p-6">
            <div className="flex justify-between items-start gap-6">
              <div className="space-y-4">
                <p className="text-gray-600">{course?.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{course?.chapters?.length} chapters</span>
                  <span>•</span>
                  <span>
                    {course?.chapters?.reduce(
                      (acc, ch) => acc + (ch.duration || 0),
                      0
                    )}{" "}
                    minutes total
                  </span>
                </div>
              </div>

              {!hasPurchased && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ₹{course?.price || 0}
                  </div>
                  <button
                    onClick={handlePurchase}
                    disabled={purchaseLoading}
                    className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {purchaseLoading ? (
                      "Processing..."
                    ) : (
                      <>
                        <ShoppingCartIcon className="w-5 h-5" />
                        Pay Now
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Preview or locked message */}
            {!hasPurchased && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 text-gray-600">
                  <LockClosedIcon className="w-5 h-5" />
                  <p>
                    Purchase this course to access all chapters and materials.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
