"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Activity, Globe, Cpu, Database, ChevronRight, ExternalLink, BookOpen, FlaskConical, Users, Clock } from "lucide-react";

/* ── Fade-in animation helper ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ── Shared styles ── */
const GOLD = "var(--accent-gold)";
const S = {
  page: { background: "var(--bg-primary)", color: "var(--text-primary)", minHeight: "100vh" } as React.CSSProperties,
  container: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 2.5rem",
    width: "100%",
  } as React.CSSProperties,
  section: (bg = "transparent"): React.CSSProperties => ({
    background: bg,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "6rem",
    paddingBottom: "4rem",
    position: "relative",
  }),
  label: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 12px",
    borderRadius: 99,
    border: `1px solid rgba(201,168,76,0.35)`,
    background: "rgba(201,168,76,0.08)",
    color: GOLD,
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "1.25rem",
  } as React.CSSProperties,
  h2: {
    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    color: "var(--text-primary)",
    marginBottom: "0.75rem",
  } as React.CSSProperties,
  divider: {
    height: 2,
    width: 40,
    background: GOLD,
    borderRadius: 4,
    marginBottom: "1.5rem",
  } as React.CSSProperties,
  bodyText: {
    fontSize: "0.9rem",
    lineHeight: 1.8,
    color: "#9e9589",
    maxWidth: 560,
  } as React.CSSProperties,
  card: {
    background: "var(--bg-card)",
    border: "1px solid var(--border-card)",
    borderRadius: 14,
    padding: "1.5rem",
  } as React.CSSProperties,
};

/* ── Data ── */
const passionAreas = [
  { title: "Wearable Healthcare Technologies", desc: "Developing devices for remote monitoring and personalized health management.", icon: Activity },
  { title: "Lean Engineering for Global Health", desc: "Designing cost-effective solutions for resource-limited settings across the globe.", icon: Globe },
  { title: "Biomechanical Systems", desc: "Hardware-based medical solutions to address unmet clinical needs.", icon: Cpu },
  { title: "Clinical Data Science", desc: "Predictive modeling and machine learning to enhance diagnosis and treatment.", icon: Database },
];

const verticals = [
  { title: "Wearable Healthcare Technologies", desc: "Revolutionizing remote health monitoring and early diagnostics." },
  { title: "Sports Analytics for Human Performance", desc: "Data analytics and biomechanics to optimize athletic performance and recovery." },
  { title: "Frugal Engineering for Global Health", desc: "Low-cost, high-impact solutions to address critical healthcare challenges globally." },
  { title: "Pediatric & Adolescent Health Analytics", desc: "Wearable tech and clinical data to enhance care for youth populations." },
  { title: "Advanced Clinical Tools & Biosensors", desc: "Innovative tools for diagnostics and monitoring, bridging engineering and clinical practice." },
  { title: "Rehabilitation and Remote Sensing", desc: "Cutting-edge technology to improve access to care and rehabilitation services worldwide." },
];

const studies = [
  "Heart Rate Validation Study",
  "Wearable Impedance Sensor for Lymphedema",
  "Menstrual Cycle & Performance Analytics",
  "Load Monitoring and Injury Prediction",
  "Smart & Equitable Sanitization Holder (SESH)",
  "Flexible Electroceutical Electrode for Dysphagia",
  "Softball Analytics for Injury Prevention",
  "Point-of-Care Biosensor for Aortic Aneurysms",
  "SPO2 Efficacy Study",
  "Remote Rehabilitation Sensing (RRS)",
  "Drones and Remote Sensing (DRS)",
];

const publications = [
  { journal: "Npj Digital Medicine", title: "Wearable sensors for monitoring the physiological and biochemical profile of the athlete" },
  { journal: "IEEE TBME", title: "Absorbent and flexible conductive nanocomposites for bioelectric applications" },
  { journal: "Circulation", title: "Accuracy of Apple Watch for detection of atrial fibrillation" },
  { journal: "Sensors", title: "Wearable sensor technology to predict core body temperature: A systematic review" },
  { journal: "JACC Advances", title: "Wearable biosensors in congenital heart disease: Needs to advance the field" },
  { journal: "Digital Health", title: "Wearable technology in sports medicine to guide return-to-play following COVID-19 diagnosis" },
];

