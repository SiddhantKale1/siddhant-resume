import { Download, ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { SquircleGrid } from "./SquircleGrid";

export const Hero = () => {
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
      {/* Background squircle grid with rich ambient backlight */}
      <SquircleGrid glowPosition="right" />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full flex-1 flex items-end relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end w-full pb-4">
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 sm:space-y-7 pb-8 lg:pb-12 relative z-20">
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

          {/* Right Column: Hero Portrait with Subtle, Tasteful Celestial God Rays */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-end justify-center lg:justify-end">
            <div className="animate-blur-reveal [animation-delay:280ms] relative w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[760px] xl:max-w-[820px] flex justify-center lg:justify-end lg:translate-x-8 xl:translate-x-12">
              
              {/* ======================================================== */}
              {/* COMPACT PURE WHITE LIGHT RAYS (Behind Back at Chest Level) */}
              {/* ======================================================== */}
              <div className="absolute top-[46%] left-[53%] -translate-x-1/2 -translate-y-1/2 w-[560px] sm:w-[680px] h-[560px] sm:h-[680px] pointer-events-none select-none z-0 flex items-center justify-center">
                
                {/* 1. Soft Pure White Ambient Backlight */}
                <div className="absolute w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_40%,transparent_70%)] blur-[55px]" />

                {/* 2. Secondary Translucent White Rays (Counter-Rotating) */}
                <div 
                  className="absolute w-[540px] sm:w-[660px] h-[540px] sm:h-[660px] rounded-full animate-spin-reverse-slow opacity-25"
                  style={{
                    background: `repeating-conic-gradient(
                      from 20deg at 50% 50%,
                      rgba(255, 255, 255, 0.22) 0deg 8deg,
                      transparent 8deg 24deg,
                      rgba(255, 255, 255, 0.14) 24deg 38deg,
                      transparent 38deg 52deg,
                      rgba(255, 255, 255, 0.20) 52deg 62deg,
                      transparent 62deg 78deg
                    )`,
                    maskImage: "radial-gradient(circle at center, black 15%, rgba(0,0,0,0.7) 38%, transparent 62%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 15%, rgba(0,0,0,0.7) 38%, transparent 62%)",
                    filter: "blur(12px)",
                  }}
                />

                {/* 3. Primary Compact White God Rays (Rotating) */}
                <div 
                  className="absolute w-[520px] sm:w-[640px] h-[520px] sm:h-[640px] rounded-full animate-spin-slow opacity-30"
                  style={{
                    background: `repeating-conic-gradient(
                      from 0deg at 50% 50%,
                      rgba(255, 255, 255, 0.32) 0deg 4deg,
                      transparent 4deg 16deg,
                      rgba(255, 255, 255, 0.22) 16deg 24deg,
                      transparent 24deg 38deg,
                      rgba(255, 255, 255, 0.28) 38deg 46deg,
                      transparent 46deg 60deg,
                      rgba(255, 255, 255, 0.24) 60deg 68deg,
                      transparent 68deg 82deg
                    )`,
                    maskImage: "radial-gradient(circle at center, black 15%, rgba(0,0,0,0.8) 35%, transparent 60%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 15%, rgba(0,0,0,0.8) 35%, transparent 60%)",
                    filter: "blur(7px)",
                  }}
                />

                {/* 4. Crisp White Light Core at Chest Level */}
                <div 
                  className="absolute w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full"
                  style={{
                    background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.22) 32%, transparent 70%)",
                    filter: "blur(22px)",
                  }}
                />
              </div>

              {/* The Backlit Portrait - Crisp White Rim Lighting */}
              <img
                src="/sidd_hero.png"
                alt="Siddhant Kale — Software Engineer"
                className="w-full h-auto object-contain object-bottom max-h-[780px] xl:max-h-[860px] select-none pointer-events-none relative z-10"
                style={{
                  filter: "drop-shadow(0 0 22px rgba(255, 255, 255, 0.22))",
                }}
              />

              {/* Luminous Silhouette Contour Shimmer: Pure White Light Gleam */}
              <div
                className="absolute inset-0 pointer-events-none select-none overflow-hidden z-20"
                style={{
                  maskImage: "url(/sidd_rim_stroke.png)",
                  WebkitMaskImage: "url(/sidd_rim_stroke.png)",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskPosition: "bottom",
                  WebkitMaskPosition: "bottom",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                }}
              >
                <div
                  className="absolute -left-[20%] w-[140%] h-[180px] bg-gradient-to-b from-transparent via-white to-transparent animate-contour-shimmer blur-[1.5px]"
                  style={{
                    filter: "drop-shadow(0 0 12px #ffffff)",
                    mixBlendMode: "screen",
                  }}
                />
              </div>

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
