import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <CertificatesSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
