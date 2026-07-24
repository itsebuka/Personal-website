import Experience from "@/components/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Ebuka Eleogu",
  description: "Professional timeline of Ebuka Eleogu — Junior Electrical Engineering Intern at Ikeja Electric, BSc candidate at Pan-Atlantic University.",
};

export default function ExperiencePage() {
  return <Experience />;
}
