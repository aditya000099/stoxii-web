import { useState, useEffect } from "react";

export default function HomeLoanCalculator() {
  const [amount, setAmount] = useState(3000000);
  const [rate, setRate] = useState(7.5);
  const [years, setYears] = useState(20);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const calculateEmi = () => {
      const principal = amount;
      const monthlyRate = rate / 12 / 100;
      const numberOfPayments = years * 12;
      const emiCalc =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setEmi(emiCalc.toFixed(2));
    };

    calculateEmi();
  }, [amount, rate, years]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white text-blue-900 p-4">
      <div className="w-full max-w-md bg-white rounded-xl p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center text-blue-500">
          Home Loan EMI Calculator
        </h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Loan Amount (₹)</label>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="10000"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className="w-full"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className="w-full mt-1 border border-blue-200 rounded-md p-1"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Interest Rate (%)</label>
          <input
            type="range"
            min="5"
            max="15"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
            className="w-full"
          />
          <input
            type="number"
            value={rate}
            step="0.1"
            onChange={(e) => setRate(+e.target.value)}
            className="w-full mt-1 border border-blue-200 rounded-md p-1"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Loan Tenure (Years)</label>
          <input
            type="range"
            min="1"
            max="30"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
            className="w-full"
          />
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
            className="w-full mt-1 border border-blue-200 rounded-md p-1"
          />
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Estimated EMI:</p>
          <p className="text-2xl text-blue-600 font-bold mt-1">₹{emi}</p>
        </div>
      </div>
    </div>
  );
}
