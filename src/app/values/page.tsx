"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Search, Users, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const GOLD = "#c9a84c";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55 },
  }),
};

const S = {
  page: { background: "#080808", color: "#f5f0e8", minHeight: "100vh" } as React.CSSProperties,
  container: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 2.5rem",
    width: "100%",
  } as React.CSSProperties,
  section: (bg = "transparent"): React.CSSProperties => ({
    background: bg,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "6rem",
    paddingBottom: "6rem",
    position: "relative",
  }),
  card: {
    background: "#111111",
    border: "1px solid #222222",
    borderRadius: 8,
    padding: "3rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,
  h2: {
    fontSize: "clamp(2rem, 3vw, 2.5rem)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    color: "#f5f0e8",
    marginBottom: "1rem",
  } as React.CSSProperties,
  bodyText: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#a69e8e",
  } as React.CSSProperties,
};

const coreValues = [
  {
    icon: <Shield size={40} color={GOLD} />,
    title: "Integrity",
    desc: "We hold ourselves to the highest ethical standards in research, collaboration, and communication. Honest science builds trust — within our team and with the world."
  },
  {
    icon: <Search size={40} color={GOLD} />,
    title: "Curiosity",
    desc: "We ask bold questions and explore uncharted territory. Curiosity drives every experiment, every innovation, and every breakthrough we achieve."
  },
  {
    icon: <Users size={40} color={GOLD} />,
    title: "Community",
    desc: "We believe diverse teams create better science. We foster an inclusive environment where every member — from high school interns to seasoned consultants — feels valued, heard, and supported."
  },
  {
    icon: <Star size={40} color={GOLD} />,
    title: "Excellence",
    desc: "We push boundaries in everything we do — from designing hardware-based medical devices to publishing world-class research — always striving to do better for our patients and partners."
  }
];

const actionPhotos = [
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/aab5585b-c1a0-4d25-bab4-a0a4e54fadd7/Core+Values.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/748aff82-53ad-47a8-b598-88e2862c1279/d3ce5249-3d9f-4185-b719-681099fc3fee.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/08821184-dc39-4774-b2d5-5d533833dfca/IMG-5988.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/75f6696e-d64f-4a32-b234-15111541e640/IMG-0834.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/78fa2aff-7179-4617-b9b3-7f7a89db3b5c/unnamed+%281%29.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/9aac503e-adc0-487f-bf43-fbc71dd692c9/IMG-0778.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/1dafc6b7-a807-4135-88cd-3775704cdbc1/IMG-8961.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/c792feac-9a60-40e0-943f-fa5c9b5f8a4f/Rise+Against+Hunger+4-8-23-3166.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/dbbb23b9-2eda-40c4-99fc-074decf10169/bba8f34b-bae6-488d-a7f1-9da187a6c124+%281%29.jpg",
  "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/bf914e72-3972-4f3b-aa38-0396efafac11/IMG-8960.jpg"
];

export default function ValuesPage() {
  return (
    <>
      <Navbar />
      <main style={S.page}>

        {/* ══════════════════ HERO ══════════════════ */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          {/* Background Image Overlay */}
          <div 
            style={{
              position: "absolute", inset: 0, zIndex: 0,
              backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/1e533948-1b2c-405d-b79e-b3c251eed097/Rise+Against+Hunger+4-8-23-3068.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(100%)" // Applying grayscale to maintain Brutalist aesthetic
            }}
          />
          <div style={{ position: "absolute", inset: 0, zIndex: 1, backgroundColor: "rgba(8, 8, 8, 0.75)" }} />

          <div style={{ ...S.container, position: "relative", zIndex: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <motion.h1
              initial="hidden" animate="show" variants={fadeUp} custom={0}
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "2rem",
                color: "#ffffff",
                maxWidth: 900
              }}
            >
              We Aspire to Positively Impact Our Community
            </motion.h1>
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={1} style={{ height: 4, width: 60, background: GOLD, borderRadius: 2 }} />
          </div>
        </section>

        {/* ══════════════════ CORE VALUES BENTO ══════════════════ */}
        <section style={S.section()}>
          <div style={S.container}>
            <div style={{ textAlign: "center", marginBottom: "4rem", maxWidth: 700, margin: "0 auto 4rem auto" }}>
              <h2 style={S.h2}>Our Core Values</h2>
              <p style={S.bodyText}>
                Everything we do in the Seshadri Lab is grounded in four foundational principles that guide our science, culture, and impact.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {coreValues.map((val, idx) => (
                <motion.div
                  key={val.title}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} custom={idx}
                  style={S.card}
                  className="hover:border-[#c9a84c] transition-colors duration-300"
                >
                  <div style={{ background: "rgba(201,168,76,0.08)", width: 72, height: 72, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                    {val.icon}
                  </div>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#f5f0e8", marginBottom: "1rem" }}>{val.title}</h3>
                  <p style={{ ...S.bodyText, marginTop: "auto" }}>{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ VALUES IN ACTION (MASONRY) ══════════════════ */}
        <section style={S.section("#0b0b0b")}>
          <div style={S.container}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={S.h2}>Values in Action</h2>
              <p style={{ ...S.bodyText, maxWidth: 600, margin: "0 auto" }}>
                We live our values beyond the lab — through community service, outreach, and teamwork.
              </p>
            </div>

            {/* Simple CSS-based Masonry equivalent */}
            <div style={{ columnCount: 3, columnGap: "1.5rem" }} className="masonry-grid md:columns-3 sm:columns-2 columns-1">
              {actionPhotos.map((photo, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i % 3}
                  style={{ breakInside: "avoid", marginBottom: "1.5rem", position: "relative", overflow: "hidden", borderRadius: 8 }}
                  className="group"
                >
                  <img src={photo} alt="Community Service" style={{ width: "100%", height: "auto", display: "block" }} />
                  <div 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ position: "absolute", inset: 0, background: "rgba(8, 8, 8, 0.8)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", textAlign: "center" }}
                  >
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.05em" }}>Seshadri Lab Community</span>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Adding global style to fix masonry stretching issues in Tailwind */}
            <style jsx global>{`
              .masonry-grid {
                column-count: 3;
                column-gap: 1.5rem;
              }
              @media (max-width: 1024px) { .masonry-grid { column-count: 2; } }
              @media (max-width: 640px) { .masonry-grid { column-count: 1; } }
            `}</style>
          </div>
        </section>

        {/* ══════════════════ CTA STRIP ══════════════════ */}
        <section style={{ backgroundColor: GOLD, padding: "5rem 0", textAlign: "center" }}>
          <div style={S.container}>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "#000", marginBottom: "2rem", letterSpacing: "-0.02em" }}>
              Want to be part of a team that puts these values into practice every day?
            </h2>
            <Link 
              href="/get-involved"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "1rem 2.5rem", background: "#000", color: "#fff", 
                fontWeight: 700, borderRadius: 4, textDecoration: "none",
                fontSize: "1.1rem"
              }}
            >
              Join the Seshadri Lab <ArrowRight size={20} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
