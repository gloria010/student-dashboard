"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, Activity } from "lucide-react";

const items = [
  { name: "Home", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Activity", icon: Activity },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <>
      {/* DESKTOP + TABLET SIDEBAR */}
      <nav className="hidden md:flex flex-col rounded-3xl border border-zinc-800 bg-zinc-900/70 p-4 w-[220px]">
        <h2 className="mb-6 text-lg font-semibold text-white">
          Dashboard
        </h2>

        <div className="flex flex-col gap-2 relative">
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="relative flex items-center gap-3 px-4 py-2 text-left text-zinc-300 hover:text-white rounded-lg"
            >
              {active === item.name && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-lg bg-emerald-500/20 border border-emerald-500/40"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}

              <item.icon size={18} className="relative z-10" />
              <span className="relative z-10">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* MOBILE BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-zinc-900 border-t border-zinc-800 flex justify-around py-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="flex flex-col items-center text-xs text-zinc-400"
            >
              <Icon
                className={
                  active === item.name
                    ? "text-emerald-400"
                    : ""
                }
                size={20}
              />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}