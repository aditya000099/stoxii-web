import { useState, useEffect } from "react";

export default function CAGRCalculator() {
  const [initialValue, setInitialValue] = useState(100000);
  const [finalValue, setFinalValue] = useState(200000);
  const [years, setYears] = useState(5);
  const [cagr, setCagr] = useState(0);

  useEffect(() => {
    const calculateCAGR = () => {
      if (initialValue > 0 && finalValue > 0 && years > 0) {
        const result =
          (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100;
        setCagr(result.toFixed(2));
      } else {
        setCagr(0);
      }
    };
    calculateCAGR();
  }, [initialValue, finalValue, years]);

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
            value={initialValue}
            onChange={(e) => setInitialValue(+e.target.value)}
            className="w-full mt-1 border border-blue-200 rounded-md p-1"
          />
          <input
            type="range"
            min="1000"
            max="10000000"
            step="1000"
            value={initialValue}
            onChange={(e) => setInitialValue(+e.target.value)}
            className="w-full mt-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Final Value (₹)</label>
          <input
            type="number"
            value={finalValue}
            onChange={(e) => setFinalValue(+e.target.value)}
            className="w-full mt-1 border border-blue-200 rounded-md p-1"
          />
          <input
            type="range"
            min="1000"
            max="10000000"
            step="1000"
            value={finalValue}
            onChange={(e) => setFinalValue(+e.target.value)}
            className="w-full mt-2"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Number of Years</label>
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

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">CAGR:</p>
          <p className="text-2xl text-blue-600 font-bold mt-1">{cagr}%</p>
        </div>
      </div>
    </div>
  );
}
