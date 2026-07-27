"use client";

import { useRouter } from "next/navigation";
import { ExternalLink, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { StaticProject } from "@/data/projects";

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
  const router = useRouter();

  return (
    <section
      id="projects"
      className="h-full flex flex-col items-center justify-center px-6 py-6"
    >
      <div className="w-full max-w-6xl">

        {/* Section heading */}
        <div className="text-center mb-7">
          <h2 className="font-serif text-4xl font-bold text-white tracking-tight">
            Projects Completed
          </h2>
        </div>

        {/* 3-column card grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project: StaticProject, index: number) => {
            const IconComp = project.icon;
            const techList = project.tech || [];
            const repoLink = project.links.find((l) => l.kind === "github")?.url || "";
            const isSpecificRepo = repoLink && repoLink !== "https://github.com/itsebuka";

            const handleCardClick = () => {
              if (isSpecificRepo) {
                window.open(repoLink, "_blank", "noopener,noreferrer");
              } else {
                router.push(`/projects/${project.id}`);
              }
            };

            return (
              <motion.div
                variants={itemVariants}
                key={project.title}
                onClick={handleCardClick}
                className="bg-[#111111] border border-[#222222] rounded-lg overflow-hidden flex flex-col cursor-pointer hover:border-[#444444] transition-colors duration-200 group"
              >
                {/* Card visual header */}
                <div className="h-24 bg-[#0d0d0d] border-b border-[#1e1e1e] flex items-center justify-center relative">
                  <IconComp className="w-10 h-10 text-zinc-700 group-hover:text-zinc-500 transition-colors duration-200" />

                  {/* SYS_ID — plain white/gray, no glow */}
                  <span className="absolute top-3 left-3 font-sans text-[9px] text-zinc-600">
                    SYS_ID: {project.id ? project.id.substring(0, 5).toUpperCase() : `00${index + 1}`}
                  </span>
                  <span className="absolute bottom-2 right-3 font-sans text-[9px] text-zinc-700">
                    BITRATE: 12.4kbps
                  </span>
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col flex-1 gap-2">
                  <span className="font-sans text-[10px] text-zinc-500 tracking-widest uppercase">
                    {project.tagline}
                  </span>
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
                  </div>

                  {/* Action links footer */}
                  <div className="flex items-center gap-3 pt-3 border-t border-[#1e1e1e] mt-auto">
                    {isSpecificRepo ? (
                      <span className="flex items-center gap-1.5 font-sans text-xs text-zinc-400 group-hover:text-white transition-colors">
                        <Github className="w-3.5 h-3.5" />
                        GitHub Repository
                        <ExternalLink className="w-3 h-3 text-zinc-600" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 font-sans text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        <FileText className="w-3.5 h-3.5" />
                        View Project Details
                      </span>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/projects/${project.id}`);
                      }}
                      className="flex items-center gap-1.5 font-sans text-xs text-zinc-500 hover:text-white transition-colors ml-auto"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
