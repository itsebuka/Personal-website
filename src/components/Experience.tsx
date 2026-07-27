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
  GraduationCap,
  Clock,
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

interface SecondaryDoc {
  id: string;
  title: string;
  subtitle: string;
  badgeText: string;
  imageSrc?: string;
  stats: { label: string; value: string }[];
  status: "available" | "pending";
}

interface Role {
  id: string;
  period: string;
  company: string;
  title: string;
  logo: string;
  websiteUrl?: string;
  bullets: string[];
  skillsApplied: string[];
  active?: boolean;
  type: "internship" | "secondary" | "university" | "primary";
  reports?: AcademicReport[];
  secondaryDocs?: SecondaryDoc[];
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
  {
    level: "300 Level",
    semester: "2nd Semester",
    session: "2025/2026",
    gpa: "3.90",
    cgpa: "3.31",
    units: "21",
    imageSrc: "/images/results/300L_Sem2.png",
  },
];

const secondaryDocs: SecondaryDoc[] = [
  {
    id: "jamb-2023",
    title: "JAMB UTME 2023 Result Slip",
    subtitle: "Joint Admissions and Matriculation Board",
    badgeText: "Aggregate Score: 277 / 400",
    imageSrc: "/images/results/jamb_utme_2023.jpg",
    status: "available",
    stats: [
      { label: "UTME Aggregate", value: "277 / 400" },
      { label: "Physics", value: "75" },
      { label: "Use of English", value: "69" },
      { label: "Chemistry", value: "67" },
      { label: "Mathematics", value: "66" },
    ],
  },
  {
    id: "gce-2023",
    title: "WASSCE Private Candidates 2023 (GCE)",
    subtitle: "West African Examinations Council (WAEC)",
    badgeText: "Distinction Profile (2 A1s, 4 B3s)",
    imageSrc: "/images/results/gce_2023.jpg",
    status: "available",
    stats: [
      { label: "Geography", value: "A1 (Distinction)" },
      { label: "Civic Education", value: "A1 (Distinction)" },
      { label: "Physics", value: "B3" },
      { label: "English Language", value: "B3" },
      { label: "Mathematics", value: "B3" },
      { label: "Biology", value: "B3" },
      { label: "Chemistry", value: "C5" },
    ],
  },
  {
    id: "mcss-transcript",
    title: "MCSS Graduation Scroll & High School Transcript",
    subtitle: "Maryland Comprehensive Secondary School",
    badgeText: "High School Graduation Record",
    status: "pending",
    stats: [
      { label: "Graduation Set", value: "2023" },
      { label: "UTME Score", value: "275" },
      { label: "WASSCE Profile", value: "Distinction" },
      { label: "Status", value: "Photo Uploading Soon" },
    ],
  },
];

