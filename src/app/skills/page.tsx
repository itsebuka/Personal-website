import Skills from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Ebuka Eleogu",
  description:
    "Areas of specialty: Hardware Design & CAD, Power Systems & Diagnostics, Embedded Code & Microcontrollers, Agentic RAG & LLM Engineering, and PCB Design & Prototyping.",
};

export default function SkillsPage() {
  return <Skills />;
}
