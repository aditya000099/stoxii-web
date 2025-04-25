'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchBlogById } from "../../../utils/api";
import Navbar from "@/components/Navbar";

export default function BlogDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetchBlogById(id)
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading blog...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!blog) return <div>Blog not found.</div>;

  return (
    <div>
      <Navbar />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      {/* Add more blog details as needed */}
    </div>
  );
}
