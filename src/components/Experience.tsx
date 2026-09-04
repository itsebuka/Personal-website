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
  Camera,
  ImageIcon,
  Play,
  Video,
  ChevronDown,
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
    id: "role-vireon",
    period: "2026 – PRESENT",
    company: "Vireon Technologies",
    title: "PCB Designer & Associate CAD & Hardware Engineer",
    logo: "/images/logos/vireon.png",
    type: "internship",
    bullets: [
      "Designing and laying out multi-layer PCBs for embedded and power electronics applications using KiCad",
      "Creating and iterating on mechanical and electronic enclosure designs using Autodesk Fusion 360",
      "Collaborating with the hardware team on component selection, design reviews, and prototype bring-up",
      "Producing manufacturing-ready Gerber files, BOMs, and assembly documentation for fabrication handoff",
    ],
    skillsApplied: [
      "PCB Design",
      "KiCad",
      "Autodesk Fusion 360",
      "CAD Modelling",
      "Hardware Engineering",
      "Schematic Capture",
      "Component Selection",
      "Gerber Export",
      "Prototype Testing",
      "Design for Manufacture",
    ],
    active: true,
  },
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

const siwesVideos = [
  {
    title: "Injection Substation Visit",
    category: "Substation Infrastructure",
    duration: "0:45",
    src: "/videos/siwes/injection-substation-visit.mp4",
  },
  {
    title: "Transformer Yard Inspection (Part 1)",
    category: "Field Inspection",
    duration: "0:29",
    src: "/videos/siwes/site-inspection-1.mp4",
  },
  {
    title: "Yard Walkthrough & Assessment (Part 2)",
    category: "Field Inspection",
    duration: "0:09",
    src: "/videos/siwes/site-inspection-2.mp4",
  },
  {
    title: "Pole Geotagging Field Trip (Part 1)",
    category: "Distribution GIS & Asset Mapping",
    duration: "0:35",
    src: "/videos/siwes/pole-geotagging-1.mp4",
  },
  {
    title: "Pole Geotagging Field Trip (Part 2)",
    category: "Distribution GIS & Asset Mapping",
    duration: "0:28",
    src: "/videos/siwes/pole-geotagging-2.mp4",
  },
  {
    title: "Pole Geotagging Note (Part 3)",
    category: "Distribution GIS & Asset Mapping",
    duration: "0:04",
    src: "/videos/siwes/pole-geotagging-3.mp4",
  },
  {
    title: "ISS Substation Tour (Part 1)",
    category: "High-Voltage Apparatus",
    duration: "0:13",
    src: "/videos/siwes/iss-visit-1.mp4",
  },
  {
    title: "ISS Substation Tour (Part 2)",
    category: "High-Voltage Apparatus",
    duration: "0:15",
    src: "/videos/siwes/iss-visit-2.mp4",
  },
  {
    title: "Underground Cable Vandalism Response",
    category: "Emergency Maintenance",
    duration: "0:21",
    src: "/videos/siwes/responding-to-underground-cable-vandalism.mp4",
  },
  {
    title: "Straight-Through Cable Jointing (Prep)",
    category: "Underground Cable Jointing",
    duration: "1:59",
    src: "/videos/siwes/straight-through-cable-jointing-1.mp4",
  },
  {
    title: "Straight-Through Cable Jointing (Splice)",
    category: "Underground Cable Jointing",
    duration: "1:54",
    src: "/videos/siwes/straight-through-cable-jointing-2.mp4",
  },
  {
    title: "Straight-Through Cable Jointing (Insulation)",
    category: "Underground Cable Jointing",
    duration: "1:41",
    src: "/videos/siwes/straight-through-cable-jointing-3.mp4",
  },
  {
    title: "Straight-Through Cable Jointing (Heat Shrink)",
    category: "Underground Cable Jointing",
    duration: "3:46",
    src: "/videos/siwes/straight-through-cable-jointing-4.mp4",
  },
  {
    title: "Thumper 33kV Cable Fault Testing",
    category: "High-Voltage Diagnostics",
    duration: "1:07",
    src: "/videos/siwes/thumper-33kv-cable-testing.mp4",
  },
  {
    title: "TCP Fault Response & Restoration (Part 1)",
    category: "Grid Fault Restoration",
    duration: "0:14",
    src: "/videos/siwes/tcp-fault-response-1.mp4",
  },
  {
    title: "TCP Fault Response & Restoration (Part 2)",
    category: "Grid Fault Restoration",
    duration: "0:45",
    src: "/videos/siwes/tcp-fault-response-2.mp4",
  },
  {
    title: "Maryland TCN 132kV/33kV Substation",
    category: "Transmission & Substation",
    duration: "0:17",
    src: "/videos/siwes/maryland-tcn-132-to-33kv-substation.mp4",
  },
  {
    title: "Hiab Crane Offloading Switchgear Panels",
    category: "Equipment Logistics & Delivery",
    duration: "0:37",
    src: "/videos/siwes/hiab-offloading-switchgear-panels.mp4",
  },
  {
    title: "Transformer Core & Winding Technical Briefing",
    category: "Transformer Engineering",
    duration: "2:05",
    src: "/videos/siwes/transformer-configuration-briefing.mp4",
  },
];

