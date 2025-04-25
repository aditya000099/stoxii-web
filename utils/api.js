// Utility for backend API base URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL; // Change to your backend URL if different

export async function fetchBlogs() {
  const res = await fetch(`${API_BASE_URL}/blog`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export async function fetchBlogById(id) {
  const res = await fetch(`${API_BASE_URL}/blog/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
}
