"use client";

import { useState } from "react";
import { Award, Download, ExternalLink, GraduationCap, X, FileText, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  filename: string;
  description: string;
  brand: "pau" | "autodesk" | "nvidia";
}

// Brand SVG Logos
function PauLogo({ className = "w-5 h-5" }: { className?: string }) {
  return <GraduationCap className={className} />;
}

function AutodeskLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function NvidiaLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.784 7.64c.264.084.512.196.744.336 1.704-1.576 4.312-1.744 5.92-.128 1.6 1.608 1.48 4.24-.136 5.864a4.192 4.192 0 01-1.704.976c-.08-.344-.224-.672-.416-.968.424-.168.808-.432 1.112-.768.96-.96.944-2.528-.04-3.512-.976-.984-2.544-.992-3.528-.032a2.534 2.534 0 00-.736 1.256 5.94 5.94 0 00-1.216-3.024zM8.328 4.608c3.272-1.256 6.96-.6 9.536 1.976 2.456 2.456 3.12 6.072 1.952 9.2a8.704 8.704 0 01-2.928 3.968 1.9 1.9 0 01-.136.096c-.344-.664-.784-1.28-1.312-1.808a6.36 6.36 0 002.328-2.608c.84-1.896.536-4.144-.888-5.568-1.448-1.448-3.728-1.736-5.64-0.856.328.616.536 1.28.624 1.968 1.104-.4 2.336-.184 3.24.664.912.912.96 2.368.168 3.328-.8.952-2.256 1.096-3.216.32a3.784 3.784 0 01-.848-1.128c-.28-.008-.56-.048-.832-.12-.04.472.016.952.16 1.408.432 1.36 1.368 2.456 2.664 3.024-1.144.152-2.312-.048-3.328-.616-1.576-.88-2.648-2.4-2.952-4.168.04-.496.168-.984.376-1.44.824-1.816 2.504-3.088 4.456-3.416a9.584 9.584 0 00-3.648.752c-2.328.968-3.928 3.088-4.12 5.568-.008.08-.016.16-.016.24 0 3.32 2.336 6.16 5.544 6.776.432.08.872.12 1.312.12 2.76 0 5.304-1.296 6.896-3.496.16-.224.312-.456.448-.696.64.64 1.168 1.384 1.56 2.2a10.96 10.96 0 01-8.904 4.384c-1.888 0-3.728-.488-5.344-1.408C2.536 17.52.928 14.12 1.016 10.4c.088-3.72 1.888-7.064 4.88-9.088C7.592.176 9.424 0 11.232 0c2.512 0 4.96.864 6.944 2.456l-1.448 1.448C15.2 2.72 13.256 2.064 11.232 2.064c-3.704 0-7.08 2.12-8.688 5.432C1.488 9.904 1.768 13.04 3.264 15.6c1.072 1.832 2.72 3.192 4.672 3.88-1.992-.816-3.48-2.52-3.944-4.608-.432-1.944.08-3.968 1.384-5.464 1.36-1.56 3.408-2.4 5.488-2.224.184.016.368.04.544.072a7.712 7.712 0 01-3.08 2.352z" />
    </svg>
  );
}

