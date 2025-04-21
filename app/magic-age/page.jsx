"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMagic } from "react-icons/fa";

import { useState } from "react";

const emiTypes = ["Home", "Personal", "Vehicle", "Other"];

const steps = [
  { label: "Your Age", key: "age", type: "number", min: 18, max: 80, placeholder: "Enter your age" },
  { label: "Monthly Salary (₹)", key: "salary", type: "number", min: 0, placeholder: "Enter your monthly salary" },
  { label: "Do you have any active EMIs?", key: "hasEmi", type: "emi-check" },
  { label: "EMI Details", key: "emiDetails", type: "emi-list" },
  { label: "Monthly Expenses (₹)", key: "expenses", type: "number", min: 0, placeholder: "Enter your monthly expenses" },
  { label: "Already Owned Assets (₹)", key: "assets", type: "number", min: 0, placeholder: "Enter total assets value" },
  { label: "Monthly Investment (₹)", key: "investment", type: "number", min: 0, placeholder: "Enter monthly investment" },
  { label: "Expected Return on Investment (%)", key: "roi", type: "number", min: 0, max: 20, placeholder: "e.g. 10" },
];

export default function MagicAgePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    hasEmi: "",
    emiDetails: [],
    age: "",
    salary: "",
    expenses: "",
    assets: "",
    investment: "",
    roi: ""
  });
  const [magicAge, setMagicAge] = useState(null);
  const [calculating, setCalculating] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [calcStage, setCalcStage] = useState(0); // for animated calculation steps
  const [emiDraft, setEmiDraft] = useState({ type: "Home", amount: "", endDate: "" });
  const [showAddEmi, setShowAddEmi] = useState(false);

  // Step logic
  const isEmiStep = steps[step].type === "emi-list";
  const isEmiCheckStep = steps[step].type === "emi-check";

  const handleChange = (e) => {
    setForm({ ...form, [steps[step].key]: e.target.value });
  };

  // EMI draft handlers
  const handleEmiDraftChange = (e) => {
    setEmiDraft({ ...emiDraft, [e.target.name]: e.target.value });
  };

  const addEmi = () => {
    setForm({
      ...form,
      emiDetails: [...form.emiDetails, emiDraft],
    });
    setEmiDraft({ type: "Home", amount: "", endDate: "" });
    setShowAddEmi(false);
  };

  const removeEmi = (idx) => {
    setForm({
      ...form,
      emiDetails: form.emiDetails.filter((_, i) => i !== idx),
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // If EMI check step and answer is 'No', skip EMI details step
    if (isEmiCheckStep && form.hasEmi === "no") {
      setStep(step + 2);
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    // If coming back from EMI details and user said 'No', skip EMI details step
    if (step === 2 && form.hasEmi === "no") {
      setStep(step - 2);
      return;
    }
    if (step > 0) setStep(step - 1);
  };

  async function calculateMagicAge() {
    setProcessing(true);
    setCalcStage(0);
    // Animation: simulate steps
    const stages = [
      "Processing data...",
      "Calculating magic age...",
      "Ready..."
    ];
    for (let i = 0; i < stages.length; i++) {
      setCalcStage(i);
      // eslint-disable-next-line no-await-in-loop
      await new Promise(res => setTimeout(res, i === 2 ? 700 : 1100));
    }
    setCalculating(true);
    // Extract values
    const age = parseFloat(form.age);
    const salary = parseFloat(form.salary);
    const expenses = parseFloat(form.expenses);
    const assets = parseFloat(form.assets);
    const investment = parseFloat(form.investment);
    const roi = parseFloat(form.roi) / 100;
    const emis = form.emiDetails;

    // Calculate net monthly investment after EMI payments for each year
    let currentAge = age;
    let currentAssets = assets;
    let years = 0;
    let done = false;
    let emiList = emis.map((emi) => ({
      ...emi,
      amount: parseFloat(emi.amount),
      endYear: new Date(emi.endDate).getFullYear(),
    }));

    const currentYear = new Date().getFullYear();

    while (!done && currentAge + years < 90 && years < 70) {
      // Calculate total EMI outgo for this year
      let emiOutgo = 0;
      emiList.forEach((emi) => {
        if (emi.endYear > currentYear + years) {
          emiOutgo += emi.amount;
        }
      });
      // Add yearly investment and returns
      const netInvestment = Math.max(0, investment - emiOutgo);
      currentAssets = (currentAssets + (netInvestment * 12)) * (1 + roi);
      // Check if assets can cover expenses for remaining years
      const yearsLeft = 90 - (currentAge + years);
      if (currentAssets >= expenses * 12 * yearsLeft) {
        done = true;
        setMagicAge(currentAge + years);
        break;
      }
      years++;
    }
    if (!done) setMagicAge("Not achievable");
    setCalculating(false);
    setProcessing(false);
  }

  // UI rendering for each step
  function renderStep() {
    // Glassmorphism wrapper for all steps
    const glassClass = "backdrop-blur-md bg-white/60 border border-blue-100 rounded-2xl shadow-sm p-8 mx-auto max-w-xl";
    if (isEmiCheckStep) {
      return (
        <div className={glassClass + " flex flex-col items-center"}>
          <p className="text-lg font-medium text-zinc-800 mb-6">Do you have any active EMIs?</p>
          <div className="flex gap-6">
            <button
              type="button"
              onClick={() => setForm({ ...form, hasEmi: "yes" })}
              className={`px-6 py-3 rounded-lg border text-lg font-semibold transition-all duration-150 ${form.hasEmi === "yes" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-blue-700 border-blue-600 hover:bg-blue-50"}`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setForm({ ...form, hasEmi: "no" })}
              className={`px-6 py-3 rounded-lg border text-lg font-semibold transition-all duration-150 ${form.hasEmi === "no" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-blue-700 border-blue-600 hover:bg-blue-50"}`}
            >
              No
            </button>
          </div>
        </div>
      );
    }
    if (isEmiStep) {
      if (form.hasEmi !== "yes") return null;
      return (
        <div className={glassClass}>
          <p className="text-lg font-medium text-zinc-800 mb-4">Enter your active EMIs</p>
          {form.emiDetails.length > 0 && (
            <div className="mb-4">
              {form.emiDetails.map((emi, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-blue-50/70 rounded-lg p-3 mb-2 border border-blue-200">
                  <span className="font-semibold text-blue-700 text-sm">{emi.type}</span>
                  <span className="text-zinc-700 text-sm">₹{emi.amount}</span>
                  <span className="text-zinc-500 text-xs">till {emi.endDate}</span>
                  <button type="button" className="ml-auto px-2 py-1 text-xs text-red-500 border border-red-200 rounded" onClick={() => removeEmi(idx)}>Remove</button>
                </div>
              ))}
            </div>
          )}
          {showAddEmi ? (
            <div className="bg-white/70 rounded-lg p-4 border border-blue-200 mb-4">
              <div className="mb-2">
                <label className="block text-zinc-700 text-sm mb-1">EMI Type</label>
                <select
                  name="type"
                  value={emiDraft.type}
                  onChange={handleEmiDraftChange}
                  className="w-full border border-zinc-200 rounded px-2 py-1 text-zinc-700 bg-zinc-50"
                >
                  {emiTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-zinc-700 text-sm mb-1">EMI Amount (₹)</label>
                <input
                  name="amount"
                  type="number"
                  min="0"
                  value={emiDraft.amount}
                  onChange={handleEmiDraftChange}
                  className="w-full border border-zinc-200 rounded px-2 py-1 text-zinc-700 bg-zinc-50"
                />
              </div>
              <div className="mb-2">
                <label className="block text-zinc-700 text-sm mb-1">EMI End Date</label>
                <input
                  name="endDate"
                  type="date"
                  value={emiDraft.endDate}
                  onChange={handleEmiDraftChange}
                  className="w-full border border-zinc-200 rounded px-2 py-1 text-zinc-700 bg-zinc-50"
                />
              </div>
              <button
                type="button"
                onClick={addEmi}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded border border-blue-600 hover:bg-blue-700"
                disabled={!emiDraft.amount || !emiDraft.endDate}
              >
                Add EMI
              </button>
              <button
                type="button"
                className="ml-4 px-4 py-2 text-zinc-600 border border-zinc-200 rounded bg-zinc-50 hover:bg-zinc-100"
                onClick={() => { setShowAddEmi(false); setEmiDraft({ type: "Home", amount: "", endDate: "" }); }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="mb-2 px-4 py-2 bg-white text-blue-700 border border-blue-600 rounded hover:bg-blue-50"
              onClick={() => setShowAddEmi(true)}
            >
              Add New EMI
            </button>
          )}
        </div>
      );
    }
    // Default: normal input
    const { label, key, type, min, max, placeholder } = steps[step];
    return (
      <div className={glassClass}>
        <label className="block text-zinc-700 font-semibold mb-2 text-lg" htmlFor={key}>
          {label}
        </label>
        <input
          id={key}
          name={key}
          type={type}
          min={min}
          max={max}
          placeholder={placeholder}
          value={form[key]}
          onChange={handleChange}
          required
          className="w-full border border-blue-100 rounded px-3 py-2 mb-6 bg-blue-50 focus:outline-none focus:border-blue-400 text-blue-900"
        />
      </div>
    );
  }

  // Step progress bar calculation
  const progress = ((step + (magicAge !== null ? 1 : 0)) / (steps.length + 1)) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 px-4 py-8">
      {/* Progress Bar at the very top */}
      <div className="w-full h-2 bg-zinc-200">
        <div
          className="h-2 bg-blue-400 transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl font-bold text-zinc-800 mb-8 flex items-center space-x-2">
          <FaMagic className="text-blue-500" />
          <span>Magic Age Calculator</span>
        </motion.h1>
        {magicAge === null ? (
          <form
            className="w-full max-w-xl mx-auto space-y-8"
            onSubmit={step === steps.length - 1 ? (e) => { e.preventDefault(); calculateMagicAge(); } : handleNext}
          >
            {renderStep()}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 0}
                className="px-4 py-2 border border-blue-200 rounded text-blue-800 bg-blue-50 hover:bg-blue-100 disabled:opacity-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-blue-600 rounded text-white bg-blue-600 hover:bg-blue-700"
                disabled={calculating || (isEmiCheckStep && !form.hasEmi) || (isEmiStep && form.hasEmi === "yes" && form.emiDetails.length === 0)}
              >
                {step === steps.length - 1 ? "Calculate" : "Next"}
              </button>
            </div>
          </form>
        ) : (
          processing ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-4xl mb-6 animate-pulse">🔮</div>
              <div className="text-2xl font-semibold text-blue-900 mb-2 text-center">
                {[
                  "Processing data...",
                  "Calculating magic age...",
                  "Ready..."
                ][calcStage]}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <div className="text-lg text-blue-900 font-semibold mb-2 text-center">
                {magicAge === "Not achievable"
                  ? "Based on your inputs, it's not possible to achieve a magic age before 90."
                  : `Your Magic Age is:`}
                {magicAge !== "Not achievable" && magicAge !== null && (
                  <span className="block text-blue-700 text-3xl font-bold mt-2">{magicAge}</span>
                )}
              </div>
              {/* User Data Summary Card */}
              <div className="mt-8 w-full max-w-lg backdrop-blur-md bg-white/60 border border-blue-100 rounded-2xl shadow-sm p-6">
                <div className="font-semibold text-zinc-700 mb-4 text-lg">Your Inputs:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-zinc-700">
                  <div><span className="font-medium">Age:</span> {form.age}</div>
                  <div><span className="font-medium">Monthly Salary:</span> ₹{form.salary}</div>
                  <div><span className="font-medium">Monthly Expenses:</span> ₹{form.expenses}</div>
                  <div><span className="font-medium">Assets:</span> ₹{form.assets}</div>
                  <div><span className="font-medium">Monthly Investment:</span> ₹{form.investment}</div>
                  <div><span className="font-medium">ROI:</span> {form.roi}%</div>
                  <div className="sm:col-span-2">
                    <span className="font-medium">Active EMIs:</span> {form.hasEmi === "yes" && form.emiDetails.length > 0 ? (
                      <ul className="list-disc ml-6 mt-1">
                        {form.emiDetails.map((emi, i) => (
                          <li key={i} className="text-sm text-blue-700">
                            {emi.type} – ₹{emi.amount} till {emi.endDate}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-zinc-500 ml-2">None</span>
                    )}
                  </div>
                </div>
              </div>
              <button
                className="mt-8 px-4 py-2 border border-blue-200 rounded text-blue-800 bg-blue-50 hover:bg-blue-100"
                onClick={() => {
                  setStep(0);
                  setForm({ hasEmi: "", emiDetails: [], age: "", salary: "", expenses: "", assets: "", investment: "", roi: "" });
                  setMagicAge(null);
                  setProcessing(false);
                }}
              >
                Start Again
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
