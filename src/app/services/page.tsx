import Services from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Ebuka Eleogu",
  description: "Services offered by Ebuka Eleogu — PCB Design & Prototyping, Embedded Systems & Firmware, RF & Signals, and Mechanical CAD & 3D Integration.",
};

export default function ServicesPage() {
  return <Services />;
}
