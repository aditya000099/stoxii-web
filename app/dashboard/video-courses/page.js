"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { API_URL } from "@/lib/auth";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export default function VideoCoursesPage() {
  const { user } = useAuth();
  const [videoCourses, setVideoCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideoCourses();
  }, []);

  const fetchVideoCourses = async () => {
    try {
      const token = Cookies.get("token");
      const response = await fetch(`${API_URL}/video-course/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        // Map through courses to include purchase status
        const coursesWithStatus = data.courses.map((course) => ({
          ...course,
          hasPurchased: course.enrolledUsers?.some(
            (enrollment) => enrollment.user === user?._id
          ),
        }));
        setVideoCourses(coursesWithStatus);
      }
    } catch (error) {
      console.error("Error fetching video courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async (courseId) => {
    try {
      const token = Cookies.get("token");
      const response = await fetch(`${API_URL}/video-course/${courseId}/payment/initiate`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          paymentId: `VID_PAY_${Date.now()}`
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to initiate payment");
      }

      if (data.success && data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        throw new Error("Invalid payment response");
      }
    } catch (error) {
      toast.error(error.message || "Failed to initiate purchase");
      console.error("Error initiating purchase:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Video Courses</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-10">
              Loading courses...
            </div>
          ) : (
            videoCourses.map((course, index) => (
              <motion.div
                key={course._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-200 transition-all"
              >
                <div className="aspect-video w-full relative">
                  <img
                    src={course.thumbnail || "/placeholder-course.jpg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  {!course.hasPurchased && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="text-center px-4">
                        <div className="text-2xl font-bold text-white mb-2">
                          ₹{course.price}
                        </div>
                        <button
                          onClick={() => handlePurchase(course._id)}
                          className="bg-blue-600 text-white px-8 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {course.title}
                    </h3>
                    {course.hasPurchased && (
                      <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                        Purchased
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {course.chapters?.length || 0} chapters
                    </div>
                    <Link
                      href={`/dashboard/video-courses/${course._id}`}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        course.hasPurchased
                          ? "text-blue-600 hover:text-blue-700"
                          : "text-gray-600 hover:text-gray-700"
                      }`}
                    >
                      {course.hasPurchased
                        ? "Continue Learning →"
                        : "Preview Course →"}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
