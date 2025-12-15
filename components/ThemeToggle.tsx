"use client";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-700 backdrop-blur-sm"
      aria-label="Toggle dark mode"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-gray-700" />
      )}
    </button>
  );
}
