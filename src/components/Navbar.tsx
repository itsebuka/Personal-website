"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Layers, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home",         href: "/" },
  { name: "About",        href: "/about" },
  { name: "Skills",       href: "/skills" },
  { name: "Experience",   href: "/experience" },
  { name: "Projects",     href: "/projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Certifications", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="h-16 md:h-20 shrink-0 bg-[#0a0a0a] border-b border-[#1a1a1a] flex items-center relative z-50">
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 md:gap-3 group" id="nav-logo">
          <Layers className="w-5 h-5 md:w-6 md:h-6 text-zinc-500 group-hover:text-white transition-colors duration-200" />
          <span className="font-serif text-lg md:text-xl font-bold text-white tracking-wide">
            Ebuka&apos;s Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-medium tracking-wide uppercase transition-colors duration-200 rounded ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-white rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-500 hover:text-white transition-colors p-1.5"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          className="absolute top-full left-0 right-0 bg-[#0d0d0d] border-b border-[#1a1a1a] md:hidden z-50 shadow-xl"
        >
          <nav className="flex flex-col py-3 px-5 gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2.5 px-3 text-sm font-medium rounded transition-colors duration-200 ${
                    isActive
                      ? "text-white bg-white/5"
                      : "text-zinc-500 hover:text-white hover:bg-white/3"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
