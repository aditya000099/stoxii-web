import { useState } from "react";

export default function CagrCalculator() {
  const [startValue, setStartValue] = useState(10000);
  const [endValue, setEndValue] = useState(20000);
  const [years, setYears] = useState(5);
  const [cagr, setCagr] = useState(null);

  const calculateCAGR = () => {
    const result = (
      (Math.pow(endValue / startValue, 1 / years) - 1) *
      100
    ).toFixed(2);
    setCagr(result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white text-blue-900 p-4">
      <div className="w-full max-w-md bg-white rounded-xl p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center text-blue-500">
          CAGR Calculator
        </h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Initial Value (₹)</label>
          <input
            type="number"
            value={startValue}
            onChange={(e) => setStartValue(+e.target.value)}
            className="w-full p-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Final Value (₹)</label>
          <input
            type="number"
            value={endValue}
            onChange={(e) => setEndValue(+e.target.value)}
            className="w-full p-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">
            Investment Duration (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
            className="w-full p-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={calculateCAGR}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium transition"
        >
          Calculate
        </button>

        {cagr && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">CAGR:</p>
            <p className="text-2xl text-blue-600 font-bold mt-1">{cagr}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
