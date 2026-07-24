export default function About() {
  return (
    <section
      id="about"
      className="h-full flex flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-5xl">

        {/* Section heading */}
        <h2 className="font-serif text-4xl font-bold text-white mb-10 text-center tracking-tight">
          The Man Behind This Page
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Bio Text */}
          <div className="flex flex-col gap-5">
            <p className="font-sans text-sm text-zinc-300 leading-relaxed">
              I intend to build autonomous security systems that fuse RF intelligence with computer vision on custom hardware. I intend to also design PCBs and model their enclosures in Fusion 360, write the sensor fusion software, and integrate it into a single platform. My work targets critical infrastructure protection, perimeter defence, and asymmetric warfare applications in under-resourced environments. Studying Electrical and Electronics at Pan-Atlantic University and supporting grid operations as an intern. Nigerian-made. Defence-focused. Prototype-obsessed.
            </p>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed">
              The spectrum is a battlefield most people cannott see. I intend to build systems that see it, control it, and act on it by fusing sensors, signals, and hardware into platforms that work.
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 gap-4 p-6 border border-[#222222] bg-[#111111] rounded-lg">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-600 block mb-1.5">
                Location
              </span>
              <span className="font-sans text-sm font-semibold text-white">
                Lagos, Nigeria
              </span>
            </div>
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-600 block mb-1.5">
                Availability
              </span>
              <span className="font-sans text-sm font-semibold text-white">
                Open to work
              </span>
            </div>
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-600 block mb-1.5">
                Specialization
              </span>
              <span className="font-sans text-sm font-semibold text-white">
                Electronics, PCB Design, RF, Hardware design, Code
              </span>
            </div>
            <div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-zinc-600 block mb-1.5">
                Preferred Stack
              </span>
              <span className="font-sans text-sm font-semibold text-white">
                Fusion360 &amp; Kicad
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