const certificates: Certificate[] = [
  {
    id: "CERT-IRP-2023",
    title: "Industry Readiness Program Certificate",
    issuer: "Pan-Atlantic University",
    year: "2023",
    filename: "IRP_Certificate_2023.pdf",
    brand: "pau",
    description:
      "Awarded on completion of the Industry Readiness Program — a structured professional development programme equipping students with workplace-ready competencies.",
  },
  {
    id: "CERT-IRP-2024",
    title: "Industry Readiness Program Certificate",
    issuer: "Pan-Atlantic University",
    year: "2024",
    filename: "IRP_Certificate_2024.pdf",
    brand: "pau",
    description:
      "Second consecutive award from the Industry Readiness Program, reinforcing professional and technical development skills across engineering disciplines.",
  },
  {
    id: "CERT-IRP-2025",
    title: "Industry Readiness Program Certificate",
    issuer: "Pan-Atlantic University",
    year: "2025",
    filename: "IRP_Certificate_2025.pdf",
    brand: "pau",
    description:
      "Third consecutive Industry Readiness Program completion, demonstrating sustained professional growth and academic commitment.",
  },
  {
    id: "CERT-FUSION-2024",
    title: "Autodesk Fusion 360 Certification",
    issuer: "Autodesk",
    year: "2024",
    filename: "Autodesk_Fusion_360_2024.pdf",
    brand: "autodesk",
    description:
      "Certified in Autodesk Fusion 360, covering 3D mechanical design, CAD modelling, enclosure tolerancing, and product simulation workflows.",
  },
  {
    id: "CERT-NVIDIA-RAG",
    title: "NVIDIA RAG Certification",
    issuer: "NVIDIA",
    year: "2024",
    filename: "NVIDIA_RAG_2024.pdf",
    brand: "nvidia",
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
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const renderLogo = (brand: Certificate["brand"]) => {
    switch (brand) {
      case "autodesk":
        return <AutodeskLogo className="w-6 h-6 text-zinc-200" />;
      case "nvidia":
        return <NvidiaLogo className="w-6 h-6 text-[#76b900]" />;
      case "pau":
      default:
        return <PauLogo className="w-6 h-6 text-zinc-300" />;
    }
  };

  return (
    <section
      id="certifications"
      className="h-full flex flex-col items-center justify-center px-6 py-6 scroll-area"
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
              onClick={() => setSelectedCert(cert)}
              className="bg-[#111111] border border-[#222222] rounded-lg p-5 flex items-start gap-5 hover:border-[#444444] transition-colors duration-200 cursor-pointer group"
            >
              {/* Brand Logo Icon */}
              <div className="shrink-0 p-3 border border-[#2a2a2a] rounded-lg bg-[#1a1a1a] group-hover:border-[#444444] transition-colors">
                {renderLogo(cert.brand)}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-white leading-snug group-hover:text-zinc-200 transition-colors">
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

                {/* Footer action link */}
                <div className="flex items-center justify-between mt-2 pt-3 border-t border-[#1e1e1e]">
                  <span className="flex items-center gap-1.5 font-sans text-xs text-zinc-400 group-hover:text-white transition-colors">
                    <FileText className="w-3.5 h-3.5" />
                    View Certificate Details
                  </span>
                  <a
                    href={`/files/certificates/${cert.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 font-sans text-xs text-zinc-500 hover:text-white transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111111] border border-[#333333] rounded-xl max-w-lg w-full p-6 relative flex flex-col gap-5 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 border-b border-[#222222] pb-4">
                <div className="p-3 border border-[#2a2a2a] rounded-lg bg-[#1a1a1a]">
                  {renderLogo(selectedCert.brand)}
                </div>
                <div>
                  <span className="font-sans text-[9px] text-zinc-500 uppercase tracking-widest">
                    {selectedCert.id}
                  </span>
                  <h3 className="font-sans text-base font-bold text-white leading-snug">
                    {selectedCert.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400">
                    {selectedCert.issuer} · {selectedCert.year}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-3">
                <h4 className="font-sans text-xs uppercase tracking-wider text-zinc-500">Overview</h4>
                <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`/files/certificates/${selectedCert.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-black font-sans font-semibold text-xs py-2.5 px-4 rounded-lg text-center flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Document (PDF)
                </a>
                <a
                  href={`/files/certificates/${selectedCert.filename}`}
                  download
                  className="flex-1 bg-[#1a1a1a] text-white border border-[#333333] font-sans font-semibold text-xs py-2.5 px-4 rounded-lg text-center flex items-center justify-center gap-2 hover:bg-[#252525] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Direct Download
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
