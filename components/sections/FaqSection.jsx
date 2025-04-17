"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What services does Stoxii offer?",
    answer:
      "At Stoxii Consultancy Services, we deliver equity calls with precision, powered by SEBI-registered RA. Through market analysis and strategic stock recommendations, we empower our clients to grow their wealth and achieve financial success.",
  },
  {
    question: "How is Stoxii different from other consultancy firms?",
    answer:
      "At Stoxii, we prioritize client success with a unique blend of SEBI-registered RA and personalized equity calls. Our data-driven approach and in-depth market analysis set us apart as a trusted partner in wealth creation.",
  },
  {
    question: "What kind of results can I expect from Stoxii?",
    answer:
      "Our clients consistently realize significant returns on their investments through Stoxii's expert analysis and actionable insights. When you work with us, you can anticipate personalized investment strategies paired with the tools necessary for effectively navigating the financial markets.",
  },
  {
    question: "How can I get started with Stoxii?",
    answer:
      "Getting started is easy! Sign up for one of our services. We will assess you and help you succeed in your investment journey by giving you high returns on your investments.",
  },
  {
    question: "Can I access Stoxii on mobile devices?",
    answer:
      "Absolutely! Stoxii's platform is fully optimized for mobile access, allowing you to manage your investments on the go.",
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      className={cn(
        "group border-b border-gray-100/50 last:border-none",
        "hover:bg-gray-50/50 transition-colors rounded-lg"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 text-left"
      >
        <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            // scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4 w-4 h-4 relative"
        >
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FaqSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "absolute inset-0 opacity-80",
          "[mask-image:radial-gradient(800px_circle_at_50%_-100%,white,transparent)]"
        )}
      />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-blue-600 font-medium mb-4 block">FAQ</span>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            Your Questions, Answered Simply and Clearly!
          </h2>
          <p className="text-gray-600">
            Explore quick answers to common queries about our services.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto backdrop-blur-sm bg-white/50 rounded-2xl p-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
