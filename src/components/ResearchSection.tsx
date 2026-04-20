"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const researchAreas = [
  {
    title: "Wearable Sensors",
    image:
      "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/12bdbd58-7bf0-4caf-bd17-4c37f6ae29e8/oT5sUYtRJMVVsTCoZnkNVf.jpg",
    description:
      "Designing flexible, skin-conformal sensor platforms for continuous physiological monitoring — from sweat analytics to real-time cardiovascular tracking.",
  },
  {
    title: "Bioelectronics",
    image:
      "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/62949142-071e-44b2-9f40-862a4a513b0d/download.jpeg",
    description:
      "Engineering miniaturized bioelectronic interfaces that bridge biological systems and electronic circuits for diagnostics and therapeutic interventions.",
  },
  {
    title: "Disease Management",
    image:
      "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/f22cdd8c-ba6f-44e5-83ff-13a3a6515337/1000_F_565151396_zPQbPwEMJ4L5sM5zcqLaj299jW3sNcrV.jpg",
    description:
      "Leveraging data-driven wearable platforms for early detection, continuous monitoring, and personalized management of chronic diseases.",
  },
  {
    title: "Digital Therapeutics",
    image:
      "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/3b0960b4-ff2e-475a-b9b3-3bacd2d5abec/AdobeStock_240320038-645x645.jpeg",
    description:
      "Creating evidence-based digital interventions that complement traditional medical treatments, delivering software-driven therapy solutions.",
  },
  {
    title: "Human Performance",
    image:
      "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/429b5af5-fac0-435f-8ba0-2e27605d30c6/SportSci_Banner1_WP.jpg",
    description:
      "Advancing sports science and occupational health through wearable biomechanics analysis, fatigue detection, and performance optimization systems.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ResearchSection() {
  const ref = useRef(null);

  return (
    <section
      id="research"
      ref={ref}
      style={{
        background: "var(--bg-secondary)",
        position: "relative",
      }}
      className="min-h-[100vh] flex flex-col justify-center pb-20 pt-20 overflow-hidden"
    >
      {/* Top fade separator */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(180deg, var(--bg-primary), transparent)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.div
          className="section-header text-center mb-12 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl lg:text-4xl mb-4 font-bold tracking-tight">Research Areas</h2>
          <p className="text-base text-neutral-400 max-w-3xl mx-auto leading-relaxed text-center mb-6">
            Our interdisciplinary team explores the convergence of materials
            science, electrical engineering, and biomedical innovation to push
            the boundaries of digital health.
          </p>
          <a
            href="/research"
            className="inline-flex items-center justify-center px-6 py-2 border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-[var(--accent-gold)] hover:text-black transition-colors"
          >
            Explore All Research
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12"
        >
          {researchAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={cardVariants}
              className="glass-card flex flex-col h-full"
              style={{ cursor: "pointer" }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "240px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={area.image}
                  alt={area.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                {/* Gradient overlay on image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "60%",
                    background:
                      "linear-gradient(transparent, var(--bg-card))",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-2 color-[var(--text-primary)] tracking-tight">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed color-[var(--text-secondary)] text-neutral-400">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
