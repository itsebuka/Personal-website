import {
  Shield,
  Cpu,
  Brain,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-full flex flex-col items-center justify-start sm:justify-center px-4 sm:px-6 py-8 sm:py-12 scroll-area"
    >
      <div className="w-full max-w-5xl">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 mt-2 max-w-xl mx-auto">
            Personal Dossier, Industrial Vision &amp; Engineering Blueprint
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Streamlined Quote / Directive Statement */}
          <div className="bg-[#111111] border border-[#222222] rounded-xl p-5 sm:p-6 text-center relative overflow-hidden">
            <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed italic max-w-3xl mx-auto">
              &quot;I have dedicated my life to attaining significant political, economic, and social leverage to pioneer industrial development, sovereign defense capabilities, and lasting prosperity in Nigeria.&quot;
            </p>
          </div>

          {/* 3 Main Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Identity & Mindset */}
            <div className="bg-[#111111] border border-[#222222] rounded-xl p-5 sm:p-6 flex flex-col gap-4 hover:border-[#383838] transition-all">
              <div className="flex items-center gap-3 border-b border-[#1f1f1f] pb-4">
                <div className="w-10 h-10 rounded-xl border border-[#2a2a2a] bg-[#161616] flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-white">
                    Who I Am &amp; Mindset
                  </h3>
                  <span className="font-sans text-[10px] text-zinc-500 block mt-0.5">
                    Lagos, Nigeria
                  </span>
                </div>
              </div>
              
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Introverted and quiet by nature, I am highly ambitious and driven by an unshakeable sense of purpose.
              </p>
              
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-auto pt-2 border-t border-[#1a1a1a]">
                In my free time, I analyze complex ideas, historical precedents, foreign policies, and systemic incentives to understand how the world operates.
              </p>
            </div>

            {/* Card 2: Industrial Vision */}
            <div className="bg-[#111111] border border-[#222222] rounded-xl p-5 sm:p-6 flex flex-col gap-4 hover:border-[#383838] transition-all">
              <div className="flex items-center gap-3 border-b border-[#1f1f1f] pb-4">
                <div className="w-10 h-10 rounded-xl border border-[#2a2a2a] bg-[#161616] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-white">
                    Industrial Vision
                  </h3>
                  <span className="font-sans text-[10px] text-zinc-500 block mt-0.5">
                    Multi-Sector Directive
                  </span>
                </div>
              </div>
              
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Aiming to pioneer a multi-sector industrial conglomerate spanning defense hardware, robotics invention, and advanced electronics.
              </p>
              
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-auto pt-2 border-t border-[#1a1a1a]">
                Aspiring to build a polymath industrial engine that drives African continental sovereignty and economic power.
              </p>
            </div>

            {/* Card 3: Engineering Methodology */}
            <div className="bg-[#111111] border border-[#222222] rounded-xl p-5 sm:p-6 flex flex-col gap-4 hover:border-[#383838] transition-all">
              <div className="flex items-center gap-3 border-b border-[#1f1f1f] pb-4">
                <div className="w-10 h-10 rounded-xl border border-[#2a2a2a] bg-[#161616] flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-white">
                    Engineering Focus
                  </h3>
                  <span className="font-sans text-[10px] text-zinc-500 block mt-0.5">
                    First-Principles Execution
                  </span>
                </div>
              </div>
              
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Driven by a principle-first habit: I seek deep, foundational comprehension of physics and mechanics before physical execution.
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[#1a1a1a]">
                {[
                  "Robotics",
                  "Defense Systems",
                  "Electrical & Electronics",
                  "Hardware Prototyping",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[10px] text-zinc-300 px-2.5 py-1 bg-[#181818] border border-[#282828] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Clean 4-Column Status Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-5 bg-[#111111] border border-[#222222] rounded-xl">
            <div>
              <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                Current Location
              </span>
              <span className="font-sans text-xs font-semibold text-white mt-1 block truncate">
                Lagos, Nigeria
              </span>
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                Academic Degree
              </span>
              <span className="font-sans text-xs font-semibold text-white mt-1 block truncate">
                BEng Elect/Elect (PAU)
              </span>
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                Core Specialization
              </span>
              <span className="font-sans text-xs font-semibold text-white mt-1 block truncate">
                Defense &amp; Robotics
              </span>
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                Operating Status
              </span>
              <span className="font-sans text-xs font-semibold text-white mt-1 block truncate">
                Head-down, Working
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
