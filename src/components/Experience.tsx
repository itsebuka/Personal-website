"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckSquare,
  X,
  Download,
  ExternalLink,
  Award,
  BookOpen,
  FileText,
  Maximize2,
  Minimize2,
  Calendar,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AcademicReport {
  level: string;
  semester: string;
  session: string;
  gpa: string;
  cgpa: string;
  units: string;
  imageSrc: string;
}

interface Role {
  id: string;
  period: string;
  company: string;
  title: string;
  logo: string;
  bullets: string[];
  skillsApplied: string[];
  active?: boolean;
  type: "internship" | "secondary" | "university";
  reports?: AcademicReport[];
}

const academicReports: AcademicReport[] = [
  {
    level: "100 Level",
    semester: "1st Semester",
    session: "2023/2024",
    gpa: "4.17",
    cgpa: "4.17",
    units: "18",
    imageSrc: "/images/results/100L_Sem1.png",
  },
  {
    level: "100 Level",
    semester: "2nd Semester",
    session: "2023/2024",
    gpa: "2.74",
    cgpa: "3.43",
    units: "19",
    imageSrc: "/images/results/100L_Sem2.png",
  },
  {
    level: "200 Level",
    semester: "1st Semester",
    session: "2024/2025",
    gpa: "3.15",
    cgpa: "3.32",
    units: "26",
    imageSrc: "/images/results/200L_Sem1.png",
  },
  {
    level: "200 Level",
    semester: "2nd Semester",
    session: "2024/2025",
    gpa: "3.84",
    cgpa: "3.44",
    units: "19",
    imageSrc: "/images/results/200L_Sem2.png",
  },
  {
    level: "300 Level",
    semester: "1st Semester",
    session: "2025/2026",
    gpa: "2.24",
    cgpa: "3.19",
    units: "21",
    imageSrc: "/images/results/2025_2026_sem1.png",
  },
];

const professionalLog: Role[] = [
  {
    id: "role-ikeja",
    period: "2026 – PRESENT",
    company: "Ikeja Electric Distribution Company",
    title: "Junior Electrical Engineering Intern",
    logo: "/images/logos/ikeja-electric.png",
    type: "internship",
    bullets: [
      "Performing quality assurance on meter installations and ensuring compliance with safety standards",
      "Assisting senior engineers in fault analysis, network troubleshooting, and power quality assessments across distribution substations",
      "Conducting field tests, logging meter readings, and maintaining comprehensive technical documentation for grid operations",
    ],
    skillsApplied: [
      "Power Systems",
      "Fault Analysis",
      "Power Quality Assessment",
      "Network Troubleshooting",
      "Field Testing",
      "Documentation",
      "Safety Standards",
      "Meter Installation",
      "Grid Operations",
      "Technical Documentation",
    ],
    active: true,
  },
  {
    id: "role-mcss",
    period: "2016 – 2023",
    company: "Maryland Comprehensive Secondary School",
    title: "Science Student",
    logo: "/images/logos/mcss.png",
    type: "secondary",
    bullets: [
      "Graduated with a 275 in the Unified Tertiary Matriculation Examination (UTME)",
      "Graduated with a distinction in the West African Senior School Certificate Examination (WASSCE)",
      "Gained admission into Pan-Atlantic University to study Electrical and Electronics Engineering",
    ],
    skillsApplied: ["Grit", "Determination", "Perseverance", "Resilience", "Discipline"],
    active: false,
  },
  {
    id: "role-pau",
    period: "2023 – PRESENT",
    company: "Pan-Atlantic University",
    title: "BSc in Electrical and Electronics Engineering",
    logo: "/images/logos/pau.png",
    type: "university",
    reports: academicReports,
    bullets: [
      "Department of Electrical and Electronics Engineering (School of Science and Technology)",
      "5-Year Bachelor of Engineering (B.Eng) Degree Program",
      "Click to view all semester academic reports, GPAs, and download full transcript",
    ],
    skillsApplied: [
      "Circuit Analysis",
      "Digital Logic",
      "Microcontrollers",
      "Signals & Systems",
      "Electromagnetics",
      "Control Systems",
    ],
    active: true,
  },
];

