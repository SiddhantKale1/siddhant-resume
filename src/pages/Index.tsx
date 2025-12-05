import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen">
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