const stats = [
  { n: "50+", label: "Publications", icon: BookOpen },
  { n: "15+", label: "Active Projects", icon: FlaskConical },
  { n: "30+", label: "Team Members", icon: Users },
  { n: "8+", label: "Years Active", icon: Clock },
];

/* ── Page ── */
export default function ResearchPage() {
  return (
    <>
      <Navbar />
      <main style={S.page}>

        {/* ══════════════════ HERO ══════════════════ */}
        <section style={{ ...S.section(), minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}>
          <div style={S.container}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem", alignItems: "center", textAlign: "center" }}>

              {/* Text */}
              <div style={{ maxWidth: 900 }}>
                <motion.div style={{ ...S.label, justifyContent: "center" }} initial="hidden" animate="show" variants={fadeUp} custom={0}>
                  Research Hub
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={1}
                  style={{
                    fontSize: "clamp(2.5rem, 4vw, 4rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    marginBottom: "1.5rem",
                    color: "var(--text-primary)",
                  }}
                >
                  Advancing Clinical<br />
                  <span style={{ color: GOLD }}>Healthcare Engineering</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={2}
                  style={{ ...S.bodyText, marginBottom: "1.5rem", fontSize: "1.1rem" }}
                >
                  In the Seshadri Lab, we advance healthcare through wearable technologies,
                  data-driven solutions, and hardware-based systems — integrating engineering
                  principles with clinical insights to transform patient care.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={3}
                  style={{ fontSize: "1rem", lineHeight: 1.7, color: GOLD, fontStyle: "italic" }}
                >
                  "We envision a future where technology bridges gaps in healthcare —
                  enabling personalized, accessible, and effective care for all."
                </motion.p>
              </div>

              {/* Stats block - spanning horizontally */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "1.5rem",
                  width: "100%",
                }}
              >
                {stats.map(({ n, label, icon: Icon }) => (
                  <div
                    key={label}
                    style={{
                      ...S.card,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 12,
                      padding: "2rem",
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(201,168,76,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={20} color={GOLD} />
                    </div>
                    <div>
                      <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text-primary)", lineHeight: 1 }}>{n}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", marginTop: "0.5rem" }}>{label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "0" }} />

        {/* ══════════════════ PASSION AREAS ══════════════════ */}
        <section style={S.section("var(--bg-secondary)")}>
          <div style={S.container}>
            {/* Section header */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", textAlign: "center", marginBottom: "3rem", maxWidth: 800, margin: "0 auto 3rem auto" }}>
              <div style={{ ...S.label, justifyContent: "center" }}>Our Focus</div>
              <h2 style={{ ...S.h2, fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>Clinical & Engineering Focus</h2>
              <div style={{ ...S.divider, marginBottom: "1rem" }} />
              <p style={{ ...S.bodyText, fontSize: "1.05rem" }}>
                Our interdisciplinary work sits at the crossroads of engineering,
                medicine, and data science — focused on problems that matter most
                for improving human health outcomes.
              </p>
            </div>

            {/* 2×2 Grid of passion cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
              {passionAreas.map(({ title, desc, icon: Icon }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i}
                  style={{
                    ...S.card,
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    borderLeft: `3px solid rgba(201,168,76,0.3)`,
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  whileHover={{ borderColor: "rgba(201,168,76,0.8)", backgroundColor: "#161616" } as never}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(201,168,76,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} color={GOLD} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{title}</h3>
                    <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

        {/* ══════════════════ LIBRARY OF INNOVATION ══════════════════ */}
        <section style={S.section()}>
          <div style={S.container}>
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", marginBottom: "3rem" }}>
              <div>
                <h2 style={{ ...S.h2, marginBottom: 0 }}>Core Research Areas</h2>
              </div>
              <div style={{ flex: 1, height: 1, background: "var(--border-card)", marginTop: "1.5rem" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border-card)", borderRadius: 16, overflow: "hidden" }}>
              {verticals.map(({ title, desc }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i % 3}
                  style={{ background: "var(--bg-secondary)", padding: "2rem 1.75rem" }}
                  whileHover={{ background: "#141414" } as never}
                >
                  <div style={{ width: 24, height: 3, background: GOLD, borderRadius: 4, marginBottom: "1rem" }} />
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: "0.6rem" }}>{title}</h3>
                  <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

        {/* ══════════════════ ONGOING STUDIES ══════════════════ */}
        <section style={S.section("var(--bg-secondary)")}>
          <div style={S.container}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }}>
              {/* Sticky left label */}
              <div>
                <div style={S.label}>Active Work</div>
                <h2 style={S.h2}>Ongoing<br />Studies &amp;<br />Initiatives</h2>
                <div style={S.divider} />
                <p style={{ ...S.bodyText, maxWidth: "none", fontSize: "0.83rem" }}>
                  A selection of our active research projects and clinical trials across
                  various medical disciplines at Lehigh University.
                </p>
              </div>

              {/* Right: Tag grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
                {studies.map((s, i) => (
                  <motion.div
                    key={s}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-20px" }}
                    custom={i % 4}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "0.875rem 1.125rem",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                      borderRadius: 10,
                      cursor: "default",
                    }}
                    whileHover={{ background: "#161616", borderColor: "rgba(201,168,76,0.25)" } as never}
                  >
                    <ChevronRight size={13} color={GOLD} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8rem", color: "#c0b8aa", fontWeight: 500, lineHeight: 1.4 }}>{s}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

        {/* ══════════════════ MISSION QUOTE ══════════════════ */}
        <section style={{ ...S.section("#070707"), position: "relative", overflow: "hidden" }}>

          <div style={S.container}>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div style={S.label}>The Mission</div>
                <h2 style={S.h2}>Why Does It All Matter?</h2>
                <div style={S.divider} />
              </motion.div>

              <motion.blockquote
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={1}
                style={{
                  borderLeft: `3px solid ${GOLD}`,
                  paddingLeft: "1.75rem",
                  margin: 0,
                }}
              >
                <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#a8a09a", marginBottom: "1rem" }}>
                  &ldquo;The thesis of the Seshadri Lab is to engineer to improve patient outcomes…
                  For me, it&apos;s solving the hardest problems in medicine through engineering.
                  It&apos;s so grandkids can play with their grandparents, it&apos;s so sons and daughters
                  can give their parents that long-lasting hug…&rdquo;
                </p>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: GOLD, fontStyle: "italic", fontWeight: 600 }}>
                  &ldquo;It&apos;s the incessant desire to create value through first principles
                  grounded in data, and driven to solve the unmet clinical need.&rdquo;
                </p>
              </motion.blockquote>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

        {/* ══════════════════ PUBLICATIONS ══════════════════ */}
        <section style={S.section("var(--bg-secondary)")}>
          <div style={S.container}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div style={S.label}>Peer Reviewed</div>
                <h2 style={{ ...S.h2, marginBottom: 0 }}>Selected Publications</h2>
              </div>
              <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", maxWidth: 320, textAlign: "right" as const, lineHeight: 1.6 }}>
                Advancing scientific understanding across wearable bioelectronics,
                digital medicine, and clinical engineering.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
              {publications.map(({ journal, title }, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={i % 3}
                  style={{
                    ...S.card,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.875rem",
                  }}
                  whileHover={{ background: "#161616" } as never}
                >
                  {/* Journal badge */}
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "3px 10px",
                    borderRadius: 99,
                    border: `1px solid rgba(201,168,76,0.3)`,
                    background: "rgba(201,168,76,0.06)",
                    color: GOLD,
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    width: "fit-content",
                  }}>
                    {journal}
                  </div>
                  {/* Title */}
                  <p style={{ fontSize: "0.83rem", lineHeight: 1.65, color: "#d0c8bc", fontWeight: 500, flex: 1 }}>
                    {title}
                  </p>
                  {/* Read more */}
                  <div style={{ display: "flex", alignItems: "center", gap: 5, color: GOLD, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, cursor: "pointer" }}>
                    Read Paper <ExternalLink size={10} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
