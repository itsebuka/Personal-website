"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, FileText } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import WireframeBackground from "./WireframeBackground";

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
      className="h-full flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
    >
      <WireframeBackground />
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

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 z-10">
        <MagneticButton>
          <Link
            href="/projects"
            id="hero-cta"
            className="bg-white text-black font-sans font-semibold text-sm px-8 py-3 rounded hover:bg-zinc-100 active:bg-zinc-200 transition-colors duration-150 block"
          >
            Explore my projects
          </Link>
        </MagneticButton>
        <MagneticButton>
          <a
            href="/Ebuka_Eleogu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-white border border-[#333] font-sans font-semibold text-sm px-8 py-3 rounded hover:bg-[#111] hover:border-[#555] transition-colors duration-150 flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Download CV
          </a>
        </MagneticButton>
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-3 z-10">
        <MagneticButton>
          <a
            href="https://github.com/itsebuka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200 block"
          >
            <Github className="w-4 h-4" />
          </a>
        </MagneticButton>
        <MagneticButton>
          <a
            href="https://www.linkedin.com/in/chukwuebuka-eleogu-39a423306/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200 block"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </MagneticButton>
        <MagneticButton>
          <a
            href="https://x.com/eleoguuu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X Profile"
            className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200 block"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </MagneticButton>
      </div>
    </section>
  );
}
