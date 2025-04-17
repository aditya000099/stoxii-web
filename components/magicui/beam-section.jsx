"use client";
import { motion } from "framer-motion";

export const BeamSection = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-xl" />
      </motion.div>
    </div>
  );
};
