"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, FileText, Send, CheckCircle2, Mail } from "lucide-react";

// Inline SVG icons for platforms not in lucide-react
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.913l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.646z"/>
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);
import Link from "next/link";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import WireframeBackground from "./WireframeBackground";

const roles = [
  "Electronics",
  "PCB Design",
  "RF Systems (intended)",
  "Hardware Design (intended)",
  "Embedded Systems (intended)",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Typewriter effect
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSubmitting(true);

    const subject = encodeURIComponent("Portfolio Inquiry / Message");
    const body = encodeURIComponent(message);
    const mailtoUrl = `mailto:eleogujoseph007@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setIsSuccess(true);
    setMessage("");
    setIsSubmitting(false);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section
      id="home"
      className="min-h-full flex flex-col items-center justify-between px-4 sm:px-6 text-center relative overflow-hidden pt-6 sm:pt-10 pb-6 scroll-area"
    >
      <WireframeBackground />

      {/* ── Centre Content ───────────────────────────── */}
      <div className="flex flex-col items-center justify-center flex-1 z-10 my-auto">
        {/* Avatar circle */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#2a2a2a] overflow-hidden mb-6 sm:mb-8 select-none shrink-0">
          <Image
            src="/avatar.png"
            alt="Ebuka Eleogu"
            width={80}
            height={80}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-bold text-white mb-3 sm:mb-4 tracking-tight leading-tight">
          Ebuka&apos;s Portfolio
        </h1>

        {/* Typewriter subtitle */}
        <p className="font-sans text-sm sm:text-base text-zinc-400 min-h-[26px] mb-8 sm:mb-10 flex items-center justify-center gap-1.5">
          <span>{displayText}</span>
          <span className="inline-block w-px h-4 bg-zinc-500 animate-pulse" />
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
          <MagneticButton>
            <Link
              href="/projects"
              id="hero-cta"
              className="bg-white text-black font-sans font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3 rounded hover:bg-zinc-100 active:bg-zinc-200 transition-colors duration-150 block w-full sm:w-auto"
            >
              Explore my projects
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/Ebuka_Eleogu_Resume.docx"
              download
              className="bg-transparent text-white border border-[#333] font-sans font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3 rounded hover:bg-[#111] hover:border-[#555] transition-colors duration-150 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FileText className="w-4 h-4" />
              Download CV
            </a>
          </MagneticButton>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 mb-6 sm:mb-0">
          <MagneticButton>
            <a href="https://github.com/itsebuka" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200 block">
              <Github className="w-4 h-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://www.linkedin.com/in/ebuka-eleogu-39a423306?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200 block">
              <Linkedin className="w-4 h-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://x.com/jociefer" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X Profile" className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200 block">
              <Twitter className="w-4 h-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://t.me/jocieferr" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200 block">
              <TelegramIcon className="w-4 h-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://discord.com/users/1496083517736489020" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200 block">
              <DiscordIcon className="w-4 h-4" />
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* ── Message Bar ─────────────────────────────── */}
      <div className="w-full max-w-xl z-10 mt-4">
        {/* Subtle divider label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 h-px bg-[#1e1e1e]" />
          <span className="font-sans text-[10px] text-zinc-600 uppercase tracking-widest flex items-center gap-1.5">
            <Mail className="w-3 h-3" />
            Send a message
          </span>
          <div className="flex-1 h-px bg-[#1e1e1e]" />
        </div>

        <form onSubmit={handleSubmit} className="relative">
          {/* Inline textarea + button */}
          <div className="flex items-end gap-2">
            <textarea
              id="contact-message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={2}
              placeholder="Drop me a message..."
              className="flex-1 font-sans text-xs sm:text-sm text-white bg-[#111111] border border-[#222222] rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 focus:outline-none focus:border-[#444444] placeholder-zinc-700 transition-colors duration-150 resize-none"
            />
            <MagneticButton>
              <button
                type="submit"
                id="contact-submit"
                disabled={isSubmitting}
                aria-label="Send message"
                className="p-2.5 sm:p-3 bg-white text-black rounded-lg hover:bg-zinc-100 active:bg-zinc-200 transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none shrink-0"
              >
                {isSubmitting ? (
                  <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full animate-spin block" />
                ) : (
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
            </MagneticButton>
          </div>

          {/* Feedback states */}
          {isSuccess && (
            <div className="absolute inset-0 bg-[#0a0a0a]/95 rounded-lg flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span className="font-sans text-xs sm:text-sm text-white font-medium">Opening mail client...</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
