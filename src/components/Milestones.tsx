import { GraduationCap, Briefcase, Award, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { SquircleGrid } from "./SquircleGrid";

export const Milestones = () => {
  const milestones = [
    {
      role: "Systems & Backend Software Engineer",
      organization: "Autonomous Projects & Open Source",
      period: "2024 — Present",
      location: "Mumbai, India",
      bullets: [
        "Spearheaded Sentinel autonomous SIEM platform with compiled Golang engine sustaining 12,480+ EPS and 27µs event parsing.",
        "Built cross-platform telemetry collectors in Go & Python enforcing kernel quarantine isolation via Linux iptables.",
        "Architected Cognivex enterprise RAG platform with Qdrant vector database and PyMuPDF for zero-hallucination technical document retrieval.",
      ],
      badge: "Production Systems",
    },
    {
      role: "Bachelor of Engineering in Information Technology",
      organization: "Vidyavardhini College of Engineering, Mumbai University",
      period: "2023 — 2027",
      location: "Mumbai, India",
      bullets: [
        "First Class Standing with 7.17 / 10.0 CGPA.",
        "Advanced Core Coursework: Distributed Systems, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Object-Oriented Programming.",
        "Active member of engineering student chapters and technical symposiums.",
      ],
      badge: "7.17 CGPA",
    },
    {
      role: "Cloud & Enterprise Systems Accreditations",
      organization: "AWS • Google Cloud • Infosys Springboard",
      period: "2024 — 2026",
      location: "Verified Credentials",
      bullets: [
        "AWS Cloud Specialist Corporate — Honours Grade certification.",
        "Google Cloud Platform — Vertex AI Verified Skill Badge.",
        "Infosys Springboard Certifications in Python for Data Science, Database Management Systems Part-1, and Java Programming Fundamentals.",
      ],
      badge: "6+ Certifications",
    },
  ];

  return (
    <section id="milestones" className="relative py-16 sm:py-32 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        {/* Centered Header - Exact matching reference typography */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase font-medium mb-3">
            EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
            Professional <span className="font-bold">milestones &amp; impact</span>
          </h2>
        </div>

        {/* Split Grid: Left Photo Card, Right Timeline */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Portrait Card with Red Squircle Grid (Matching Screenshot) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl sm:rounded-[22px] bg-[#0E0F14]/90 border border-white/[0.07] p-5 relative overflow-hidden group shadow-2xl backdrop-blur-sm">
              {/* Red squircle glow behind portrait inside card */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(190,24,24,0.42),transparent_70%)] pointer-events-none" />

              {/* Squircle pattern inside card */}
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <SquircleGrid glowPosition="none" />
              </div>

              {/* Portrait Container with white contour outline */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-black/60 border border-white/5 flex items-end justify-center">
                <img
                  src="/sidd_hero.png"
                  alt="Siddhant Kale Portrait"
                  className="w-full h-auto object-contain object-bottom max-h-[380px] select-none group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-60" />
              </div>

              {/* Badge underneath */}
              <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between relative z-10">
                <div>
                  <h4 className="text-sm font-bold text-white">Siddhant Kale</h4>
                  <p className="text-xs text-zinc-400 font-mono">Software Engineer &bull; B.E. IT 2027</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs">
                  Active
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Milestones Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {milestones.map((item, idx) => (
              <div
                key={item.role}
                className="rounded-2xl sm:rounded-[22px] bg-[#0E0F14]/90 border border-white/[0.07] hover:border-red-500/35 p-6 sm:p-7 transition-all duration-200 space-y-4 shadow-xl backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                  <div>
                    <span className="text-xs font-mono text-red-400 font-medium block">
                      {item.organization}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
                      {item.period}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-300">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-red-500 mt-1">&bull;</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
