"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
    else setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    if (theme === "system") {
      const sys = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      document.documentElement.classList.add(sys);
    } else {
      document.documentElement.classList.add(theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="p-2 rounded border"
      onClick={() =>
        setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light")
      }
      title="Toggle theme"
    >
      {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "🖥️"}
    </button>
  );
}
