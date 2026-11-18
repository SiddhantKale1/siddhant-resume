import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Shield, Brain, Camera, Receipt, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  category: string;
  icon: typeof Shield;
  description: string;
  bullets: string[];
  tech: string[];
  github: string;
  live?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Brain Tumor Detection System",
    category: "Artificial Intelligence & CV",
    icon: Brain,
    description:
      "Deep Learning computer vision system utilizing Convolutional Neural Networks (CNN) with Grad-CAM visualization for high-accuracy MRI brain tumor diagnostic localization.",
    bullets: [
      "Developed a CNN-based MRI tumor detection system with Grad-CAM visualization for high-accuracy diagnostic localization.",
      "Built a Flask/FastAPI web application for seamless end-user predictions and real-time medical image visualization.",
      "Implemented advanced image preprocessing pipelines utilizing OpenCV for skull-stripping, contrast enhancement, and data augmentation.",
    ],
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "FastAPI", "Flask"],
    github: "https://github.com/SiddhantKale1/Brain-Tumor-Detection",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Smart Attendance System",
    category: "Computer Vision & Automation",
    icon: Camera,
    description:
      "AI-driven automated attendance tracking platform capturing real-time video streams, recognizing student faces, and generating structured compliance reports.",
    bullets: [
      "Built an AI-powered attendance system using OpenCV and Python featuring real-time video stream capture.",
      "Recognizes faces from classroom images, stores attendance securely in MongoDB, and automatically generates Excel reports.",
      "Reduced manual attendance management by automating face recognition and Excel report generation.",
    ],
    tech: ["Python", "OpenCV", "SQLite", "Flask", "MongoDB"],
    github: "https://github.com/SiddhantKale1",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Split It – Expense Management Platform",
    category: "Full-Stack Web Application",
    icon: Receipt,
    description:
      "Splitwise-inspired group expense settlement application designed to orchestrate clean MVC data storage and simplify group debt transactions.",
    bullets: [
      "Developed a Splitwise-inspired expense management application using Flask and MySQL to orchestrate clean MVC data storage.",
      "Implemented secure authentication, robust group management, precise expense tracking, and balanced settlement calculations.",
      "Integrated an exact simplified balance optimization algorithm to systematically calculate and minimize the net transactions required between group members.",
    ],
    tech: ["Python", "Flask", "MySQL", "REST APIs"],
    github: "https://github.com/SiddhantKale1/Split_It",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Security Information & Event Management (SIEM)",
    category: "Cybersecurity & Systems Observability",
    icon: Shield,
    description:
      "Enterprise security observability and endpoint telemetry system designed to ingest, correlate, and analyze security events across distributed Linux and server environments in real time.",
    bullets: [
      "Lightweight Python/Linux agent collecting system telemetry, auth logs, and process activities.",
      "FastAPI high-throughput backend with rule-based threat correlation & anomaly alerting.",
      "Interactive React & Tailwind security operations dashboard with visual attack heatmaps.",
    ],
    tech: ["FastAPI", "Python", "React", "TypeScript", "Linux", "Tailwind CSS"],
    github: "https://github.com/SiddhantKale1/SIEM-Dashboard-security-information-event-mangement-",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-12 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-primary font-semibold tracking-wider uppercase mb-2">
            // 01 &bull; Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Engineered Systems &amp; Applied AI
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
            Production-oriented software projects spanning deep learning medical vision, distributed telemetry ingestion, and algorithmic expense optimization.
          </p>
        </div>

        {/* Lead Flagship Project: SIEM Architecture */}
        <div className="mb-10 bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/40 transition-colors">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-border/60">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-primary font-medium">
                <Shield className="w-4 h-4" />
                <span>Distributed Systems &bull; Cybersecurity Telemetry</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Security Information &amp; Event Management (SIEM)
              </h3>
            </div>

            <a
              href="https://github.com/SiddhantKale1/SIEM-Dashboard-security-information-event-mangement-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-primary/10 text-foreground hover:text-primary text-xs font-mono font-medium border border-border transition-colors self-start lg:self-auto"
            >
              <Github className="w-4 h-4" />
              <span>github.com/SiddhantKale1/SIEM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-12 gap-8 pt-6">
            <div className="md:col-span-7 space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Enterprise security observability and endpoint telemetry system designed to ingest, correlate, and analyze security events across distributed Linux and server environments in real time.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/90 font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&rarr;</span>
                  <span>Lightweight Python/Linux agent collecting system telemetry, auth logs, and process activities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&rarr;</span>
                  <span>FastAPI high-throughput backend with rule-based threat correlation &amp; anomaly alerting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&rarr;</span>
                  <span>Interactive React &amp; Tailwind security operations dashboard with visual attack heatmaps.</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-5 flex flex-col justify-between bg-secondary/30 border border-border/60 rounded-lg p-5">
              <div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-3">
                  Architecture Components
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["FastAPI", "Python", "React", "TypeScript", "Linux Telemetry", "Tailwind CSS", "JWT Auth", "REST APIs"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-secondary text-xs font-mono text-foreground/90 border border-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Status: In Active Iteration</span>
                <span className="text-emerald-400 font-semibold">Engineered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Projects Grid (Resume Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.category}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      aria-label="GitHub Repo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs text-foreground/85">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5 text-xs font-mono">&gt;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-secondary text-[11px] font-mono text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between text-xs font-mono">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source repository</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Direct Link */}
        <div className="mt-12 p-6 rounded-xl bg-secondary/30 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-foreground">Explore More Engineering Repositories</h4>
            <p className="text-xs text-muted-foreground mt-0.5 font-mono">github.com/SiddhantKale1 &bull; Open Source Code &amp; Experiments</p>
          </div>
          <a
            href="https://github.com/SiddhantKale1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 text-foreground text-xs font-mono font-medium transition-colors"
          >
            <Github className="w-4 h-4 text-primary" />
            <span>Open GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};