export default function Experience() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [activeSemIndex, setActiveSemIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const selectedReport = selectedRole?.reports?.[activeSemIndex];

  return (
    <section
      id="experience"
      className="min-h-full flex flex-col items-center justify-start sm:justify-center px-4 sm:px-6 py-8 sm:py-10 scroll-area"
    >
      <div className="w-full max-w-6xl">
        {/* Section heading */}
        <div className="text-center mb-7">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Professional Timeline
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 mt-1.5">
            Click any tile to view full academic records, documents &amp; experience details.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {professionalLog.map((role) => (
            <div
              key={role.id}
              onClick={() => {
                setSelectedRole(role);
                setActiveSemIndex(0);
                setIsZoomed(false);
              }}
              className="bg-[#111111] border border-[#222222] rounded-lg p-5 flex flex-col gap-3.5 hover:border-[#444444] transition-all duration-200 cursor-pointer group hover:bg-[#141414]"
            >
              {/* Period badge + active indicator */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] text-zinc-500 tracking-widest uppercase">
                  {role.period}
                </span>
                {role.active && (
                  <span className="flex items-center gap-1.5 font-sans text-[9px] text-zinc-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                    Active
                  </span>
                )}
              </div>

              {/* Logo + Title & Company */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 p-1.5 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:border-[#555]">
                  <Image
                    src={role.logo}
                    alt={`${role.company} Logo`}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-sans text-sm font-bold text-white leading-snug group-hover:text-zinc-200 transition-colors">
                    {role.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-500 mt-0.5">
                    @ {role.company}
                  </p>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="flex flex-col gap-2">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-zinc-600 mt-0.5 shrink-0" />
                    <span className="font-sans text-[11px] text-zinc-400 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer CTA */}
              <div className="flex items-center justify-between pt-3 border-t border-[#1e1e1e] mt-auto">
                <span className="font-sans text-[10px] text-zinc-500 group-hover:text-white transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  {role.type === "university" ? "View Academic Results" : "View Experience Details"}
                </span>
                <span className="font-sans text-[10px] text-zinc-600 group-hover:text-zinc-300 transition-colors">
                  Open &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className={`bg-[#111111] border border-[#333333] rounded-xl w-full p-5 sm:p-6 relative flex flex-col gap-6 shadow-2xl my-auto ${
                selectedRole.type === "university" ? "max-w-4xl" : "max-w-xl"
              }`}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedRole(null)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white p-1 rounded-lg transition-colors z-20 bg-[#1a1a1a] border border-[#2a2a2a]"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 border-b border-[#222222] pb-4 pr-10">
                <div className="w-12 h-12 p-2 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-center shrink-0">
                  <Image
                    src={selectedRole.logo}
                    alt={`${selectedRole.company} Logo`}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-widest">
                      {selectedRole.period}
                    </span>
                    {selectedRole.active && (
                      <span className="font-sans text-[9px] uppercase tracking-wider bg-white/10 text-white px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    )}
                  </div>
                  <h3 className="font-sans text-base sm:text-xl font-bold text-white leading-snug">
                    {selectedRole.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400">
                    @ {selectedRole.company}
                  </p>
                </div>
              </div>

              {/* University / Academic Results View */}
              {selectedRole.type === "university" && selectedRole.reports && (
                <div className="flex flex-col gap-5">
                  {/* Action Header bar: Transcript Download */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-[#181818] border border-[#2a2a2a] rounded-xl">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-white shrink-0" />
                      <div>
                        <h4 className="font-sans text-xs sm:text-sm font-bold text-white">
                          Academic Performance &amp; Grade Reports
                        </h4>
                        <p className="font-sans text-[11px] text-zinc-400">
                          BEng Electrical &amp; Electronics Engineering · Pan-Atlantic University
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <a
                        href="/files/transcripts/official_transcript.pdf"
                        download
                        className="flex-1 sm:flex-none bg-white text-black font-sans font-semibold text-xs py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow"
                      >
                        <Download className="w-4 h-4" />
                        Download Full Transcript (PDF)
                      </a>
                    </div>
                  </div>

                  {/* Semester Tab Switcher */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-[#222222]">
                    {selectedRole.reports.map((rep, idx) => (
                      <button
                        key={`${rep.level}-${rep.semester}`}
                        onClick={() => {
                          setActiveSemIndex(idx);
                          setIsZoomed(false);
                        }}
                        className={`px-3.5 py-2 rounded-t-lg font-sans text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-2 border-b-2 ${
                          activeSemIndex === idx
                            ? "bg-[#1a1a1a] text-white border-white"
                            : "text-zinc-500 border-transparent hover:text-zinc-300"
                        }`}
                      >
                        <span>{rep.level}</span>
                        <span className="text-[10px] opacity-75">({rep.semester})</span>
                      </button>
                    ))}
                    <span className="px-3 py-2 text-[10px] text-zinc-600 italic whitespace-nowrap">
                      Upcoming: 300L S2 – 500L S2 (In Progress)
                    </span>
                  </div>

                  {/* Active Semester Report Card */}
                  {selectedReport && (
                    <div className="flex flex-col gap-4">
                      {/* Stats Overview Pill */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3 bg-[#0d0d0d] border border-[#222222] rounded-lg">
                          <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                            Semester GPA
                          </span>
                          <span className="font-serif text-lg font-bold text-white">
                            {selectedReport.gpa} / 5.00
                          </span>
                        </div>
                        <div className="p-3 bg-[#0d0d0d] border border-[#222222] rounded-lg">
                          <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                            Cumulative CGPA
                          </span>
                          <span className="font-serif text-lg font-bold text-zinc-300">
                            {selectedReport.cgpa} / 5.00
                          </span>
                        </div>
                        <div className="p-3 bg-[#0d0d0d] border border-[#222222] rounded-lg">
                          <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                            Academic Session
                          </span>
                          <span className="font-sans text-xs font-semibold text-zinc-300 mt-1 block">
                            {selectedReport.session}
                          </span>
                        </div>
                        <div className="p-3 bg-[#0d0d0d] border border-[#222222] rounded-lg">
                          <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                            Total Units Taken
                          </span>
                          <span className="font-sans text-xs font-semibold text-zinc-300 mt-1 block">
                            {selectedReport.units} Units
                          </span>
                        </div>
                      </div>

                      {/* Result Screenshot Container with Lightbox/Zoom */}
                      <div className="relative border border-[#2a2a2a] rounded-xl overflow-hidden bg-black flex flex-col group">
                        <div className="flex items-center justify-between px-4 py-2.5 bg-[#161616] border-b border-[#222222]">
                          <span className="font-sans text-xs font-medium text-zinc-300">
                            {selectedReport.session} {selectedReport.level} {selectedReport.semester} Academic Report
                          </span>
                          <button
                            onClick={() => setIsZoomed(!isZoomed)}
                            className="font-sans text-[11px] text-zinc-400 hover:text-white flex items-center gap-1.5 bg-[#222] px-2.5 py-1 rounded transition-colors"
                          >
                            {isZoomed ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                            {isZoomed ? "Close Full View" : "Full View / Zoom"}
                          </button>
                        </div>

                        <div className={`overflow-auto transition-all ${isZoomed ? "max-h-[75vh]" : "max-h-[380px]"}`}>
                          <Image
                            src={selectedReport.imageSrc}
                            alt={`${selectedReport.session} Academic Report`}
                            width={1100}
                            height={900}
                            className="w-full h-auto object-contain cursor-pointer"
                            onClick={() => setIsZoomed(!isZoomed)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Standard Role Details View (for Ikeja & MCSS) */}
              {selectedRole.type !== "university" && (
                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-[#161616] border border-[#262626] rounded-xl flex flex-col gap-3">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Key Highlights &amp; Scope
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {selectedRole.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                          <CheckSquare className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applied Skills */}
                  <div>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                      Core Competencies Applied
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedRole.skillsApplied.map((sk) => (
                        <span
                          key={sk}
                          className="font-sans text-xs text-zinc-300 px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
