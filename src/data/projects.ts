import { Cpu, Database, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProjectFile {
  label: string;
  filename: string;
  type: "pdf" | "doc" | "image" | "zip" | "txt" | "other";
}

export interface ProjectVideo {
  title: string;
  filename: string;
  description?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  kind: "github" | "demo" | "report" | "external";
}

export interface StaticProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  summary: string[];
  tech: string[];
  links: ProjectLink[];
  files: ProjectFile[];
  videos?: ProjectVideo[];
  icon: LucideIcon;
}

export const projects: StaticProject[] = [
  {
    id: "robotic-arm",
    title: "3DOF Robotic Arm",
    tagline: "Mechanical Design & Build — SIWES Hardware Project",
    description:
      "Designed and built a 3-Degree-of-Freedom robotic arm from scratch during a SIWES program. Covered mechanical frame design, joint fabrication, drilling, servo motor integration, and hardware troubleshooting.",
    summary: [
      "This project involved designing and physically fabricating a 3-Degree-of-Freedom (3DOF) robotic arm entirely from scratch during my SIWES hardware internship. The scope spanned every stage of physical prototype development — from raw material cutting, drilling, and machining to joint assembly and servo integration.",
      "The arm was designed to achieve three independent axes of motion, with each joint driven by high-torque servo motors. The frame was assembled using custom-drilled metal and acrylic brackets, wired to a central microcontroller for movement control.",
      "While the physical prototype encountered real-world engineering constraints such as joint flex under load and servo torque budgeting, the build process provided immense practical experience in mechanical fabrication, joint alignment, and hardware debugging under real workplace conditions.",
      "Below is the complete video archive documenting the build process — including joint testing, drilling and machining, team collaboration, and real-time hardware troubleshooting.",
    ],
    tech: ["Arduino", "Servo Motors", "Mechanical Design", "Machining & Drilling", "Hardware Prototyping", "Embedded Wiring"],
    links: [
      { label: "SIWES Hardware Project", url: "https://github.com/itsebuka", kind: "github" },
    ],
    files: [],
    videos: [
      {
        title: "Initial Prototype & Motion Test",
        filename: "robotic_arm_1.mp4",
        description: "Testing early arm structure and initial servo motor positioning.",
      },
      {
        title: "Arm Kinematics & Servo Control",
        filename: "robotic_arm_2.mp4",
        description: "Checking joint deflection and multi-axis sweep movement.",
      },
      {
        title: "SIWES Hardware Engineering Team",
        filename: "robotic_arm_crew.mp4",
        description: "Team collaboration during the physical assembly phase.",
      },
      {
        title: "Drilling & Machining Frame Components",
        filename: "robotic_arm_drilling.mp4",
        description: "Precision drilling of bracket mounting holes and joint pivots.",
      },
      {
        title: "Frame Assembly & Joint Fitting",
        filename: "robotic_arm_take4.mp4",
        description: "Fitting bearings, brackets, and securing servo drive horns.",
      },
      {
        title: "Multi-Axis Joint Actuation Test",
        filename: "robotic_arm_joint_test.mp4",
        description: "Testing joint articulation under power.",
      },
      {
        title: "Hardware Troubleshooting & Wire Routing",
        filename: "robotic_arm_troubleshooting.mp4",
        description: "Debugging signal noise and power distribution to servos.",
      },
      {
        title: "Prototype Stress Test & Failure Analysis",
        filename: "robotic_arm_test_fail.mp4",
        description: "Real-world testing capturing torque limits and structural flex.",
      },
    ],
    icon: Cpu,
  },
  {
    id: "voltage-comparator",
    title: "4-bit Magnitude Comparator",
    tagline: "KiCad Schematic & PCB Design",
    description: "Designed a 4-bit magnitude comparator circuit using KiCad — schematic capture and PCB layout from scratch. The circuit compares two 4-bit binary numbers and outputs whether one is greater than, less than, or equal to the other.",
    summary: [
      "A 4-bit magnitude comparator is a digital logic circuit that compares two 4-bit binary inputs (A and B) and produces three outputs indicating whether A > B, A < B, or A = B. This project involved designing the full circuit from the gate level up using KiCad.",
      "The schematic was captured using standard logic gate components, building up the comparison logic bit by bit from the LSB to the MSB. Cascading comparator stages were used to propagate the comparison result across all four bits.",
      "After completing the schematic, the design was moved into KiCad's PCB editor for layout. Component placement and trace routing were completed with attention to keeping signal paths clean and the board compact.",
      "The KiCad project files — schematic, PCB layout, and project configuration — are available for download below.",
    ],
    tech: ["KiCad", "Digital Logic", "PCB Design", "Schematic Capture", "Magnitude Comparator"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/itsebuka/Magnitude-Comparator", kind: "github" },
    ],
    files: [
      { label: "KiCad Schematic", filename: "Comparator project.kicad_sch", type: "other" },
      { label: "PCB Layout File", filename: "Comparator project.kicad_pcb", type: "other" },
      { label: "KiCad Project File", filename: "Comparator project.kicad_pro", type: "other" },
    ],
    icon: Network,
  },
  {
    id: "voltage-stability-model",
    title: "Voltage Stability Prediction Model",
    tagline: "Python Smart Grid Analysis",
    description: "Developed a model using Python to forecast grid voltage stability thresholds. Utilized simulated smart grid telemetry to perform feature correlation and train prediction parameters for stability warning alerts.",
    summary: [
      "This project developed a machine learning-based predictive model in Python to forecast voltage stability conditions within a simulated smart grid environment.",
      "The dataset consisted of simulated smart grid telemetry: bus voltage magnitudes, reactive power injection levels, active load demands, and generator output parameters. Feature engineering extracted meaningful predictors including voltage deviation from nominal and rate-of-change of reactive power.",
      "A classification model was trained to distinguish stable from unstable operating conditions, with a regression component added to estimate the margin-to-instability — giving grid operators a quantitative early-warning metric.",
      "Model performance was evaluated using cross-validation, achieving strong classification accuracy on held-out test data.",
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Smart Grid", "Data Analytics"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/itsebuka/Voltage-stabilizer-model", kind: "github" },
    ],
    files: [
      { label: "Project Report (PDF)",          filename: "Voltage Stability Model Report Amended.pdf",  type: "pdf" },
      { label: "Project Report (Word — Final)", filename: "Voltage Stability Model Report Amended.docx", type: "doc" },
      { label: "Project Report (Word — Draft)", filename: "Voltage Stability Model Report.docx",         type: "doc" },
      { label: "Jupyter Notebook (Model v3.0)", filename: "Voltage_Stability_Prediction_model_3_0.ipynb", type: "other" },
    ],
    icon: Database,
  },
];

export function getProjectById(id: string): StaticProject | undefined {
  return projects.find((p) => p.id === id);
}
