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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-4 sm:px-6 md:px-12 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium">
              Portfolio &amp; Engineering Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Featured <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            End-to-end applications demonstrating backend architecture, systems security, computer vision, and machine learning.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`group relative bg-card/90 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 flex flex-col justify-between ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Top gradient highlight banner */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Category and icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} text-white shadow-md`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                        {project.category}
                      </span>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      aria-label="GitHub Repository"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-foreground/80 flex-1">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-primary mt-1 text-sm leading-none">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-secondary/80 border border-border/80 text-xs font-mono text-muted-foreground group-hover:border-primary/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-secondary/50 hover:bg-primary/10 hover:border-primary/50 text-xs sm:text-sm font-medium transition-all"
                    >
                      <Github className="w-4 h-4 text-primary" />
                      <span>View Source</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Want to see more code repositories and open-source contributions?
          </p>
          <a
            href="https://github.com/SiddhantKale1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 bg-card hover:bg-primary/10 text-primary font-medium text-sm transition-all hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>Visit @SiddhantKale1 on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
