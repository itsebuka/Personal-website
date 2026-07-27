import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ebuka Eleogu",
  description: "Learn about Ebuka Eleogu: Electronics & PCB Design student at Pan-Atlantic University and Junior Electrical Intern at Ikeja Electric.",
};

export default function AboutPage() {
  return <About />;
}
