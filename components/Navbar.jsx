"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Stoxii
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className="text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">
              Get a Callback
            </button>
            <Link href="/verify" className="btn-secondary">
              Get Verified
            </Link>
            <Link
              href="/download"
              className="btn-primary flex items-center gap-2"
            >
              <span>Download App</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
