import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import PhilosophySection from "@/components/PhilosophySection";
import OverviewSection from "@/components/OverviewSection";
import RoadmapSection from "@/components/RoadmapSection";
import SyllabusSection from "@/components/SyllabusSection";
import IntegratedLabsSection from "@/components/IntegratedLabsSection";
import ToolsSection from "@/components/ToolsSection";
import CaseStudySection from "@/components/CaseStudySection";
import AssessmentSection from "@/components/AssessmentSection";
import CapstoneSection from "@/components/CapstoneSection";
import InstructorSection from "@/components/InstructorSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhySection />
      <PhilosophySection />
      <OverviewSection />
      <RoadmapSection />
      <SyllabusSection />
      <IntegratedLabsSection />
      <ToolsSection />
      <CaseStudySection />
      <AssessmentSection />
      <CapstoneSection />
      <InstructorSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
