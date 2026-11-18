import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </>
  );
};

export default Index;
