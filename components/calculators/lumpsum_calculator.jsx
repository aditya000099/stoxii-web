import { useState, useEffect } from "react";

export default function LumpsumCalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [futureValue, setFutureValue] = useState(0);

  useEffect(() => {
    const calculateLumpsum = () => {
      const result = amount * Math.pow(1 + rate / 100, years);
      setFutureValue(result.toFixed(2));
    };

    calculateLumpsum();
  }, [amount, rate, years]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white text-blue-900 p-4">
      <div className="w-full max-w-md bg-white rounded-xl p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center text-blue-500">
          Lumpsum Calculator
        </h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Investment Amount (₹)
          </label>
          <input
            type="range"
            min="1000"
            max="10000000"
            step="1000"
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
          <label className="block mb-1 font-medium">
            Expected Return Rate (%)
          </label>
          <input
            type="range"
            min="1"
            max="30"
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
          <label className="block mb-1 font-medium">
            Investment Duration (Years)
          </label>
          <input
            type="range"
            min="1"
            max="50"
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
          <p className="text-lg font-semibold">Future Value:</p>
          <p className="text-2xl text-blue-600 font-bold mt-1">
            ₹{futureValue}
          </p>
        </div>
      </div>
    </div>
  );
}
