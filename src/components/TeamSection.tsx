"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { Mail, MapPin, GraduationCap, Award, BookOpen, ExternalLink, Users, Star, Beaker } from "lucide-react";

/* ── Tilt 3D card hook ── */
function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 180, damping: 18 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return { rx, ry, onMouseMove, onMouseLeave };
}

/* ── PI card with 3D tilt ── */
function PICard() {
  const { rx, ry, onMouseMove, onMouseLeave } = useTilt();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
      className="w-full max-w-5xl mx-auto mb-20"
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="glass-card flex flex-col lg:flex-row items-stretch cursor-default"
      >
        {/* PI Image Column */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="w-full lg:w-[38%] p-8 lg:p-12 flex flex-col justify-center items-center bg-[var(--bg-secondary)] border-b lg:border-b-0 lg:border-r border-[var(--border-card)]"
        >
          <div className="relative mb-6">
            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[var(--accent-gold)] animate-pulse-glow">
              <img
                src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/06125a4f-d2d3-4347-8214-472aa7e80d90/1AF2E98E-1B95-4CAB-9378-08C7F9D65EC0IMG_5469.jpg?format=2500w"
                alt="Dr. Dhruv Seshadri"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 badge-gold whitespace-nowrap"
            >
              <Star size={10} /> Principal Investigator
            </motion.div>
          </div>

          <h3 className="text-subheading font-bold text-center mt-4 mb-1">Dr. Dhruv Seshadri</h3>
          <p className="text-caption text-center text-[var(--accent-gold)] uppercase tracking-widest mb-5">
            Bioengineering, Lehigh University
          </p>

          <div className="flex gap-3">
            <a
              href="mailto:seshadri@lehigh.edu"
              className="w-11 h-11 rounded-full bg-[var(--bg-primary)] flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-black transition-all duration-300 text-neutral-400"
            >
              <Mail size={18} />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[var(--bg-primary)] flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-black transition-all duration-300 text-neutral-400"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* PI Content */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="w-full lg:w-[62%] p-8 lg:p-14 flex flex-col justify-center"
        >
          <div className="mb-7">
            <h4 className="flex items-center gap-2 text-[var(--accent-gold)] text-caption uppercase tracking-widest font-bold mb-3">
              <Award size={16} /> About the Lab
            </h4>
            <p className="text-body">
              The Seshadri Lab at Lehigh University resides at the intersection of materials
              science, flexible electronics, and biomedical engineering. Our mission is to
              translate next-generation devices from the benchtop to the clinic — engineering
              solutions that improve patient outcomes at a global scale.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Bioelectronics", "Digital Health", "Translational Medicine", "Wearables"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold rounded-md border border-[var(--border-card)] bg-white/5 text-[var(--text-secondary)] tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-8">
            <h4 className="flex items-center gap-2 text-[var(--accent-gold)] text-caption uppercase tracking-widest font-bold mb-4">
              <BookOpen size={16} /> Core Values
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Diversity & Inclusion", "Mentorship Focused", "Rigorous Innovation", "Collaborative Ecosystem"].map((v) => (
                <div key={v} className="flex items-center gap-3 text-body">
                  <div className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-gold)] shadow-[0_0_8px_rgba(201,168,76,0.5)] flex-shrink-0" />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3 text-[var(--text-secondary)] text-body">
              <GraduationCap size={18} color="var(--accent-gold)" className="flex-shrink-0" />
              Department of Bioengineering
            </div>
            <div className="flex items-center gap-3 text-[var(--text-secondary)] text-body">
              <MapPin size={18} color="var(--accent-gold)" className="flex-shrink-0" />
              Lehigh University, Bethlehem, PA
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Stat counters ── */
const stats = [
  { value: "50+", label: "Publications", icon: BookOpen },
  { value: "15+", label: "Active Projects", icon: Beaker },
  { value: "30+", label: "Team Members", icon: Users },
  { value: "8+", label: "Years of Research", icon: Star },
];

function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 max-w-5xl mx-auto w-full">
      {stats.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="glass-card p-5 sm:p-7 flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-gold-dim)] flex items-center justify-center mb-3">
              <Icon size={20} color="var(--accent-gold)" />
            </div>
            <span
              className="font-bold text-[var(--text-primary)] mb-1"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", lineHeight: 1.1 }}
            >
              {s.value}
            </span>
            <span className="text-caption">{s.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Collaborators wall ── */
function CollaboratorsWall() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center"
    >
      <p className="badge-gold mx-auto mb-6 w-fit">Collaborators & Press</p>
      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[var(--border-card)] bg-white">
        <img
          src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/a2a17e01-6206-4829-b163-ba390a6b838f/Press+collaboratrs+wall.png"
          alt="Press and Collaborators"
          loading="lazy"
          className="w-full h-auto p-6 sm:p-10"
        />
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full opacity-10 animate-orb"
          style={{
            width: "600px",
            height: "600px",
            top: "10%",
            right: "-15%",
            background: "radial-gradient(circle, rgba(201,168,76,0.3), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="badge-gold mx-auto mb-4 w-fit">The People Behind the Science</p>
          <h2 className="text-heading mb-4">Our Team</h2>
          <p className="text-body max-w-2xl mx-auto text-center">
            Led by Principal Investigator Dr. Dhruv Seshadri, our lab brings together
            passionate researchers, postdocs, and students dedicated to transforming healthcare.
          </p>
        </motion.div>

        {/* Stats */}
        <StatsRow />

        {/* PI Card */}
        <PICard />

        {/* Collaborators */}
        <CollaboratorsWall />
      </div>
    </section>
  );
}
