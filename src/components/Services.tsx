import { Cpu, Terminal, Cloud, Shield } from "lucide-react";
import type { ElementType } from "react";

interface Service {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: ElementType;
}

const servicesList: Service[] = [
  {
    title: "PCB Design & Prototyping",
    tagline: "Multilayer Layout | DFM Rules",
    description:
      "Designing high-performance, multilayer PCBs using KiCad. Integrating impedance matching, analog/digital schematics routing, and strict Design For Manufacture rules.",
    features: [
      "Impedance Matched Differential Pairs",
      "BOM Optimization & Sourcing Specs",
      "Multilayer Signal Integrity Layout",
    ],
    icon: Cpu,
  },
  {
    title: "Embedded Systems & Firmware",
    tagline: "C/C++ | Low-Latency Loops",
    description:
      "Programming low-latency sensor interfaces and hardware drivers (SPI, I2C, UART) for Arduino and ESP32 systems.",
    features: [
      "Arduino & ESP32 Programming",
      "Hardware Interrupt & Timer Control",
      "Low-power Sleep Mode Configurations",
    ],
    icon: Terminal,
  },
  {
    title: "RF & Signals",
    tagline: "Circuit Simulation | Instrument Diagnostics",
    description:
      "Analyzing electrical signals, simulating circuits via Proteus, and using standard lab instruments like Oscilloscopes and Multimeters.",
    features: [
      "Proteus Circuit Simulation & Analysis",
      "Multimeter & Oscilloscope Signal Testing",
      "MATLAB & Simulink Signal Processing",
    ],
    icon: Cloud,
  },
  {
    title: "Mechanical CAD & 3D Integration",
    tagline: "Fusion 360 Enclosures | Tolerances",
    description:
      "Modeling rugged hardware enclosures in Fusion 360. Performing structural and thermal stress simulations to ensure component protection and optimal air flow vents.",
    features: [
      "Fusion 360 Enclosure Tolerancing",
      "Thermal Management Heat Sinks",
      "3D Printing Prototyping Layouts",
    ],
    icon: Shield,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="h-full flex flex-col items-center justify-center px-6 py-6"
    >
      <div className="w-full max-w-5xl">

        {/* Section heading */}
        <div className="text-center mb-7">
          <h2 className="font-serif text-4xl font-bold text-white tracking-tight">
            Constructed Services
          </h2>
        </div>

        {/* 2×2 Card Grid */}
        <div className="grid grid-cols-2 gap-4">
          {servicesList.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.title}
                className="bg-[#111111] border border-[#222222] rounded-lg p-5 flex flex-col gap-3 hover:border-[#333333] transition-colors duration-200"
              >
                {/* Icon + Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-[#2a2a2a] rounded bg-[#1a1a1a] shrink-0">
                    <IconComp className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-[10px] text-zinc-500 tracking-widest uppercase leading-none mb-1">
                      {service.tagline}
                    </p>
                    <h3 className="font-sans text-sm font-semibold text-white leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature tag badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="font-sans text-[10px] text-zinc-500 px-2 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
