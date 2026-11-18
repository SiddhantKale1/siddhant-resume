import { useState } from "react";
import { IntroLoader } from "@/components/IntroLoader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <IntroLoader onComplete={() => setLoaded(true)} />
      <Navbar />
      <div className={`min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-90"
      }`}>
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
