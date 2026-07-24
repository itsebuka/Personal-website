import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ebuka Eleogu",
  description: "Get in touch with Ebuka Eleogu for projects, collaborations, or enquiries.",
};

export default function ContactPage() {
  return <Contact />;
}
