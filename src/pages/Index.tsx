import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Capabilities } from "@/components/Capabilities";
import { Milestones } from "@/components/Milestones";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#08080A] text-white selection:bg-red-500/20 selection:text-red-400 relative overflow-x-hidden">
      {/* Global flowing ambient crimson backlight down the right edge */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[8%] -right-[15%] w-[850px] h-[850px] bg-red-600/[0.12] rounded-full blur-[170px]" />
        <div className="absolute top-[35%] -right-[10%] w-[700px] h-[700px] bg-red-600/[0.08] rounded-full blur-[190px]" />
        <div className="absolute top-[65%] -left-[10%] w-[650px] h-[650px] bg-red-600/[0.06] rounded-full blur-[200px]" />
        <div className="absolute top-[85%] -right-[10%] w-[800px] h-[800px] bg-red-600/[0.08] rounded-full blur-[180px]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Projects />
        <Capabilities />
        <Milestones />
        <Philosophy />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
