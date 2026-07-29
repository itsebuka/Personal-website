"use client";

import { useState } from "react";
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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import type { StaticProject } from "@/data/projects";

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
                    <span className="absolute top-3 right-3 font-sans text-[7.5px] uppercase tracking-wider bg-purple-500/10 text-purple-300/90 font-normal px-1.5 py-[1px] rounded-full flex items-center gap-1 border border-purple-500/20">
                      <Sparkles className="w-2 h-2 text-purple-400" />
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
