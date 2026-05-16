import ConnectSection from "@/components/ConnectSection";
import HeroBanner from "@/components/HeroBanner";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
    <HeroBanner></HeroBanner>
    <SkillsSection></SkillsSection>
    <ProjectsSection></ProjectsSection>
    <ConnectSection></ConnectSection>
    </>
  );
}
