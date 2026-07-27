"use client";

import { Cpu, Radio, BrainCircuit, CircuitBoard, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Specialty {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

const specialties: Specialty[] = [
  {
    title: "Hardware Design & CAD",
    tagline: "Multilayer PCB | Fusion 360 Enclosures",
    description:
      "Designing high-performance multilayer PCBs in KiCad and modeling rugged hardware enclosures in Fusion 360. I cover everything from schematic capture and impedance matching to enclosure tolerancing, DFM rules, and thermal management.",
    tags: ["KiCad", "Fusion 360", "Altium Designer", "Multilayer Signal Integrity", "Enclosure Tolerances", "DFM"],
    icon: Cpu,
  },
  {
    title: "Power Systems & Diagnostics",
    tagline: "Smart Grid Telemetry | Fault Analysis",
    description:
      "Smart grid telemetry, power meter QA, network diagnostics, and fault analysis. I perform power quality assessments, field testing, and safety compliance checks across electrical infrastructure.",
    tags: ["Power Systems", "Fault Analysis", "Power Quality Assessment", "Network Troubleshooting", "Field Testing", "Safety Compliance"],
    icon: Zap,
  },
  {
    title: "Embedded Code & Microcontrollers",
    tagline: "C/C++ | Low-Latency Firmware | Sensor Interfaces",
    description:
      "Programming low-latency sensor interfaces and hardware drivers (SPI, I2C, UART) for Arduino and ESP32 platforms. I write bare-metal firmware, configure hardware interrupts and timers, and optimise for low-power sleep modes.",
    tags: ["C++", "Python", "Arduino / ESP32", "Bare Metal Firmware", "I2C / SPI / UART", "Soldering & Breadboarding"],
    icon: CircuitBoard,
  },
  {
    title: "Agentic RAG & LLM Engineering",
    tagline: "Predictive Models | Signal Processing | AI Agents",
    description:
      "Building agentic pipelines with Retrieval-Augmented Generation, fine-tuning and prompting large language models, and developing machine-learning predictive models for signal processing and smart-grid stability forecasting.",
    tags: ["Machine Learning", "RAG Pipelines", "LLM Engineering", "Data Analytics (Python)", "Signal Processing", "OpenCV", "Predictive Modeling"],
    icon: BrainCircuit,
  },
  {
    title: "PCB Design & Prototyping",
    tagline: "Schematic Capture | Impedance Matching | DFM",
    description:
      "End-to-end PCB design from schematic capture through to manufactured board. I integrate impedance-matched differential pairs, analogue/digital routing rules, BOM optimisation, and strict Design-For-Manufacture requirements to produce clean, manufacturable layouts.",
    tags: ["Impedance Matched Differential Pairs", "BOM Optimisation & Sourcing", "Multilayer Signal Integrity", "Proteus Simulation", "MATLAB & Simulink"],
    icon: Radio,
  },
  {
    title: "Front End Development",
    tagline: "React / Next.js | TypeScript | UI Engineering",
    description:
      "Building fast, polished, and accessible web interfaces with React and Next.js. I work across the full front-end stack — component architecture, animation with Framer Motion, 3D scenes with Three.js, responsive layouts, and deployment pipelines.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "HTML & CSS"],
    icon: Globe,
  },
];

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

export default function Skills() {
  return (
    <section
      id="skills"
      className="h-full flex flex-col items-center justify-center px-6 py-6 scroll-area"
    >
      <div className="w-full max-w-5xl">
        {/* Section heading */}
        <div className="text-center mb-7">
          <h2 className="font-serif text-4xl font-bold text-white tracking-tight">
            My Skills
          </h2>
          <p className="font-sans text-sm text-zinc-500 mt-2">
            The disciplines I design, build, and think in.
          </p>
        </div>

        {/* Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {specialties.map((item) => {
            const IconComp = item.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={item.title}
                className="bg-[#111111] border border-[#222222] rounded-lg p-5 flex flex-col gap-3 hover:border-[#333333] transition-colors duration-200"
              >
                {/* Icon + Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-[#2a2a2a] rounded bg-[#1a1a1a] shrink-0">
                    <IconComp className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-[10px] text-zinc-500 tracking-widest uppercase leading-none mb-1">
                      {item.tagline}
                    </p>
                    <h3 className="font-sans text-sm font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Skill tag badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[10px] text-zinc-400 px-2 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded hover:text-white hover:border-[#444444] transition-colors duration-150"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
