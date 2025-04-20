"use client";
import { useState } from "react";
import CagrCalculator from "@/components/calculators/cagr_calculator";
import SipCalculator from "@/components/calculators/sip_calculator";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { motion } from "framer-motion";
import EmiCalculator from "@/components/calculators/emi_calculator";
import LumpsumCalculator from "@/components/calculators/lumpsum_calculator";
import HomeLoanCalculator from "@/components/calculators/homeloan_calculator";
import Navbar from "@/components/Navbar";

const calculators = [
  { id: "sip", name: "SIP Calculator", component: SipCalculator },
  { id: "cagr", name: "CAGR Calculator", component: CagrCalculator },
  { id: "emi", name: "EMI Calculator", component: EmiCalculator },
  { id: "lumpsum", name: "Lumpsum Calculator", component: LumpsumCalculator },
  {
    id: "homeloan",
    name: "Home Loan Calculator",
    component: HomeLoanCalculator,
  },
  // Add more calculators here
];

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState("sip");

  const CurrentCalculator = calculators.find(
    (calc) => calc.id === activeCalculator
  )?.component;

  return (
    // <DashboardLayout>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Navbar />
      {/* Calculator Navigation */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Financial Calculators
        </h1>
        <div className="flex flex-wrap gap-3">
          {calculators.map((calc) => (
            <button
              key={calc.id}
              onClick={() => setActiveCalculator(calc.id)}
              className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    activeCalculator === calc.id
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
            >
              {calc.name}
            </button>
          ))}
        </div>
      </div>

      {/* Calculator Display */}
      <motion.div
        key={activeCalculator}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
      >
        {CurrentCalculator && <CurrentCalculator />}
      </motion.div>
    </div>
    // </DashboardLayout>
  );
}
