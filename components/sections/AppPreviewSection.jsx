"use client";
import { motion } from "framer-motion";
import Iphone15Pro from "../magicui/iphone-15-pro";
import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Live Trades",
    description:
      "Receive real-time entry and exit signals from a SEBI-registered RA for smarter trading decisions.",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Get News",
    description:
      "Stay informed with the latest updates on Indian and international capital markets, brought to Stoxii.",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Social Media",
    description:
      "Stay updated with trending content and the latest news through our social media channels.",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Notification",
    description:
      "Stay updated with real-time Notification in stoxii application.",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "At our platform, we prioritize 100% transparency, believing that trust and clarity are the true value we offer—profits are simply a natural byproduct.",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "No to Options",
    description:
      "With 90% of traders facing losses in options, we firmly believe in a no-option strategy. We do not recommend or endorse options trading, prioritizing safer, more reliable investment approaches for our clients.",
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function AppPreviewSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Pattern with adjusted mask */}
      <DotPattern
        className={cn(
          "absolute inset-0 opacity-30",
          "[mask-image:radial-gradient(800px_circle_at_50%_40%,white,transparent)]"
        )}
      />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Discover Stocks
          </h2>
          <p className="text-lg text-gray-600">
            Track, share, and grow with ease and precision.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-16 max-w-6xl mx-auto">
          {/* iPhone Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-[260px] h-[540px] lg:w-[280px] lg:h-[580px] shrink-0"
          >
            <div className="sticky top-24 w-full h-full">
              <Iphone15Pro
                className="w-full h-full drop-shadow-xl"
                src="/images/andr.jpg"
              />
            </div>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full max-w-2xl">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-4 lg:p-5 rounded-xl border border-gray-100/50 hover:border-blue-100/50 transition-all duration-300 flex gap-4"
              >
                <div className="bg-blue-50/50 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
