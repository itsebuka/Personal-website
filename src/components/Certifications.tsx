"use client";

import { useState } from "react";
import { Download, ExternalLink, X, FileText, Layers, Clock, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CertificateFile {
  year: string;
  filename: string;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  status: "completed" | "in-progress" | "coming-soon";
  files: CertificateFile[];
  description: string;
  brand: "pau" | "autodesk" | "nvidia" | "udemy";
}

function BridgiaLogo({ className = "w-16 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="2" y="29" fill="#0066FF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="27" letterSpacing="-0.8">
        Bridgia
      </text>
      <rect x="108" y="10" width="5.5" height="22" rx="2.75" fill="#0066FF" />
      <rect x="117" y="10" width="5.5" height="22" rx="2.75" fill="#FFC107" />
      <rect x="126" y="10" width="5.5" height="22" rx="2.75" fill="#28A745" />
    </svg>
  );
}

function AutodeskLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="25" width="80" height="70" rx="8" fill="#682A09" />
      <path d="M5 20 L25 5 L90 5 L90 68 L25 68 L5 72 Z" fill="#FF8D36" />
      <rect x="18" y="5" width="72" height="63" rx="4" fill="#FF6600" />
      <path d="M44 16 H66 V24 H53 V31 H63 V38 H53 V52 H44 Z" fill="#FFFFFF" />
      <text x="56" y="86" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="21">360</text>
    </svg>
  );
}

function NvidiaLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.0003 3C7.02975 3 3.00029 7.02946 3.00029 12C3.00029 16.9705 7.02975 21 12.0003 21C16.9708 21 21.0003 16.9705 21.0003 12C21.0003 7.02946 16.9708 3 12.0003 3ZM9.85197 16.2755C7.7558 15.6888 6.27137 13.7915 6.27137 11.5303C6.27137 8.87786 8.42398 6.72525 11.0764 6.72525C13.2084 6.72525 15.0211 8.11899 15.6599 10.0435C14.7397 9.54924 13.6841 9.27092 12.5645 9.27092C10.2227 9.27092 8.32439 11.1692 8.32439 13.5111C8.32439 14.6186 8.74955 15.6269 9.44474 16.3807L9.85197 16.2755Z" />
    </svg>
  );
}

function UdemyLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L1 8l11 6 9-4.91V17h2V8L12 2zm0 8.47L4.23 7 12 2.77 19.77 7 12 10.47zM3 10.75v5.75L12 22l9-5.5v-5.75l-9 4.91-9-4.91z" />
    </svg>
  );
}

