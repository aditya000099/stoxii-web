"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  // Policy-related FAQs
  {
    question: "Are course fees refundable?",
    answer:
      "No, all course fees are non-refundable. Once you enroll and make a payment, the enrollment is considered final and cannot be canceled or refunded.",
  },
  {
    question: "Can I get a refund for service subscriptions?",
    answer:
      "Subscription fees for premium services, advisory, or other subscription-based offerings are non-refundable. Please use any available trial periods to evaluate our services before subscribing.",
  },
  {
    question: "What happens if Stoxii discontinues a service or course?",
    answer:
      "If Stoxii discontinues a service or course, you may be eligible for a pro-rata refund for the remaining duration of the service or course.",
  },
  {
    question: "How does Stoxii handle my personal information?",
    answer:
      "We collect and process your information in accordance with our Privacy Policy. Your data is used to provide and improve our services, and is protected by industry-standard security measures.",
  },
  {
    question: "Where can I read the full Terms and Conditions or Privacy Policy?",
    answer:
      "You can find our Terms and Conditions and Privacy Policy linked at the bottom of every page or in the website footer.",
  },
  {
    question: "Is my investment guaranteed to be successful?",
    answer:
      "No, investing in stocks involves risk, including the potential loss of your principal. Stoxii does not guarantee any returns, and all investment decisions should be made with caution.",
  },
  {
    question: "How can I contact Stoxii for support or questions?",
    answer:
      "You can reach us at support@stoxii.com for any questions or concerns regarding our services or policies.",
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100/50 last:border-none hover:bg-gray-50/50 transition-colors rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 text-left"
      >
        <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <span className={`ml-4 w-4 h-4 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-gray-600 animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <div className="bg-blue-50 flex flex-col justify-start items-start px-4 sm:px-8 md:px-20 lg:px-40 py-10 sm:py-16 md:py-20 w-full">
        <h1 className="mt-10 sm:mt-16 md:mt-20 text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
          FREQUENTLY
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">ASKED QUESTIONS</h1>
      </div>
      <div className="flex flex-col justify-start items-start px-4 sm:px-8 md:px-20 lg:px-40 py-10 sm:py-16 md:py-20 w-full max-w-4xl mx-auto">
        <section className="w-full">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} {...faq} />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}
