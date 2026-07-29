"use client";

import { Cpu, Radio, CircuitBoard, Globe } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Specialty {
  title: string;
  competence: number;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

const specialties: Specialty[] = [
  {
    title: "Hardware Design & CAD",
    competence: 65,
    description:
      "Modeling custom hardware enclosures and mechanical components in Fusion 360, focusing on 3D enclosure tolerancing, component fitment, and thermal considerations.",
    tags: ["Fusion 360", "3D CAD Modeling", "Enclosure Tolerances", "Component Fitment", "Thermal Considerations"],
    icon: Cpu,
  },
  {
    title: "Embedded Systems",
    competence: 55,
    description:
      "Developing low-latency sensor interfaces and firmware drivers for STM32 and ESP32 microcontrollers. Writing bare-metal C/C++ code, configuring hardware interrupts, timers, and peripheral communications (SPI, I2C, UART).",
    tags: ["STM32", "C / C++", "ESP32", "Bare Metal Firmware", "I2C / SPI / UART", "Sensor Interfaces"],
    icon: CircuitBoard,
  },
  {
    title: "PCB Design & Prototyping",
    competence: 70,
    description:
      "End-to-end PCB design in KiCad from schematic capture to manufacturable board layout, including analogue and digital routing rules, BOM optimization, and hardware component sourcing.",
    tags: ["KiCad", "Schematic Capture", "PCB Layout", "BOM Optimization & Sourcing", "Multilayer Routing"],
    icon: Radio,
  },
  {
    title: "Agentic AI Coding",
    competence: 85,
    description:
      "Building modern web applications using React, Next.js, and TypeScript, supercharged by AI coding agents. I utilize agentic developer workflows to accelerate UI engineering, automate component architecture, and streamline full-stack web builds.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AI Coding Agents", "Agentic Workflows", "Prompt Engineering", "HTML & CSS"],
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
      <div className="w-full max-w-4xl">
        {/* Section Heading & Introductory Essay */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            My Skills
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-normal">
            As an Electrical &amp; Electronics Engineering undergraduate at Pan-Atlantic University, my academic coursework provides a strong foundation in core engineering principles. Beyond the classroom, I have developed practical hands-on technical skills across 3D CAD modeling, embedded firmware development, PCB layout, and agentic AI software engineering.
          </p>
        </div>

        {/* 4-Card 2x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {specialties.map((item) => {
            const IconComp = item.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={item.title}
                className="bg-[#111111] border border-[#222222] rounded-lg p-4 sm:p-5 flex flex-col gap-3.5 hover:border-[#333333] transition-colors duration-200"
              >
                {/* Icon + Title Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-[#2a2a2a] rounded bg-[#1a1a1a] shrink-0">
                    <IconComp className="w-5 h-5 text-zinc-300" />
                  </div>
                  <h3 className="font-sans text-sm font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Thin Competence Progress Bar */}
                <div className="flex flex-col gap-1 mt-0.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-sans text-zinc-500 font-medium">Competence</span>
                    <span className="font-mono text-purple-300 font-semibold">{item.competence}%</span>
                  </div>
                  <div className="w-full h-1 bg-[#1a1a1a] border border-[#262626] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.competence}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-600 to-indigo-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Skill tag badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
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
