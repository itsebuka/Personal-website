"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Github, Linkedin, Twitter, Mail } from "lucide-react";

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
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    // Mock transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="h-full flex flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-lg">

        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl font-bold text-white mb-2 tracking-tight">
            Establish Connection
          </h2>
          <p className="font-sans text-sm text-zinc-500">
            Have a project or question? I&apos;ll get back to you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">

          {/* Name field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="font-sans text-xs text-zinc-400">
              Your Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              autoComplete="off"
              className="font-sans text-sm text-white bg-[#111111] border border-[#222222] rounded px-4 py-3 focus:outline-none focus:border-[#444444] placeholder-zinc-700 transition-colors duration-150"
            />
          </div>

          {/* Email field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="font-sans text-xs text-zinc-400">
              Email Address
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              autoComplete="off"
              className="font-sans text-sm text-white bg-[#111111] border border-[#222222] rounded px-4 py-3 focus:outline-none focus:border-[#444444] placeholder-zinc-700 transition-colors duration-150"
            />
          </div>

          {/* Message field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="font-sans text-xs text-zinc-400">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Type your message..."
              className="font-sans text-sm text-white bg-[#111111] border border-[#222222] rounded px-4 py-3 focus:outline-none focus:border-[#444444] placeholder-zinc-700 transition-colors duration-150 resize-none"
            />
          </div>

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
            <a
              href="https://github.com/itsebuka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-zinc-600 hover:text-white transition-colors duration-150"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ebuka-eleogu-39a423306?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-zinc-600 hover:text-white transition-colors duration-150"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/jociefer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X Profile"
              className="text-zinc-600 hover:text-white transition-colors duration-150"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/jocieferr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-zinc-600 hover:text-white transition-colors duration-150"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://discord.com/users/1496083517736489020"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-zinc-600 hover:text-white transition-colors duration-150"
            >
              <DiscordIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
