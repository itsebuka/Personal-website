"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  ExternalLink,
  Github,
  FileText,
  X,
  Video,
  Download,
  BookOpen,
  Layers,
  Cpu,
  Sparkles,
  Box,
  CircuitBoard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import type { StaticProject } from "@/data/projects";

// Dynamic imports — keeps Three.js and Canvas out of SSR bundle
const CadViewer = dynamic(() => import("@/components/CadViewer"), { ssr: false });
const PcbViewer = dynamic(() => import("@/components/PcbViewer"), { ssr: false });

// ── Hardware Archive data ─────────────────────────────────────────────────────
const BASE_CAD = "https://raw.githubusercontent.com/itsebuka/Hardware-design-portfolio/main/";

const STL_MODELS = [
  { name: "Golden Fishtank",      file: "Golden%20Fishtank.stl",         size: "7 KB"   },
  { name: "Shang Tsung's Throne", file: "Shang%20tsungs%20throne.stl",   size: "6.3 MB" },
];

const F3D_MODELS = [
  { name: "Ebuka's Coffee Cup",       file: "Ebuka's%20Coffee%20cup.f3d",                   size: "278 KB" },
  { name: "Gear Fidget Spinner",      file: "Gear%20fidget%20spinner%20thingy.f3d",         size: "667 KB" },
  { name: "Glass Soda Bottle",        file: "Glass%20Soda%20Bottle.f3d",                    size: "471 KB" },
  { name: "Laptop Stand Concept",     file: "Laptop%20stand%20concept.f3d",                 size: "190 KB" },
  { name: "Bridge Structure",         file: "Nice%20looking%20bridge%20thing.f3d",          size: "148 KB" },
  { name: "Paper Clip (Sweep)",       file: "Paper%20clip%20(sweep%20command).f3d",         size: "120 KB" },
  { name: "Practice Problem 1",       file: "Practice%20problem%201%20(Solid%20works).f3d", size: "96 KB"  },
  { name: "Practice Problem 2",       file: "Practice%20problem%202%20(Solid%20works).f3d", size: "117 KB" },
  { name: "Practice Problem 3",       file: "Practice%20problem%203%20(Solid%20works).f3d", size: "86 KB"  },
  { name: "Practice Problem 4",       file: "Practice%20problem%204%20(Solidworks).f3d",   size: "105 KB" },
  { name: "Save My Soul",             file: "Save%20my%20soul.f3d",                         size: "289 KB" },
  { name: "Toy Blocks",               file: "Toy%20blocks.f3d",                             size: "370 KB" },
  { name: "Weird Bridge",             file: "Weird%20lookingbridge%20thingy.f3d",           size: "148 KB" },
  { name: "Exhibit #31",              file: "exhibit%20%2331.f3d",                          size: "92 KB"  },
  { name: "Some Random Stuff",        file: "some%20random%20stuff.f3d",                   size: "146 KB" },
  { name: "Viking",                   file: "viking.f3d",                                   size: "305 KB" },
  { name: "Weird Thingie",            file: "weird%20thingie.f3d",                          size: "135 KB" },
  { name: "Wooden Hinge",             file: "wooden%20hinge%20thing.f3d",                   size: "171 KB" },
  { name: "dfhjklzxv",                file: "dfhjklzxv.f3d",                                size: "286 KB" },
];

// ── PCB Design Core data ──────────────────────────────────────────────────────
const BASE_PCB = "https://raw.githubusercontent.com/itsebuka/PCB-Design-Core/main/";

const PCB_BOARDS = [
  {
    name: "LiPo Battery Charger PCB",
    url:  BASE_PCB + "LiPo%20Battery%20Charger%20PCB/LiPo%20Battery%20Charger%20PCB.kicad_pcb",
    desc: "Single-cell LiPo charger with TP4056 IC, USB-C input, LED indicators, and protection circuitry.",
  },
  {
    name: "Magnitude Comparator PCB",
    url:  BASE_PCB + "Magnitude%20Comparator/Magnitude%20Comparator.kicad_pcb",
    desc: "4-bit magnitude comparator logic board using 74HC85 ICs with THT layout.",
  },
  {
    name: "LM555 Test Board",
    url:  BASE_PCB + "LM555%20TESTBOARD/LM555%20TESTBOARD.kicad_pcb",
    desc: "Astable and monostable timer circuit on a compact test board for signal generation.",
  },
];

