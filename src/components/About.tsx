export default function About() {
  return (
    <section
      id="about"
      className="min-h-full flex flex-col items-center justify-start sm:justify-center px-4 sm:px-6 py-8 sm:py-10 scroll-area"
    >
      <div className="w-full max-w-5xl">

        {/* Section heading */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-10 text-center tracking-tight">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">

          {/* Bio Text */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
              I am an Electrical and Electronics student at Pan-Atlantic University, currently supporting grid operations as an intern. 
              <span className="block mt-1 font-semibold text-white">Nigerian-made. Defence-focused. Prototype-obsessed.</span>
            </p>
            
            <ul className="list-disc list-outside ml-5 font-sans text-xs sm:text-sm text-zinc-400 space-y-2 mt-1">
              <li>
                <strong className="text-zinc-200">Autonomous Security:</strong> Building systems that fuse RF intelligence with computer vision on custom hardware.
              </li>
              <li>
                <strong className="text-zinc-200">End-to-End Design:</strong> Designing PCBs, modeling enclosures in Fusion 360, and writing sensor fusion software.
              </li>
              <li>
                <strong className="text-zinc-200">Strategic Targets:</strong> Focusing on critical infrastructure protection, perimeter defence, and asymmetric warfare in under-resourced environments.
              </li>
            </ul>

            <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed italic border-l-2 border-[#222] pl-4 mt-2">
              &quot;The spectrum is a battlefield most people cannot see. I intend to build systems that see it, control it, and act on it by fusing sensors, signals, and hardware into platforms that work.&quot;
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 sm:p-6 border border-[#222222] bg-[#111111] rounded-lg">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-600 block mb-1.5">
                Location
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold text-white">
                Lagos, Nigeria
              </span>
            </div>
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-600 block mb-1.5">
                Availability
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold text-white">
                Open to work
              </span>
            </div>
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-600 block mb-1.5">
                Specialization
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold text-white">
                Electronics, PCB Design, RF, Hardware design, Code
              </span>
            </div>
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-600 block mb-1.5">
                Preferred Stack
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold text-white">
                Fusion360 &amp; Kicad
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
