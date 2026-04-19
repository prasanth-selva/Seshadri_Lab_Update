"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

const publications = [
  {
    title: "Continuous Multi-Analyte Sweat Biosensing for Personalized Health Monitoring",
    journal: "Nature Digital Medicine",
    year: "2024",
    image:
      "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/21f5bd2f-284f-458a-9d9e-75498a8da6fd/nature+digital+medicine+mockup.png",
    description:
      "A comprehensive study on wearable biosensor platforms enabling real-time, non-invasive multi-analyte sweat analysis for personalized health assessment.",
  },
  {
    title: "Wearable Electrochemical Sensors for Cardiovascular Risk Stratification",
    journal: "Journal of Cardiology",
    year: "2023",
    image:
      "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/3b495225-8263-4d0f-a746-497347f3fe99/Journal+of+cardiology+mockup.png",
    description:
      "Demonstrating the clinical utility of flexible electrochemical sensor arrays for continuous cardiac biomarker monitoring and early risk detection.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function PublicationsSection() {
  return (
    <section
      id="publications"
      style={{
        background: "var(--bg-secondary)",
        position: "relative",
      }}
    >
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
          <h2>Featured Publications</h2>
          <p>
            Our work is published in leading journals, advancing the
            scientific understanding of wearable bioelectronics and digital
            health.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {publications.map((pub) => (
            <motion.div
              key={pub.title}
              variants={cardVariants}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              {/* Journal Cover */}
              <div
                style={{
                  padding: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, rgba(201,168,76,0.05), rgba(201,168,76,0.02))",
                }}
              >
                <img
                  src={pub.image}
                  alt={pub.journal}
                  loading="lazy"
                  style={{
                    height: "240px",
                    width: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))",
                    transition:
                      "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05) rotate(-1deg)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
                  }
                />
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem 1.75rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Journal Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.35rem 0.75rem",
                    background: "var(--accent-gold-dim)",
                    borderRadius: "50px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--accent-gold)",
                    marginBottom: "1rem",
                    width: "fit-content",
                  }}
                >
                  <BookOpen size={12} />
                  {pub.journal} · {pub.year}
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    lineHeight: 1.4,
                    marginBottom: "0.75rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {pub.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    flex: 1,
                  }}
                >
                  {pub.description}
                </p>

                <div
                  style={{
                    marginTop: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--accent-gold)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  Read Publication <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
