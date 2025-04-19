"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function ChapterPage({ params }) {
  const [chapter, setChapter] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchChapterDetails();
  }, []);

  const fetchChapterDetails = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/courses/${params.courseId}/chapters/${params.chapterId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        setChapter(data.chapter);
        fetchPdf();
      }
    } catch (error) {
      console.error("Error fetching chapter:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPdf = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/courses/${params.courseId}/chapters/${params.chapterId}/pdf`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
      }
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  const handleMarkComplete = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/course/${params.courseId}/chapters/${params.chapterId}/complete`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        router.push(`/dashboard/courses/${params.courseId}`);
      }
    } catch (error) {
      console.error("Error marking chapter complete:", error);
    }
  };

  return (
    <DashboardLayout>
      {loading ? (
        <div className="text-center py-10">Loading chapter...</div>
      ) : (
        chapter && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  {chapter.title}
                </h1>
                <button
                  onClick={handleMarkComplete}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Mark as Complete
                </button>
              </div>
              {pdfUrl && (
                <iframe
                  src={pdfUrl}
                  className="w-full h-[800px] border border-gray-200 rounded-xl"
                  title={`PDF viewer for ${chapter.title}`}
                />
              )}
            </div>
          </div>
        )
      )}
    </DashboardLayout>
  );
}
