import AboutSection from "@/components/AboutSection";
import ConnectSection from "@/components/ConnectSection";
import HeroBanner from "@/components/HeroBanner";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
    <HeroBanner></HeroBanner>
    <AboutSection></AboutSection>
    <SkillsSection></SkillsSection>
    <ProjectsSection></ProjectsSection>
    <ConnectSection></ConnectSection>
    </>
  );
}
