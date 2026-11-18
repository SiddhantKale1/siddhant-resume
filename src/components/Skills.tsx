import { useEffect, useRef, useState } from "react";
import { Code2, Database, Cloud, Wrench, Zap, GitBranch } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    color: "from-blue-500 to-cyan-500",
    skills: ["Python", "JavaScript", "HTML5", "CSS3", "C", "C++", "Java"],
  },
  {
    icon: Zap,
    title: "Frameworks & Web",
    color: "from-purple-500 to-pink-500",
    skills: ["React.js", "Flask", "FastAPI", "Node.js", "Express.js"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-green-500 to-emerald-500",
    skills: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    color: "from-orange-500 to-red-500",
    skills: ["AWS", "Google Cloud", "Git", "GitHub", "OpenCV", "REST APIs"],
  },
  {
    icon: GitBranch,
    title: "CS Fundamentals",
    color: "from-pink-500 to-rose-500",
    skills: ["Data Structures", "DBMS", "OOP", "Operating Systems", "Computer Networks"],
  },
  {
    icon: Wrench,
    title: "Dev & Systems",
    color: "from-indigo-500 to-violet-500",
    skills: ["Linux", "Docker", "Postman", "Tailwind CSS", "Microservices"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-12 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-primary font-semibold tracking-wider uppercase mb-2">
            // 02 &bull; Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Technical Stack &amp; Foundations
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
            Verified technical toolchain spanning systems programming, asynchronous APIs, relational &amp; NoSQL storage, and cloud infrastructure.
          </p>
        </div>

        {/* Technical Capabilities Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/60">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded bg-secondary text-primary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-mono text-sm font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {category.skills.length} tools
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded bg-secondary/70 border border-border/60 text-xs font-mono text-foreground/90 hover:border-primary/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span>Production verified</span>
                  <span className="text-primary font-semibold">&bull; Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-8 p-6 rounded-xl bg-secondary/20 border border-border/70 grid sm:grid-cols-3 gap-6 font-mono text-xs">
          <div>
            <div className="text-primary font-semibold mb-1">01 / Architecture First</div>
            <p className="text-muted-foreground leading-relaxed">
              Designing modular, decoupleable backend systems prioritizing throughput, reliability, and clean separation of concerns.
            </p>
          </div>
          <div>
            <div className="text-primary font-semibold mb-1">02 / Algorithmic Rigor</div>
            <p className="text-muted-foreground leading-relaxed">
              Applying exact algorithmic optimizations (graph debt reduction, CNN spatial heatmaps) to solve real domain bottlenecks.
            </p>
          </div>
          <div>
            <div className="text-primary font-semibold mb-1">03 / Continuous Delivery</div>
            <p className="text-muted-foreground leading-relaxed">
              Automated testing, containerized reproducible workflows, and verifiable observability from endpoint to dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
