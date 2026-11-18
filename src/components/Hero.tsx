import { useEffect, useState } from "react";
import { Download, ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { SquircleGrid } from "./SquircleGrid";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (e.clientX / innerWidth - 0.5) * 15,
        y: (e.clientY / innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    { name: "node", style: "font-mono font-bold tracking-tight text-sm text-zinc-400" },
    { name: "redis", style: "font-sans font-medium text-sm text-zinc-400" },
    { name: "NEXT.js", style: "font-sans font-bold text-sm tracking-wider text-zinc-300" },
    { name: "aws", style: "font-sans font-bold text-sm lowercase text-zinc-400" },
    { name: "GraphQL", style: "font-sans font-medium text-sm text-zinc-400" },
    { name: "TypeScript", style: "font-sans font-medium text-sm text-zinc-300" },
    { name: "PostgreSQL", style: "font-sans font-medium text-sm text-zinc-400" },
    { name: "Go (Golang)", style: "font-sans font-bold text-sm tracking-wide text-zinc-300" },
    { name: "Python", style: "font-sans font-medium text-sm text-zinc-400" },
    { name: "FastAPI", style: "font-sans font-semibold text-sm text-zinc-300" },
    { name: "Docker", style: "font-sans font-medium text-sm text-zinc-400" },
    { name: "Qdrant", style: "font-sans font-semibold text-sm text-zinc-300" },
  ];

  return (
    <section className="relative min-h-screen bg-[#08080A] text-white flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6">
      {/* Background squircle grid with rich red ambient glow behind the subject */}
      <SquircleGrid glowPosition="right" />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full flex-1 flex items-end relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end w-full pb-4">
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 sm:space-y-7 pb-8 lg:pb-12">
            {/* Bold Hero Headline - Staggered Kinetic Blur Reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-normal tracking-[-0.03em] text-white leading-[1.12]">
              <span className="block animate-blur-reveal [animation-delay:120ms]">
                Building <span className="font-bold">things that</span>
              </span>
              <span className="block animate-blur-reveal [animation-delay:260ms]">
                <span className="font-bold">shouldn't exist yet</span>
              </span>
              <span className="block animate-blur-reveal [animation-delay:400ms]">
                for the curious <span className="font-bold">few</span>
              </span>
            </h1>

            {/* Subtitle / Value Proposition - Staggered Blur Reveal */}
            <p className="animate-blur-reveal [animation-delay:550ms] text-sm sm:text-[15px] text-zinc-400 font-normal max-w-[430px] leading-relaxed">
              Software, systems, and digital artifacts engineered without compromise. Designed for those who appreciate depth, speed, and original thinking.
            </p>

            {/* Action Buttons: Exact rectangular-pill shape from reference */}
            <div className="animate-blur-reveal [animation-delay:700ms] flex items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-7 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-all duration-200 shadow-xl shadow-white/5 active:scale-95"
              >
                Let's Talk
              </button>

              <a
                href="/Siddhant_Kale_Resume.pdf"
                download="Siddhant_Kale_Resume.pdf"
                className="px-6 py-3 rounded-xl bg-transparent hover:bg-white/[0.04] text-white border border-white/20 font-medium text-sm transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-zinc-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait with White Contour Outline - Big and grounded */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-end justify-center lg:justify-end">
            <div
              className="animate-blur-reveal [animation-delay:280ms] relative w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[760px] xl:max-w-[820px] transition-transform duration-500 ease-out flex justify-center lg:justify-end lg:translate-x-8 xl:translate-x-12"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              <img
                src="/sidd_hero.png"
                alt="Siddhant Kale — Software Engineer"
                className="w-full h-auto object-contain object-bottom max-h-[780px] xl:max-h-[860px] select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Tech Stack Ticker (Seamless Infinite Auto-scrolling Marquee without top border) */}
      <div className="w-full pt-4 relative z-10 overflow-hidden">
        <div
          className="w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="flex w-max items-center gap-12 sm:gap-16 py-3 animate-marquee hover:[animation-play-state:paused]">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className={`whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity cursor-default ${tech.style}`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
