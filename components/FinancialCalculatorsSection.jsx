"use client";
import React from "react";
import Link from "next/link";
import {
  FaCalculator,
  FaMagic,
  FaHome,
  FaChartLine,
  FaPiggyBank,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function FinancialCalculatorsSection() {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50/70 border-blue-100">
      <h2 className="text-3xl font-bold mb-10 text-center text-zinc-800 tracking-tight">
        Financial Calculators
      </h2>

      <div className="flex gap-4 justify-center max-w-4xl mx-auto mb-4 overflow-x-auto pb-2 hide-scrollbar">
        <CalculatorCard
          href="/calculators"
          icon={<FaMoneyBillWave />}
          label="EMI"
          bg="bg-neutral-50"
        />
        <CalculatorCard
          href="/calculators"
          icon={<FaPiggyBank />}
          label="SIP"
          bg="bg-neutral-50"
        />
        <CalculatorCard
          href="/calculators"
          icon={<FaCalculator />}
          label="Lumpsum"
          bg="bg-neutral-50"
        />
        <CalculatorCard
          href="/calculators"
          icon={<FaHome />}
          label="Home Loan"
          bg="bg-neutral-50"
        />
        <CalculatorCard
          href="/calculators"
          icon={<FaChartLine />}
          label="CAGR"
          bg="bg-neutral-50"
        />
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Magic Age Section */}
      <div className="mt-20 text-center max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold text-zinc-700 mb-3">
          ✨ Magic Age Calculator
        </h3>
        <p className="text-zinc-600 mb-6">
          Discover your *Magic Age* — the year when your investments, dreams, or
          finances could align for a life-changing moment.
        </p>
        <Link
          href="/magic-age"
          className="block bg-blue-100 border-dashed border-blue-400 rounded-xl py-4 px-6 font-semibold text-lg text-blue-700 hover:bg-blue-200 hover:border-blue-500 transition-all"
        >
          🔮 Calculate My Magic Age
        </Link>
      </div>
    </section>
  );
}

function CalculatorCard({
  href,
  icon,
  label,
  bg = "bg-white",
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center ${bg} rounded-2xl w-[120px] h-[120px] min-w-[100px] min-h-[100px] border border-blue-100 transition-all duration-150 hover:scale-[1.03]`}
    >
      <div className="text-4xl text-blue-800 mb-2">{icon}</div>
      <span className="font-semibold text-gray-700">{label}</span>
    </Link>
  );
}
