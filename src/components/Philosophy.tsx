import { useState } from "react";
import { Play, Award, Cloud, Sparkles, Database, Code, ChevronLeft, ChevronRight, Terminal, CheckCircle2 } from "lucide-react";
import { SquircleGrid } from "./SquircleGrid";

export const Philosophy = () => {
  const [activeTab, setActiveTab] = useState<"systems" | "rag" | "telemetry">("systems");
  const [certIndex, setCertIndex] = useState(0);

  const certifications = [
    {
      title: "AWS Cloud Specialist Corporate",
      issuer: "Amazon Web Services (Corporate Program)",
      badge: "Honours Grade",
      icon: Cloud,
      detail: "Architecting resilient multi-tier cloud infrastructure, VPC networking, security groups, and IAM policies.",
    },
    {
      title: "Google Cloud Vertex AI Skill Badge",
      issuer: "Google Cloud Platform",
      badge: "Verified Skill",
      icon: Sparkles,
      detail: "End-to-end machine learning workflows, AutoML, Gemini integration, and vector search embeddings on GCP.",
    },
    {
      title: "Python for Data Science",
      issuer: "Infosys Springboard",
      badge: "Certified",
      icon: Award,
      detail: "NumPy, Pandas, statistical analysis, and algorithmic data preprocessing for machine learning models.",
    },
    {
      title: "Database Management System Part-1",
      issuer: "Infosys Springboard",
      badge: "Certified",
      icon: Database,
      detail: "Relational database schema normalization, transaction concurrency control, and ACID compliance.",
    },
    {
      title: "Java Programming Fundamentals",
      issuer: "Infosys Springboard",
      badge: "Certified",
      icon: Code,
      detail: "Object-oriented software principles, collections framework, multi-threading, and design patterns.",
    },
    {
      title: "AWS Fundamentals",
      issuer: "Udemy Professional Training",
      badge: "Certified",
      icon: Cloud,
      detail: "Core AWS compute, storage, serverless functions, and cloud security architecture.",
    },
  ];

  const nextCert = () => {
    setCertIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCertIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <section id="philosophy" className="relative py-16 sm:py-32 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header - Exact matching reference typography */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase font-medium mb-3">
            THE ENGINEER BEHIND THE CODE
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
            A short film on <span className="font-bold">my engineering philosophy</span>
          </h2>
        </div>

        {/* Cinematic Video / Interactive Console Player Frame (Exact aesthetic from Screenshot 3) */}
        <div className="relative rounded-2xl sm:rounded-[22px] bg-[#0E0F14]/90 border border-white/[0.07] hover:border-red-500/35 p-3.5 sm:p-6 shadow-2xl overflow-hidden mb-16 sm:mb-24 group backdrop-blur-sm transition-all duration-300">
          {/* Intense ambient glow behind player */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Interactive Player Screen */}
          <div className="relative rounded-xl min-h-[380px] sm:min-h-0 sm:aspect-[16/9] bg-black/90 border border-white/[0.06] overflow-hidden flex flex-col justify-between p-4 sm:p-10">
            {/* Top Bar with Philosophy Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs text-zinc-400">ENGINEERING_MANIFESTO.sh</span>
              </div>

              <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/10 text-[10px] sm:text-xs font-mono overflow-x-auto">
                <button
                  onClick={() => setActiveTab("systems")}
                  className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${
                    activeTab === "systems" ? "bg-red-500 text-white font-bold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="sm:hidden">Systems</span>
                  <span className="hidden sm:inline">Distributed Systems</span>
                </button>
                <button
                  onClick={() => setActiveTab("rag")}
                  className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${
                    activeTab === "rag" ? "bg-red-500 text-white font-bold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="sm:hidden">RAG</span>
                  <span className="hidden sm:inline">Zero-Hallucination AI</span>
                </button>
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${
                    activeTab === "telemetry" ? "bg-red-500 text-white font-bold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="sm:hidden">Telemetry</span>
                  <span className="hidden sm:inline">Kernel Telemetry</span>
                </button>
              </div>
            </div>

            {/* Center: Play Trigger / Philosophy Quote */}
            <div className="max-w-xl mx-auto text-center space-y-4 my-auto relative z-10">
              <div className="w-14 h-14 rounded-full bg-red-600/20 border border-red-500/50 mx-auto flex items-center justify-center text-red-400 shadow-xl shadow-red-900/40">
                <Terminal className="w-6 h-6" />
              </div>

              {activeTab === "systems" && (
                <div className="space-y-2 animate-fade-in">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    &quot;Throughput without predictability is just fast failure.&quot;
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
                    By combining compiled Golang concurrency pipelines with zero-allocation buffers, systems sustain 12,480+ EPS while maintaining sub-millisecond 27µs event determinism.
                  </p>
                </div>
              )}

              {activeTab === "rag" && (
                <div className="space-y-2 animate-fade-in">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    &quot;AI in production must ground every assertion in verified truth.&quot;
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
                    Cognivex leverages Qdrant dense vector embeddings with strict page-boundary preservation to eliminate hallucination and return reproducible manual citations.
                  </p>
                </div>
              )}

              {activeTab === "telemetry" && (
                <div className="space-y-2 animate-fade-in">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    &quot;Security is not an afterthought; it is an operating system primitive.&quot;
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
                    Low-level socket collectors and kernel firewall isolation (iptables) turn passive log observability into real-time autonomous threat containment.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Status Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-3 border-t border-white/5 z-10">
              <span>ARCH: LINUX x86_64</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED IN PRODUCTION
              </span>
            </div>
          </div>
        </div>

        {/* Lower Sub-section: Impact & Accreditations (Matching lower part of Screenshot 3) */}
        <div>
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs font-mono tracking-[0.25em] text-red-500 uppercase font-semibold mb-2">
                // Impact &amp; Accreditations
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Industry Accreditations &amp; Verified Skills
              </h3>
            </div>

            {/* Carousel navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevCert}
                className="p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-colors"
                aria-label="Previous Accreditation"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextCert}
                className="p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-colors"
                aria-label="Next Accreditation"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Accreditations Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="rounded-2xl bg-[#0F1015] border border-white/[0.08] hover:border-red-500/40 p-6 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-white/[0.04] text-red-400 border border-white/10">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400">
                        {cert.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-zinc-400">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                      {cert.detail}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Verified Credential</span>
                    <span className="text-emerald-400">&bull; Validated</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
