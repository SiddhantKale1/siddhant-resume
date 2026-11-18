import { ShieldCheck, Zap, Server, Globe2, Code, Terminal } from "lucide-react";

export const Capabilities = () => {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header - Exact reference styling */}
        <div className="mb-16">
          <div className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase font-medium mb-3">
            WHY PARTNER WITH ME
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white max-w-2xl leading-tight">
            Why Partner With Me <span className="font-bold">Today And Always?</span>
          </h2>
        </div>

        {/* 4-Card Bento Grid - Exact layout and visual motifs */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Bento Card 1: Production-Grade Reliability */}
          <div className="group rounded-2xl sm:rounded-[22px] bg-[#0E0F14]/90 border border-white/[0.07] hover:border-red-500/35 p-7 sm:p-9 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-2xl backdrop-blur-sm">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-600/15 transition-all" />

            {/* Visual Graphic: Code bracket chip with floating particles */}
            <div className="mb-8">
              <div className="relative h-28 w-full rounded-xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_70%)]" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400 font-mono text-lg font-bold shadow-lg shadow-red-950/50">
                    &lt; / &gt;
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 opacity-80">
                    {["IO", "SEC", "API", "GO", "NET", "CI"].map((token, i) => (
                      <span
                        key={token}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                          i % 2 === 0
                            ? "bg-red-500/10 border-red-500/30 text-red-300"
                            : "bg-white/[0.03] border-white/10 text-zinc-400"
                        }`}
                      >
                        {token}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                Production-Grade Reliability
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Clean, thoroughly tested, enterprise-ready source code with full observability baked in from day one. Enforcing zero-trust Linux host isolation via kernel firewall rules (iptables) and automated containerized verification.
              </p>
            </div>
          </div>

          {/* Bento Card 2: Performance First Mindset */}
          <div className="group rounded-2xl sm:rounded-[22px] bg-[#0E0F14]/90 border border-white/[0.07] hover:border-red-500/35 p-7 sm:p-9 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-600/15 transition-all" />

            {/* Visual Graphic: Latency waveform / sine signal with illuminated peak */}
            <div className="mb-8">
              <div className="relative h-28 w-full rounded-xl bg-black/40 border border-white/5 flex items-center justify-center px-6 overflow-hidden">
                <svg className="w-full h-16" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 30 Q35 5 70 30 T140 30 Q175 55 210 30 T280 30 T300 30"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0 30 Q45 55 90 30 T180 30 Q225 5 270 30 T300 30"
                    stroke="rgba(220,38,38,0.7)"
                    strokeWidth="2"
                  />
                  {/* Critical latency focal pulse */}
                  <circle cx="180" cy="30" r="4" fill="#EF4444" className="animate-ping" />
                  <circle cx="180" cy="30" r="5" fill="#EF4444" />
                </svg>
                <div className="absolute bottom-2 right-4 text-[10px] font-mono text-red-400">
                  27µs parse • 12,480 EPS
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                Performance First Mindset
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Compiled Golang backend core delivering 12,480+ EPS sustained throughput and 27µs sub-millisecond log event parsing. Optimizing memory allocations, goroutine pools, and query indexes across critical data paths.
              </p>
            </div>
          </div>

          {/* Bento Card 3: Scalable Cloud Architecture */}
          <div className="group rounded-2xl sm:rounded-[22px] bg-[#0E0F14]/90 border border-white/[0.07] hover:border-red-500/35 p-7 sm:p-9 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-600/15 transition-all" />

            {/* Visual Graphic: Microservices chassis rack */}
            <div className="mb-8">
              <div className="relative h-28 w-full rounded-xl bg-black/40 border border-white/5 flex flex-col justify-center gap-2 px-6 overflow-hidden">
                {[1, 2, 3].map((slot) => (
                  <div
                    key={slot}
                    className="h-5 rounded bg-white/[0.03] border border-white/[0.07] flex items-center justify-between px-3"
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span className="text-[10px] font-mono text-zinc-400">node-0{slot}.telemetry</span>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400">ACTIVE</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                Scalable Cloud Architecture
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Serverless microservices, secure API design, and resilient containerized pipelines built to grow with load. Leveraging Docker, AWS EC2/S3, and Qdrant vector retrieval engines for fault-tolerant operation.
              </p>
            </div>
          </div>

          {/* Bento Card 4: Business-Driven Decisions */}
          <div className="group rounded-2xl sm:rounded-[22px] bg-[#0E0F14]/90 border border-white/[0.07] hover:border-red-500/35 p-7 sm:p-9 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-600/15 transition-all" />

            {/* Visual Graphic: Dotted globe sphere with illuminated red horizon */}
            <div className="mb-8">
              <div className="relative h-28 w-full rounded-xl bg-black/40 border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="relative w-24 h-24 rounded-full border border-red-500/30 bg-[radial-gradient(circle_at_30%_30%,rgba(220,38,38,0.35),transparent_70%)] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-dashed border-red-400/40 animate-spin-slow" />
                  <Globe2 className="w-7 h-7 text-red-400" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                Business-Driven Decisions
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Cross-functional alignment, clear technical communication, and product strategy that ships outcomes. Building zero-hallucination RAG platforms and automated compliance pipelines that directly eliminate operational overhead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
