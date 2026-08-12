import { Cpu, Database, Network, Stethoscope, Zap, Layers } from "lucide-react";
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
  badge?: string;
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
    tagline: "Mechanical Design & Build (SIWES Hardware Project)",
    description:
      "Designed and built a 3-Degree-of-Freedom robotic arm from scratch during a SIWES program. Covered mechanical frame design, joint fabrication, drilling, servo motor integration, and hardware troubleshooting.",
    summary: [
      "This project involved designing and physically fabricating a 3-Degree-of-Freedom (3DOF) robotic arm entirely from scratch during my SIWES hardware internship. The scope spanned every stage of physical prototype development: from raw material cutting, drilling, and machining to joint assembly and servo integration.",
      "The arm was designed to achieve three independent axes of motion, with each joint driven by high-torque servo motors. The frame was assembled using custom-drilled metal and acrylic brackets, wired to a central microcontroller for movement control.",
      "While the physical prototype encountered real-world engineering constraints such as joint flex under load and servo torque budgeting, the build process provided immense practical experience in mechanical fabrication, joint alignment, and hardware debugging under real workplace conditions.",
      "Below is the complete video archive documenting the build process, including joint testing, drilling and machining, team collaboration, and real-time hardware troubleshooting.",
    ],
    tech: ["Arduino", "Servo Motors", "Mechanical Design", "Machining & Drilling", "Hardware Prototyping", "Embedded Wiring"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/itsebuka/3-DOF-Robotic-Arm", kind: "github" },
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
    id: "hardware-archive",
    title: "Hardware Archive",
    tagline: "Fusion 360 & 3D CAD Design Repository",
    description: "Central hardware repository stashing custom 3D mechanical designs, component enclosures, physical prototype models, and CAD assemblies created in Autodesk Fusion 360.",
    summary: [
      "The Hardware Archive is a dedicated central repository created to document, stash, and share all my 3D CAD mechanical models, physical component enclosures, and prototype assemblies.",
      "The archive includes Fusion 360 project files (.f3d, .step, .stl) covering mechanical frames, sensor mounting brackets, enclosure tolerancing tests, and custom hardware housings designed for physical fabrication and 3D printing.",
      "Click the repository link below to explore the full 3D CAD design collection on GitHub."
    ],
    tech: ["Fusion 360", "3D CAD Modeling", "Enclosure Design", "Mechanical Assembly", "STL / STEP Exports", "Hardware Prototyping"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/itsebuka/Hardware-design-portfolio", kind: "github" },
    ],
    files: [],
    icon: Layers,
  },
  {
    id: "pcb-design-core",
    title: "PCB Design Core",
    tagline: "Hand-Designed Printed Circuit Board Repository",
    description: "Central hardware repository stashing custom printed circuit boards designed by hand. Spans schematic capture, component footprint creation, trace routing, and board layout across KiCad and EasyEDA.",
    summary: [
      "PCB Design Core is a central engineering portfolio repository housing PCB design files, schematic captures, and physical hardware prototypes designed entirely by hand. Projects span custom microcontroller development platforms, specialized battery power management modules, and discrete digital logic circuits built across KiCad and EasyEDA.",
      "1. ESP32-S3 Test Board: A custom hardware evaluation platform designed around the ESP32-S3 microcontroller for IoT prototyping and wireless embedded development. Features a clean low-noise power regulation network for stable MCU operation, dedicated breakout headers for GPIO, I2C, SPI, and UART peripherals, and an optimized 2-layer PCB layout with a dedicated copper ground fill plane for RF and signal integrity.",
      "2. LiPo Battery Charger PCB: A dedicated power management module for single-cell Lithium-Polymer (LiPo) battery charging and system safety. Integrates an embedded charge controller IC with a constant-current / constant-voltage (CC/CV) charging profile, built-in LED status indicators for charge state and fault monitoring, and input over-voltage protection in a compact surface-mount footprint.",
      "3. 4-Bit Magnitude Comparator PCB: A discrete digital logic comparison board designed to evaluate binary number comparison (A > B, A < B, A = B). Designed from gate-level logic components up to complete KiCad schematic capture and PCB layout with clean trace routing across cascading comparator stages.",
      "All schematic captures, PCB layouts, component footprints, and fabrication package files (.zip) are archived directly within the repository."
    ],
    tech: ["KiCad", "EasyEDA", "ESP32-S3", "Power Management (CC/CV)", "PCB Layout", "Schematic Capture", "Component Footprints", "Trace Routing"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/itsebuka/PCB-Design-Core", kind: "github" },
    ],
    files: [],
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
      "A classification model was trained to distinguish stable from unstable operating conditions, with a regression component added to estimate the margin-to-instability to give grid operators a quantitative early-warning metric.",
      "Model performance was evaluated using cross-validation, achieving strong classification accuracy on held-out test data.",
    ],
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Smart Grid", "Data Analytics"],
    links: [
      { label: "GitHub Repository", url: "https://github.com/itsebuka/Voltage-stabilizer-model", kind: "github" },
    ],
    files: [
      { label: "Project Report (PDF)",          filename: "Voltage Stability Model Report Amended.pdf",  type: "pdf" },
      { label: "Project Report (Word - Final)", filename: "Voltage Stability Model Report Amended.docx", type: "doc" },
      { label: "Project Report (Word - Draft)", filename: "Voltage Stability Model Report.docx",         type: "doc" },
      { label: "Jupyter Notebook (Model v3.0)", filename: "Voltage_Stability_Prediction_model_3_0.ipynb", type: "other" },
    ],
    icon: Database,
  },
  {
    id: "apollo-clinical-ai",
    title: "Apollo: Offline Clinical AI Assistant",
    tagline: "Offline-First Decision Support for Nigerian Healthcare",
    badge: "Coming Soon!",
    description: "Apollo is a production-ready, offline-first clinical decision support system designed specifically for healthcare workers in resource-constrained environments across Nigeria and Africa. Uses advanced RAG architecture and operates under 4.5GB RAM.",
    summary: [
      "Apollo is a production-ready, offline-first clinical decision support system designed specifically for healthcare workers in resource-constrained environments across Nigeria and Africa. Built with advanced retrieval-augmented generation (RAG) architecture, Apollo delivers evidence-based medical guidance entirely on commodity laptops with no cloud dependencies and a memory footprint under 4.5GB RAM.",
      "1. Retrieval-Augmented Generation (RAG): Indexes medical PDFs, textbooks, and clinical guidelines. Converts documents to searchable vectors using sentence-transformers, retrieving relevant clinical content with citation tracking and source attribution.",
      "2. HyDE (Hypothetical Document Embedding): Generates synthetic clinical reference paragraphs for vague queries to bridge the semantic gap between patient lay language and medical terminology without additional RAM usage.",
      "3. Async Cross-Encoder Re-Ranking: Offloads CPU-intensive relevance scoring to background threads, maintaining a responsive event loop with asyncio.run_in_executor and reducing latency spikes during high-concurrency usage.",
      "4. Dynamic Token Budgeting: Allocates 512 / 1024 / 2048 tokens based on query complexity to optimize generation efficiency and reduce thermal CPU load.",
      "5. Automatic Re-Query Fallback: Detects low similarity scores (<0.45), strips stop-words, and performs keyword-based fallback queries to rescue ambiguous or wordy patient prompts.",
      "6. Web Speech API Voice Input: Browser-native speech recognition via window.SpeechRecognition with zero RAM footprint for hands-free clinician interaction.",
      "7. Session Document Upload: Accepts PDF and TXT files via pypdf extraction to inject patient-specific documents as session-scoped clinical context.",
    ],
    tech: [
      "Python",
      "RAG Architecture",
      "HyDE",
      "Cross-Encoder",
      "AsyncIO",
      "Sentence-Transformers",
      "Web Speech API",
      "PyPDF",
      "Clinical AI",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/itsebuka/Apollo-Triage-system", kind: "github" },
    ],
    files: [],
    icon: Stethoscope,
  },
  {
    id: "poseidon-ikeja-grid-map",
    title: "Poseidon: IKEJA-GRID-MAP",
    tagline: "Real-Time Distributed Power Grid Monitoring & GIS Visualizer",
    badge: "Coming Soon!",
    description: "Poseidon (IKEJA-GRID-MAP) is a real-time, production-ready distributed power grid monitoring web application built for Ikeja Electric (Lagos, Nigeria). Visualizes 25,300+ real network assets, substations, and feeder lines on Google Earth style satellite imagery with live national grid & NESI market integration.",
    summary: [
      "Poseidon (IKEJA-GRID-MAP) is a real-time, production-ready distributed power grid monitoring system designed specifically for Ikeja Electric in Lagos, Nigeria. It combines multi-threaded SCADA distribution telemetry simulation, real-time animated energy flow paths, high-resolution satellite imagery, and national grid market integration into a unified operational command dashboard.",
      "1. Multi-Threaded SCADA Telemetry Simulator: Runs a background Python daemon thread (threading.Lock protected) driving dynamic 3-second updates for voltage (kV), current load (MW), and frequency (Hz) across 30+ substations in 7 operational zones (Ikeja, Surulere, Ikoyi, Lekki, Ajah, Agege, Oshodi).",
      "2. High-Resolution Google Earth Style Satellite View & Layer Controls: Features Esri World Satellite Aerial Imagery with real-world rooftops, facilities, and terrain, alongside a 1-click Map View Switcher (Satellite / Hybrid / Streets) and layer filter controls.",
      "3. Complete Multi-KMZ Infrastructure Integration & Color Mirroring: Pre-parses and integrates all 12 Ikeja Electric KMZ archives (25,306 network assets including 33kV transmission lines, 11kV feeder network, ISS Injection Substations, TCN grid, and Distribution Transformers), preserving 324 authentic KML style colors.",
      "4. Real-Time Animated Energy Flow Distribution: Animates feeder lines with moving SVG/Canvas energy pulses in their authentic KMZ colors, dynamically shifting to warning alerts (Amber/Red) during simulated overload conditions.",
      "5. Instant GeoJSON Caching & Viewport Spatial LOD: Converts raw KMZ archives into lightweight, pre-parsed GeoJSON caches loaded in under 50ms, with a Level-of-Detail (LOD) spatial filter for 60 FPS hardware-accelerated Canvas rendering.",
      "6. National Grid & NESI Market Integration: Aggregates real-time national generation mix (Gas/Hydro/Solar), carbon intensity (gCO2/kWh), and NESI industry metrics (All-Time Peak Generation 5,801 MW, TCN Wheeling 6,000 MW, DisCo Tariffs, and ATCC Losses) via Electricity Maps and EnergyMRC APIs.",
    ],
    tech: [
      "Python",
      "Flask",
      "Leaflet GIS",
      "Esri Satellite Imagery",
      "JavaScript (ES6+)",
      "Multi-Threading",
      "GeoJSON Caching",
      "SCADA Simulation",
      "Electricity Maps API",
      "EnergyMRC / NERC",
      "RESTful API",
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/itsebuka/Poseidon", kind: "github" },
    ],
    files: [],
    icon: Zap,
  },
];

export function getProjectById(id: string): StaticProject | undefined {
  return projects.find((p) => p.id === id);
}
