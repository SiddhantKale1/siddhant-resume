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
    title: "Python for Data Science",
    issuer: "Infosys Springboard",
    badge: "Certified",
    icon: Award,
    color: "from-indigo-500 to-violet-600",
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-28 px-4 sm:px-6 md:px-12 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium">
              Credentials &amp; Verification
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Certifications &amp; <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Badges</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Industry and corporate credentials demonstrating expertise in cloud infrastructure, databases, and AI.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className={`relative bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 flex flex-col justify-between ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${cert.color} text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {cert.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold">
                        {cert.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border/50 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Credential Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spoken Languages & Core Competencies */}
        <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Spoken Languages */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
              <Globe2 className="w-5 h-5 text-primary" />
              <span>Languages</span>
            </h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-3 rounded-xl bg-secondary/40 border border-border/60">
                  <span className="font-semibold text-foreground text-sm">{lang.name}</span>
                  <span className="text-xs text-muted-foreground font-mono">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Strengths */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
              <Award className="w-5 h-5 text-primary" />
              <span>Professional Strengths</span>
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 rounded-xl bg-secondary/50 border border-border text-xs sm:text-sm text-foreground/90 font-medium hover:border-primary/40 hover:bg-primary/5 transition-colors"
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