export default function Experience() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [activeSemIndex, setActiveSemIndex] = useState<number>(0);
  const [activeSecDocIndex, setActiveSecDocIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isVideoDropdownOpen, setIsVideoDropdownOpen] = useState<boolean>(false);

  const selectedReport = selectedRole?.reports?.[activeSemIndex];
  const selectedSecDoc = selectedRole?.secondaryDocs?.[activeSecDocIndex];

  return (
    <section
      id="experience"
      className="min-h-full flex flex-col items-center justify-start sm:justify-center px-3 sm:px-4 py-5 sm:py-7 scroll-area"
    >
      <div className="w-full max-w-[1600px]">
        {/* Section heading */}
        <div className="text-center mb-5">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            My Professional Timeline
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-500 mt-2">
            Click any tile to view full academic records, documents &amp; experience details.
          </p>
        </div>

        {/* Responsive Grid — 1 col mobile → 2 col tablet → 5 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {professionalLog.map((role) => (
            <div
              key={role.id}
              onClick={() => {
                setSelectedRole(role);
                setActiveSemIndex(0);
                setActiveSecDocIndex(0);
                setIsZoomed(false);
              }}
              className="bg-[#111111] border border-[#222222] rounded-lg p-3.5 flex flex-col gap-2.5 hover:border-[#444444] transition-all duration-200 cursor-pointer group hover:bg-[#141414]"
            >
              {/* Period badge + active indicator */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] text-zinc-500 tracking-widest uppercase">
                  {role.period}
                </span>
                {role.active && (
                  <span className="flex items-center gap-1 font-sans text-[9px] uppercase tracking-wider text-purple-300/90 bg-purple-500/10 border border-purple-500/20 px-1.5 py-0.5 rounded-full font-normal transform scale-75 origin-right">
                    <span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
                    Active
                  </span>
                )}
              </div>

              {/* Logo + Title & Company */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 p-1 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:border-[#555]">
                  <Image
                    src={role.logo}
                    alt={`${role.company} Logo`}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-sans text-[11px] font-bold text-white leading-snug group-hover:text-zinc-200 transition-colors">
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

              {/* Bullet points — limit to 2 on desktop to keep cards short */}
              <ul className="flex flex-col gap-1.5">
                {role.bullets.slice(0, 2).map((bullet, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckSquare className="w-3 h-3 text-zinc-600 mt-0.5 shrink-0" />
                    <span className="font-sans text-[10px] text-zinc-400 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer CTA */}
              <div className="flex items-center justify-between pt-2.5 border-t border-[#1e1e1e] mt-auto">
                <span className="font-sans text-[9px] text-zinc-500 group-hover:text-white transition-colors flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  {role.type === "university" || role.type === "secondary"
                    ? "View Academic Results"
                    : "View Experience Details"}
                </span>
                <span className="font-sans text-[9px] text-zinc-600 group-hover:text-zinc-300 transition-colors">
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
                  : selectedRole.id === "role-ikeja"
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
                      <span className="font-sans text-[7.5px] uppercase tracking-wider bg-purple-500/10 text-purple-300/90 border border-purple-500/20 px-1.5 py-[1px] rounded-full font-normal">
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

                  {/* ── SIWES Field Journal Gallery (Ikeja Electric only) ── */}
                  {selectedRole.id === "role-ikeja" && (
                    <div className="flex flex-col gap-6 border-t border-[#222] pt-5">

                      {/* Gallery header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Camera className="w-4 h-4 text-zinc-400" />
                          <h4 className="font-sans text-sm font-bold text-white">SIWES Field Journal</h4>
                          <span className="font-sans text-[10px] uppercase tracking-wider text-zinc-500 bg-[#1a1a1a] border border-[#2a2a2a] px-2 py-0.5 rounded-full">
                            Ikeja Electric · 2026
                          </span>
                        </div>
                        <span className="font-sans text-[11px] text-zinc-600 italic">Photos &amp; videos from the field</span>
                      </div>

                      {/* ── Photo slots ── */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ImageIcon className="w-3.5 h-3.5 text-zinc-500" />
                            <span className="font-sans text-xs font-semibold text-zinc-400 uppercase tracking-wider">Photos</span>
                            <span className="font-sans text-[10px] text-zinc-500 bg-[#1a1a1a] border border-[#2a2a2a] px-2 py-0.5 rounded-full">
                              22 Photos
                            </span>
                          </div>
                          <span className="font-sans text-[11px] text-zinc-500 italic hidden sm:inline">
                            High-voltage switchgear, protection relays &amp; transformer overhauls
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[
                            { slot: 1, src: "/images/siwes/siwes-01.png", title: "Power Transformer Substation Bay" },
                            { slot: 2, src: "/images/siwes/siwes-02.jpg", title: "Transformer Radiator & Conservator" },
                            { slot: 3, src: "/images/siwes/siwes-03.jpg", title: "HV Bushings & Surge Arresters" },
                            { slot: 4, src: "/images/siwes/siwes-04.jpg", title: "Switchyard Gravel Bed & Bunding" },
                            { slot: 5, src: "/images/siwes/siwes-05.png", title: "Transmission Line & Gantry Tower" },
                            { slot: 6, src: "/images/siwes/siwes-06.png", title: "Market Feeder ABB Switchgear Panel" },
                            { slot: 7, src: "/images/siwes/siwes-07.jpg", title: "Control Cabinet Cable Trench & Rack" },
                            { slot: 8, src: "/images/siwes/siwes-08.jpg", title: "Protection Relay & DIN Rail Assembly" },
                            { slot: 9, src: "/images/siwes/siwes-09.jpg", title: "CDR 100 Capacitor Discharge Device" },
                            { slot: 10, src: "/images/siwes/siwes-10.png", title: "Auxiliary DC Power & Wiring Harness" },
                            { slot: 11, src: "/images/siwes/siwes-11.jpg", title: "Medium Voltage Cable Inspection" },
                            { slot: 12, src: "/images/siwes/siwes-12.jpg", title: "Distribution Cable Quality Verification" },
                            { slot: 13, src: "/images/siwes/siwes-13.png", title: "Control Cabinet Rewiring & Termination" },
                            { slot: 14, src: "/images/siwes/siwes-14.png", title: "Precision Cable Stripping & Relay Wiring" },
                            { slot: 15, src: "/images/siwes/siwes-15.png", title: "ABB Protection Relay Testing & Sylvia Feeder" },
                            { slot: 16, src: "/images/siwes/siwes-16.jpg", title: "Substation Switchyard Breakers & Busbar Bay" },
                            { slot: 17, src: "/images/siwes/siwes-17.png", title: "Gantry Lattice Tower & 132kV Overhead Lines" },
                            { slot: 18, src: "/images/siwes/siwes-18.jpg", title: "Transformer Core & Windings Workshop Overhaul" },
                            { slot: 19, src: "/images/siwes/siwes-19.jpg", title: "Transformer Coils & Oil Radiator Tank Inspection" },
                            { slot: 20, src: "/images/siwes/siwes-20.png", title: "Control Room Buscoupler Panel & Digital Meters" },
                            { slot: 21, src: "/images/siwes/siwes-21.png", title: "Control Room 11kV/33kV Feeder Switchgear Lineup" },
                            { slot: 22, src: "/images/siwes/siwes-22.png", title: "Outdoor Pre-Commissioning Switchgear Assembly" },
                          ].map(({ slot, src, title }) => (
                            <div
                              key={slot}
                              className="aspect-square rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#0d0d0d] relative group hover:border-[#3a3a3a] transition-all"
                            >
                              <Image
                                src={src}
                                alt={title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="font-sans text-[10px] text-zinc-200 line-clamp-1">
                                  {title}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* ── Video Dropdown Menu Section ── */}
                      <div className="flex flex-col rounded-xl border border-[#2a2a2a] bg-[#101010] overflow-hidden transition-all">
                        <button
                          type="button"
                          onClick={() => setIsVideoDropdownOpen((prev) => !prev)}
                          className="flex items-center justify-between p-3.5 bg-[#141414] hover:bg-[#181818] transition-colors text-left group cursor-pointer w-full"
                          aria-expanded={isVideoDropdownOpen}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-[#1e1e1e] border border-[#2e2e2e] flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                              <Video className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-sans text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                                  SIWES Field Videos
                                </span>
                                <span className="font-sans text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2 py-0.5 rounded-full font-medium">
                                  19 Videos
                                </span>
                              </div>
                              <p className="font-sans text-[11px] text-zinc-500">
                                {isVideoDropdownOpen ? "Click to collapse video recordings" : "Click to expand field video recordings"}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-sans text-[10px] text-zinc-600 hidden sm:inline">
                              {isVideoDropdownOpen ? "Hide Videos" : "Show Videos"}
                            </span>
                            <div className="w-6 h-6 rounded-full bg-[#1e1e1e] border border-[#2e2e2e] flex items-center justify-center text-zinc-400">
                              <ChevronDown
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                  isVideoDropdownOpen ? "rotate-180 text-emerald-400" : ""
                                }`}
                              />
                            </div>
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isVideoDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden border-t border-[#222]"
                            >
                              <div className="p-4 flex flex-col gap-3 bg-[#0d0d0d]">
                                <div className="flex items-center justify-between">
                                  <span className="font-sans text-[11px] text-zinc-500 italic">
                                    Substation visits, transformer yard inspections &amp; GIS geotagging
                                  </span>
                                  <span className="font-sans text-[10px] text-emerald-400 font-mono">
                                    19 Recordings Ready
                                  </span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {siwesVideos.map((video, idx) => (
                                    <div
                                      key={idx}
                                      className="flex flex-col gap-2 bg-[#121212] border border-[#242424] rounded-xl p-2.5 overflow-hidden group hover:border-[#383838] transition-all"
                                    >
                                      <div className="aspect-video rounded-lg overflow-hidden border border-[#2a2a2a] bg-black relative flex items-center justify-center">
                                        <video
                                          src={video.src}
                                          controls
                                          playsInline
                                          preload="metadata"
                                          className="w-full h-full object-contain"
                                          aria-label={video.title}
                                        />
                                      </div>
                                      <div className="flex items-center justify-between px-0.5 pt-0.5">
                                        <div className="flex flex-col min-w-0 pr-2">
                                          <span className="font-sans text-xs font-semibold text-zinc-200 truncate">
                                            {video.title}
                                          </span>
                                          <span className="font-sans text-[10px] text-zinc-500">
                                            {video.category}
                                          </span>
                                        </div>
                                        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-1.5 py-0.5 rounded shrink-0">
                                          {video.duration}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
