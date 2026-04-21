"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from '@studio-freight/lenis'; 
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export const galleryImages = [
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/e46e740a-8e79-4802-9df5-5229af14c458/D9E9551D-6C17-44B5-81C5-456DF3B34534D2C703AF-0DC3-45E2-838E-C2C741DC9BD7.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/c0f420c5-67fc-48ac-978f-43fbbe2fd76f/BEDF1DA6-5240-483F-844F-B7442A7A91D803FC0B36-0AF9-4CE2-BF3E-A9118202D179.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/a1f8a55c-4630-4aae-a080-bd0e91b4f700/53B2BEB4-CC0C-4FA6-9CFE-9FBD193459E55429A2BD-7FBA-4D7F-833A-6AF625129B9C.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/f3fed177-9e6b-4667-b29f-bb5fff20a6e0/A1674F3A-EFB1-440C-8A4A-6FE0EEE2A074.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/06125a4f-d2d3-4347-8214-472aa7e80d90/1AF2E98E-1B95-4CAB-9378-08C7F9D65EC0IMG_5469.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/e0d00388-67f1-4f72-8ff5-a17fdd1c8b01/B7E76981-6A13-4F56-8917-BECF24EEADB12FA1CA64-F8F6-4BF4-91CB-0CB28E695C9F.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/6664fc2c-6de7-4c13-8242-c9d035fdafba/626059CB-4F66-497F-881F-3E594040DCE4f890d0b7-2460-4e1a-a449-5d2a0ac4ad6a.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/a1795c1f-2cbd-4102-abd5-1ab7a779cadb/D55B3639-3A43-4086-9410-E5E5E2F17903.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/e11b50a5-10af-4bc6-b01f-21c1e48c874b/E8B8AB6C-EA0A-48E4-A306-D14DECF17784IMG_0643.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/dd7a4cc2-217d-4ea2-941a-8a7e481a7e50/1415B1A4-BEFB-43C2-BD6E-8D7868556B88.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/f8da2024-3742-4102-8d92-f4717af4b1ac/IMG_2049.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/3b142bc3-563a-42c1-b072-fb68f4f23343/2.jpeg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/a74d94b8-8d12-40b7-bebc-8af972bc3c43/F90FCD55-A82D-4C75-B710-3595DF3B3F78IMG_9670.jpeg"
];

export default function GallerySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Initialize Lenis for smooth parallax scrolling
    // Note: since we are applying this to the Home page, this will enable 
    // smooth scrolling globally for the page as long as it's mounted.
    const lenis = new Lenis()
    let rafId: number;
    
    function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    }
  }, []);

  // Format array for ZoomParallax (grab first 7, assign alt tags)
  const imagesForParallax = galleryImages.slice(0, 7).map((src, idx) => ({
    src,
    alt: `Seshadri Lab Gallery Image ${idx + 1}`
  }));

  if (!mounted) return <section id="gallery" style={{ minHeight: "100vh", background: "#080808" }} />;

  return (
    <section id="gallery" className="relative w-full bg-[#080808] flex flex-col items-center">
      <div className="relative flex flex-col items-center justify-center pt-32 pb-8 z-10 w-full max-w-[1440px] px-10">
        <motion.div
          className="section-header text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ height: 3, width: 48, background: "#c9a84c", borderRadius: 2, marginBottom: "1.5rem" }} />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "#f5f0e8", letterSpacing: "-0.02em" }}>Life at the Lab</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#a69e8e" }}>
            A glimpse into our collaborative ecosystem, experiments, and team milestones in smooth parallax.
          </p>
        </motion.div>
      </div>

      <ZoomParallax images={imagesForParallax} />
    </section>
  );
}
