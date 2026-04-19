import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResearchSection from "@/components/ResearchSection";
import GallerySection from "@/components/GallerySection";
import PublicationsSection from "@/components/PublicationsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ResearchSection />
        <GallerySection />
        <PublicationsSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
