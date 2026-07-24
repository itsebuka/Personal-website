import { Award, Terminal, CheckCircle2 } from "lucide-react";
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
    id: "CERT-003",
    title: "4 bit Comparator PCB",
    issuer: "Pan-Atlantic University",
    date: "2026",
    description:
      "I designed a 4-bit comparator PCB using Kicad 10.0.0, which was then fabricated from scratch using veroboards in my school lab.",
    icon: Terminal,
  },
  {
    id: "CERT-004",
    title: "Voltage Stability Prediction ML model",
    issuer: "Pan Atlantic University",
    date: "2026",
    description:
      "I successfully created a voltage stability prediction model using Python and machine learning",
    icon: Award,
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

        {/* 3-column card grid */}
        <div className="grid grid-cols-3 gap-4">
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
