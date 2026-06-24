"use client";

import { motion } from "framer-motion";

export default function AvailableBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="flex items-center justify-center pt-24 md:pt-28 pb-2"
    >
      <div
        className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-green-glow/10 border border-green-glow/30"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-pulse-glow absolute inline-flex h-full w-full rounded-full bg-green-glow opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-glow" />
        </span>
        <span className="text-sm font-medium text-green-glow">
          Available for Work
        </span>
      </div>
    </motion.div>
  );
}
