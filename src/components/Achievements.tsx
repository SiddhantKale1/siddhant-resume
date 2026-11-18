import { useEffect, useRef, useState } from "react";
import { Award, Cloud, Database, Code, Globe2, Sparkles, CheckCircle2 } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  badge?: string;
  icon: typeof Award;
  color: string;
}

const certifications: Certification[] = [
  {
    title: "AWS Cloud Specialist Corporate",
    issuer: "Amazon Web Services (Corporate Program)",
    badge: "Honours Grade",
    icon: Cloud,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Google Cloud Vertex AI Skill Badge",
    issuer: "Google Cloud Platform",
    badge: "Verified Skill",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Python for Data Science",
    issuer: "Infosys Springboard",
    badge: "Certified",
    icon: Award,
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Database Management System Part-1",
    issuer: "Infosys Springboard",
    badge: "Certified",
    icon: Database,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    badge: "Certified",
    icon: Code,
    color: "from-red-500 to-pink-600",
  },
  {
    title: "AWS Fundamentals",
    issuer: "Udemy Professional Training",
    badge: "Certified",
    icon: Cloud,
    color: "from-yellow-500 to-amber-600",
  },
];

const languages = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Hindi", level: "Full Professional / Native" },
  { name: "Marathi", level: "Native / Mother Tongue" },
];

const softSkills = [
  "Analytical Problem Solving",
  "Distributed Teamwork & Collaboration",
  "Technical Communication",
  "Agile Adaptability",
  "Clean Code & Documentation",
  "System Architecture Thinking",
];

export const Achievements = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 md:px-12 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-primary font-semibold tracking-wider uppercase mb-2">
            // 04 &bull; Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Certifications &amp; Accreditations
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
            Corporate and industry training credentials across cloud infrastructure, database architecture, and machine learning.
          </p>
        </div>

        {/* Certifications Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded bg-secondary text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                    {cert.badge && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-secondary text-foreground/80 border border-border/60">
                        {cert.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/50 flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Credential verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages & Working Capabilities */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Spoken Languages */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-foreground font-mono">
              <Globe2 className="w-4 h-4 text-primary" />
              <span>Languages</span>
            </h3>
            <div className="space-y-3 font-mono text-xs">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/40 border border-border/60">
                  <span className="font-semibold text-foreground">{lang.name}</span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Strengths */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-foreground font-mono">
              <Award className="w-4 h-4 text-primary" />
              <span>Core Engineering Principles</span>
            </h3>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/60 text-foreground/90 hover:border-primary/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
