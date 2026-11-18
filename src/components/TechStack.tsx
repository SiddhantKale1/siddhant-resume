import { Code2, Zap, Database, Cloud, Terminal, Cpu } from "lucide-react";
import { SquircleGrid } from "./SquircleGrid";

interface SkillCluster {
  title: string;
  icon: typeof Code2;
  skills: { name: string; tag?: string }[];
}

const clusters: SkillCluster[] = [
  {
    title: "Core Languages",
    icon: Code2,
    skills: [
      { name: "Go (Golang)", tag: "High Concurrency" },
      { name: "Python", tag: "Primary" },
      { name: "TypeScript", tag: "Strict" },
      { name: "JavaScript" },
      { name: "SQL (PostgreSQL/MySQL)" },
      { name: "C / C++", tag: "Low-level" },
      { name: "Java", tag: "OOP" },
    ],
  },
  {
    title: "Backend & Systems Architecture",
    icon: Zap,
    skills: [
      { name: "FastAPI", tag: "Async Core" },
      { name: "Go (net/http, Goroutines)" },
      { name: "Flask" },
      { name: "Node.js / Express" },
      { name: "WebSockets", tag: "Real-time" },
      { name: "WebRTC", tag: "Voice/PTT" },
      { name: "RESTful API Design" },
    ],
  },
  {
    title: "AI, RAG & Computer Vision",
    icon: Cpu,
    skills: [
      { name: "RAG Architectures", tag: "Zero Hallucination" },
      { name: "Qdrant Vector DB", tag: "Dense Index" },
      { name: "LangChain" },
      { name: "BAAI/bge Embeddings" },
      { name: "Convolutional Neural Nets (CNN)" },
      { name: "OpenCV", tag: "Image Pipeline" },
      { name: "TensorFlow & Keras" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: [
      { name: "PostgreSQL", tag: "ACID Relational" },
      { name: "MySQL" },
      { name: "MongoDB", tag: "Document Store" },
      { name: "SQLite" },
      { name: "Redis" },
      { name: "Qdrant", tag: "Vector Index" },
    ],
  },
  {
    title: "Cloud & DevOps Infrastructure",
    icon: Cloud,
    skills: [
      { name: "Docker & Docker Compose", tag: "Containerization" },
      { name: "AWS (EC2, S3, IAM)", tag: "Cloud Specialist" },
      { name: "Google Cloud Platform", tag: "Vertex AI" },
      { name: "GitHub Actions CI/CD" },
      { name: "Postman API Automation" },
      { name: "Vite & Tailwind CSS" },
    ],
  },
  {
    title: "Operating Systems & CS Core",
    icon: Terminal,
    skills: [
      { name: "Linux Telemetry & Socket I/O", tag: "Kernel" },
      { name: "iptables Firewall Quarantine" },
      { name: "Data Structures & Algorithms" },
      { name: "Distributed Systems Architecture" },
      { name: "Database Management Systems (DBMS)" },
      { name: "Computer Networks & Protocols" },
    ],
  },
];

export const TechStack = () => {
  return (
    <section id="stack" className="relative py-28 bg-[#08080A] text-white overflow-hidden border-t border-white/[0.08]">
      <SquircleGrid glowPosition="right" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-mono tracking-[0.25em] text-red-500 uppercase font-semibold mb-3">
            // Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
            Technical Stack &amp; Foundations
          </h2>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base max-w-xl leading-relaxed">
            Verified engineering toolchain spanning compiled systems programming, asynchronous APIs, vector storage, and kernel-level network telemetry.
          </p>
        </div>

        {/* 6-Cluster Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <div
                key={cluster.title}
                className="group rounded-2xl bg-[#0F1015] border border-white/[0.08] hover:border-red-500/40 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.06]">
                    <div className="p-2 rounded-xl bg-white/[0.04] text-red-400 border border-white/10 group-hover:bg-red-500/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-white">
                      {cluster.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cluster.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-zinc-300 hover:text-white hover:border-red-500/30 transition-colors flex items-center gap-1.5"
                      >
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[9px] px-1 rounded bg-red-500/10 text-red-400 font-semibold">
                            {skill.tag}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Production verified</span>
                  <span className="text-red-400 font-semibold">&bull; Active</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
