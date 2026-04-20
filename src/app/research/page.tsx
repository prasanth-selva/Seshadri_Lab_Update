"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { Activity, Globe, Cpu, Database, ChevronRight, BookOpen, ExternalLink } from "lucide-react";

/* ─── shared tilt hook ─── */
function useTilt(factor = 8) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [factor, -factor]), { stiffness: 200, damping: 22 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-factor, factor]), { stiffness: 200, damping: 22 });
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return { rx, ry, onMouseMove, onMouseLeave };
}

/* ─── Data ─── */
const passionAreas = [
  { title: "Wearable Healthcare Technologies", description: "Developing devices for remote monitoring and personalized health management.", icon: Activity },
  { title: "Lean Engineering for Global Health", description: "Designing cost-effective solutions for resource-limited settings across the globe.", icon: Globe },
  { title: "Biomechanical Systems", description: "Investigating hardware-based medical solutions to address unmet clinical needs.", icon: Cpu },
  { title: "Clinical Applications of Data Science", description: "Predictive modeling and machine learning to enhance diagnosis and treatment.", icon: Database },
];

const innovationLibrary = [
  { title: "Wearable Healthcare Technologies", description: "Our wearable technologies aim to revolutionize remote health monitoring and early diagnostics." },
  { title: "Sports Analytics for Human Performance", description: "Using data analytics and biomechanics, we optimize athletic performance and recovery." },
  { title: "Frugal Engineering for Global Health", description: "We design low-cost, high-impact solutions to address critical healthcare challenges globally." },
  { title: "Pediatric & Adolescent Health Analytics", description: "Combining wearable tech with clinical data, we enhance care for youth populations." },
  { title: "Advanced Clinical Tools & Biosensors", description: "Our lab pioneers innovative tools for diagnostics and monitoring, bridging engineering and clinical practice." },
  { title: "Rehabilitation and Remote Sensing", description: "Through cutting-edge technology, we improve access to care and rehabilitation services worldwide." },
];

const studies = [
  "Heart Rate Validation Study",
  "Wearable Impedance Sensor for Lymphedema",
  "Menstrual Cycle and Performance Analytics",
  "Load Monitoring and Injury Prediction",
  "Smart and Equitable Sanitization Holder (SESH)",
  "Flexible Electroceutical Electrode for Dysphagia",
  "Softball Analytics for Injury Prevention",
  "Point-of-Care Biosensor for Abdominal Aortic Aneurysms",
  "SPO2 Efficacy Study",
  "Remote Rehabilitation Sensing (RRS)",
  "Drones and Remote Sensing (DRS)",
];

const publications = [
  { title: "Wearable sensors for monitoring the physiological and biochemical profile of the athlete", journal: "Npj Digital Medicine" },
  { title: "Absorbent and flexible conductive nanocomposites for bioelectric applications", journal: "IEEE TBME" },
  { title: "Accuracy of Apple Watch for detection of atrial fibrillation", journal: "Circulation" },
  { title: "Wearable sensor technology to predict core body temperature: A systematic review", journal: "Sensors" },
  { title: "Return to sport following COVID-19 lockdown and its impact on injury rates in German Soccer League", journal: "Frontiers" },
  { title: "Wearable biosensors in congenital heart disease: Needs to advance the field", journal: "JACC Advances" },
  { title: "Validation of hand-mounted wearable sensor for scratching movements in adults with atopic dermatitis", journal: "JAAD" },
  { title: "Accuracy of the Apple Watch 4 to Measure Heart Rate in Patients With Atrial Fibrillation", journal: "IEEE JTEHM" },
  { title: "Wearable technology in sports medicine to guide return-to-play following COVID-19 diagnosis", journal: "Digital Health" },
];

/* shared container style */
const container = "w-full max-w-[1280px] mx-auto px-6 lg:px-12";

