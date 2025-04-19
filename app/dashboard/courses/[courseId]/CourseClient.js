"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/auth";
import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie";

export default function CoursePageClient({ courseId }) {
  const router = useRouter();
  const { user } = useAuth();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (courseId) {
      fetchCourseDetails();
    }
  }, [courseId]);

  const fetchCourseDetails = async () => {
    try {
      const token = Cookies.get("token");
      const response = await fetch(`${API_URL}/course/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setCourse(data.course);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkComplete = async (chapterId) => {
    try {
      const token = Cookies.get("token");
      const response = await fetch(
        `${API_URL}/course/${courseId}/chapters/${chapterId}/complete`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        fetchCourseDetails();
      }
    } catch (error) {
      console.error("Error marking chapter complete:", error);
    }
  };

  const handleChapterClick = (chapter) => {
    router.push(`/dashboard/courses/${courseId}/chapters/${chapter._id}`);
  };

  return (
    <DashboardLayout>
      {loading ? (
        <div className="text-center py-10">Loading course...</div>
      ) : (
        course && (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl border border-gray-200"
            >
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {course.title}
              </h1>
              <p className="text-gray-600">{course.description}</p>
            </motion.div>

            <div className="space-y-4">
              {course.chapters.map((chapter, index) => (
                <motion.div
                  key={chapter._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 flex items-center justify-between cursor-pointer"
                  onClick={() => handleChapterClick(chapter)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      {chapter.completedBy?.includes(user?._id) ? (
                        <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                      ) : (
                        <span className="text-blue-600 font-medium">
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {chapter.estimatedTime} min read
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMarkComplete(chapter._id);
                    }}
                    className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {chapter.completedBy?.includes(user?._id)
                      ? "Completed"
                      : "Mark Complete"}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )
      )}
    </DashboardLayout>
  );
}
