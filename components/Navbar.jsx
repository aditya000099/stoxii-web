"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Stoxii
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/features"
                className="text-gray-600 hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                FAQ
              </Link>
              <Link
                href="/verify"
                className="text-gray-600 hover:text-gray-900"
              >
                Get Verified
              </Link>
              <button className="text-gray-600 hover:text-gray-900">
                Get a Callback
              </button>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/download"
              className="btn-primary flex items-center gap-2 text-sm"
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <Link
              href="/features"
              className="block text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-600 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="block text-gray-600 hover:text-gray-900"
            >
              FAQ
            </Link>
            <Link
              href="/verify"
              className="block text-gray-600 hover:text-gray-900"
            >
              Get Verified
            </Link>
            <button className="block text-gray-600 hover:text-gray-900">
              Get a Callback
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
