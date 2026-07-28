"use client";

import { Award, Trophy, Music, Globe, Shield, GraduationCap, Brain, CheckCircle2, Medal } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Milestone {
  id: string;
  timeframe: string;
  title: string;
  issuer: string;
  description: string;
  icon: LucideIcon;
}

const achievementsList: Milestone[] = [
  {
    id: "robotics-lead",
    timeframe: "2025",
    title: "Robotics Project Lead",
    issuer: "Pan-Atlantic University",
    description:
      "Led a design team in the mechanical and electrical integration of a 3DOF robotic arm for industrial and educational purposes.",
    icon: Award,
  },
  {
    id: "goal-scorer",
    timeframe: "2021 - 2022",
    title: "Highest Goal Scorer",
    issuer: "Helmbridge Football Club",
    description:
      "Highest goal scorer for two consecutive years. Scored 120+ goals across a short 5-year stay at Helmbridge.",
    icon: Trophy,
  },
  {
    id: "school-pianist",
    timeframe: "2017 - 2023",
    title: "School Pianist (Part Time)",
    issuer: "Maryland Comprehensive",
    description:
      "Served as the part-time school pianist during my time at Maryland Comprehensive Secondary School.",
    icon: Music,
  },
  {
    id: "geography-3rd",
    timeframe: "2023",
    title: "3rd Best in Geography",
    issuer: "Maryland Comprehensive",
    description:
      "Ranked 3rd best student in Geography studies across my entire secondary school.",
    icon: Globe,
  },
  {
    id: "best-goalkeeper",
    timeframe: "2017 - 2023",
    title: "Best Goalkeeper",
    issuer: "Maryland Comprehensive",
    description:
      "Won a total of 9 golden glove awards across 9 terms. Recorded the most cleansheets and most saves ever made in MCSS history.",
    icon: Shield,
  },
  {
    id: "best-graduating",
    timeframe: "2017",
    title: "Best Graduating Student",
    issuer: "Primary School",
    description:
      "Awarded Best Graduating Student in my primary school set.",
    icon: GraduationCap,
  },
  {
    id: "quiz-runnerup",
    timeframe: "2025",
    title: "Quiz Competition Runner-Up",
    issuer: "Pan-Atlantic University",
    description:
      '2nd place runner-up in the "A little about everything" quiz competition held at Pan-Atlantic University.',
    icon: Brain,
  },
  {
    id: "100m-bronze",
    timeframe: "2021",
    title: "100m Race Bronze Medal",
    issuer: "Secondary School",
    description:
      "Won the bronze medal in the 100m sprint during secondary school.",
    icon: Medal,
  },
  {
    id: "chess-medallist",
    timeframe: "2021 - 2023",
    title: "Chess Championship Medallist",
    issuer: "Secondary School",
    description:
      "Won the Silver medal in the Junior Chess Championship and the Gold medal in the Senior Chess Championship during interhouse competitions.",
    icon: Medal,
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

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-full flex flex-col items-center justify-start sm:justify-center px-4 sm:px-6 py-8 sm:py-10 scroll-area"
    >
      <div className="w-full max-w-5xl">

        {/* Section heading */}
        <div className="text-center mb-6 sm:mb-7">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Credentials &amp; Achievements
          </h2>
        </div>

        {/* Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {achievementsList.map((item) => {
            const IconComp = item.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={item.id}
                className="bg-[#111111] border border-[#222222] rounded-lg p-4 sm:p-5 flex flex-col gap-4 hover:border-[#333333] transition-colors duration-200"
              >
                {/* Icon + Timeframe row */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 border border-[#2a2a2a] rounded bg-[#1a1a1a]">
                    <IconComp className="w-5 h-5 text-zinc-300" />
                  </div>
                  <span className="font-sans text-xs font-semibold text-zinc-400 border border-[#262626] bg-[#161616] px-2.5 py-0.5 rounded-full">
                    {item.timeframe}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="font-sans text-sm font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-500 mt-0.5">
                    {item.issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-zinc-400 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-3 border-t border-[#1e1e1e]">
                  <span className="font-sans text-[10px] text-zinc-600 uppercase tracking-widest">
                    RECORD VERIFIED
                  </span>
                  <span className="flex items-center gap-1.5 font-sans text-[10px] text-zinc-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
