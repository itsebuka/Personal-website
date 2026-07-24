"use client";

import { useState, useEffect } from "react";
import { FileText, Download } from "lucide-react";

interface DocAttachment {
  filename: string;
  originalName: string;
  label: string;
  downloadUrl: string;
  uploadedAt: string;
}

const FILE_ICONS: Record<string, string> = {
  pdf: "📄", doc: "📝", docx: "📝", md: "📋", markdown: "📋",
  txt: "📃", png: "🖼️", jpg: "🖼️", jpeg: "🖼️", mp4: "🎬", zip: "📦",
};
const getFileIcon = (filename: string) => {
  const ext = filename.split(".").pop()?.toLowerCase() || "";
  return FILE_ICONS[ext] || "📎";
};

export default function ServiceDocs({ slug }: { slug: string }) {
  const [documents, setDocuments] = useState<DocAttachment[]>([]);
  const [loadingDocs, setLoadingDocs] = useState(true);

  useEffect(() => {
    const loadDocs = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/services/${slug}/documents`);
        if (res.ok) {
          const data = await res.json();
          setDocuments(data);
        }
      } catch {
        // silently fail
      } finally {
        setLoadingDocs(false);
      }
    };
    if (slug) loadDocs();
  }, [slug]);

  return (
    <div className="bg-[#111111] border border-[#222222] rounded-lg p-5">
      <h2 className="font-sans text-[10px] tracking-widest text-zinc-500 uppercase mb-4 flex items-center gap-2">
        <FileText className="w-3.5 h-3.5" />
        Documents &amp; Resources
      </h2>

      {loadingDocs ? (
        <div className="py-8 text-center text-xs font-sans text-zinc-600">Querying resource registry...</div>
      ) : documents.length === 0 ? (
        <div className="py-8 flex flex-col items-center gap-3 border border-dashed border-[#222] rounded-lg text-center text-xs font-sans text-zinc-600">
          No documents attached to this service yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {documents.map((doc) => (
            <a
              key={doc.filename}
              href={`http://localhost:5000${doc.downloadUrl}`}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#0d0d0d] border border-[#222] rounded-lg hover:border-[#444] transition-colors duration-200 group"
            >
              <span className="text-2xl">{getFileIcon(doc.filename)}</span>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-sans text-xs font-semibold text-zinc-300 truncate group-hover:text-white transition-colors">
                  {doc.label}
                </span>
                <span className="font-sans text-[9px] text-zinc-600 mt-0.5 truncate">
                  {doc.originalName}
                </span>
              </div>
              <Download className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 shrink-0 transition-colors" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
