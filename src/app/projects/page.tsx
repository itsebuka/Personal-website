import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ebuka Eleogu",
  description: "Featured projects by Ebuka Eleogu: 3DOF Robotic Arm, 4-bit Magnitude Comparator PCB, and Voltage Stability Prediction Model.",
};

export default function ProjectsPage() {
  return <Projects />;
}
