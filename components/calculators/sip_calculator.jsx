import { useState, useEffect } from "react";

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(5);
  const [expectedRate, setExpectedRate] = useState(12);
  const [futureValue, setFutureValue] = useState(0);

  useEffect(() => {
    const calculateSIP = () => {
      const r = expectedRate / 100 / 12;
      const n = years * 12;
      const fv = monthlyInvestment * (((Math.pow(1 + r, n) - 1) * (1 + r)) / r);
      setFutureValue(fv.toFixed(2));
    };
    calculateSIP();
  }, [monthlyInvestment, years, expectedRate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white text-blue-900 p-4">
      <div className="w-full max-w-md bg-white rounded-xl p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center text-blue-500">
          SIP Calculator
        </h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Monthly Investment (₹)
          </label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(+e.target.value)}
            className="w-full mt-1 border border-blue-200 rounded-md p-1"
          />
          <input
            type="range"
            min="500"
            max="100000"
            step="500"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(+e.target.value)}
            className="w-full mt-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Investment Duration (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
            className="w-full mt-1 border border-blue-200 rounded-md p-1"
          />
          <input
            type="range"
            min="1"
            max="50"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
            className="w-full mt-2"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            value={expectedRate}
            onChange={(e) => setExpectedRate(+e.target.value)}
            className="w-full mt-1 border border-blue-200 rounded-md p-1"
          />
          <input
            type="range"
            min="1"
            max="30"
            step="0.1"
            value={expectedRate}
            onChange={(e) => setExpectedRate(+e.target.value)}
            className="w-full mt-2"
          />
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Future Value:</p>
          <p className="text-2xl text-blue-600 font-bold mt-1">
            ₹ {futureValue}
          </p>
        </div>
      </div>
    </div>
  );
}
