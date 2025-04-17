"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { API_URL } from "@/lib/auth";
import Cookies from "js-cookie";

export default function DashboardPage() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const token = Cookies.get("token");
      const response = await fetch(`${API_URL}/course/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        setCourses(data.courses);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome to Learning Portal, {user?.firstName || "Trader"}!
          </h2>
          <p className="mt-1 text-gray-500">
            Track your learning progress and access educational materials.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-10">
              Loading courses...
            </div>
          ) : (
            courses.map((course, index) => (
              <motion.div
                key={course._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                    {course.progress.progressPercentage}% Complete
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-full transition-all duration-500"
                      style={{
                        width: `${course.progress.progressPercentage}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>
                      {course.progress.completedChapters} of{" "}
                      {course.progress.totalChapters} chapters
                    </span>
                    <Link
                      href={`/dashboard/course/${course._id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Continue Learning →
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
