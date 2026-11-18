import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight, FileDown, Terminal, Sparkles, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 md:px-12 pt-28 pb-16">
      {/* Animated background glow elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left column - Introduction & Bio */}
        <div className="lg:col-span-7 animate-fade-in">
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm shadow-sm hover:border-primary/40 transition-all">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
            <span className="w-2 h-2 bg-primary rounded-full -ml-4" />
            <span>Seeking Entry-Level Software Engineer Roles</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-foreground leading-[1.1]">
            Hi, I'm <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Siddhant Kale
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-primary/90 font-mono font-medium mb-4">
            Software Engineer &bull; Python Developer &bull; Backend Development &bull; Cloud &amp; DevOps Enthusiast
          </p>

          {/* Executive Summary */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
            Final-year Information Technology student with hands-on experience in software development, backend engineering, artificial intelligence, and cloud technologies. Skilled in <span className="text-foreground font-medium">Python, React, FastAPI, Flask, MongoDB, MySQL, OpenCV, and AWS</span>. Passionate about building scalable applications, solving real-world problems, and continuously learning modern software engineering practices. Seeking an entry-level Software Engineer role.
          </p>

          {/* Quick Contact Chips */}
          <div className="flex flex-wrap gap-y-2 gap-x-5 mb-8 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Mumbai, India</span>
            </div>
            <a href="tel:+918108901398" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 8108901398</span>
            </a>
            <a href="mailto:siddhantkalework@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              <span>siddhantkalework@gmail.com</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="/Siddhant_Kale_Resume.pdf"
              download="Siddhant_Kale_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>

            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-border bg-card/60 hover:bg-primary/10 hover:border-primary/50 text-foreground font-medium text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-200"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 text-primary" />
            </Button>

            <a
              href="https://github.com/SiddhantKale1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl border border-border bg-card/60 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/siddhant-kale-301807318/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl border border-border bg-card/60 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right column - Interactive Code / Terminal Showcase */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className="w-full max-w-lg bg-card/90 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-black/40 overflow-hidden transition-transform duration-300 hover:border-primary/40"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.4}deg) rotateX(${-mousePosition.y * 0.4}deg)`,
            }}
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-secondary/60 border-b border-border text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-muted-foreground/80 font-mono text-xs">siddhant@mumbai:~</span>
              </div>
              <Terminal className="w-3.5 h-3.5 text-primary" />
            </div>

            {/* Terminal Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm space-y-3 bg-black/40">
              <div className="text-muted-foreground">
                <span className="text-primary">$</span> cat profile.json
              </div>

              <div className="text-foreground/90 pl-2 border-l border-primary/30 space-y-1">
                <div>&#123;</div>
                <div className="pl-4">
                  <span className="text-primary font-semibold">"name"</span>: <span className="text-emerald-400">"Siddhant Kale"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary font-semibold">"title"</span>: <span className="text-emerald-400">"Software Engineer | Python Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary font-semibold">"focus"</span>: <span className="text-cyan-300">"Backend Development &amp; Cloud DevOps"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary font-semibold">"degree"</span>: <span className="text-muted-foreground">"B.E. Information Technology (VCET, 2027)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary font-semibold">"latestSemCGPA"</span>: <span className="text-amber-400 font-bold">7.17</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary font-semibold">"coreStack"</span>: [
                  <div className="pl-4 text-cyan-300">
                    "Python", "FastAPI", "Flask", "React", "AWS", "MongoDB", "MySQL", "OpenCV"
                  </div>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-primary font-semibold">"openForWork"</span>: <span className="text-green-400 font-bold">true</span>
                </div>
                <div>&#125;</div>
              </div>

              <div className="pt-2 text-muted-foreground">
                <span className="text-primary">$</span> systemctl status readiness.service
                <div className="text-emerald-400 flex items-center gap-1.5 mt-1 font-sans text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Active: ready to deploy scalable systems &amp; solve tough problems</span>
                </div>
              </div>
            </div>

            {/* Terminal Footer Quick Stat */}
            <div className="px-5 py-3 bg-secondary/30 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Available for Full-Time Roles
              </span>
              <span className="font-mono text-primary font-medium">Graduating 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
