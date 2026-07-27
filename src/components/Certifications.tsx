"use client";

import { useState } from "react";
import { Download, ExternalLink, X, FileText, Layers, Clock } from "lucide-react";
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
  status: "completed" | "in-progress";
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
      <path d="M12.784 7.64c.264.084.512.196.744.336 1.704-1.576 4.312-1.744 5.92-.128 1.6 1.608 1.48 4.24-.136 5.864a4.192 4.192 0 01-1.704.976c-.08-.344-.224-.672-.416-.968.424-.168.808-.432 1.112-.768.96-.96.944-2.528-.04-3.512-.976-.984-2.544-.992-3.528-.032a2.534 2.534 0 00-.736 1.256 5.94 5.94 0 00-1.216-3.024zM8.328 4.608c3.272-1.256 6.96-.6 9.536 1.976 2.456 2.456 3.12 6.072 1.952 9.2a8.704 8.704 0 01-2.928 3.968 1.9 1.9 0 01-.136.096c-.344-.664-.784-1.28-1.312-1.808a6.36 6.36 0 002.328-2.608c.84-1.896.536-4.144-.888-5.568-1.448-1.448-3.728-1.736-5.64-0.856.328.616.536 1.28.624 1.968 1.104-.4 2.336-.184 3.24.664.912.912.96 2.368.168 3.328-.8.952-2.256 1.096-3.216.32a3.784 3.784 0 01-.848-1.128c-.28-.008-.56-.048-.832-.12-.04.472.016.952.16 1.408.432 1.36 1.368 2.456 2.664 3.024-1.144.152-2.312-.048-3.328-.616-1.576-.88-2.648-2.4-2.952-4.168.04-.496.168-.984.376-1.44.824-1.816 2.504-3.088 4.456-3.416a9.584 9.584 0 00-3.648.752c-2.328.968-3.928 3.088-4.12 5.568-.008.08-.016.16-.016.24 0 3.32 2.336 6.16 5.544 6.776.432.08.872.12 1.312.12 2.76 0 5.304-1.296 6.896-3.496.16-.224.312-.456.448-.696.64.64 1.168 1.384 1.56 2.2a10.96 10.96 0 01-8.904 4.384c-1.888 0-3.728-.488-5.344-1.408C2.536 17.52.928 14.12 1.016 10.4c.088-3.72 1.888-7.064 4.88-9.088C7.592.176 9.424 0 11.232 0c2.512 0 4.96.864 6.944 2.456l-1.448 1.448C15.2 2.72 13.256 2.064 11.232 2.064c-3.704 0-7.08 2.12-8.688 5.432C1.488 9.904 1.768 13.04 3.264 15.6c1.072 1.832 2.72 3.192 4.672 3.88-1.992-.816-3.48-2.52-3.944-4.608-.432-1.944.08-3.968 1.384-5.464 1.36-1.56 3.408-2.4 5.488-2.224.184.016.368.04.544.072a7.712 7.712 0 01-3.08 2.352z" />
    </svg>
  );
}

function UdemyLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="90" height="90" rx="18" fill="#FFFFFF" />
      <path d="M50 16 L72 28 L64 32 L50 24 L36 32 L28 28 Z" fill="#A435F0" />
      <path d="M38 36 H48 V55 C48 57.5 52 57.5 52 55 V36 H62 V56 C62 64 38 64 38 56 V36 Z" fill="#1C1D1F" />
      <text x="50" y="80" textAnchor="middle" fill="#1C1D1F" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15">udemy</text>
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
    year: "2024",
    status: "completed",
    files: [{ year: "2024 Certificate", filename: "NVIDIA RAG Certification.pdf" }],
    brand: "nvidia",
    description:
      "Certified by NVIDIA in Retrieval-Augmented Generation (RAG) — covering embedding pipelines, vector databases, and production-grade LLM integration.",
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
        return <BridgiaLogo className="h-6 w-auto" />;
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
                    <div className="flex items-center gap-2">
                      <h3 className="font-sans text-sm font-semibold text-white leading-snug group-hover:text-zinc-200 transition-colors">
                        {cert.title}
                      </h3>
                      {cert.status === "in-progress" && (
                        <span className="font-sans text-[9px] uppercase tracking-wider bg-[#a435f0]/15 border border-[#a435f0]/40 text-[#c073f8] px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                          <Clock className="w-2.5 h-2.5" />
                          In Progress
                        </span>
                      )}
                    </div>
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
                  <span className="flex items-center gap-1 font-sans text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {cert.status === "in-progress" ? (
                      <span className="text-[#c073f8]">Course Coursework Active</span>
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
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-sans text-[9px] text-zinc-500 uppercase tracking-widest">
                      {selectedCert.id}
                    </span>
                    {selectedCert.status === "in-progress" && (
                      <span className="font-sans text-[9px] uppercase tracking-wider bg-[#a435f0]/15 border border-[#a435f0]/40 text-[#c073f8] px-2 py-0.5 rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
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

              {/* Actions List */}
              <div className="flex flex-col gap-2.5 pt-2 border-t border-[#222222]">
                <h4 className="font-sans text-xs uppercase tracking-wider text-zinc-500 mb-1">
                  {selectedCert.status === "in-progress" ? "Certification Status" : `Attached Documents (${selectedCert.files.length})`}
                </h4>
                {selectedCert.status === "in-progress" ? (
                  <div className="p-4 bg-[#181818] border border-[#2a2a2a] rounded-lg flex flex-col gap-2">
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
                    <div key={file.filename} className="flex items-center justify-between p-3 bg-[#181818] border border-[#2a2a2a] rounded-lg">
                      <span className="font-sans text-xs font-medium text-white flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-zinc-400" />
                        {file.year}
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href={`/files/certificates/${file.filename}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black font-sans font-semibold text-[11px] py-1.5 px-3 rounded text-center flex items-center gap-1 hover:bg-zinc-200 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Open PDF
                        </a>
                        <a
                          href={`/files/certificates/${file.filename}`}
                          download
                          className="bg-[#222222] text-white border border-[#333333] font-sans font-semibold text-[11px] py-1.5 px-3 rounded text-center flex items-center gap-1 hover:bg-[#333333] transition-colors"
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
