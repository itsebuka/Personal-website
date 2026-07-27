"use client";

import { Award, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  filename: string | null;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: "CERT-IRP-2023",
    title: "Industry Readiness Program Certificate",
    issuer: "Pan-Atlantic University",
    year: "2023",
    filename: null,
    description:
      "Awarded on completion of the Industry Readiness Program — a structured professional development programme equipping students with workplace-ready competencies.",
  },
  {
    id: "CERT-IRP-2024",
    title: "Industry Readiness Program Certificate",
    issuer: "Pan-Atlantic University",
    year: "2024",
    filename: null,
    description:
      "Second consecutive award from the Industry Readiness Program, reinforcing professional and technical development skills across engineering disciplines.",
  },
  {
    id: "CERT-IRP-2025",
    title: "Industry Readiness Program Certificate",
    issuer: "Pan-Atlantic University",
    year: "2025",
    filename: null,
    description:
      "Third consecutive Industry Readiness Program completion, demonstrating sustained professional growth and academic commitment.",
  },
  {
    id: "CERT-FUSION-2024",
    title: "Autodesk Fusion 360 Certification",
    issuer: "Autodesk",
    year: "2024",
    filename: null,
    description:
      "Certified in Autodesk Fusion 360, covering 3D mechanical design, CAD modelling, enclosure tolerancing, and product simulation workflows.",
  },
  {
    id: "CERT-NVIDIA-RAG",
    title: "NVIDIA RAG Certification",
    issuer: "NVIDIA",
    year: "2024",
    filename: null,
    description:
      "Certified by NVIDIA in Retrieval-Augmented Generation (RAG) — covering embedding pipelines, vector databases, and production-grade LLM integration.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="h-full flex flex-col items-center justify-center px-6 py-6"
    >
      <div className="w-full max-w-4xl">
        {/* Section heading */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="font-sans text-sm text-zinc-500 mt-2">
            Verified credentials and professional qualifications.
          </p>
        </div>

        {/* Certificate list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="bg-[#111111] border border-[#222222] rounded-lg p-5 flex items-start gap-5 hover:border-[#333333] transition-colors duration-200 group"
            >
              {/* Icon */}
              <div className="shrink-0 p-3 border border-[#2a2a2a] rounded-lg bg-[#1a1a1a]">
                <Award className="w-5 h-5 text-zinc-400" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="font-sans text-xs text-zinc-500 mt-0.5">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                  <span className="font-sans text-[9px] text-zinc-600 tracking-widest uppercase shrink-0 mt-0.5">
                    {cert.id}
                  </span>
                </div>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* Download / placeholder */}
                <div className="flex items-center gap-3 mt-2 pt-3 border-t border-[#1e1e1e]">
                  {cert.filename ? (
                    <a
                      href={`/files/certificates/${cert.filename}`}
                      download
                      className="flex items-center gap-1.5 font-sans text-xs text-zinc-500 hover:text-white transition-colors duration-150"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download Certificate
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 font-sans text-xs text-zinc-700 italic">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Document upload pending
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
