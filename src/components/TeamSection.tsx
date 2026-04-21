"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap, ExternalLink, BookOpen, FlaskConical, Users, Sparkles } from "lucide-react";

/* ── Shared ── */
const GOLD = "#c9a84c";
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }),
};
const CONTAINER: React.CSSProperties = {
  maxWidth: 1440, margin: "0 auto", padding: "0 2.5rem", width: "100%",
};
const CARD: React.CSSProperties = {
  background: "#111111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14,
};
const LABEL: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", gap: 6,
  padding: "4px 12px", borderRadius: 99,
  border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)",
  color: GOLD, fontSize: "0.7rem", fontWeight: 700,
  letterSpacing: "0.1em", textTransform: "uppercase",
  marginBottom: "1.25rem",
};

/* ── Stats ── */
const stats = [
  { n: "50+", label: "Publications", icon: BookOpen },
  { n: "15+", label: "Active Projects", icon: FlaskConical },
  { n: "30+", label: "Team Members", icon: Users },
  { n: "8+", label: "Years of Research", icon: Sparkles },
];

/* ── Tags ── */
const tags = ["Bioelectronics", "Digital Health", "Translational Medicine", "Wearables"];
const values = ["Diversity & Inclusion", "Mentorship Focused", "Rigorous Innovation", "Collaborative Ecosystem"];

/* ── Press logos ── */
const PRESS_IMG = "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/a2a17e01-6206-4829-b163-ba390a6b838f/Press+collaboratrs+wall.png";

export default function TeamSection() {
  return (
    <section
      id="team"
      style={{ background: "#080808", padding: "5rem 0", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle ambient glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 55% 70% at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 65%)"
      }} />

      <div style={{ ...CONTAINER, position: "relative", zIndex: 1 }}>

        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          style={{ marginBottom: "3rem" }}
        >
          <div style={LABEL}>The People Behind the Science</div>
          <h2 style={{
            fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
            fontWeight: 800, letterSpacing: "-0.02em",
            lineHeight: 1.15, color: "#f5f0e8", marginBottom: "0.5rem",
          }}>
            Our Team
          </h2>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "#7a7268", maxWidth: 500 }}>
            Led by Principal Investigator Dr. Dhruv Seshadri, our lab brings together
            passionate researchers, postdocs, and students dedicated to transforming healthcare.
          </p>
        </motion.div>

        {/* ── Stats Row ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {stats.map(({ n, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -3, transition: { duration: 0.2 } } as never}
              style={{
                ...CARD,
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(201,168,76,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={17} color={GOLD} />
              </div>
              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#f5f0e8", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: "0.72rem", color: "#6b6356", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", marginTop: 3 }}>{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── PI Card ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          style={{ ...CARD, marginBottom: "2.5rem", overflow: "hidden" }}
        >
          <div style={{ display: "flex" }}>

            {/* Left photo column */}
            <div style={{
              width: 240,
              flexShrink: 0,
              background: "#0e0e0e",
              borderRight: "1px solid rgba(255,255,255,0.06)",
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}>
              {/* Photo */}
              <div style={{ position: "relative" }}>
                <div style={{
                  width: 120, height: 120,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: `2px solid ${GOLD}`,
                  boxShadow: `0 0 0 4px rgba(201,168,76,0.1)`,
                }}>
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/06125a4f-d2d3-4347-8214-472aa7e80d90/1AF2E98E-1B95-4CAB-9378-08C7F9D65EC0IMG_5469.jpg?format=2500w"
                    alt="Dr. Dhruv Seshadri"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>
                {/* PI badge */}
                <div style={{
                  position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)",
                  background: GOLD, color: "#000", fontSize: "0.6rem", fontWeight: 800,
                  padding: "2px 10px", borderRadius: 99, whiteSpace: "nowrap", letterSpacing: "0.08em",
                }}>
                  PRINCIPAL INVESTIGATOR
                </div>
              </div>

              <div style={{ textAlign: "center", marginTop: 8 }}>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#f5f0e8", marginBottom: 3 }}>Dr. Dhruv Seshadri</div>
                <div style={{ fontSize: "0.7rem", color: GOLD, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Bioengineering
                </div>
              </div>

              {/* Contact links */}
              <div style={{ display: "flex", gap: 8 }}>
                <a
                  href="mailto:seshadri@lehigh.edu"
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#8a8078", textDecoration: "none",
                  }}
                  title="Email"
                >
                  <Mail size={14} />
                </a>
                <a
                  href="https://engineering.lehigh.edu/faculty/dhruv-seshadri"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#8a8078", textDecoration: "none",
                  }}
                  title="Profile"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Right content */}
            <div style={{ flex: 1, padding: "2.5rem 2.5rem" }}>

              {/* About */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div style={{ ...LABEL, marginBottom: "0.75rem" }}>About the Lab</div>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "#9e9589", maxWidth: 640 }}>
                  The Seshadri Lab at Lehigh University sits at the intersection of materials science,
                  flexible electronics, and biomedical engineering. Our mission is to translate
                  next-generation devices from the benchtop to the clinic — engineering solutions
                  that improve patient outcomes at a global scale.
                </p>
              </div>

              {/* Research tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.75rem" }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 12px", borderRadius: 6,
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                      fontSize: "0.72rem", fontWeight: 600, color: "#8a8078", letterSpacing: "0.04em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Core Values */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div style={{ ...LABEL, marginBottom: "0.75rem" }}>Core Values</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
                  {values.map((v) => (
                    <div key={v} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.83rem", color: "#a8a09a" }}>
                      <div style={{ width: 5, height: 5, borderRadius: 2, background: GOLD, flexShrink: 0 }} />
                      {v}
                    </div>
                  ))}
                </div>
              </div>

              {/* Location row */}
              <div style={{
                display: "flex", gap: "2rem", flexWrap: "wrap",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "#7a7268" }}>
                  <GraduationCap size={14} color={GOLD} />
                  Department of Bioengineering
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "#7a7268" }}>
                  <MapPin size={14} color={GOLD} />
                  Lehigh University, Bethlehem, PA
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Collaborators & Press ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={3}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{ flex: 1, maxWidth: "100px", height: 1, background: "rgba(255,255,255,0.06)" }} />
            <div style={{ ...LABEL, marginBottom: 0 }}>Collaborators &amp; Press</div>
            <div style={{ flex: 1, maxWidth: "100px", height: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>
          <div style={{
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "#ffffff",
            maxWidth: 900,
            margin: "0 auto",
          }}>
            <img
              src={PRESS_IMG}
              alt="Press and Collaborators Wall"
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block", padding: "2rem 3rem" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
