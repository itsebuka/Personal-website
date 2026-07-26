"use client";

import { Cpu, Radio, Terminal, Shield } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Hardware Design & CAD",
    description: "Multilayer PCB routing, mechanical CAD layout, and enclosure modeling",
    icon: Cpu,
    skills: [
      "KiCad",
      "Fusion 360",
      "Altium Designer",
      "Multilayer Signal Integrity",
      "Enclosure Tolerances",
      "DFM (Design for Manufacture)",
    ],
  },
  {
    title: "Power Systems & Diagnostics",
    description: "Smart grid telemetry, meter QA, network diagnostics, and fault analysis",
    icon: Radio,
    skills: [
      "Power Systems",
      "Fault Analysis",
      "Power Quality Assessment",
      "Network Troubleshooting",
      "Field Testing",
      "Safety Compliance",
    ],
  },
  {
    title: "Embedded Code & Microcontrollers",
    description: "Low-latency firmware, communication protocols, and hardware integration",
    icon: Terminal,
    skills: [
      "C++",
      "Python",
      "Microcontrollers (Arduino/ESP32)",
      "Bare Metal Firmware",
      "I2C/SPI/UART",
      "Soldering & Breadboarding",
    ],
  },
  {
    title: "ML & Smart Systems",
    description: "Data analytics, machine learning predictive models, and sensor processing",
    icon: Shield,
    skills: [
      "Machine Learning",
      "Data Analytics (Python)",
      "Voltage Stability Prediction",
      "Signal Processing",
      "OpenCV",
      "Predictive Modeling",
    ],
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
      className="h-full flex flex-col items-center justify-center px-6 py-6"
    >
      <div className="w-full max-w-5xl">

        {/* Section heading */}
        <div className="text-center mb-7">
          <h2 className="font-serif text-4xl font-bold text-white tracking-tight">
            My Areas of Specialty
          </h2>
        </div>

        {/* 2×2 Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {skillCategories.map((category) => {
            const IconComp = category.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={category.title}
                className="bg-[#111111] border border-[#222222] rounded-lg p-5 flex flex-col gap-3 hover:border-[#333333] transition-colors duration-200"
              >
                {/* Icon + Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-[#2a2a2a] rounded bg-[#1a1a1a] shrink-0">
                    <IconComp className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-white leading-snug">
                      {category.title}
                    </h3>
                    <p className="font-sans text-[10px] text-zinc-500 mt-0.5 leading-snug">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill tag badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-sans text-[10px] text-zinc-400 px-2 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded hover:text-white hover:border-[#444444] transition-colors duration-150"
                    >
                      {skill}
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
