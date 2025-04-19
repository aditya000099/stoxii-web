import CoursePageClient from "./CourseClient";

export default function CoursePage({ params }) {
  return <CoursePageClient courseId={params.courseId} />;
}
