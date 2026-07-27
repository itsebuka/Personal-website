"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, FileText, Send, CheckCircle2, Mail } from "lucide-react";
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
      className="h-full flex flex-col items-center justify-between px-6 text-center relative overflow-hidden pt-10 pb-6"
    >
      <WireframeBackground />

      {/* ── Centre Content ───────────────────────────── */}
      <div className="flex flex-col items-center justify-center flex-1 z-10">
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
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
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
              href="/Ebuka_Eleogu_Resume.docx"
              download
              className="bg-transparent text-white border border-[#333] font-sans font-semibold text-sm px-8 py-3 rounded hover:bg-[#111] hover:border-[#555] transition-colors duration-150 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download CV
            </a>
          </MagneticButton>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <MagneticButton>
            <a href="https://github.com/itsebuka" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200 block">
              <Github className="w-4 h-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://www.linkedin.com/in/chukwuebuka-eleogu-39a423306/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200 block">
              <Linkedin className="w-4 h-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://x.com/eleoguuu" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X Profile" className="p-2 rounded border border-[#222] text-zinc-600 hover:text-white hover:border-[#444] transition-all duration-200 block">
              <Twitter className="w-4 h-4" />
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* ── Message Bar (pinned at bottom of hero) ────── */}
      <div className="w-full max-w-xl z-10">
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
              className="flex-1 font-sans text-sm text-white bg-[#111111] border border-[#222222] rounded-lg px-4 py-3 focus:outline-none focus:border-[#444444] placeholder-zinc-700 transition-colors duration-150 resize-none"
            />
            <MagneticButton>
              <button
                type="submit"
                id="contact-submit"
                disabled={isSubmitting}
                aria-label="Send message"
                className="p-3 bg-white text-black rounded-lg hover:bg-zinc-100 active:bg-zinc-200 transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none shrink-0"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin block" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </MagneticButton>
          </div>

          {/* Feedback states */}
          {isSuccess && (
            <div className="absolute inset-0 bg-[#0a0a0a]/95 rounded-lg flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span className="font-sans text-sm text-white font-medium">Opening mail client...</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
