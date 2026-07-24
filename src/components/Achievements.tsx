import { Award, Trophy, Music, Globe, Shield, GraduationCap, Brain, CheckCircle2, Medal } from "lucide-react";
import type { ElementType } from "react";

interface Milestone {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: ElementType;
}

const achievementsList: Milestone[] = [
  {
    id: "CERT-001",
    title: "Robotics Project Lead",
    issuer: "Pan-Atlantic University",
    date: "2025",
    description:
      "Led a design team in the mechanical and electrical integration of a 3DOF robotic arm for industrial and educational purposes.",
    icon: Award,
  },
  {
    id: "ACH-001",
    title: "Highest Goal Scorer",
    issuer: "Helmbridge Football Club",
    date: "Consecutive",
    description:
      "Highest goal scorer for two consecutive years. Scored 120+ goals across a short 5-year stay at Helmbridge.",
    icon: Trophy,
  },
  {
    id: "ACH-002",
    title: "School Pianist (Part Time)",
    issuer: "Maryland Comprehensive",
    date: "Past",
    description:
      "Served as the part-time school pianist during my time at Maryland Comprehensive Secondary School.",
    icon: Music,
  },
  {
    id: "ACH-003",
    title: "3rd Best in Geography",
    issuer: "Maryland Comprehensive",
    date: "Past",
    description:
      "Ranked 3rd best student in Geography studies across my entire secondary school.",
    icon: Globe,
  },
  {
    id: "ACH-004",
    title: "Best Goalkeeper",
    issuer: "Maryland Comprehensive",
    date: "3 Years",
    description:
      "Won a total of 9 golden glove awards across 9 terms. Recorded the most cleansheets and most saves ever made in MCSS history.",
    icon: Shield,
  },
  {
    id: "ACH-005",
    title: "Best Graduating Student",
    issuer: "Primary School",
    date: "2016-2017",
    description:
      "Awarded Best Graduating Student in my primary school set.",
    icon: GraduationCap,
  },
  {
    id: "ACH-006",
    title: "Quiz Competition Runner-Up",
    issuer: "Pan-Atlantic University",
    date: "Recent",
    description:
      '2nd place runner-up in the "A little about everything" quiz competition held at Pan-Atlantic University.',
    icon: Brain,
  },
  {
    id: "ACH-007",
    title: "100m Race Bronze Medal",
    issuer: "Secondary School",
    date: "2021",
    description:
      "Won the bronze medal in the 100m sprint during secondary school.",
    icon: Medal,
  },
  {
    id: "ACH-008",
    title: "Chess Championship Medallist",
    issuer: "Secondary School",
    date: "Past",
    description:
      "Won the Silver medal in the Junior Chess Championship and the Gold medal in the Senior Chess Championship during interhouse competitions.",
    icon: Medal,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="h-full flex flex-col items-center justify-center px-6 py-6"
    >
      <div className="w-full max-w-5xl">

        {/* Section heading */}
        <div className="text-center mb-7">
          <h2 className="font-serif text-4xl font-bold text-white tracking-tight">
            Credentials &amp; Achievements
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievementsList.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#111111] border border-[#222222] rounded-lg p-5 flex flex-col gap-4 hover:border-[#333333] transition-colors duration-200"
              >
                {/* Icon + ID row */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 border border-[#2a2a2a] rounded bg-[#1a1a1a]">
                    <IconComp className="w-5 h-5 text-zinc-300" />
                  </div>
                  <span className="font-sans text-[9px] text-zinc-600 tracking-widest uppercase">
                    {item.id}
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
                    Issued {item.date}
                  </span>
                  <span className="flex items-center gap-1.5 font-sans text-[10px] text-zinc-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
