import Achievements from "@/components/Achievements";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements | Ebuka Eleogu",
  description: "Credentials and achievements of Ebuka Eleogu: Robotics Project Lead, 4-bit Comparator PCB, and Voltage Stability Prediction ML model.",
};

export default function AchievementsPage() {
  return <Achievements />;
}
