"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Github, Linkedin, Twitter, Mail } from "lucide-react";
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
              href="https://www.linkedin.com/in/chukwuebuka-eleogu-39a423306/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-zinc-600 hover:text-white transition-colors duration-150"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/eleoguuu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X Profile"
              className="text-zinc-600 hover:text-white transition-colors duration-150"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
