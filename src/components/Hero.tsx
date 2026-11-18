import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight, FileDown, Terminal, CheckCircle2, Play, Code2, Cpu } from "lucide-react";

export const Hero = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "skills" | "projects" | "readiness">("profile");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-12 pt-28 pb-16">
      {/* Subtle structural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e24300f_1px,transparent_1px),linear-gradient(to_bottom,#1e24300f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Authoritative Editorial Introduction */}
        <div className="lg:col-span-7">
          {/* Engineering Status Bar */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-md bg-secondary/60 border border-border text-xs font-mono text-muted-foreground mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-foreground font-medium">B.E. IT &bull; Class of 2027</span>
            <span className="text-border">|</span>
            <span className="text-primary font-medium">Available for SWE Roles</span>
          </div>

          {/* Primary Name Display */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-4">
            Siddhant Kale
          </h1>

          {/* Role Specification */}
          <p className="text-base sm:text-lg md:text-xl font-mono text-primary font-medium tracking-tight mb-5">
            Software Engineer &bull; Backend Systems &bull; AI / Computer Vision
          </p>

          {/* Core Biography / Executive Summary */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
            Final-year Information Technology student at <span className="text-foreground font-medium">Vidyavardhini College of Engineering, Mumbai University</span> (CGPA 7.17). Hands-on experience architecting distributed backends, endpoint telemetry pipelines, and computer vision diagnostic systems using <span className="text-foreground font-medium">Python, FastAPI, React, OpenCV, and AWS</span>.
          </p>

          {/* Direct Technical Endpoints */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mb-8 text-xs sm:text-sm font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Mumbai, India</span>
            </div>
            <a href="tel:+918108901398" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>+91 8108901398</span>
            </a>
            <a href="mailto:siddhantkalework@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span>siddhantkalework@gmail.com</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Siddhant_Kale_Resume.pdf"
              download="Siddhant_Kale_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 shadow-sm transition-all"
            >
              <FileDown className="w-4 h-4" />
              Download Resume (PDF)
            </a>

            <Button
              variant="outline"
              size="default"
              className="rounded-lg border-border bg-card/80 hover:bg-secondary hover:text-foreground text-foreground text-sm font-medium transition-all"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-1.5 text-primary" />
            </Button>

            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/SiddhantKale1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg border border-border bg-card/80 hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/siddhant-kale-301807318/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg border border-border bg-card/80 hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Memorable Flagship Interactive Terminal */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-lg bg-card border border-border rounded-xl shadow-xl shadow-black/30 overflow-hidden font-mono text-xs">
            {/* Terminal Header & Interactive Command Tabs */}
            <div className="bg-secondary/70 border-b border-border p-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-muted-foreground text-[11px] ml-1">sh - console</span>
              </div>

              {/* Quick Tab Selector */}
              <div className="flex items-center gap-1 bg-background/60 p-0.5 rounded border border-border/80">
                {(["profile", "skills", "projects", "readiness"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-secondary text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Screen Content */}
            <div className="p-5 min-h-[300px] bg-[#090b10] text-muted-foreground leading-relaxed flex flex-col justify-between">
              {activeTab === "profile" && (
                <div className="space-y-3">
                  <div className="text-foreground">
                    <span className="text-primary font-bold">$</span> cat developer.profile
                  </div>
                  <div className="text-xs space-y-1 pl-3 border-l border-border/60">
                    <div><span className="text-primary">name</span>: <span className="text-foreground">"Siddhant Kale"</span></div>
                    <div><span className="text-primary">role</span>: <span className="text-foreground">"Software Engineer | Python Developer"</span></div>
                    <div><span className="text-primary">education</span>: <span className="text-foreground">"B.E. IT, Vidyavardhini College (2027)"</span></div>
                    <div><span className="text-primary">cgpa</span>: <span className="text-primary font-bold">7.17 / 10.0</span></div>
                    <div><span className="text-primary">location</span>: <span className="text-foreground">"Mumbai, India"</span></div>
                    <div><span className="text-primary">status</span>: <span className="text-emerald-400 font-bold">"Actively Interviewing"</span></div>
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="space-y-3">
                  <div className="text-foreground">
                    <span className="text-primary font-bold">$</span> sysctl -a | grep tech.stack
                  </div>
                  <div className="text-xs space-y-2 pl-3 border-l border-border/60">
                    <div>
                      <span className="text-primary">languages</span> = [Python, JavaScript, HTML5, CSS3, C, C++, Java]
                    </div>
                    <div>
                      <span className="text-primary">frameworks</span> = [FastAPI, Flask, React.js, Node.js, Express.js]
                    </div>
                    <div>
                      <span className="text-primary">databases</span> = [MongoDB, MySQL, SQLite]
                    </div>
                    <div>
                      <span className="text-primary">cloud_tools</span> = [AWS, Google Cloud, OpenCV, Git, REST APIs]
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "projects" && (
                <div className="space-y-3">
                  <div className="text-foreground">
                    <span className="text-primary font-bold">$</span> git log --oneline -n 3
                  </div>
                  <div className="text-xs space-y-1.5 pl-3 border-l border-border/60">
                    <div>
                      <span className="text-primary font-bold">01. Tumor-Detection</span>: CNN + Grad-CAM MRI diagnostic vision
                    </div>
                    <div>
                      <span className="text-primary font-bold">02. Smart-Attendance</span>: OpenCV video stream &amp; MongoDB
                    </div>
                    <div>
                      <span className="text-primary font-bold">03. Split-It</span>: Graph balance debt-minimization engine
                    </div>
                    <div>
                      <span className="text-primary font-bold">04. SIEM-Platform</span>: Distributed Linux endpoint telemetry
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "readiness" && (
                <div className="space-y-3">
                  <div className="text-foreground">
                    <span className="text-primary font-bold">$</span> systemctl status engineer.service
                  </div>
                  <div className="text-xs space-y-1.5 pl-3 border-l border-border/60">
                    <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Loaded &amp; Active (Running)</span>
                    </div>
                    <div>&bull; Clean code principles &amp; MVC system design</div>
                    <div>&bull; Strong CS foundations: DSA, OS, DBMS, Networks</div>
                    <div>&bull; Ready to ship scalable backend and AI services</div>
                  </div>
                </div>
              )}

              {/* Terminal Footer Prompt */}
              <div className="pt-4 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground/80">
                <span className="flex items-center gap-1 text-primary">
                  <span className="animate-pulse">&gt;</span> ready for prompt
                </span>
                <span>UTF-8 &bull; Linux x86_64</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
