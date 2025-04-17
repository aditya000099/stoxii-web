"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function EmailSubscribeSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Add your email submission logic here
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 100% 50%, #60a5fa 0%, transparent 50%)",
            "radial-gradient(circle at 0% 50%, #60a5fa 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container relative mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Love Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-8"
          >
            <span className="animate-pulse">❤️</span>
            <span className="text-sm font-medium">
              Loved by Thousands subscribers!
            </span>
          </motion.div>

          {/* Title & Description */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold mb-4"
          >
            Simplifying Financial News for You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-8"
          >
            Stay informed with Stoxii, where we deliver the day's key financial
            news in simple, easy-to-understand language.
          </motion.p>

          {/* Email Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative flex max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="🗣️💬 Whisper your email here..."
              className="w-full px-6 py-3 bg-white rounded-full border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-1 top-1 bottom-1 px-6 bg-blue-600 text-white rounded-full font-medium"
            >
              Send
            </motion.button>
          </motion.form>

          {/* Success Message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 text-green-600 text-sm"
              >
                Your submission was successful! 🎉
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
