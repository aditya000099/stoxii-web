"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { API_URL } from "@/lib/auth";
import Cookies from "js-cookie";

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
        setVideoCourses(data.courses);
      }
    } catch (error) {
      console.error("Error fetching video courses:", error);
    } finally {
      setLoading(false);
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
                {course.thumbnail && (
                  <div className="aspect-video w-full">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-600 h-full transition-all duration-500"
                        style={{
                          width: `${course.progress?.progressPercentage || 0}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">
                        {course.progress?.completedChapters || 0} of{" "}
                        {course.chapters?.length || 0} chapters
                      </span>
                      <Link
                        href={`/dashboard/video-courses/${course._id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Continue →
                      </Link>
                    </div>
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
