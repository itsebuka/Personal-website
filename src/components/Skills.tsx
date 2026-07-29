"use client";

import { Cpu, Radio, BrainCircuit, CircuitBoard, Zap, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Specialty {
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

const specialties: Specialty[] = [
  {
    title: "Hardware Design & CAD",
    description:
      "Designing high-performance multilayer PCBs in KiCad and modeling custom hardware enclosures in Fusion 360. I cover everything from schematic capture and component specification to 3D enclosure tolerancing and thermal management.",
    tags: ["KiCad", "Fusion 360", "Schematic Capture", "Multilayer Signal Integrity", "Enclosure Tolerances", "PCB Layout"],
    icon: Cpu,
  },
  {
    title: "Electrical Power Systems",
    description:
      "Comprehensive expertise across Nigeria's electricity value chain, power distribution equipment maintenance, high and low voltage systems, electrical safety codes and compliance, and Geographic Information Systems (GIS using QGIS and Google Earth Pro).",
    tags: [
      "Nigeria Electricity Value Chain",
      "Equipment Maintenance",
      "High & Low Voltage Systems",
      "Electrical Safety & Compliance",
      "GIS (QGIS & Google Earth Pro)",
      "Grid Infrastructure",
    ],
    icon: Zap,
  },
  {
    title: "Embedded Systems",
    badge: "Still Improving",
    description:
      "Developing low-latency sensor interfaces and firmware drivers for STM32, Arduino, and ESP32 platforms. Writing bare-metal C/C++ code, configuring hardware interrupts, timers, and peripheral communications (SPI, I2C, UART).",
    tags: ["STM32", "C / C++", "Arduino / ESP32", "Bare Metal Firmware", "I2C / SPI / UART", "Sensor Interfaces"],
    icon: CircuitBoard,
  },
  {
    title: "Agentic AI Coding",
    description:
      "Leveraging advanced AI coding agents and LLM developer tools to accelerate software engineering, automate complex refactoring, streamline full-stack web architectures, and build robust autonomous agent workflows.",
    tags: ["AI Coding Agents", "Agentic Workflows", "LLM Code Generation", "Prompt Engineering", "Full Stack Automation", "Developer Tooling"],
    icon: BrainCircuit,
  },
  {
    title: "PCB Design & Prototyping",
    description:
      "End-to-end PCB design from schematic capture through to manufactured board. I integrate impedance-matched differential pairs, analogue and digital routing rules, BOM optimization, and Proteus/MATLAB simulations to produce clean hardware layouts.",
    tags: ["Impedance Matched Differential Pairs", "BOM Optimization & Sourcing", "Multilayer Signal Integrity", "Proteus Simulation", "MATLAB & Simulink"],
    icon: Radio,
  },
  {
    title: "Front End Development",
    description:
      "Building fast, polished, and accessible web interfaces with React and Next.js. I work across the full front-end stack including component architecture, animation with Framer Motion, 3D scenes with Three.js, responsive layouts, and deployment pipelines.",
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
      className="min-h-full flex flex-col items-center justify-start sm:justify-center px-4 sm:px-6 py-8 sm:py-10 scroll-area"
    >
      <div className="w-full max-w-5xl">
        {/* Section heading */}
        <div className="text-center mb-6 sm:mb-7">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Skills
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 mt-1.5">
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
                className="bg-[#111111] border border-[#222222] rounded-lg p-4 sm:p-5 flex flex-col gap-3 hover:border-[#333333] transition-colors duration-200"
              >
                {/* Icon + Title Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 border border-[#2a2a2a] rounded bg-[#1a1a1a] shrink-0">
                      <IconComp className="w-5 h-5 text-zinc-300" />
                    </div>
                    <h3 className="font-sans text-sm font-semibold text-white leading-snug truncate">
                      {item.title}
                    </h3>
                  </div>

                  {item.badge && (
                    <span className="font-sans text-[7px] uppercase tracking-wider text-purple-300/80 bg-purple-500/10 border border-purple-500/20 px-1.5 py-[1px] rounded-full flex items-center gap-1 font-normal shrink-0">
                      <span className="w-1 h-1 rounded-full bg-purple-400/80 animate-pulse" />
                      {item.badge}
                    </span>
                  )}
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
                      className="font-sans text-[9px] text-zinc-400 px-2 py-0.5 bg-[#161616] border border-[#262626] rounded hover:text-white hover:border-[#444444] transition-colors duration-150"
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