const FILE_ICON: Record<string, string> = {
  pdf: "📄",
  doc: "📝",
  docx: "📝",
  txt: "📃",
  image: "🖼️",
  zip: "📦",
  other: "📎",
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<StaticProject | null>(null);

  return (
    <section
      id="projects"
      className="min-h-full flex flex-col items-center justify-start sm:justify-center px-4 sm:px-6 py-8 sm:py-10 scroll-area"
    >
      <div className="w-full max-w-6xl">
        {/* Section heading */}
        <div className="text-center mb-6 sm:mb-7">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projects Completed
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 mt-1.5">
            Click any project card to view hardware videos, code repositories, design schematics &amp; documents.
          </p>
        </div>

        {/* 2-column card grid for 4 projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-4.5"
        >
          {projects.map((project: StaticProject, index: number) => {
            const IconComp = project.icon;
            const techList = project.tech || [];
            const repoLink = project.links.find((l) => l.kind === "github")?.url || "";

            return (
              <motion.div
                variants={itemVariants}
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden flex flex-col cursor-pointer hover:border-[#444444] transition-all duration-200 group hover:bg-[#141414]"
              >
                {/* Card visual header */}
                <div className="h-24 bg-[#0d0d0d] border-b border-[#1e1e1e] flex items-center justify-center relative">
                  <IconComp className="w-10 h-10 text-zinc-700 group-hover:text-zinc-400 transition-colors duration-200" />

                  {/* SYS_ID */}
                  <span className="absolute top-3 left-3 font-sans text-[9px] text-zinc-600">
                    SYS_ID: {project.id ? project.id.substring(0, 5).toUpperCase() : `00${index + 1}`}
                  </span>

                  {/* Badges */}
                  {project.badge && (
                    <span className="absolute top-3 right-3 font-sans text-[9px] uppercase tracking-wider bg-purple-500/10 text-purple-300/90 font-normal px-1.5 py-0.5 rounded-full flex items-center gap-1 border border-purple-500/20 transform scale-75 origin-top-right">
                      <Sparkles className="w-2.5 h-2.5 text-purple-400" />
                      {project.badge}
                    </span>
                  )}
                  {project.videos && project.videos.length > 0 && (
                    <span className="absolute top-3 right-3 font-sans text-[9px] bg-white/10 text-white px-2 py-0.5 rounded-full flex items-center gap-1 border border-white/20">
                      <Video className="w-2.5 h-2.5" />
                      {project.videos.length} Videos
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col flex-1 gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[10px] text-zinc-500 tracking-widest uppercase truncate">
                      {project.tagline}
                    </span>
                  </div>

                  <h3 className="font-sans text-sm font-bold text-white group-hover:text-zinc-200 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1 mt-1">
                    {techList.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-sans text-[9px] text-zinc-600 px-1.5 py-0.5 border border-[#222222] rounded bg-[#0d0d0d]"
                      >
                        {t}
                      </span>
                    ))}
                    {techList.length > 4 && (
                      <span className="font-sans text-[9px] text-zinc-600 px-1.5 py-0.5 border border-[#222222] rounded bg-[#0d0d0d]">
                        +{techList.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action links footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#1e1e1e] mt-auto">
                    <span className="flex items-center gap-1.5 font-sans text-xs text-zinc-400 group-hover:text-white transition-colors">
                      {project.videos && project.videos.length > 0 ? (
                        <>
                          <Video className="w-3.5 h-3.5" />
                          View Video Archive ({project.videos.length})
                        </>
                      ) : project.badge ? (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                          View Architecture &amp; RAG Specs
                        </>
                      ) : (
                        <>
                          <Github className="w-3.5 h-3.5" />
                          View Project Details &amp; Repo
                        </>
                      )}
                    </span>
                    <span className="font-sans text-[10px] text-zinc-600 group-hover:text-zinc-300 transition-colors">
                      Open &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-[#111111] border border-[#333333] rounded-xl w-full max-w-5xl lg:max-w-6xl p-5 sm:p-6 relative flex flex-col gap-6 shadow-2xl my-auto max-h-[90vh] overflow-y-auto scroll-area"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white p-1.5 rounded-lg transition-colors z-20 bg-[#1a1a1a] border border-[#2a2a2a]"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#222222] pb-4 pr-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 p-2 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    {selectedProject.icon && <selectedProject.icon className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-widest block">
                        {selectedProject.tagline}
                      </span>
                      {selectedProject.badge && (
                        <span className="font-sans text-[7.5px] uppercase tracking-wider bg-purple-500/10 text-purple-300/90 font-normal px-1.5 py-[1px] rounded-full border border-purple-500/20">
                          {selectedProject.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-sans text-lg sm:text-2xl font-bold text-white leading-snug">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* External / GitHub links */}
                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div className="flex items-center gap-2">
                    {selectedProject.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black font-sans font-semibold text-xs py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow"
                      >
                        <Github className="w-4 h-4" />
                        {link.label}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Video Gallery Section (For Robotic Arm) */}
              {selectedProject.videos && selectedProject.videos.length > 0 && (
                <div className="flex flex-col gap-4 bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-5">
                  <div className="flex items-center justify-between border-b border-[#222222] pb-3">
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-white" />
                      <h4 className="font-sans text-sm font-bold text-white">
                        SIWES Hardware Video Archive &amp; Build Demonstrations ({selectedProject.videos.length})
                      </h4>
                    </div>
                    <span className="font-sans text-[10px] text-zinc-500">
                      HTML5 Video Player
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.videos.map((vid) => (
                      <div
                        key={vid.filename}
                        className="bg-[#0d0d0d] border border-[#262626] rounded-lg overflow-hidden flex flex-col group hover:border-[#444444] transition-colors"
                      >
                        <div className="relative aspect-video bg-black flex items-center justify-center">
                          <video
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                            src={`/files/${selectedProject.id}/${vid.filename}`}
                          >
                            Your browser does not support HTML5 video playback.
                          </video>
                        </div>
                        <div className="p-3.5 flex flex-col gap-1">
                          <h5 className="font-sans text-xs font-bold text-white leading-snug">
                            {vid.title}
                          </h5>
                          {vid.description && (
                            <p className="font-sans text-[11px] text-zinc-400 leading-relaxed">
                              {vid.description}
                            </p>
                          )}
                          <span className="font-sans text-[9px] text-zinc-600 truncate mt-1">
                            {vid.filename}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Interactive 3D CAD Viewer (Hardware Archive) ── */}
              {selectedProject.id === "hardware-archive" && (
                <div className="flex flex-col gap-5 bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-5">
                  {/* Section header */}
                  <div className="flex items-center gap-2 border-b border-[#222222] pb-3">
                    <Box className="w-4 h-4 text-white" />
                    <h4 className="font-sans text-sm font-bold text-white">
                      Interactive 3D Model Viewer
                    </h4>
                    <span className="ml-auto font-sans text-[9px] text-zinc-500 uppercase tracking-wider">
                      Three.js · WebGL
                    </span>
                  </div>

                  {/* STL viewers */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {STL_MODELS.map((m) => (
                      <div key={m.name} className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-xs font-semibold text-white">{m.name}</span>
                          <span className="font-sans text-[9px] text-zinc-500 bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#2a2a2a]">.stl · {m.size}</span>
                        </div>
                        <CadViewer
                          url={BASE_CAD + m.file}
                          name={m.name}
                          height={280}
                        />
                      </div>
                    ))}
                  </div>

                  {/* F3D catalog */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-xs font-bold text-zinc-300">Fusion 360 Design Catalog</span>
                      <span className="font-sans text-[9px] text-zinc-600 bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#2a2a2a]">
                        {F3D_MODELS.length} models · .f3d format
                      </span>
                    </div>
                    <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
                      These designs are in Autodesk Fusion 360 native format (.f3d) which requires Fusion 360 to open.
                      Click any card to download or open in Fusion 360 directly.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {F3D_MODELS.map((m) => (
                        <a
                          key={m.name}
                          href={BASE_CAD + m.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col gap-1 p-3 bg-[#0d0d0d] border border-[#222222] rounded-lg hover:border-[#444444] hover:bg-[#141414] transition-all group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-sans text-[9px] font-bold text-orange-400/80 uppercase tracking-wider">Fusion 360</span>
                            <Download className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors" />
                          </div>
                          <span className="font-sans text-[11px] font-semibold text-white leading-snug group-hover:text-zinc-200 transition-colors">{m.name}</span>
                          <span className="font-sans text-[9px] text-zinc-600">{m.size}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Interactive PCB Layer Viewer (PCB Design Core) ── */}
              {selectedProject.id === "pcb-design-core" && (
                <div className="flex flex-col gap-5 bg-[#0d1a2e] border border-[#1e3a6a] rounded-xl p-4 sm:p-5">
                  {/* Section header */}
                  <div className="flex items-center gap-2 border-b border-[#1e3a6a] pb-3">
                    <CircuitBoard className="w-4 h-4 text-blue-300" />
                    <h4 className="font-sans text-sm font-bold text-white">
                      Interactive PCB Layer Viewer
                    </h4>
                    <span className="ml-auto font-sans text-[9px] text-blue-300/60 uppercase tracking-wider">
                      KiCad · Canvas2D
                    </span>
                  </div>

                  <p className="font-sans text-[11px] text-zinc-400 leading-relaxed -mt-2">
                    Live render of your actual KiCad PCB files fetched directly from GitHub.
                    Toggle layers to inspect F.Cu, B.Cu, silkscreen, board edges, and component pads.
                  </p>

                  <div className="flex flex-col gap-6">
                    {PCB_BOARDS.map((board) => (
                      <div key={board.name} className="flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="font-sans text-xs font-bold text-white block">{board.name}</span>
                            <span className="font-sans text-[11px] text-zinc-400 leading-relaxed">{board.desc}</span>
                          </div>
                          <a
                            href={board.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 font-sans text-[9px] text-zinc-500 hover:text-white underline transition-colors"
                          >
                            Raw file
                          </a>
                        </div>
                        <PcbViewer
                          pcbUrl={board.url}
                          boardName={board.name}
                          height={300}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Description & Summary */}
              <div className="flex flex-col gap-3 bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-2 border-b border-[#222222] pb-2.5">
                  <BookOpen className="w-4 h-4 text-white" />
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Project Overview &amp; Technical Summary
                  </h4>
                </div>
                <div className="flex flex-col gap-3">
                  {selectedProject.summary.map((para, i) => (
                    <p key={i} className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed border-l-2 border-[#333] pl-3.5">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Technology Stack Badges */}
              <div className="flex flex-col gap-2.5">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Technologies &amp; Tools Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="font-sans text-xs text-zinc-300 px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Files & Download Attachments (If any) */}
              {selectedProject.files && selectedProject.files.length > 0 && (
                <div className="flex flex-col gap-3 pt-4 border-t border-[#222222]">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-zinc-400" />
                    Download Project Files &amp; Documentation
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.files.map((file) => (
                      <a
                        key={file.filename}
                        href={`/files/${selectedProject.id}/${file.filename}`}
                        download
                        className="flex items-center gap-3 p-3.5 bg-[#161616] border border-[#262626] rounded-xl hover:border-[#444] transition-colors group"
                      >
                        <span className="text-xl">{FILE_ICON[file.type] ?? "📎"}</span>
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="font-sans text-xs font-semibold text-white truncate group-hover:text-zinc-200 transition-colors">
                            {file.label}
                          </span>
                          <span className="font-sans text-[10px] text-zinc-500 truncate">
                            {file.filename}
                          </span>
                        </div>
                        <Download className="w-4 h-4 text-zinc-500 group-hover:text-white shrink-0 transition-colors" />
                      </a>
                    ))}
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