const professionalLog: Role[] = [
  {
    id: "role-ikeja",
    period: "2026 – PRESENT",
    company: "Ikeja Electric Distribution Company",
    title: "Junior Electrical Engineering Intern",
    logo: "/images/logos/ikeja-electric.png",
    websiteUrl: "https://www.ikejaelectric.com/",
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
    id: "role-pau",
    period: "2023 – PRESENT",
    company: "Pan-Atlantic University",
    title: "BSc in Electrical and Electronics Engineering",
    logo: "/images/logos/pau.png",
    websiteUrl: "https://pau.edu.ng/",
    type: "university",
    reports: academicReports,
    bullets: [
      "Department of Electrical and Electronics Engineering (School of Science and Technology)",
      "5-Year Bachelor of Engineering (B.Eng) Degree Program",
      "Click to view all 100L to 300L semester academic reports, GPAs, and download full transcript",
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
  {
    id: "role-mcss",
    period: "2017 – 2023",
    company: "Maryland Comprehensive Secondary School",
    title: "Science Student",
    logo: "/images/logos/mcss.png",
    websiteUrl: "https://mcssmaryland.org/",
    type: "secondary",
    secondaryDocs: secondaryDocs,
    bullets: [
      "Graduated with a 277 in the Unified Tertiary Matriculation Examination (UTME)",
      "Graduated with a distinction in the West African Senior School Certificate Examination (WASSCE / GCE)",
      "Gained admission into Pan-Atlantic University to study Electrical and Electronics Engineering",
    ],
    skillsApplied: ["Grit", "Determination", "Perseverance", "Resilience", "Discipline"],
    active: false,
  },
  {
    id: "role-holly-garden",
    period: "2011 – 2017",
    company: "Holly Garden School",
    title: "Primary Education & Best Graduating Student",
    logo: "/images/logos/holly-garden.png",
    websiteUrl: "https://www.hollygardenschool.com/",
    type: "primary",
    bullets: [
      "Awarded Best Graduating Student of the Class of 2017",
      "Completed Nursery through Primary 5 education with top academic honors",
      "Successfully passed National Common Entrance & competitive entrance exams into Wellspring College & Maryland Comprehensive Secondary School (MCSS)",
    ],
    skillsApplied: [
      "Academic Excellence",
      "Leadership",
      "Foundational Science & Math",
      "Curiosity",
      "Diligence",
    ],
    active: false,
  },
];

export default function Experience() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [activeSemIndex, setActiveSemIndex] = useState<number>(0);
  const [activeSecDocIndex, setActiveSecDocIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const selectedReport = selectedRole?.reports?.[activeSemIndex];
  const selectedSecDoc = selectedRole?.secondaryDocs?.[activeSecDocIndex];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {professionalLog.map((role) => (
            <div
              key={role.id}
              onClick={() => {
                setSelectedRole(role);
                setActiveSemIndex(0);
                setActiveSecDocIndex(0);
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
                  {role.websiteUrl ? (
                    <a
                      href={role.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-sans text-xs text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-1 mt-0.5 group/link"
                    >
                      @ {role.company}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <p className="font-sans text-xs text-zinc-500 mt-0.5">
                      @ {role.company}
                    </p>
                  )}
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
                  {role.type === "university" || role.type === "secondary"
                    ? "View Academic Results"
                    : "View Experience Details"}
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
                selectedRole.type === "university" || selectedRole.type === "secondary"
                  ? "max-w-5xl lg:max-w-6xl"
                  : "max-w-xl"
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
                  {selectedRole.websiteUrl ? (
                    <a
                      href={selectedRole.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1.5 mt-0.5 group/m-link"
                    >
                      @ {selectedRole.company}
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover/m-link:text-white transition-colors" />
                    </a>
                  ) : (
                    <p className="font-sans text-xs text-zinc-400">
                      @ {selectedRole.company}
                    </p>
                  )}
                </div>
              </div>

              {/* University Academic Results View */}
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
                      Upcoming: 400L S1 – 500L S2 (In Progress)
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
                            {isZoomed ? "Standard View" : "Enlarge View / Zoom"}
                          </button>
                        </div>

                        <div className={`overflow-auto transition-all ${isZoomed ? "max-h-[85vh]" : "max-h-[550px]"}`}>
                          <Image
                            src={selectedReport.imageSrc}
                            alt={`${selectedReport.session} Academic Report`}
                            width={1200}
                            height={1000}
                            className="w-full h-auto object-contain cursor-pointer"
                            onClick={() => setIsZoomed(!isZoomed)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Secondary School (MCSS / JAMB / GCE) View */}
              {selectedRole.type === "secondary" && selectedRole.secondaryDocs && (
                <div className="flex flex-col gap-5">
                  {/* Document Switcher Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-[#222222]">
                    {selectedRole.secondaryDocs.map((doc, idx) => (
                      <button
                        key={doc.id}
                        onClick={() => {
                          setActiveSecDocIndex(idx);
                          setIsZoomed(false);
                        }}
                        className={`px-3.5 py-2 rounded-t-lg font-sans text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-2 border-b-2 ${
                          activeSecDocIndex === idx
                            ? "bg-[#1a1a1a] text-white border-white"
                            : "text-zinc-500 border-transparent hover:text-zinc-300"
                        }`}
                      >
                        <span>{doc.title}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Secondary Document Card */}
                  {selectedSecDoc && (
                    <div className="flex flex-col gap-4">
                      {/* Header bar */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-4 bg-[#181818] border border-[#2a2a2a] rounded-xl">
                        <div>
                          <h4 className="font-sans text-sm font-bold text-white">
                            {selectedSecDoc.title}
                          </h4>
                          <p className="font-sans text-xs text-zinc-400 mt-0.5">
                            {selectedSecDoc.subtitle}
                          </p>
                        </div>
                        <span className="font-sans text-xs font-semibold px-3 py-1 bg-white/10 text-white rounded-full border border-white/20">
                          {selectedSecDoc.badgeText}
                        </span>
                      </div>

                      {/* Subject Scores / Breakdown Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {selectedSecDoc.stats.map((st) => (
                          <div key={st.label} className="p-3 bg-[#0d0d0d] border border-[#222222] rounded-lg">
                            <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block truncate">
                              {st.label}
                            </span>
                            <span className="font-sans text-xs sm:text-sm font-bold text-white mt-0.5 block">
                              {st.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Image Viewer or Pending State */}
                      {selectedSecDoc.status === "available" && selectedSecDoc.imageSrc ? (
                        <div className="relative border border-[#2a2a2a] rounded-xl overflow-hidden bg-black flex flex-col group">
                          <div className="flex items-center justify-between px-4 py-2.5 bg-[#161616] border-b border-[#222222]">
                            <span className="font-sans text-xs font-medium text-zinc-300">
                              {selectedSecDoc.title}
                            </span>
                            <button
                              onClick={() => setIsZoomed(!isZoomed)}
                              className="font-sans text-[11px] text-zinc-400 hover:text-white flex items-center gap-1.5 bg-[#222] px-2.5 py-1 rounded transition-colors"
                            >
                              {isZoomed ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                              {isZoomed ? "Standard View" : "Enlarge View / Zoom"}
                            </button>
                          </div>

                          <div className={`overflow-auto transition-all ${isZoomed ? "max-h-[85vh]" : "max-h-[550px]"}`}>
                            <Image
                              src={selectedSecDoc.imageSrc}
                              alt={selectedSecDoc.title}
                              width={1200}
                              height={1000}
                              className="w-full h-auto object-contain cursor-pointer"
                              onClick={() => setIsZoomed(!isZoomed)}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="py-12 border border-dashed border-[#2a2a2a] rounded-xl flex flex-col items-center justify-center gap-3 bg-[#0d0d0d] text-center p-6">
                          <Clock className="w-8 h-8 text-zinc-600 animate-pulse" />
                          <h4 className="font-sans text-sm font-bold text-zinc-300">
                            High School Scroll &amp; Transcript Photo Coming Soon
                          </h4>
                          <p className="font-sans text-xs text-zinc-500 max-w-md leading-relaxed">
                            Graduation scroll photo will be displayed here once uploaded. Your JAMB UTME (277) and WASSCE GCE distinction slips are ready to view in the tabs above!
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Standard Role Details View (for Ikeja Electric & Holly Garden School) */}
              {(selectedRole.type === "internship" || selectedRole.type === "primary") && (
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