const certificates: Certificate[] = [
  {
    id: "CERT-IRP-2023-2025",
    title: "Industry Readiness Program (3-Year Consecutive Graduate)",
    issuer: "Pan-Atlantic University / Bridgia",
    year: "2023 – 2025",
    status: "completed",
    files: [
      { year: "2023 Certificate", filename: "2023 IRP Certificate.pdf" },
      { year: "2024 Certificate", filename: "2024 IRP Certificate.pdf" },
      { year: "2025 Certificate", filename: "2025 IRP Certificate.pdf" },
    ],
    brand: "pau",
    description:
      "Successfully completed the Industry Readiness Program across three consecutive years (2023, 2024, and 2025). A structured professional development programme equipping students with workplace-ready competencies, technical excellence, and industry leadership skills.",
  },
  {
    id: "CERT-FUSION-2024",
    title: "Autodesk Fusion 360 Certification",
    issuer: "Autodesk",
    year: "2024",
    status: "completed",
    files: [{ year: "2024 Certificate", filename: "Autodesk Fusion Certificate.pdf" }],
    brand: "autodesk",
    description:
      "Certified in Autodesk Fusion 360, covering 3D mechanical design, CAD modelling, enclosure tolerancing, and product simulation workflows.",
  },
  {
    id: "CERT-NVIDIA-RAG",
    title: "NVIDIA RAG Certification",
    issuer: "NVIDIA",
    year: "2026",
    status: "completed",
    files: [{ year: "2026 Certificate", filename: "NVIDIA RAG Certification.pdf" }],
    brand: "nvidia",
    description:
      "Certified by NVIDIA in Retrieval-Augmented Generation (RAG), covering embedding pipelines, vector databases, and production-grade LLM integration.",
  },
  {
    id: "CERT-NVIDIA-DL",
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    year: "2026",
    status: "coming-soon",
    files: [],
    brand: "nvidia",
    description:
      "Certified coursework by NVIDIA in deep learning fundamentals, neural network architecture design, Computer Vision, Natural Language Processing, and GPU model optimization.",
  },
  {
    id: "CERT-UDEMY-PCB",
    title: "Crash Course Electronics and PCB Design",
    issuer: "Udemy · Andre LaMothe",
    year: "2026",
    status: "in-progress",
    files: [],
    brand: "udemy",
    description:
      "Comprehensive engineering coursework covering analog and digital electronics, schematic capture, component specification, and multilayer PCB layout.",
  },
  {
    id: "CERT-UDEMY-MCU",
    title: "Mastering Microcontroller & Embedded Driver Development",
    issuer: "Udemy · FastBit Embedded Brain Academy",
    year: "2026",
    status: "in-progress",
    files: [],
    brand: "udemy",
    description:
      "In-depth bare-metal firmware development for ARM Cortex-M microcontrollers. Writing peripheral drivers (GPIO, I2C, SPI, USART, NVIC, Timers) from scratch in C.",
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
        return <AutodeskLogo className="w-6 h-6" />;
      case "nvidia":
        return <NvidiaLogo className="w-6 h-6 text-[#76b900]" />;
      case "udemy":
        return <UdemyLogo className="w-6 h-6" />;
      case "pau":
      default:
        return <BridgiaLogo className="w-16 h-6" />;
    }
  };

  return (
    <section
      id="certifications"
      className="min-h-full flex flex-col items-center justify-start sm:justify-center px-4 sm:px-6 py-8 sm:py-10 scroll-area"
    >
      <div className="w-full max-w-4xl">
        {/* Section heading */}
        <div className="text-center mb-6 sm:mb-7">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 mt-1.5">
            Verified credentials and professional qualifications.
          </p>
        </div>

        {/* Certificate list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-3.5 sm:gap-4"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              onClick={() => setSelectedCert(cert)}
              className="bg-[#111111] border border-[#222222] rounded-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4 sm:gap-5 hover:border-[#444444] transition-colors duration-200 cursor-pointer group"
            >
              {/* Brand Logo Icon */}
              <div className="shrink-0 p-2.5 sm:p-3 border border-[#2a2a2a] rounded-lg bg-[#1a1a1a] group-hover:border-[#444444] transition-colors flex items-center justify-center">
                {renderLogo(cert.brand)}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-sans text-sm font-semibold text-white leading-snug group-hover:text-zinc-200 transition-colors">
                        {cert.title}
                      </h3>
                      {cert.status === "coming-soon" && (
                        <span className="font-sans text-[9px] uppercase tracking-wider bg-purple-500/15 border border-purple-500/40 text-purple-300 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-semibold shrink-0 shadow-sm">
                          <Sparkles className="w-2.5 h-2.5 text-purple-400" />
                          Coming Soon!
                        </span>
                      )}
                      {cert.status === "in-progress" && (
                        <span className="font-sans text-[9px] uppercase tracking-wider bg-[#a435f0]/15 border border-[#a435f0]/40 text-[#c073f8] px-2 py-0.5 rounded-full flex items-center gap-1 font-medium shrink-0">
                          <Clock className="w-2.5 h-2.5" />
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-xs text-zinc-500 mt-0.5">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                  <span className="font-sans text-[9px] text-zinc-600 tracking-widest uppercase shrink-0">
                    {cert.id}
                  </span>
                </div>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* Footer action link */}
                <div className="flex flex-wrap items-center justify-between gap-2 mt-2 pt-3 border-t border-[#1e1e1e]">
                  <span className="flex items-center gap-1.5 font-sans text-xs text-zinc-400 group-hover:text-white transition-colors">
                    <FileText className="w-3.5 h-3.5" />
                    View Certificate Details
                  </span>
                  <span className="flex items-center gap-1 font-sans text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {cert.status === "coming-soon" ? (
                      <span className="text-purple-300 font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        Incoming Certification
                      </span>
                    ) : cert.status === "in-progress" ? (
                      <span className="text-[#c073f8]">Coursework Active</span>
                    ) : (
                      <>
                        <Layers className="w-3.5 h-3.5" />
                        {cert.files.length === 1 ? "1 Document" : `${cert.files.length} Documents (2023–2025)`}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111111] border border-[#333333] rounded-xl w-full max-w-lg p-5 sm:p-6 relative flex flex-col gap-4 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-4 pr-8 border-b border-[#222222] pb-4">
                <div className="p-3 border border-[#2a2a2a] rounded-lg bg-[#1a1a1a] shrink-0">
                  {renderLogo(selectedCert.brand)}
                </div>
                <div className="min-w-0">
                  <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-widest block mb-0.5">
                    {selectedCert.id}
                  </span>
                  <h3 className="font-sans text-base font-bold text-white leading-snug">
                    {selectedCert.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 mt-0.5">
                    {selectedCert.issuer} · {selectedCert.year}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <h4 className="font-sans text-xs uppercase tracking-wider text-zinc-500">
                  Qualification Overview
                </h4>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {/* Actions List */}
              <div className="flex flex-col gap-2.5 pt-2 border-t border-[#222222]">
                <h4 className="font-sans text-xs uppercase tracking-wider text-zinc-500 mb-1">
                  {selectedCert.status === "coming-soon"
                    ? "Incoming Certification Status"
                    : selectedCert.status === "in-progress"
                    ? "Certification Status"
                    : `Attached Documents (${selectedCert.files.length})`}
                </h4>
                {selectedCert.status === "coming-soon" ? (
                  <div className="p-3.5 bg-[#181818] border border-purple-500/30 rounded-lg flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-purple-300">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      Scheduled for Completion (2026)
                    </div>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      NVIDIA Deep Learning certification is scheduled for completion in 2026. Verified credential PDF will be published upon course completion.
                    </p>
                  </div>
                ) : selectedCert.status === "in-progress" ? (
                  <div className="p-3.5 bg-[#181818] border border-[#2a2a2a] rounded-lg flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#c073f8]">
                      <Clock className="w-4 h-4" />
                      Currently Enrolled &amp; Completing Modules
                    </div>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      Coursework is actively underway. Verified certificate PDF will be published and available for download upon course completion.
                    </p>
                  </div>
                ) : (
                  selectedCert.files.map((file) => (
                    <div key={file.filename} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-[#181818] border border-[#2a2a2a] rounded-lg gap-2">
                      <span className="font-sans text-xs font-medium text-white flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        {file.year}
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href={`/files/certificates/${file.filename}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none bg-white text-black font-sans font-semibold text-[11px] py-1.5 px-3 rounded text-center flex items-center justify-center gap-1 hover:bg-zinc-200 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Open PDF
                        </a>
                        <a
                          href={`/files/certificates/${file.filename}`}
                          download
                          className="flex-1 sm:flex-none bg-[#222222] text-white border border-[#333333] font-sans font-semibold text-[11px] py-1.5 px-3 rounded text-center flex items-center justify-center gap-1 hover:bg-[#333333] transition-colors"
                        >
                          <Download className="w-3 h-3" />
                          Download
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
