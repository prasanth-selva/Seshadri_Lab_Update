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
      className="min-h-[100vh] flex flex-col justify-center pb-20 pt-20 overflow-hidden"
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

      <div className="section-container w-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.div
          className="section-header text-center mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl mb-6">Featured Publications</h2>
          <p className="text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-center">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto"
        >
          {publications.map((pub) => (
            <motion.div
              key={pub.title}
              variants={cardVariants}
              className="glass-card flex flex-col cursor-pointer hover:border-[var(--accent-gold)]"
            >
              {/* Journal Cover */}
              <div className="p-8 lg:p-12 flex justify-center bg-gradient-to-br from-[rgba(201,168,76,0.05)] to-[rgba(201,168,76,0.02)]">
                <img
                  src={pub.image}
                  alt={pub.journal}
                  loading="lazy"
                  style={{
                    height: "360px",
                    width: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))",
                    transition:
                      "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05) rotate(-2deg)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
                  }
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex-1 flex flex-col">
                {/* Journal Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent-gold-dim)] rounded-full text-xs font-bold text-[var(--accent-gold)] mb-4 w-fit uppercase tracking-wider">
                  <BookOpen size={14} />
                  {pub.journal} · {pub.year}
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-3 color-[var(--text-primary)]">
                  {pub.title}
                </h3>

                <p className="text-base lg:text-lg leading-relaxed color-[var(--text-secondary)] flex-1">
                  {pub.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[var(--accent-gold)] text-base font-bold uppercase tracking-wide group hover:translate-x-2 transition-transform">
                  Read Publication <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
