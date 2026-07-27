"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, FileText, Send, CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import WireframeBackground from "./WireframeBackground";

// ── Replace YOUR_FORM_ID with your Formspree form ID after signing up at formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

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

  // Contact form state — message only
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSubmitting(true);
    setIsError(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ message }),
      });
      if (res.ok) {
        setIsSuccess(true);
        setMessage("");
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full scroll-area">
      {/* ── Hero Section ──────────────────────────────────── */}
      <section
        id="home"
        className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden py-16"
      >
        <WireframeBackground />

        {/* Avatar circle */}
        <div className="w-20 h-20 rounded-full border border-[#2a2a2a] bg-[#111111] flex items-center justify-center mb-8 select-none z-10">
          <span className="font-serif text-xl font-bold text-white">EE</span>
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-none z-10">
          Ebuka&apos;s Portfolio
        </h1>

        {/* Typewriter subtitle */}
        <p className="font-sans text-base text-zinc-400 min-h-[26px] mb-10 flex items-center gap-1.5 z-10">
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 opacity-40">
          <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-widest">Scroll</span>
          <span className="w-px h-6 bg-zinc-700 animate-pulse" />
        </div>
      </section>

      {/* ── Contact Section ───────────────────────────────── */}
      <section
        id="contact"
        className="flex flex-col items-center justify-center px-6 py-20 border-t border-[#1a1a1a]"
      >
        <div className="w-full max-w-lg">
          {/* Section header */}
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl font-bold text-white mb-2 tracking-tight">
              Get In Touch
            </h2>
            <p className="font-sans text-sm text-zinc-500">
              Have a project or question? I&apos;ll get back to you.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 relative">

            {/* Message field */}
            <textarea
              id="contact-message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              placeholder="Type your message..."
              className="font-sans text-sm text-white bg-[#111111] border border-[#222222] rounded px-4 py-3 focus:outline-none focus:border-[#444444] placeholder-zinc-700 transition-colors duration-150 resize-none"
            />

            {/* Error notice */}
            {isError && (
              <p className="font-sans text-xs text-red-400">
                Something went wrong — please try again or email me directly.
              </p>
            )}

            {/* Submit button */}
            <MagneticButton className="w-full">
              <button
                type="submit"
                id="contact-submit"
                disabled={isSubmitting}
                className="bg-white text-black w-full font-sans font-semibold text-sm py-3 px-6 rounded flex items-center justify-center gap-2 hover:bg-zinc-100 active:bg-zinc-200 transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </MagneticButton>

            {/* Success overlay */}
            {isSuccess && (
              <div className="absolute inset-0 bg-[#0a0a0a]/95 rounded flex flex-col items-center justify-center gap-3 text-center p-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
                <h4 className="font-sans font-semibold text-white">Message sent!</h4>
                <p className="font-sans text-sm text-zinc-400">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            )}
          </form>

          {/* Contact info strip */}
          <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#1a1a1a]">
            <a
              href="mailto:eleogujoseph007@gmail.com"
              className="flex items-center gap-2 font-sans text-xs text-zinc-500 hover:text-white transition-colors duration-150"
            >
              <Mail className="w-4 h-4" />
              eleogujoseph007@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com/itsebuka" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-600 hover:text-white transition-colors duration-150">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/chukwuebuka-eleogu-39a423306/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-600 hover:text-white transition-colors duration-150">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/eleoguuu" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-zinc-600 hover:text-white transition-colors duration-150">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
