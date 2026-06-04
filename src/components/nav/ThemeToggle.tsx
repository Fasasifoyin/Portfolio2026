"use client";

import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import { Moon, Sun } from "../svgs";

const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return <button className="w-9 h-9" />;

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-subtle transition-all duration-200"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
