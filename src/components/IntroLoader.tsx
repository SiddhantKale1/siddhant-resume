import { useState, useEffect } from "react";
import { Terminal, Shield, CheckCircle2, ChevronRight } from "lucide-react";

interface IntroLoaderProps {
  onComplete?: () => void;
}

export const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const logs = [
    { time: "0.012s", msg: "KERNEL: Initializing runtime architecture..." },
    { time: "0.145s", msg: "LOAD: Mounting FastAPI backend & Linux telemetry agents..." },
    { time: "0.298s", msg: "VISION: Compiling OpenCV & MRI diagnostic neural nets..." },
    { time: "0.412s", msg: "IDENTITY: Verified Siddhant Kale (B.E. Information Technology)..." },
    { time: "0.520s", msg: "SYSTEM: All services active. Dispatching portfolio UI..." },
  ];

  useEffect(() => {
    // Fast, crisp progress increments
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 18) + 12;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    // Sequential log reveals
    const stepInterval = setInterval(() => {
      setStep((prev) => {
        if (prev < logs.length) return prev + 1;
        clearInterval(stepInterval);
        return prev;
      });
    }, 240);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimeout = setTimeout(() => {
        setIsExiting(true);
      }, 350);

      const unmountTimeout = setTimeout(() => {
        setIsMounted(false);
        onComplete?.();
      }, 950);

      return () => {
        clearTimeout(exitTimeout);
        clearTimeout(unmountTimeout);
      };
    }
  }, [progress, onComplete]);

  // Handle immediate skip via click or ESC
  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsMounted(false);
      onComplete?.();
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col justify-between bg-[#07090e] cursor-pointer select-none transition-all duration-700 ${
        isExiting ? "opacity-0 pointer-events-none scale-[1.02]" : "opacity-100"
      }`}
    >
      {/* Top Telemetry Header */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-8 sm:pt-12 flex items-center justify-between font-mono text-xs text-muted-foreground border-b border-border/40 pb-4">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <Terminal className="w-4 h-4 text-primary" />
          <span>BOOT_SEQUENCE_V2.0</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px]">
          <span>HOST: mumbai-core-01</span>
          <span className="text-border">|</span>
          <span className="text-primary">ARCH: x86_64_LINUX</span>
        </div>
        <div className="text-[11px] text-muted-foreground/80 hover:text-foreground transition-colors">
          [Click or ESC to skip]
        </div>
      </div>

      {/* Center Cinematic Display */}
      <div className="w-full max-w-xl mx-auto px-6 py-12 flex flex-col items-center text-center">
        {/* Monogram Badge */}
        <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center text-primary font-mono text-xl font-bold mb-6 shadow-2xl shadow-primary/10">
          SK
        </div>

        {/* Identity Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-sans mb-3">
          Siddhant Kale
        </h1>
        <p className="font-mono text-xs sm:text-sm text-primary tracking-wide mb-8">
          Software Engineer &bull; Backend Systems &bull; Applied AI
        </p>

        {/* Real-time Telemetry Boot Log Console */}
        <div className="w-full bg-card/80 border border-border/80 rounded-lg p-4 font-mono text-[11px] sm:text-xs text-left mb-8 shadow-xl min-h-[160px] flex flex-col justify-start space-y-2">
          {logs.slice(0, step).map((log, idx) => (
            <div key={idx} className="flex items-start gap-2 leading-relaxed">
              <span className="text-primary font-semibold">&gt;</span>
              <span className="text-muted-foreground">{log.time}</span>
              <span className="text-foreground/90">{log.msg}</span>
            </div>
          ))}
          {step < logs.length && (
            <div className="flex items-center gap-2 text-muted-foreground animate-pulse">
              <span className="text-primary font-semibold">&gt;</span>
              <span>Loading module {step + 1}/{logs.length}...</span>
            </div>
          )}
        </div>

        {/* Progress Bar & Percentage Counter */}
        <div className="w-full space-y-2">
          <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-150 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground pt-1">
            <span>INITIALIZING SYSTEMS</span>
            <span className="text-primary font-bold">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Footer System Status */}
      <div className="w-full max-w-7xl mx-auto px-6 pb-8 sm:pb-12 flex items-center justify-between font-mono text-[11px] text-muted-foreground border-t border-border/40 pt-4">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>STATUS: ONLINE</span>
        </span>
        <span className="text-foreground/80">VCET &bull; Mumbai University &bull; 2027</span>
      </div>
    </div>
  );
};
