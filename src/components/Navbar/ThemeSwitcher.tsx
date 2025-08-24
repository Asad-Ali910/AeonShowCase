"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";

const OPTIONS = ["system", "light", "dark"] as const;
const ICONS = {
  system: ComputerDesktopIcon,
  light: SunIcon,
  dark: MoonIcon,
};

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  // Current theme & icon
  const currentTheme = mounted ? (theme as (typeof OPTIONS)[number]) : "system";
  const CurrentIcon = ICONS[(currentTheme as keyof typeof ICONS) || "system"];

  // Animate on theme change
  useEffect(() => {
    if (!iconRef.current || !mounted) return;

    const el = iconRef.current;

    gsap
      .timeline()
      .to(el, {
        x: -30,
        scale: 0.6,
        opacity: 0,
        rotation: -45,
        duration: 0.25,
        ease: "back.in(1.7)",
      })
      .set(el, { x: 30, scale: 0.6, rotation: 45 })
      .to(el, {
        x: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.35,
        ease: "elastic.out(1, 0.6)",
      });
  }, [currentTheme, mounted]);

  // Switch to next theme
  const handleClick = () => {
    const nextIndex = (OPTIONS.indexOf(currentTheme) + 1) % OPTIONS.length;
    setTheme(OPTIONS[nextIndex]);
    setIndex(nextIndex);
  };

  if (!mounted) {
    return (
      <div className="inline-flex h-8 w-8 bg-white/10 rounded-lg animate-pulse" />
    );
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg
                 bg-accent-light hover:bg-white/20 focus:outline-none
                 focus:ring-2 focus:ring-accent focus:ring-offset-2 transition"
    >
      <div ref={iconRef} className="w-5 h-5">
        <CurrentIcon className="w-5 h-5" />
      </div>
    </button>
  );
}
