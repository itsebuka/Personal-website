import Link from "next/link";
import { ArrowLeft, Cpu, Terminal, Cloud, Shield, type LucideIcon } from "lucide-react";
import ServiceDocs from "@/components/ServiceDocs";

interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  slug: string;
}

const services: ServiceData[] = [
  {
    slug: "pcb-design-prototyping",
    title: "PCB Design & Prototyping",
    tagline: "Multilayer Layout | DFM Rules",
    description: "Designing high-performance, multilayer PCBs using KiCad. Integrating impedance matching, analog/digital schematics routing, and strict Design For Manufacture rules.",
    features: ["Impedance Matched Differential Pairs", "BOM Optimization & Sourcing Specs", "Multilayer Signal Integrity Layout"],
    icon: Cpu,
  },
  {
    slug: "embedded-systems-firmware",
    title: "Embedded Systems & Firmware",
    tagline: "C/C++ | Low-Latency Loops",
    description: "Programming low-latency sensor interfaces and hardware drivers (SPI, I2C, UART) for Arduino and ESP32 systems.",
    features: ["Arduino & ESP32 Programming", "Hardware Interrupt & Timer Control", "Low-power Sleep Mode Configurations"],
    icon: Terminal,
  },
  {
    slug: "rf-signals",
    title: "RF & Signals",
    tagline: "Circuit Simulation | Instrument Diagnostics",
    description: "Analyzing electrical signals, simulating circuits via Proteus, and using standard lab instruments like Oscilloscopes and Multimeters.",
    features: ["Proteus Circuit Simulation & Analysis", "Multimeter & Oscilloscope Signal Testing", "MATLAB & Simulink Signal Processing"],
    icon: Cloud,
  },
  {
    slug: "mechanical-cad-3d-integration",
    title: "Mechanical CAD & 3D Integration",
    tagline: "Fusion 360 Enclosures | Tolerances",
    description: "Modeling rugged hardware enclosures in Fusion 360. Performing structural and thermal stress simulations to ensure component protection and optimal air flow vents.",
    features: ["Fusion 360 Enclosure Tolerancing", "Thermal Management Heat Sinks", "3D Printing Prototyping Layouts"],
    icon: Shield,
  },
];

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-6 px-6 text-center">
        <span className="font-serif text-7xl font-bold text-zinc-800">404</span>
        <p className="font-sans text-sm text-zinc-500">Service not found.</p>
        <Link
          href="/services"
          className="font-sans text-sm text-zinc-400 border border-[#333] px-5 py-2 rounded hover:text-white hover:border-[#555] transition-colors duration-200"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  const IconComp = service.icon;

  return (
    <div className="h-full scroll-area">
      <div className="max-w-4xl mx-auto px-6 py-10">
        
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-sans text-xs text-zinc-500 hover:text-white uppercase tracking-widest transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
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
                {service.tagline}
              </span>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

          {/* ── Features ─────────────────────────────────────────── */}
          <div className="bg-[#111111] border border-[#222222] rounded-lg p-5">
            <h2 className="font-sans text-[10px] tracking-widest text-zinc-500 uppercase mb-4">
              Capabilities &amp; Features
            </h2>
            <ul className="flex flex-col gap-3">
              {service.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 font-sans text-sm text-zinc-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Documents ────────────────────────────────────────── */}
          <ServiceDocs slug={service.slug} />

        </div>
      </div>
    </div>
  );
}