/* ─── Section Header ─── */
function SectionHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="badge-gold mb-3 inline-flex">{badge}</span>
      <h2 className="text-heading font-bold text-[var(--text-primary)] mb-2">{title}</h2>
      <div className="h-0.5 w-12 bg-[var(--accent-gold)] rounded-full mb-3" />
      {subtitle && (
        <p className="text-body max-w-xl" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ─── Passion Card with Tilt ─── */
function PassionCard({ area, index }: { area: typeof passionAreas[0]; index: number }) {
  const { rx, ry, onMouseMove, onMouseLeave } = useTilt(6);
  const Icon = area.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="glass-card p-5 flex gap-4 items-start h-full cursor-default"
      >
        <div
          style={{ transform: "translateZ(16px)", flexShrink: 0 }}
          className="w-10 h-10 rounded-lg bg-[var(--accent-gold-dim)] flex items-center justify-center"
        >
          <Icon size={18} color="var(--accent-gold)" />
        </div>
        <div style={{ transform: "translateZ(10px)" }}>
          <h3 className="text-subheading font-bold mb-1 text-[var(--text-primary)]">{area.title}</h3>
          <p className="text-body leading-relaxed">{area.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Innovation Card ─── */
function InnovationCard({ item, index }: { item: typeof innovationLibrary[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="relative bg-[var(--bg-card)] p-5 rounded-xl border border-[var(--border-card)] group overflow-hidden cursor-default"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.07),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="w-6 h-0.5 bg-[var(--accent-gold)] mb-3 rounded-full group-hover:w-10 transition-all duration-400" />
      <h3 className="text-subheading font-bold text-[var(--text-primary)] mb-2 leading-snug">{item.title}</h3>
      <p className="text-body leading-relaxed text-sm">{item.description}</p>
    </motion.div>
  );
}

/* ─── Study Tag ─── */
function StudyTag({ study, index }: { study: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: (index % 6) * 0.06, duration: 0.4 }}
      className="group flex items-center gap-2.5 p-3.5 rounded-lg border border-[var(--border-card)] bg-[var(--bg-card)] hover:border-[var(--accent-gold-dim)] hover:bg-[var(--bg-card-hover)] transition-all duration-300 cursor-default"
    >
      <ChevronRight size={12} className="text-[var(--accent-gold)] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="text-body font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors leading-snug" style={{ fontSize: "0.82rem" }}>
        {study}
      </span>
    </motion.div>
  );
}

/* ─── Publication Card ─── */
function PubCard({ pub, index }: { pub: typeof publications[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: (index % 3) * 0.07, duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="bg-[var(--bg-card)] rounded-xl border border-[var(--border-card)] hover:border-[var(--accent-gold-dim)] transition-colors p-5 flex flex-col h-full gap-3"
    >
      <span className="badge-gold w-fit">{pub.journal}</span>
      <p className="text-[var(--text-primary)] leading-snug flex-1 font-medium" style={{ fontSize: "0.82rem" }}>
        {pub.title}
      </p>
      <span className="flex items-center gap-1 font-bold uppercase tracking-wider transition-colors cursor-pointer" style={{ fontSize: "0.7rem", color: "var(--accent-gold)" }}>
        Read More <ExternalLink size={10} />
      </span>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function ResearchPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>

        {/* ─── HERO ─── */}
        <section
          ref={heroRef}
          style={{ paddingTop: "7rem", paddingBottom: "5rem", overflow: "hidden", position: "relative" }}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div style={{
              position: "absolute", width: "700px", height: "700px",
              top: "-20%", right: "-10%",
              background: "radial-gradient(circle, rgba(201,168,76,0.09), transparent 65%)",
              filter: "blur(90px)", borderRadius: "50%",
            }} />
          </div>


          <motion.div
            style={{ y: heroY, opacity: heroOpacity, position: "relative", zIndex: 10, paddingLeft: "clamp(1.5rem, 4vw, 3rem)", paddingRight: "clamp(1.5rem, 4vw, 3rem)", maxWidth: "1280px", margin: "0 auto", width: "100%" }}
          >
            <motion.span
              className="badge-gold mb-5 inline-flex"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Seshadri Lab Research Hub
            </motion.span>

            <motion.h1
              className="text-display font-bold mb-5 max-w-3xl"
              style={{
                background: "linear-gradient(155deg, #f5f0e8 30%, #c9a84c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.1,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Driving Innovation in<br />Healthcare Engineering
            </motion.h1>

            <motion.p
              className="text-body max-w-2xl mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              In the Seshadri Lab, we advance healthcare through wearable technologies, data-driven solutions,
              and hardware-based systems — integrating engineering principles with clinical insights to transform
              patient care.
            </motion.p>

            <motion.p
              className="font-semibold"
              style={{ color: "var(--accent-gold)", fontSize: "0.88rem" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
            >
              We envision a future where technology bridges gaps in healthcare — enabling personalized, accessible, and effective care for all.
            </motion.p>
          </motion.div>
        </section>

        <div className="gold-divider" />

        {/* ─── PASSION AREAS ─── */}
        <section style={{ padding: "4rem 0" }}>
          <div style={{ paddingLeft: "clamp(1.5rem, 4vw, 3rem)", paddingRight: "clamp(1.5rem, 4vw, 3rem)", maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
            <SectionHeader badge="Our Focus" title="What Are We Passionate About?" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {passionAreas.map((area, i) => (
                <PassionCard key={area.title} area={area} index={i} />
              ))}
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ─── LIBRARY OF INNOVATION ─── */}
        <section style={{ padding: "4rem 0", background: "var(--bg-secondary)" }}>
          <div style={{ paddingLeft: "clamp(1.5rem, 4vw, 3rem)", paddingRight: "clamp(1.5rem, 4vw, 3rem)", maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
            <SectionHeader
              badge="Research Verticals"
              title="Our Library of Innovation"
              subtitle="Pioneering different verticals within bioengineering to deliver next-generation healthcare solutions."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {innovationLibrary.map((item, i) => (
                <InnovationCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ─── ONGOING STUDIES ─── */}
        <section style={{ padding: "4rem 0" }}>
          <div style={{ paddingLeft: "clamp(1.5rem, 4vw, 3rem)", paddingRight: "clamp(1.5rem, 4vw, 3rem)", maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
            <SectionHeader
              badge="Active Work"
              title="Ongoing Studies & Initiatives"
              subtitle="A selection of our active research projects and clinical trials across various medical disciplines."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {studies.map((study, i) => (
                <StudyTag key={i} study={study} index={i} />
              ))}
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ─── WHY IT MATTERS ─── */}
        <section style={{ padding: "4rem 0", background: "#060606", position: "relative", overflow: "hidden" }}>
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div style={{
              position: "absolute", width: "400px", height: "400px",
              bottom: "-10%", right: "-5%",
              background: "radial-gradient(circle, rgba(201,168,76,0.07), transparent 70%)",
              filter: "blur(70px)", borderRadius: "50%",
            }} />
          </div>
          <div className={`${container} relative z-10`} style={{ maxWidth: "800px" }}>
            <SectionHeader badge="The Mission" title="Why Does It All Matter?" />
            <motion.blockquote
              className="pl-5 space-y-4"
              style={{ borderLeft: "3px solid rgba(201,168,76,0.4)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9 }}
            >
              <p style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", lineHeight: 1.75, color: "var(--text-secondary)" }}>
                &ldquo;The thesis of the Seshadri Lab is to engineer to improve patient outcomes… For me, it&apos;s
                solving the hardest problems in medicine through engineering. It&apos;s so grandkids can play with
                their grandparents, it&apos;s so sons and daughters can give their parents that long-lasting hug…&rdquo;
              </p>
              <p style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)", lineHeight: 1.7, color: "var(--accent-gold)", fontStyle: "italic", fontWeight: 600 }}>
                &ldquo;It&apos;s the incessant desire to create value through first principles grounded in data, and
                driven to solve the unmet clinical need.&rdquo;
              </p>
            </motion.blockquote>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ─── PUBLICATIONS ─── */}
        <section style={{ padding: "4rem 0", background: "var(--bg-secondary)" }}>
          <div style={{ paddingLeft: "clamp(1.5rem, 4vw, 3rem)", paddingRight: "clamp(1.5rem, 4vw, 3rem)", maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
            <SectionHeader
              badge="Peer Reviewed"
              title="Our Research in Action"
              subtitle="Notable publications spanning digital medicine, bioelectric applications, and sports science."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {publications.map((pub, i) => (
                <PubCard key={i} pub={pub} index={i} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
