import {
  Shield,
  Cpu,
  Globe,
  Crosshair,
  Zap,
  Brain,
  Compass,
  Swords,
  BookOpen,
  Award,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-full flex flex-col items-center justify-start sm:justify-center px-4 sm:px-6 py-8 sm:py-10 scroll-area"
    >
      <div className="w-full max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 mt-1.5">
            Personal Dossier, Industrial Vision &amp; Strategic Operating Blueprint
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Top Industrial Vision Callout Banner */}
          <div className="relative bg-[#111111] border border-[#2a2a2a] rounded-xl p-6 sm:p-7 overflow-hidden group hover:border-[#444444] transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl border border-[#333333] bg-[#1a1a1a] flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-widest block">
                    Strategic Industrial Directive
                  </span>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white leading-snug">
                    Pioneering African Tech &amp; Defense Engineering
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 mt-0.5">
                    Building the bedrock for Defense Systems, Autonomous Robotics &amp; High-Impact African Technologies.
                  </p>
                </div>
              </div>
              <span className="font-sans text-xs font-semibold px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 whitespace-nowrap self-start md:self-auto">
                African Tech Industrialist Blueprint
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed italic border-l-2 border-white/40 pl-4 mt-5">
              &quot;I have dedicated my life to attaining significant political, economic, and social leverage to pioneer industrial development, sovereign defense capabilities, and lasting prosperity in Nigeria.&quot;
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Card 1: Identity & Philosophical Mindset */}
            <div className="bg-[#111111] border border-[#222222] rounded-xl p-5 sm:p-6 flex flex-col gap-4 hover:border-[#444444] transition-all group">
              <div className="flex items-center gap-3 border-b border-[#202020] pb-3.5">
                <div className="w-9 h-9 rounded-lg border border-[#2a2a2a] bg-[#161616] flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-white">
                    Who I Am &amp; Philosophical Mindset
                  </h3>
                  <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-wider">
                    Lagos, Nigeria · Independent Operator
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                I operate as a focused lone wolf — smart, highly ambitious, and driven by an unshakeable sense of purpose rather than popularity. 
              </p>
              <div className="p-3.5 bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg flex flex-col gap-1.5 mt-auto">
                <span className="font-sans text-[10px] uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-zinc-400" />
                  Philosopher &amp; System Analyst
                </span>
                <p className="font-sans text-[11px] text-zinc-400 leading-relaxed">
                  In my free time, I analyze complex ideas, historical precedents, foreign policies, and systemic incentives to understand how the world operates.
                </p>
              </div>
            </div>

            {/* Card 2: Industrial Ambitions & Role Models */}
            <div className="bg-[#111111] border border-[#222222] rounded-xl p-5 sm:p-6 flex flex-col gap-4 hover:border-[#444444] transition-all group">
              <div className="flex items-center gap-3 border-b border-[#202020] pb-3.5">
                <div className="w-9 h-9 rounded-lg border border-[#2a2a2a] bg-[#161616] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-white">
                    Industrial Ambitions &amp; Vision
                  </h3>
                  <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-wider">
                    Multi-Sector Engineering Directive
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Aiming to pioneer a multi-sector industrial conglomerate spanning defense hardware, robotics invention, and advanced electronics.
              </p>
              <div className="p-3.5 bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg flex flex-col gap-1.5 mt-auto">
                <span className="font-sans text-[10px] uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-zinc-400" />
                  Industrial Archetype
                </span>
                <p className="font-sans text-[11px] text-zinc-400 leading-relaxed">
                  Aspiring to build the African equivalent of a Tony Stark / Elon Musk polymath industrial engine to drive continental sovereignty and economic power.
                </p>
              </div>
            </div>

            {/* Card 3: Martial Arts & Intellectual Discourse */}
            <div className="bg-[#111111] border border-[#222222] rounded-xl p-5 sm:p-6 flex flex-col gap-4 hover:border-[#444444] transition-all group">
              <div className="flex items-center gap-3 border-b border-[#202020] pb-3.5">
                <div className="w-9 h-9 rounded-lg border border-[#2a2a2a] bg-[#161616] flex items-center justify-center shrink-0">
                  <Swords className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-white">
                    Tactical Arts &amp; Worldview
                  </h3>
                  <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-wider">
                    Discipline · Geopolitics · Principles
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2 text-xs text-zinc-400">
                  <Crosshair className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-200">Combat Arts:</strong> Active practitioner in Taekwondo, Boxing, and Tactical Self-Defense.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-400">
                  <Compass className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-200">Discourse Topics:</strong> Geopolitics, military history, foreign policy, macro-economics, and public leadership.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-400">
                  <BookOpen className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-200">Worldview:</strong> Conservative with firm traditional grounding on culture, family, and societal responsibility.</span>
                </div>
              </div>
            </div>

            {/* Card 4: Engineering Methodology & Key Fields */}
            <div className="bg-[#111111] border border-[#222222] rounded-xl p-5 sm:p-6 flex flex-col gap-4 hover:border-[#444444] transition-all group">
              <div className="flex items-center gap-3 border-b border-[#202020] pb-3.5">
                <div className="w-9 h-9 rounded-lg border border-[#2a2a2a] bg-[#161616] flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-white">
                    Engineering Methodology &amp; Fields
                  </h3>
                  <span className="font-sans text-[10px] text-zinc-500 uppercase tracking-wider">
                    First-Principles Execution
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                Driven by a principle-first learning habit — seeking deep, foundational comprehension of physics and mechanics before physical execution.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {[
                  "Robotics Invention",
                  "Defense Systems",
                  "Electrical & Electronics",
                  "Public Leadership",
                  "Hardware Prototyping",
                  "First-Principles Learner",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[10px] text-zinc-300 px-2.5 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* System Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 bg-[#111111] border border-[#222222] rounded-xl">
            <div>
              <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                Current Location
              </span>
              <span className="font-sans text-xs font-semibold text-white mt-0.5 block truncate">
                Lagos, Nigeria
              </span>
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                Academic Degree
              </span>
              <span className="font-sans text-xs font-semibold text-white mt-0.5 block truncate">
                BEng Elect/Elect (PAU)
              </span>
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                Combat Arts
              </span>
              <span className="font-sans text-xs font-semibold text-white mt-0.5 block truncate">
                Taekwondo &amp; Boxing
              </span>
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                Core Specialization
              </span>
              <span className="font-sans text-xs font-semibold text-white mt-0.5 block truncate">
                Defense &amp; Robotics
              </span>
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-500 block">
                Operating Status
              </span>
              <span className="font-sans text-xs font-semibold text-white mt-0.5 block truncate">
                Head-down, Working
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
