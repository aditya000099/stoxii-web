'use client'
import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../../utils/api";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs()
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading blogs...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Navbar />
      <div className="bg-blue-50 min-h-screen w-full">
        <div className="flex flex-col justify-start items-start px-4 sm:px-8 md:px-20 lg:px-40 py-10 sm:py-16 md:py-20 w-full max-w-7xl mx-auto">
          <h1 className="mt-10 sm:mt-16 md:mt-20 text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight text-blue-900 mb-10">
            All Blogs
          </h1>
          {blogs.length === 0 ? (
            <p className="text-lg text-gray-500">No blogs found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {blogs.map((blog) => (
                <Link key={blog._id} href={`/blogs/${blog._id}`}>
                  <a className="card glass hover-scale fade-in h-full flex flex-col cursor-pointer transition-shadow duration-300 hover:shadow-xl group">
                    <h2 className="text-2xl font-semibold mb-2 text-blue-800 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="body-text mb-4 flex-1">
                      {blog.summary || blog.content?.slice(0, 120) + "..."}
                    </p>
                    <span className="text-blue-600 font-medium mt-auto group-hover:underline">Read More →</span>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
