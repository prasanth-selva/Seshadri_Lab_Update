"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
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
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/a74d94b8-8d12-40b7-bebc-8af972bc3c43/F90FCD55-A82D-4C75-B710-3595DF3B3F78IMG_9670.jpeg",
];

export default function GallerySection() {
  const sectionRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () =>
    setLightboxIdx((p) =>
      p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : null
    );
  const nextImage = () =>
    setLightboxIdx((p) =>
      p !== null ? (p + 1) % galleryImages.length : null
    );

  return (
    <>
      <section id="gallery" ref={sectionRef}>
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>Lab Gallery</h2>
            <p>
              A glimpse into our lab environment, experimental setups, and the
              team behind the research.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div style={{ position: "relative" }}>
            {/* Scroll Buttons */}
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              style={{
                position: "absolute",
                left: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-gold)";
                e.currentTarget.style.background = "var(--bg-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-card)";
                e.currentTarget.style.background = "var(--bg-card)";
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              style={{
                position: "absolute",
                right: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-gold)";
                e.currentTarget.style.background = "var(--bg-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-card)";
                e.currentTarget.style.background = "var(--bg-card)";
              }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Scrollable Track */}
            <div
              ref={scrollRef}
              style={{
                display: "flex",
                gap: "1rem",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                padding: "1rem 0",
              }}
            >
              {galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  onClick={() => openLightbox(i)}
                  style={{
                    flex: "0 0 300px",
                    height: "220px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    scrollSnapAlign: "start",
                    cursor: "pointer",
                    position: "relative",
                    border: "1px solid var(--border-card)",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-gold-dim)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-card)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img
                    src={src}
                    alt={`Lab gallery image ${i + 1}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
            style={{
              position: "absolute",
              left: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "white",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={galleryImages[lightboxIdx]}
            alt={`Gallery image ${lightboxIdx + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "85vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            style={{
              position: "absolute",
              right: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "white",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ChevronRight size={24} />
          </button>

          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              color: "var(--text-secondary)",
              fontSize: "0.875rem",
            }}
          >
            {lightboxIdx + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
