"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// ── Layer Configuration ────────────────────────────────────────────────────────
interface LayerDef {
  name: string;
  aliases: string[];
  color: string;
  label: string;
}

const LAYER_DEFS: LayerDef[] = [
  { name: "Edge.Cuts", aliases: ["Edge.Cuts", "B.Courtyard"], color: "#FFFF00", label: "Board Edge" },
  { name: "F.Cu",      aliases: ["F.Cu", "F.copper"],          color: "#CC3333", label: "Front Cu"  },
  { name: "B.Cu",      aliases: ["B.Cu", "B.copper"],          color: "#3355CC", label: "Back Cu"   },
  { name: "F.SilkS",   aliases: ["F.SilkS", "F.Silkscreen"],  color: "#00CCCC", label: "F.Silk"    },
  { name: "B.SilkS",   aliases: ["B.SilkS", "B.Silkscreen"],  color: "#8877FF", label: "B.Silk"    },
];

const ALL_LAYER_NAMES = new Set(LAYER_DEFS.flatMap((l) => l.aliases));

function resolveLayer(raw: string): string {
  for (const def of LAYER_DEFS) {
    if (def.aliases.includes(raw)) return def.name;
  }
  return raw;
}

function layerColor(name: string): string {
  return LAYER_DEFS.find((l) => l.name === name)?.color ?? "#888888";
}

// ── KiCad S-Expression Parser ──────────────────────────────────────────────────
type SVal = string | SVal[];

