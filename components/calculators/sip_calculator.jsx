import { useState } from "react";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualRate, setAnnualRate] = useState(12);
  const [years, setYears] = useState(10);
  const [futureValue, setFutureValue] = useState(null);

  const calculateSIP = () => {
    const n = years * 12;
    const r = annualRate / 12 / 100;
    const fv = (monthlyInvestment * ((Math.pow(1 + r, n) - 1) * (1 + r))) / r;
    setFutureValue(fv.toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-blue-900 p-4">
      <div className="w-full max-w-md bg-blue-50 shadow-lg rounded-2xl p-6">
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
            className="w-full p-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(+e.target.value)}
            className="w-full p-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">
            Investment Period (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
            className="w-full p-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={calculateSIP}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium transition"
        >
          Calculate
        </button>

        {futureValue && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">Future Value:</p>
            <p className="text-2xl text-blue-600 font-bold mt-1">
              ₹ {futureValue}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
