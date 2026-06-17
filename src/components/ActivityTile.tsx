"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  return (
    <motion.section
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6"
    >
      <h2 className="mb-4 text-lg font-semibold">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="h-6 rounded bg-emerald-500/30"
          />
        ))}
      </div>
    </motion.section>
  );
}