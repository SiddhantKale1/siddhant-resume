import { ExternalLink, Github, ArrowUpRight, Shield, Brain, Radio, Receipt, Database, Activity, Terminal } from "lucide-react";
import { SquircleGrid } from "./SquircleGrid";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  bullets: string[];
  tech: string[];
  github: string;
  live?: string;
  mockupType: "siem" | "rag" | "brain" | "convoy" | "split";
}

const projects: ProjectItem[] = [
  {
    id: "sentinel-siem",
    title: "Sentinel – Autonomous SIEM & Telemetry Platform",
    category: "Cybersecurity & Distributed Systems",
    badge: "12,480+ EPS • 27µs Parse",
    description:
      "Enterprise autonomous security observability system designed with a compiled Golang backend core delivering 12,480+ EPS sustained throughput and 27µs sub-millisecond log event parsing execution.",
    bullets: [
      "Built cross-platform telemetry agents in Go & Python enforcing automated zero-trust host isolation via Linux kernel firewall rules (iptables).",
      "Designed real-time SOC command dashboard using React, TypeScript, and WebSockets with MITRE ATT&CK correlation heatmaps.",
      "Engineered containerized Docker microservices with high-throughput event queues and automated alert dispatch.",
    ],
    tech: ["Go (Golang)", "Python", "FastAPI", "React", "TypeScript", "Docker", "WebSockets", "iptables"],
    github: "https://github.com/SiddhantKale1/SIEM-Dashboard-security-information-event-mangement-",
    mockupType: "siem",
  },
  {
    id: "cognivex-rag",
    title: "Cognivex – Intelligent RAG Troubleshooting System",
    category: "Generative AI & Vector Search",
    badge: "Zero Hallucination • Sub-second",
    description:
      "Domain-specific Retrieval-Augmented Generation (RAG) platform architected to query dense technical machine manuals with zero hallucination and exact diagnostic citations.",
    bullets: [
      "Automated document ingestion pipeline using PyMuPDF and LangChain text splitters, preserving structural page boundaries and error codes.",
      "Indexed dense vector embeddings in Qdrant Vector DB via BAAI/bge-base-en-v1.5, enabling sub-second cosine similarity retrieval.",
      "Delivered transparent citation telemetry pinpointing exact manual paragraphs and troubleshooting workflows.",
    ],
    tech: ["FastAPI", "PyMuPDF", "LangChain", "Qdrant Vector DB", "BAAI/bge", "Python"],
    github: "https://github.com/SiddhantKale1",
    mockupType: "rag",
  },
  {
    id: "brain-tumor",
    title: "Brain Tumor Detection System with Grad-CAM",
    category: "Deep Learning & Medical Vision",
    badge: "CNN • Grad-CAM Heatmaps",
    description:
      "Medical computer vision platform utilizing deep Convolutional Neural Networks (CNN) with Grad-CAM visualization for high-accuracy MRI tumor diagnostic localization.",
    bullets: [
      "Engineered an OpenCV image preprocessing pipeline implementing skull-stripping, contrast enhancement (CLAHE), and data augmentation.",
      "Trained CNN model with explainable Grad-CAM heatmaps allowing radiologists to verify diagnostic localization visually.",
      "Deployed real-time inference web services with FastAPI & Flask, serving instant predictions and annotated scans.",
    ],
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "FastAPI", "Flask", "NumPy"],
    github: "https://github.com/SiddhantKale1/Brain-Tumor-Detection",
    mockupType: "brain",
  },
  {
    id: "riders-united",
    title: "Riders United – Tactical Convoy GPS & Voice Comms",
    category: "Real-time Telemetry & WebRTC Audio",
    badge: "Live GPS • Push-To-Talk",
    description:
      "Real-time motorcycle convoy tracking and tactical communications system synchronizing live GPS positions, heading angles, and walkie-talkie audio across mobile groups.",
    bullets: [
      "Engineered WebSockets channel synchronizing live GPS telemetry coordinates, velocities, and custom road waypoints.",
      "Integrated low-latency WebRTC Push-To-Talk (PTT) walkie-talkie audio comms with authentic radio acoustics and priority override.",
      "Built 1-tap emergency hazard broadcast system alerting trailing convoy riders instantly.",
    ],
    tech: ["TypeScript", "React", "Node.js", "WebSockets", "WebRTC", "Leaflet", "Docker"],
    github: "https://github.com/SiddhantKale1",
    mockupType: "convoy",
  },
  {
    id: "split-it",
    title: "Split It – Group Expense Management Platform",
    category: "Full-Stack Web & Algorithmic Optimization",
    badge: "Graph Debt Minimization",
    description:
      "Splitwise-inspired expense management platform featuring clean MVC architecture and an exact balance optimization algorithm to minimize group debt transactions.",
    bullets: [
      "Implemented an exact simplified balance optimization algorithm reducing net financial transactions required across group members.",
      "Designed clean MVC backend with Flask and MySQL featuring session authentication and transactional integrity.",
      "Engineered intuitive group balance views with automated settlement recommendations.",
    ],
    tech: ["Python", "Flask", "MySQL", "REST APIs", "MVC", "Algorithms"],
    github: "https://github.com/SiddhantKale1/Split_It",
    mockupType: "split",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header - Exact matching reference typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase font-medium mb-3">
              FEATURED SOLUTIONS &amp; PROJECTS
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white max-w-2xl leading-tight">
              Featured Solutions <span className="font-bold">&amp; Projects</span>
            </h2>
          </div>

          <a
            href="https://github.com/SiddhantKale1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs sm:text-sm font-medium text-white transition-all self-start md:self-auto"
          >
            <span>All repositories</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-300" />
          </a>
        </div>

        {/* Projects Grid: 2 Columns Matching Reference */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl sm:rounded-[22px] bg-[#0E0F14]/90 border border-white/[0.07] hover:border-red-500/35 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative shadow-2xl backdrop-blur-sm"
            >
              {/* Subtle ambient card glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-red-600/20 transition-all" />

              <div>
                {/* Visual UI Mockup Box - Dark, sleek screenshot/terminal aesthetic */}
                <div className="relative h-52 sm:h-56 w-full rounded-xl bg-[#090A0E] border border-white/[0.06] mb-6 overflow-hidden flex flex-col p-4 shadow-inner">
                  {/* Top bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/70" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[11px] text-zinc-500 font-mono pl-2">
                        {project.id}.cluster
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400 font-mono">
                      {project.badge}
                    </span>
                  </div>

                  {/* Mockup content according to project */}
                  <div className="flex-1 flex flex-col justify-center py-2 relative z-10">
                    {project.mockupType === "siem" && (
                      <div className="space-y-2.5 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-zinc-400">
                          <span>INGESTION_RATE</span>
                          <span className="text-emerald-400 font-bold">12,480 EPS</span>
                        </div>
                        <div className="w-full bg-white/[0.04] rounded-full h-1.5 overflow-hidden">
                          <div className="bg-red-500 h-full w-[88%]" />
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-1 text-[10px]">
                          <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                            <span className="text-zinc-500 block">LATENCY</span>
                            <span className="text-white font-bold">27 µs</span>
                          </div>
                          <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                            <span className="text-zinc-500 block">ISOLATION</span>
                            <span className="text-red-400 font-bold">iptables</span>
                          </div>
                          <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                            <span className="text-zinc-500 block">SOC</span>
                            <span className="text-zinc-300 font-bold">WebSockets</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === "rag" && (
                      <div className="space-y-2 font-mono text-[11px]">
                        <div className="text-zinc-400 flex items-center justify-between">
                          <span>VECTOR_INDEX</span>
                          <span className="text-red-400">Qdrant Vector DB</span>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.03] border border-white/5 text-[10px] space-y-1">
                          <div className="text-zinc-300">QUERY: &quot;Error code E-402 hydraulic pressure fault&quot;</div>
                          <div className="text-emerald-400">CITATIONS: Manual Sec 4.2, Page 128 (Score: 0.942)</div>
                          <div className="text-zinc-500">Zero Hallucination Grounding Verified</div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === "brain" && (
                      <div className="space-y-2 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-zinc-400">
                          <span>MODEL_ARCHITECTURE</span>
                          <span className="text-purple-400">CNN + Grad-CAM</span>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between text-[10px]">
                          <div>
                            <div className="text-white font-semibold">MRI SCAN: GLIOMA POSITIVE</div>
                            <div className="text-zinc-500">Skull-stripping &amp; CLAHE applied</div>
                          </div>
                          <div className="px-2 py-1 rounded bg-red-500/20 text-red-300 font-bold">
                            98.4% CONF
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === "convoy" && (
                      <div className="space-y-2 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-zinc-400">
                          <span>CONVOY_TELEMETRY</span>
                          <span className="text-cyan-400">WebSockets + WebRTC</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.03] border border-white/5 flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-2">
                            <Radio className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                            <span className="text-white">PTT CHANNEL: ACTIVE (Leader)</span>
                          </div>
                          <span className="text-emerald-400 font-bold">0 HAZARDS</span>
                        </div>
                      </div>
                    )}

                    {project.mockupType === "split" && (
                      <div className="space-y-2 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-zinc-400">
                          <span>OPTIMIZATION_ENGINE</span>
                          <span className="text-amber-400">Net Flow Minimization</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-[10px] space-y-1">
                          <div className="text-zinc-300">Total Group Debt: 14 Edge Graph</div>
                          <div className="text-emerald-400 font-bold">&rarr; Simplified to 4 Net Transactions</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Title & Category */}
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-mono text-red-400 font-medium">
                    {project.category}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors p-1"
                    aria-label="Repository"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-6 text-xs text-zinc-300">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-mono">&gt;</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom: Tech Tags & GitHub Button */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[11px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-red-500" />
                  <span>View Source Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
