"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import navLinks from "@/constants/Navlinks";
import ThemeSwitcher from "./Navbar/ThemeSwitcher";
import Logo from "@/components/Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const Container = useRef<HTMLElement | null>(null);
  const sideBarRef = useRef<HTMLDivElement | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);
  useGSAP(() => {
    if (open) {
      let links = Container.current.children;
      let linksArray = Array.from(links);
      let sidebar = sideBarRef.current;
      gsap.fromTo(
        sidebar,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        linksArray,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
    } else {
      let sidebar = sideBarRef.current;
      gsap.to(sidebar, {
        x: -300,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [open]);

  return (
    <aside className="fixed top-0 left-0 h-screen z-50">
      {/* Mobile toggle button */}
      {!open && (
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="absolute top-4 left-4 z-50 p-2 rounded-lg border border-border bg-background/80 backdrop-blur-sm hover:bg-muted transition"
        >
          {open ? (
            <RiCloseLine className="w-6 h-6" />
          ) : (
            <RiMenuLine className="w-6 h-6" />
          )}
        </button>
      )}
      {/* Sidebar container */}

      <div
        ref={sideBarRef}
        className={`h-full w-64 bg-background text-text border-r border-border
            flex flex-col`}
      >
        {/* Logo */}
        <div className="h-14 flex justify-between px-4 border-b border-border">
          <Logo />
          <button onClick={() => setOpen((v) => !v)}>
            {open ? (
              <RiCloseLine className="w-6 h-6" />
            ) : (
              <RiMenuLine className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Links */}
        <nav
          ref={Container}
          className="flex-1 overflow-y-auto px-2 py-4 space-y-1 nav-font"
        >
          {navLinks.map(({ href, label, Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap20-3 rounded-lg px-3 py-2 transition
                  ${
                    active
                      ? "bg-foreground text-primary"
                      : "hover:bg-foreground/10"
                  }`}
              >
                {Icon}
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
s
        {/* Theme toggle at bottom */}
        <div className="p-4 border-t border-border">
          <ThemeSwitcher />
        </div>
      </div>
    </aside>
  );
}
