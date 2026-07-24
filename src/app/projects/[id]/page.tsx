import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  Download,
  BookOpen,
  Layers,
} from "lucide-react";
import { projects } from "@/data/projects";

const FILE_ICON: Record<string, string> = {
  pdf: "📄",
  doc: "📝",
  docx: "📝",
  txt: "📃",
  image: "🖼️",
  zip: "📦",
  other: "📎",
};

const KIND_ICON = {
  github: Github,
  demo: ExternalLink,
  report: FileText,
  external: ExternalLink,
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projects.find((p) => p.id === id);
  const IconComp = project?.icon;

  if (!project || !IconComp) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-6 px-6 text-center">
        <span className="font-serif text-7xl font-bold text-zinc-800">404</span>
        <p className="font-sans text-sm text-zinc-500">Project not found.</p>
        <Link
          href="/projects"
          className="font-sans text-sm text-zinc-400 border border-[#333] px-5 py-2 rounded hover:text-white hover:border-[#555] transition-colors duration-200"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    /* scroll-area allows internal scroll while body stays overflow:hidden */
    <div className="h-full scroll-area">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-sans text-xs text-zinc-500 hover:text-white uppercase tracking-widest transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        <div className="flex flex-col gap-6">

          {/* ── Header card ──────────────────────────────────────── */}
          <div className="bg-[#111111] border border-[#222222] rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 w-16 h-16 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-center">
              <IconComp className="w-8 h-8 text-zinc-400" />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <span className="font-sans text-[10px] tracking-widest text-zinc-500 uppercase border border-[#2a2a2a] px-2.5 py-1 rounded bg-[#1a1a1a] w-fit">
                {project.tagline}
              </span>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-1">
                  {project.links.map((link) => {
                    const LIcon = KIND_ICON[link.kind] ?? ExternalLink;
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded font-sans text-xs border border-[#333333] text-zinc-400 hover:text-white hover:border-[#555555] transition-all duration-200"
                      >
                        <LIcon className="w-4 h-4" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* ── Technology Stack ─────────────────────────────────── */}
          <div className="bg-[#111111] border border-[#222222] rounded-lg p-5">
            <h2 className="font-sans text-[10px] tracking-widest text-zinc-500 uppercase mb-4 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-sans text-xs text-zinc-400 px-3 py-1.5 rounded border border-[#2a2a2a] bg-[#1a1a1a] hover:text-white hover:border-[#444] transition-colors duration-150"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Project Summary ───────────────────────────────────── */}
          <div className="bg-[#111111] border border-[#222222] rounded-lg p-5 md:p-6">
            <h2 className="font-sans text-[10px] tracking-widest text-zinc-500 uppercase mb-5 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              Project Summary
            </h2>
            <div className="flex flex-col gap-4">
              {project.summary.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-sm text-zinc-400 leading-relaxed border-l-2 border-[#2a2a2a] pl-4"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* ── Files & Downloads ─────────────────────────────────── */}
          <div className="bg-[#111111] border border-[#222222] rounded-lg p-5">
            <h2 className="font-sans text-[10px] tracking-widest text-zinc-500 uppercase mb-4 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" />
              Files &amp; Downloads
            </h2>
            {project.files.length === 0 ? (
              <div className="py-8 flex flex-col items-center gap-3 border border-dashed border-[#222] rounded-lg">
                <Download className="w-8 h-8 text-zinc-700" />
                <p className="font-sans text-xs text-zinc-600 text-center leading-relaxed">
                  No files attached yet.
                  <br />
                  Drop files into{" "}
                  <span className="text-zinc-500">public/files/{project.id}/</span>
                  {" "}and list them in{" "}
                  <span className="text-zinc-500">src/data/projects.ts</span>.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.files.map((file) => (
                  <a
                    key={file.filename}
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/files/${project.id}/${file.filename}`}
                    download
                    className="flex items-center gap-4 p-4 bg-[#0d0d0d] border border-[#222] rounded-lg hover:border-[#444] transition-colors duration-200 group"
                  >
                    <span className="text-2xl">{FILE_ICON[file.type] ?? "📎"}</span>
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="font-sans text-xs font-semibold text-zinc-300 truncate group-hover:text-white transition-colors">
                        {file.label}
                      </span>
                      <span className="font-sans text-[9px] text-zinc-600 truncate mt-0.5">
                        {file.filename}
                      </span>
                    </div>
                    <Download className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 shrink-0 transition-colors" />
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