function tokenize(src: string): string[] {
  const toks: string[] = [];
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    if (c === "(" || c === ")") { toks.push(c); i++; }
    else if (c === '"') {
      let j = i + 1;
      while (j < n && src[j] !== '"') { if (src[j] === "\\") j++; j++; }
      toks.push(src.slice(i + 1, j));
      i = j + 1;
    } else if (/\s/.test(c)) { i++; }
    else {
      let j = i;
      while (j < n && !/[\s()"]/. test(src[j])) j++;
      toks.push(src.slice(i, j));
      i = j;
    }
  }
  return toks;
}

function parseList(toks: string[], start: number): [SVal[], number] {
  const result: SVal[] = [];
  let i = start;
  while (i < toks.length && toks[i] !== ")") {
    if (toks[i] === "(") {
      const [sub, ni] = parseList(toks, i + 1);
      result.push(sub);
      i = ni + 1; // skip ")"
    } else {
      result.push(toks[i++]);
    }
  }
  return [result, i];
}

function parseSExpr(src: string): SVal[] {
  const toks = tokenize(src);
  if (toks.length === 0) return [];
  // find first "("
  let i = toks.findIndex((t) => t === "(");
  if (i === -1) return [];
  const [list, ] = parseList(toks, i + 1);
  return list;
}

// ── KiCad Data Extraction ──────────────────────────────────────────────────────
function kids(node: SVal, tag: string): SVal[][] {
  if (!Array.isArray(node)) return [];
  return (node as SVal[]).filter(
    (c): c is SVal[] => Array.isArray(c) && c[0] === tag
  ) as SVal[][];
}

function deepKids(node: SVal, tag: string): SVal[][] {
  const results: SVal[][] = [];
  if (!Array.isArray(node)) return results;
  for (const c of node as SVal[]) {
    if (Array.isArray(c)) {
      if (c[0] === tag) results.push(c as SVal[]);
      results.push(...deepKids(c, tag));
    }
  }
  return results;
}

function xy(node: SVal[] | undefined): [number, number] {
  if (!node) return [0, 0];
  return [parseFloat(node[1] as string) || 0, parseFloat(node[2] as string) || 0];
}

function num(node: SVal[] | undefined, idx = 1): number {
  if (!node) return 0;
  return parseFloat(node[idx] as string) || 0;
}

function lineWidth(node: SVal[]): number {
  const w = kids(node, "width")[0];
  if (w) return num(w);
  const stroke = kids(node, "stroke")[0];
  if (stroke) { const sw = kids(stroke, "width")[0]; if (sw) return num(sw); }
  return 0.25;
}

function rawLayer(node: SVal[]): string {
  return (kids(node, "layer")[0]?.[1] as string) ?? "";
}

interface Trace { sx: number; sy: number; ex: number; ey: number; w: number; layer: string; }
interface Via   { x: number; y: number; size: number; drill: number; }
interface Pad   { x: number; y: number; sx: number; sy: number; drill: number; shape: string; layers: string[]; }

interface PcbData {
  traces: Trace[];
  vias: Via[];
  pads: Pad[];
}

function extractPcb(root: SVal[]): PcbData {
  const traces: Trace[] = [];
  const vias: Via[] = [];
  const pads: Pad[] = [];

  // Direct segments
  for (const seg of kids(root, "segment")) {
    const layer = resolveLayer(rawLayer(seg));
    traces.push({
      sx: xy(kids(seg, "start")[0])[0],
      sy: xy(kids(seg, "start")[0])[1],
      ex: xy(kids(seg, "end")[0])[0],
      ey: xy(kids(seg, "end")[0])[1],
      w: lineWidth(seg),
      layer,
    });
  }

  // Graphic lines (Edge.Cuts, silkscreen, etc.)
  for (const gl of [...kids(root, "gr_line"), ...deepKids(root, "fp_line")]) {
    const layer = resolveLayer(rawLayer(gl));
    traces.push({
      sx: xy(kids(gl, "start")[0])[0],
      sy: xy(kids(gl, "start")[0])[1],
      ex: xy(kids(gl, "end")[0])[0],
      ey: xy(kids(gl, "end")[0])[1],
      w: lineWidth(gl),
      layer,
    });
  }

  // Vias
  for (const v of kids(root, "via")) {
    const [x, y] = xy(kids(v, "at")[0]);
    vias.push({
      x, y,
      size:  num(kids(v, "size")[0]),
      drill: num(kids(v, "drill")[0]),
    });
  }

  // Footprint pads
  for (const fp of kids(root, "footprint")) {
    const atNode = kids(fp, "at")[0];
    const fpx = num(atNode, 1);
    const fpy = num(atNode, 2);
    const fpRot = (num(atNode, 3)) * (Math.PI / 180);

    for (const pad of kids(fp, "pad")) {
      const padAt = kids(pad, "at")[0];
      const lx = num(padAt, 1);
      const ly = num(padAt, 2);

      // Apply footprint rotation
      const px = fpx + Math.cos(fpRot) * lx - Math.sin(fpRot) * ly;
      const py = fpy + Math.sin(fpRot) * lx + Math.cos(fpRot) * ly;

      const sizeNode = kids(pad, "size")[0];
      const drillNode = kids(pad, "drill")[0];
      const layersNode = kids(pad, "layers")[0];

      const rawLayers: string[] = [];
      if (layersNode) {
        for (let i = 1; i < layersNode.length; i++) {
          const lname = layersNode[i] as string;
          if (lname === "*.Cu")   { rawLayers.push("F.Cu", "B.Cu"); }
          else if (lname === "F.Cu" || lname === "B.Cu") rawLayers.push(lname);
        }
      }
      if (rawLayers.length === 0) rawLayers.push("F.Cu");

      pads.push({
        x: px, y: py,
        sx: num(sizeNode, 1),
        sy: num(sizeNode, 2),
        drill: drillNode ? num(drillNode) : 0,
        shape: (pad[3] as string) || "circle",
        layers: rawLayers,
      });
    }
  }

  return { traces, vias, pads };
}

// ── Canvas Renderer ────────────────────────────────────────────────────────────
function renderPcb(
  canvas: HTMLCanvasElement,
  data: PcbData,
  visible: Set<string>
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const { traces, vias, pads } = data;

  // Collect all points for bounding box
  const allX: number[] = [];
  const allY: number[] = [];
  traces.forEach((t) => { allX.push(t.sx, t.ex); allY.push(t.sy, t.ey); });
  vias.forEach((v)   => { allX.push(v.x);         allY.push(v.y); });
  pads.forEach((p)   => { allX.push(p.x);          allY.push(p.y); });

  if (allX.length === 0) return;

  const minX = Math.min(...allX);
  const maxX = Math.max(...allX);
  const minY = Math.min(...allY);
  const maxY = Math.max(...allY);
  const bw = maxX - minX || 1;
  const bh = maxY - minY || 1;

  const PAD = 28;
  const sx = (canvas.width  - 2 * PAD) / bw;
  const sy = (canvas.height - 2 * PAD) / bh;
  const scale = Math.min(sx, sy);

  const ox = PAD + (canvas.width  - 2 * PAD - bw * scale) / 2;
  const oy = PAD + (canvas.height - 2 * PAD - bh * scale) / 2;

  const tx  = (x: number) => ox + (x - minX) * scale;
  const ty  = (y: number) => oy + (y - minY) * scale;
  const tw  = (w: number) => Math.max(0.5, w * scale);

  // Background
  ctx.fillStyle = "#0a1225";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Board fill
  const edgeTraces = traces.filter(
    (t) => t.layer === "Edge.Cuts" || t.layer === "B.Courtyard"
  );
  if (edgeTraces.length > 0) {
    ctx.fillStyle = "#0d2340";
    ctx.fillRect(tx(minX), ty(minY), bw * scale, bh * scale);
  }

  // Draw in layer order (back → front)
  const layerOrder = ["Edge.Cuts", "B.Cu", "B.SilkS", "F.Cu", "F.SilkS"];

  for (const layerName of layerOrder) {
    if (!visible.has(layerName)) continue;
    const color = layerColor(layerName);

    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (const t of traces.filter((tr) => tr.layer === layerName)) {
      ctx.lineWidth = tw(t.w);
      ctx.beginPath();
      ctx.moveTo(tx(t.sx), ty(t.sy));
      ctx.lineTo(tx(t.ex), ty(t.ey));
      ctx.stroke();
    }
  }

  // Vias
  if (visible.has("F.Cu") || visible.has("B.Cu")) {
    for (const v of vias) {
      const cx = tx(v.x);
      const cy = ty(v.y);
      const r  = Math.max(1.5, tw(v.size  / 2));
      const dr = Math.max(0.5, tw(v.drill / 2));
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = "#888888"; ctx.fill();
      ctx.beginPath(); ctx.arc(cx, cy, dr, 0, Math.PI * 2);
      ctx.fillStyle = "#0a1225"; ctx.fill();
    }
  }

  // Pads
  for (const p of pads) {
    const onFront = p.layers.includes("F.Cu");
    const onBack  = p.layers.includes("B.Cu");
    if (onFront && !visible.has("F.Cu")) continue;
    if (!onFront && onBack && !visible.has("B.Cu")) continue;

    const cx = tx(p.x);
    const cy = ty(p.y);
    const pw = Math.max(1.5, tw(p.sx / 2));
    const ph = Math.max(1.5, tw(p.sy / 2));
    ctx.fillStyle = onFront ? "#CC3333" : "#3355CC";

    if (p.shape === "circle") {
      ctx.beginPath(); ctx.arc(cx, cy, Math.max(pw, ph), 0, Math.PI * 2); ctx.fill();
    } else if (p.shape === "rect") {
      ctx.fillRect(cx - pw, cy - ph, pw * 2, ph * 2);
    } else {
      ctx.beginPath(); ctx.ellipse(cx, cy, pw, ph, 0, 0, Math.PI * 2); ctx.fill();
    }

    if (p.drill > 0) {
      const dr = Math.max(0.5, tw(p.drill / 2));
      ctx.beginPath(); ctx.arc(cx, cy, dr, 0, Math.PI * 2);
      ctx.fillStyle = "#0a1225"; ctx.fill();
    }
  }

  // Board outline on top
  if (visible.has("Edge.Cuts")) {
    ctx.strokeStyle = "#FFFF00";
    ctx.lineWidth = 1.2;
    ctx.setLineDash([4, 3]);
    ctx.strokeRect(tx(minX) - 0.5, ty(minY) - 0.5, bw * scale + 1, bh * scale + 1);
    ctx.setLineDash([]);
  }
}

// ── PcbViewer Component ────────────────────────────────────────────────────────
interface PcbViewerProps {
  /** Raw URL to a .kicad_pcb file (e.g. raw.githubusercontent.com/…) */
  pcbUrl: string;
  boardName: string;
  height?: number;
}

export default function PcbViewer({ pcbUrl, boardName, height = 340 }: PcbViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const dataRef      = useRef<PcbData | null>(null);

  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);
  const [visible, setVisible] = useState<Set<string>>(
    new Set(LAYER_DEFS.map((l) => l.name))
  );

  // Load and parse .kicad_pcb from raw GitHub URL
  useEffect(() => {
    setLoading(true);
    setError(null);
    dataRef.current = null;

    let cancelled = false;
    fetch(pcbUrl)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((text) => {
        if (cancelled) return;
        const root = parseSExpr(text);
        dataRef.current = extractPcb(root);
        setLoading(false);
      })
      .catch((err) => {
        if (!cancelled) {
          console.error("[PcbViewer] Load error:", err);
          setError(err.message ?? "Failed to load PCB file");
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [pcbUrl]);

  // Resize observer → re-render canvas at correct pixel size
  useEffect(() => {
    const container = containerRef.current;
    const canvas    = canvasRef.current;
    if (!container || !canvas) return;

    const ro = new ResizeObserver(() => {
      const dpr = window.devicePixelRatio || 1;
      const W   = container.clientWidth;
      const H   = container.clientHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = W + "px";
      canvas.style.height = H + "px";
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      if (dataRef.current) renderPcb(canvas, dataRef.current, visible);
    });

    ro.observe(container);
    return () => ro.disconnect();
  }, [visible]);

  // Re-render when data finishes loading or layers toggle
  useEffect(() => {
    if (!dataRef.current || !canvasRef.current) return;
    renderPcb(canvasRef.current, dataRef.current, visible);
  }, [visible, loading]);

  function toggle(name: string) {
    setVisible((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Canvas viewport */}
      <div
        ref={containerRef}
        className="relative rounded-xl overflow-hidden bg-[#0a1225] border border-[#1e3a6a]"
        style={{ height }}
      >
        <canvas ref={canvasRef} className="w-full h-full" />

        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a1225] gap-3">
            <div className="w-8 h-8 border-2 border-[#1a3a6a] border-t-[#3366cc] rounded-full animate-spin" />
            <span className="font-sans text-[11px] text-zinc-500">
              Parsing {boardName}…
            </span>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a1225] gap-2 px-6">
            <span className="font-sans text-[11px] text-red-400/80 text-center">{error}</span>
            <a
              href={pcbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] text-zinc-500 hover:text-zinc-300 underline"
            >
              Open raw file
            </a>
          </div>
        )}

        {!loading && !error && (
          <div className="absolute top-2 left-2 pointer-events-none">
            <span className="font-sans text-[9px] text-zinc-500 uppercase tracking-wider bg-black/50 px-2 py-0.5 rounded">
              {boardName}
            </span>
          </div>
        )}
      </div>

      {/* Layer toggles */}
      {!loading && !error && (
        <div className="flex flex-wrap gap-1.5">
          {LAYER_DEFS.map((layer) => {
            const on = visible.has(layer.name);
            return (
              <button
                key={layer.name}
                onClick={() => toggle(layer.name)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10px] font-sans font-medium transition-all ${
                  on
                    ? "border-transparent text-black"
                    : "bg-transparent border-[#2a2a2a] text-zinc-500 hover:text-zinc-300"
                }`}
                style={on ? { backgroundColor: layer.color } : {}}
                title={on ? `Hide ${layer.label}` : `Show ${layer.label}`}
              >
                {on ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                {layer.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
