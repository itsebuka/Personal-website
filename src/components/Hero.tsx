"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const roles = [
  "Electronics",
  "PCB Design",
  "RF Systems (intended)",
  "Hardware Design (intended)",
  "Embedded Systems (intended)",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect — same logic, visual only
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullRole = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);
        if (displayText === currentFullRole) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="h-full flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Avatar circle */}
      <div className="w-20 h-20 rounded-full border border-[#2a2a2a] bg-[#111111] flex items-center justify-center mb-8 select-none">
        <span className="font-serif text-xl font-bold text-white">EE</span>
      </div>

      {/* Main heading */}
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-none">
        Ebuka&apos;s Portfolio
      </h1>

      {/* Typewriter subtitle */}
      <p className="font-sans text-base text-zinc-400 min-h-[26px] mb-10 flex items-center gap-1.5">
        <span>{displayText}</span>
        <span className="inline-block w-px h-4 bg-zinc-500 animate-pulse" />
      </p>

      {/* CTA Button */}
      <Link
        href="/projects"
        id="hero-cta"
        className="bg-white text-black font-sans font-semibold text-sm px-8 py-3 rounded hover:bg-zinc-100 active:bg-zinc-200 transition-colors duration-150 mb-10"
      >
        Explore my projects
      </Link>

      {/* Social icons */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/itsebuka"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://x.com/eleoguuu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X Profile"
          className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200"
        >
          <Twitter className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
