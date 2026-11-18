import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, MapPin, FileDown, ArrowRight } from "lucide-react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stage, setStage] = useState<"intro" | "exiting" | "settled">("intro");

  useEffect(() => {
    // Stage 1: Intro animation glides in (photo left, name right)
    // At 1.6s, begin fluid crossfade exit into settled state
    const exitTimer = setTimeout(() => {
      setStage("exiting");
    }, 1600);

    // At 2.3s (after 700ms smooth crossfade), cleanly unmount intro overlay
    const settledTimer = setTimeout(() => {
      setStage("settled");
    }, 2300);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        setStage("settled");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(settledTimer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkip = () => {
    setStage("settled");
  };

  return (
    <>
      {/* ── Start Animation Overlay (Photo from Left, Name from Right) ── */}
      {stage !== "settled" && (
        <div
          onClick={handleSkip}
          className={`fixed inset-0 z-50 bg-[#07090e] flex items-center justify-center px-6 sm:px-12 md:px-20 cursor-pointer select-none overflow-hidden transition-all duration-700 ease-out ${
            stage === "exiting" ? "opacity-0 scale-[1.02] pointer-events-none" : "opacity-100 scale-100"
          }`}
        >
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e243015_1px,transparent_1px),linear-gradient(to_bottom,#1e243015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
            {/* Photo glides in smoothly from LEFT */}
            <div className="animate-slide-from-left flex justify-center md:justify-end">
              <div className="relative group max-w-[260px] sm:max-w-[320px] md:max-w-[380px]">
                {/* Ambient glow behind card */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/40 to-accent/30 blur-2xl opacity-75" />
                <img
                  src="/sidd_image.jpeg"
                  alt="Siddhant Kale"
                  className="relative rounded-2xl shadow-2xl object-cover w-full aspect-[4/5] border border-border/80"
                />
              </div>
            </div>

            {/* Name glides in smoothly from RIGHT */}
            <div className="animate-slide-from-right text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-border text-primary font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span>Software Engineer &bull; Systems &amp; AI</span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-foreground leading-[1.02]">
                Siddhant <br className="hidden md:inline" />
                Kale
              </h1>

              <p className="text-sm sm:text-base font-mono text-muted-foreground pt-1">
                Backend Architectures &bull; Telemetry &bull; Computer Vision
              </p>
            </div>
          </div>

          {/* Skip cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground/60">
            [ Click or press ESC to skip ]
          </div>
        </div>
      )}

      {/* ── Main Hero Section (Fluidly Revealed, Photo Settled in Background) ── */}
      <section
        id="about"
        className={`min-h-screen flex items-center relative overflow-hidden px-6 sm:px-12 md:px-16 pt-24 pb-16 transition-opacity duration-700 ease-out ${
          stage === "intro" ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Subtle structural grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e24300f_1px,transparent_1px),linear-gradient(to_bottom,#1e24300f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Permanent Photo Settled in Background (Right side & ambient blend) */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-7/12 h-[88vh] pointer-events-none z-0 flex items-center justify-center md:justify-end pr-0 md:pr-10 lg:pr-20 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.4}px, calc(-50% + ${mousePosition.y * 0.4}px))`,
          }}
        >
          {/* Ambient Glow behind portrait */}
          <div className="absolute w-[450px] h-[450px] bg-primary/15 rounded-full blur-[130px] pointer-events-none" />

          {/* Portrait with seamless obsidian vignette edge mask */}
          <div className="relative max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] h-full flex items-center">
            <img
              src="/sidd_image.jpeg"
              alt="Siddhant Kale Portrait"
              className="w-full h-auto max-h-[82vh] object-cover object-top opacity-30 md:opacity-55 hover:opacity-75 transition-opacity duration-700"
              style={{
                maskImage:
                  "radial-gradient(ellipse 95% 85% at 60% 45%, black 45%, transparent 95%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 95% 85% at 60% 45%, black 45%, transparent 95%)",
              }}
            />
          </div>
        </div>

        {/* Foreground Content (Left column, clean, bold & spacious) */}
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-8 lg:col-span-7">
            {/* Tag */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/80 border border-border text-muted-foreground text-xs font-mono font-medium">
                Software Engineer &bull; Backend &bull; Cloud &bull; AI
              </span>
            </div>

            {/* Bold Headline Name */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-6">
              Siddhant Kale
            </h1>

            {/* Single clean subtitle */}
            <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-8 max-w-xl leading-relaxed">
              Software Engineer specializing in scalable Python backends, distributed systems, and computer vision.
            </p>

            {/* Contact Chips */}
            <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Mumbai, India</span>
              </div>
              <a
                href="mailto:siddhantkalework@gmail.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>siddhantkalework@gmail.com</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap items-center">
              {/* Download Resume Button */}
              <a
                href="/Siddhant_Kale_Resume.pdf"
                download="Siddhant_Kale_Resume.pdf"
                className="inline-flex items-center px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base shadow-sm transition"
              >
                <FileDown className="w-4 h-4 mr-2" />
                Download Resume
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/siddhant-kale-301807318/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 rounded-lg border border-border hover:bg-secondary text-foreground font-medium text-base transition"
              >
                <Linkedin className="w-4 h-4 mr-2 text-primary" />
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/SiddhantKale1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 rounded-lg border border-border hover:bg-secondary text-foreground font-medium text-base transition"
              >
                <Github className="w-4 h-4 mr-2 text-primary" />
                GitHub
              </a>

              {/* View Projects */}
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary font-medium text-base"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
