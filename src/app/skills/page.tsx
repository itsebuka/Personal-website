import Skills from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Ebuka Eleogu",
  description: "Technical arsenal of Ebuka Eleogu — Hardware Design, Power Systems, Embedded Code, and ML & Smart Systems.",
};

export default function SkillsPage() {
  return <Skills />;
}
