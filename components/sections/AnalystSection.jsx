"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BeamSection } from "../magicui/beam-section";

const achievements = [
  { stock: "HUDCO", gains: "25%", days: 30 },
  { stock: "ANANT RAJ", gains: "15%", days: 21 },
  { stock: "SKEPPER", gains: "12%", days: 10 },
  { stock: "POLYPLEX", gains: "10%", days: 5 },
  { stock: "NAM INDIA", gains: "9%", days: 15 },
];

export default function AnalystSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with beam effect */}
      <div className="absolute inset-0 bg-blue-50/50 rounded-[3rem] mx-4 my-8">
        <BeamSection />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl mx-auto">
          {/* Profile + Recent Gains */}
          <div className="lg:w-1/2 space-y-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50"
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/images/caller.png"
                  alt="Zafar Iqbal"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="text-2xl font-bold">Zafar Iqbal</h3>
                  <p className="text-blue-600 text-sm font-medium">
                    SEBI Registered RA – INH00011787
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Experience Of 5+ Years
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mt-4 text-sm italic">
                "Invest with Confidence, Backed by SEBI-Registered Experts –
                Your Path to Reliable and Profitable Growth!"
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full"
            >
              Get A Callback
            </motion.button>
          </div>

          {/* Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-3"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100/50 flex items-center justify-between"
              >
                <span className="font-medium">{item.stock}</span>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">{item.gains}</span>
                  <span className="text-sm text-gray-500">
                    in {item.days} Days
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
