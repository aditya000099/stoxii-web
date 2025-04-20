import { useState, useEffect } from "react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const calculateEMI = () => {
      const monthlyRate = interestRate / 12 / 100;
      const months = loanTenure * 12;
      const emiCalc =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      setEmi(emiCalc.toFixed(2));
    };

    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white text-blue-900 p-4">
      <div className="w-full max-w-md bg-white rounded-xl p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center text-blue-500">
          EMI Calculator
        </h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Loan Amount (₹)</label>
          <input
            type="range"
            min="10000"
            max="20000000"
            step="1000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            className="w-full"
          />
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            className="w-full mt-1 border border-blue-200 rounded-md p-1"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Interest Rate (%)</label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(+e.target.value)}
            className="w-full"
          />
          <input
            type="number"
            value={interestRate}
            step="0.1"
            onChange={(e) => setInterestRate(+e.target.value)}
            className="w-full mt-1 border border-blue-200 rounded-md p-1"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Loan Tenure (Years)</label>
          <input
            type="range"
            min="1"
            max="40"
            value={loanTenure}
            onChange={(e) => setLoanTenure(+e.target.value)}
            className="w-full"
          />
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(+e.target.value)}
            className="w-full mt-1 border border-blue-200 rounded-md p-1"
          />
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Monthly EMI:</p>
          <p className="text-2xl text-blue-600 font-bold mt-1">₹{emi}</p>
        </div>
      </div>
    </div>
  );
}
