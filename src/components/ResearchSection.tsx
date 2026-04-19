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
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
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

      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>Research Areas</h2>
          <p>
            Our interdisciplinary team explores the convergence of materials
            science, electrical engineering, and biomedical innovation to push
            the boundaries of digital health.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {researchAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={cardVariants}
              className="glass-card"
              style={{ cursor: "pointer" }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "200px",
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
              <div style={{ padding: "1.25rem 1.5rem 1.75rem" }}>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {area.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                  }}
                >
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
