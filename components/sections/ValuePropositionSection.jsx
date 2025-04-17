"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ValuePropositionSection({ featureCards }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Animated Beam Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-100/30 via-indigo-200/30 to-purple-100/30 blur-3xl" />
        </motion.div>
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          style={{ y }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-block text-blue-600 font-medium mb-4"
          >
            Empowering Your Trading Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
          >
            Maximize Your Potential with Stoxii
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600"
          >
            Equipping Traders and Investors with Expert and Powerful Tools for
            Smarter Decisions!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-5 bg-white/80 backdrop-blur-sm rounded-lg"
            >
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 [mask-image:linear-gradient(white,transparent)] group-hover:animate-shine opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rotate-180 [mask-image:linear-gradient(white,transparent)] group-hover:animate-shine opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="bg-blue-50/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
