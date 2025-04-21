
import React from "react";
import HeroSection from "./components/HeroSection";
import WorkExperience from "./components/WorkExperience";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const Portfolio2 = () => {
  return (
    <div className="bg-[#0D0D0D] text-white font-sans scroll-smooth">
      <HeroSection />
      <WorkExperience />
      <ProjectSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio2;
