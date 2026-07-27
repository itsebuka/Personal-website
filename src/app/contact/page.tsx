import Certifications from "@/components/Certifications";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Ebuka Eleogu",
  description:
    "Professional certifications earned by Ebuka Eleogu — Industry Readiness Program, Autodesk Fusion 360, and NVIDIA RAG Certification.",
};

export default function CertificationsPage() {
  return <Certifications />;
}
