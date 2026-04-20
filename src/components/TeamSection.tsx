"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import { Mail, MapPin, GraduationCap, Award, BookOpen, ExternalLink, Users, Star, Beaker } from "lucide-react";

/* ── shared container ── */
const container = "w-full max-w-[1280px] mx-auto px-6 lg:px-12";

/* ── Tilt hook ── */
function useTilt(factor = 8) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [factor, -factor]), { stiffness: 180, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-factor, factor]), { stiffness: 180, damping: 20 });
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return { rx, ry, onMouseMove, onMouseLeave };
}

/* ── Stats Row ── */
const stats = [
  { value: "50+", label: "Publications", icon: BookOpen },
  { value: "15+", label: "Active Projects", icon: Beaker },
  { value: "30+", label: "Team Members", icon: Users },
  { value: "8+", label: "Years of Research", icon: Star },
];

function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {stats.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="glass-card p-5 flex flex-col items-center text-center"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--accent-gold-dim)] flex items-center justify-center mb-3">
              <Icon size={16} color="var(--accent-gold)" />
            </div>
            <span className="font-bold text-[var(--text-primary)] mb-0.5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.1 }}>
              {s.value}
            </span>
            <span className="text-caption">{s.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── PI Card ── */
function PICard() {
  const { rx, ry, onMouseMove, onMouseLeave } = useTilt(5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
      className="mb-14"
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="glass-card overflow-visible cursor-default"
      >
        {/* Flex row on md+, column on mobile */}
        <div className="flex flex-col md:flex-row">

          {/* ── Left: Photo column ── */}
          <div
            className="md:w-64 lg:w-72 flex-shrink-0 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-card)",
              transform: "translateZ(20px)",
            }}
          >
            {/* Photo */}
            <div className="relative mb-5">
              <div
                className="rounded-full overflow-hidden border-2 border-[var(--accent-gold)] animate-pulse-glow"
                style={{ width: 140, height: 140 }}
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/06125a4f-d2d3-4347-8214-472aa7e80d90/1AF2E98E-1B95-4CAB-9378-08C7F9D65EC0IMG_5469.jpg?format=2500w"
                  alt="Dr. Dhruv Seshadri"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              {/* Floating PI badge */}
              <motion.span
                className="badge-gold absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star size={9} /> PI
              </motion.span>
            </div>

            <h3 className="text-subheading font-bold text-center mb-0.5 text-[var(--text-primary)]">
              Dr. Dhruv Seshadri
            </h3>
            <p className="text-center uppercase tracking-widest mb-4" style={{ fontSize: "0.65rem", color: "var(--accent-gold)" }}>
              Principal Investigator
            </p>

            <div className="flex gap-2">
              <a
                href="mailto:seshadri@lehigh.edu"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-black transition-all duration-300"
                style={{ background: "var(--bg-primary)", color: "var(--text-secondary)" }}
              >
                <Mail size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-black transition-all duration-300"
                style={{ background: "var(--bg-primary)", color: "var(--text-secondary)" }}
              >
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="flex-1 p-7 lg:p-10" style={{ transform: "translateZ(14px)" }}>

            {/* About */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-gold)" }}>
                <Award size={13} /> About the Lab
              </div>
              <p className="text-body leading-relaxed max-w-2xl">
                The Seshadri Lab at Lehigh University resides at the intersection of materials science, flexible
                electronics, and biomedical engineering. Our mission is to translate next-generation devices from
                the benchtop to the clinic — engineering solutions that improve patient outcomes globally.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Bioelectronics", "Digital Health", "Translational Medicine", "Wearables"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md border text-[var(--text-secondary)] tracking-wide"
                  style={{ fontSize: "0.72rem", fontWeight: 600, background: "rgba(255,255,255,0.05)", borderColor: "var(--border-card)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Core Values */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-gold)" }}>
                <BookOpen size={13} /> Core Values
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {["Diversity & Inclusion", "Mentorship Focused", "Rigorous Innovation", "Collaborative Ecosystem"].map((v) => (
                  <div key={v} className="flex items-center gap-2 text-body">
                    <div className="w-1.5 h-1.5 rounded-sm flex-shrink-0" style={{ background: "var(--accent-gold)" }} />
                    <span style={{ fontSize: "0.85rem" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-2 text-body" style={{ fontSize: "0.82rem" }}>
                <GraduationCap size={15} color="var(--accent-gold)" className="flex-shrink-0" />
                Department of Bioengineering
              </div>
              <div className="flex items-center gap-2 text-body" style={{ fontSize: "0.82rem" }}>
                <MapPin size={15} color="var(--accent-gold)" className="flex-shrink-0" />
                Lehigh University, Bethlehem, PA
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Section ── */
export default function TeamSection() {
  return (
    <section
      id="team"
      style={{ background: "var(--bg-primary)", paddingTop: "4rem", paddingBottom: "4rem", position: "relative" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div style={{
          position: "absolute", width: "500px", height: "500px",
          top: "5%", right: "-10%",
          background: "radial-gradient(circle, rgba(201,168,76,0.08), transparent 70%)",
          filter: "blur(80px)", borderRadius: "50%",
        }} />
      </div>

      <div style={{ paddingLeft: "clamp(1.5rem, 4vw, 3rem)", paddingRight: "clamp(1.5rem, 4vw, 3rem)", maxWidth: "1280px", margin: "0 auto", width: "100%", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="badge-gold mb-3 inline-flex mx-auto">The People Behind the Science</span>
          <h2 className="text-heading font-bold mb-3 text-center">Our Team</h2>
          <p className="text-body max-w-xl mx-auto" style={{ textAlign: "center" }}>
            Led by Principal Investigator Dr. Dhruv Seshadri, our lab brings together passionate
            researchers, postdocs, and students dedicated to transforming healthcare.
          </p>
        </motion.div>

        {/* Stats */}
        <StatsRow />

        {/* PI Card */}
        <PICard />

        {/* Collaborators wall */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="badge-gold mb-4 inline-flex mx-auto">Collaborators &amp; Press</span>
          <div
            className="rounded-2xl overflow-hidden border mx-auto"
            style={{ maxWidth: 900, borderColor: "var(--border-card)", background: "white" }}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/a2a17e01-6206-4829-b163-ba390a6b838f/Press+collaboratrs+wall.png"
              alt="Press and Collaborators"
              loading="lazy"
              className="w-full h-auto"
              style={{ padding: "2rem 2.5rem" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
