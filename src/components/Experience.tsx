import { CheckSquare } from "lucide-react";

interface Role {
  period: string;
  company: string;
  title: string;
  bullets: string[];
  skillsApplied: string[];
  active?: boolean;
}

const professionalLog: Role[] = [
  {
    period: "2026 – PRESENT",
    company: "Ikeja Electric Distribution Company",
    title: "Junior Electrical Engineering Intern",
    bullets: [
      "Performing quality assurance on meter installations and ensuring compliance with safety standards",
      "Assisting senior engineers in fault analysis, network troubleshooting, and power quality assessments across distribution substations",
      "Conducting field tests, logging meter readings, and maintaining comprehensive technical documentation for grid operations",
    ],
    skillsApplied: [
      "Power Systems",
      "Fault Analysis",
      "Power Quality Assessment",
      "Network Troubleshooting",
      "Field Testing",
      "Documentation",
      "Safety Standards",
      "Meter Installation",
      "Grid Operations",
      "Technical Documentation",
    ],
    active: true,
  },
  {
    period: "2016 – 2023",
    company: "Maryland Comprehensive Secondary School",
    title: "Science Student",
    bullets: [
      "Graduated with a 275 in the Unified Tertiary Matriculation Examination (UTME)",
      "Graduated with a distinction in the West African Senior School Certificate Examination (WASSCE)",
      "Gained admission into Pan-Atlantic University to study Electrical and Electronics Engineering",
    ],
    skillsApplied: ["Grit", "Determination", "Perseverance", "Resilience", "Discipline"],
    active: false,
  },
  {
    period: "2023 – PRESENT",
    company: "Pan-Atlantic University",
    title: "BSc in Electrical and Electronics Engineering",
    bullets: ["Coming soon..."],
    skillsApplied: ["N/A"],
    active: true,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-full flex flex-col items-center justify-start sm:justify-center px-4 sm:px-6 py-8 sm:py-10 scroll-area"
    >
      <div className="w-full max-w-6xl">

        {/* Section heading */}
        <div className="text-center mb-7">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Timeline
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {professionalLog.map((role) => (
            <div
              key={`${role.company}-${role.period}`}
              className="bg-[#111111] border border-[#222222] rounded-lg p-5 flex flex-col gap-3 hover:border-[#333333] transition-colors duration-200"
            >
              {/* Period badge + active indicator */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] text-zinc-500 tracking-widest uppercase">
                  {role.period}
                </span>
                {role.active && (
                  <span className="flex items-center gap-1.5 font-sans text-[9px] text-zinc-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                    Active
                  </span>
                )}
              </div>

              {/* Title & Company */}
              <div>
                <h3 className="font-sans text-sm font-bold text-white leading-snug">
                  {role.title}
                </h3>
                <p className="font-sans text-xs text-zinc-500 mt-0.5">
                  @ {role.company}
                </p>
              </div>

              {/* Bullet points */}
              <ul className="flex flex-col gap-2">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-zinc-600 mt-0.5 shrink-0" />
                    <span className="font-sans text-[11px] text-zinc-400 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-[#1e1e1e]">
                {role.skillsApplied.map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-[9px] text-zinc-600 px-1.5 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
