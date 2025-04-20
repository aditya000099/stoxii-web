"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import {
  UserCircleIcon,
  BookOpenIcon,
  AcademicCapIcon,
  VideoCameraIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function DashboardLayout({ children }) {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated, router]);

  const navigation = [
    { name: "Profile", href: "/dashboard/profile", icon: UserCircleIcon },
    { name: "Learn", href: "/dashboard", icon: BookOpenIcon },
    {
      name: "Courses",
      href: "/dashboard/video-courses",
      icon: VideoCameraIcon,
    },
    {
      name: "Calculators",
      href: "/dashboard/calculators",
      icon: VideoCameraIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 hidden md:flex md:flex-col">
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo */}
          <Link href="/" className="flex items-center h-16 px-4 border-b gap-2">
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="text-xl font-bold text-gray-900">Stoxii</span>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-600 group"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="md:pl-64">
        {/* Top header */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4">
            <h1 className="text-lg font-semibold text-gray-900">
              Learning Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="flex items-center gap-2 p-2 text-sm font-medium text-gray-700">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">
                    {user?.firstName?.charAt(0) || "U"}
                  </span>
                  <span>{user?.firstName || "User"}</span>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
