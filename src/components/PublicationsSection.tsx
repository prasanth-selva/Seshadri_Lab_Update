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
      className="flex flex-col justify-center items-center w-full overflow-hidden"
      style={{ background: "var(--bg-secondary)", padding: "6rem 0", minHeight: "100vh", position: "relative" }}
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
          className="section-header text-center mb-12 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-heading mb-4">Featured Publications</h2>
          <p className="text-body max-w-3xl mx-auto text-center">
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
          className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto w-full"
        >
          {publications.map((pub) => (
            <motion.div
              key={pub.title}
              variants={cardVariants}
              className="glass-card flex flex-col cursor-pointer hover:border-[var(--accent-gold)] flex-1 max-w-[500px]"
            >
              {/* Journal Cover */}
              <div className="p-8 lg:p-12 w-full text-center bg-[#070707]">
                <img
                  src={pub.image}
                  alt={pub.journal}
                  loading="lazy"
                  style={{
                    height: "360px",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    margin: "0 auto",
                    display: "block",
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
              <div className="p-6 flex-1 flex flex-col items-center text-center">
                {/* Journal Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent-gold-dim)] rounded-full text-[10px] font-bold text-[var(--accent-gold)] mb-3 w-fit uppercase tracking-wider">
                  <BookOpen size={12} />
                  {pub.journal} · {pub.year}
                </div>

                <h3 className="text-subheading font-bold leading-snug mb-2" style={{ color: 'var(--text-primary)' }}>
                  {pub.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-400 flex-1">
                  {pub.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-[var(--accent-gold)] text-sm font-bold uppercase tracking-wide group hover:-translate-y-1 transition-transform">
                  Read Publication <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
