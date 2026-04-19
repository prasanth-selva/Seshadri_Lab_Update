"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap } from "lucide-react";

export default function TeamSection() {
  return (
    <section id="team">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Team</h2>
          <p>
            Led by Dr. Dhruv Seshadri, our interdisciplinary team is united by a
            shared passion for advancing digital health technologies.
          </p>
        </motion.div>

        {/* PI Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: "900px",
            margin: "0 auto 4rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0",
            borderRadius: "20px",
            overflow: "hidden",
            background: "var(--bg-card)",
            border: "1px solid var(--border-card)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(200px, 320px) 1fr",
              minHeight: "400px",
            }}
            className="team-pi-grid"
          >
            {/* Photo / Core Values */}
            <div
              style={{
                position: "relative",
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/283a5153-f078-43b9-aeed-31717211dab1/Core_Values.jpg"
                alt="Lab Core Values"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>

            {/* Info */}
            <div
              style={{
                padding: "2.5rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.5rem",
                }}
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/1687457403410-1M81OGJRTNPRO5ALQ6T5/Lehigh_University_Logo.png"
                  alt="Lehigh University"
                  style={{ height: "30px", width: "auto", opacity: 0.8 }}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                  color: "var(--text-primary)",
                }}
              >
                Dr. Dhruv Seshadri
              </h3>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--accent-gold)",
                  fontWeight: 600,
                  marginBottom: "1.5rem",
                }}
              >
                Principal Investigator
              </p>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: "1.75rem",
                }}
              >
                Dr. Seshadri leads the Wearable Bioelectronics &amp; Digital Health
                Lab at Lehigh University, where his team develops cutting-edge
                wearable sensor technologies and digital therapeutics. His
                research bridges materials science, electrical engineering, and
                clinical medicine to create transformative health solutions.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <GraduationCap size={16} color="var(--accent-gold)" />
                  Department of Bioengineering
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <MapPin size={16} color="var(--accent-gold)" />
                  Lehigh University, Bethlehem, PA
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Mail size={16} color="var(--accent-gold)" />
                  seshadri@lehigh.edu
                </div>
              </div>

              <a href="#contact" className="btn-primary" style={{ width: "fit-content" }}>
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* Collaborators / Press Wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ textAlign: "center" }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
              marginBottom: "2rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Collaborators &amp; Press
          </h3>
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid var(--border-card)",
            }}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/a2a17e01-6206-4829-b163-ba390a6b838f/Press+collaboratrs+wall.png"
              alt="Press and Collaborators"
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .team-pi-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
