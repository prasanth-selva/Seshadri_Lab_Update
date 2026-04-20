"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublicationsSection from "@/components/PublicationsSection";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { Activity, Globe, Cpu, Database, ChevronRight } from "lucide-react";

/* ── shared tilt hook ── */
function useTilt(factor = 10) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [factor, -factor]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-factor, factor]), { stiffness: 200, damping: 20 });
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
  { title: "Clinical Applications of Data Science", description: "Utilizing predictive modeling and machine learning to enhance diagnosis and treatment.", icon: Database },
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
  { title: "Return to sport following the COVID-19 lockdown and its impact on injury rates in the German Soccer League", journal: "Frontiers" },
  { title: "Wearable biosensors in congenital heart disease: Needs to advance the field", journal: "JACC Advances" },
  { title: "Validation of a hand-mounted wearable sensor for scratching movements in adults with atopic dermatitis", journal: "JAAD" },
  { title: "Accuracy of the Apple Watch 4 to Measure Heart Rate in Patients With Atrial Fibrillation", journal: "IEEE JTEHM" },
  { title: "Wearable technology in sports medicine to guide return-to-play following COVID-19 diagnosis", journal: "Digital Health" },
];

/* ─── Passion Card with Tilt ─── */
function PassionCard({ area, index }: { area: typeof passionAreas[0]; index: number }) {
  const { rx, ry, onMouseMove, onMouseLeave } = useTilt(8);
  const Icon = area.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="glass-card p-6 sm:p-8 flex gap-5 items-start h-full cursor-default hover:border-[var(--accent-gold-dim)]"
      >
        <div style={{ transform: "translateZ(20px)" }} className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--accent-gold-dim)] flex items-center justify-center">
          <Icon size={22} color="var(--accent-gold)" />
        </div>
        <div style={{ transform: "translateZ(15px)" }}>
          <h3 className="text-subheading font-bold mb-2 text-[var(--text-primary)]">{area.title}</h3>
          <p className="text-body text-sm leading-relaxed">{area.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Innovation Card ─── */
function InnovationCard({ item, index }: { item: typeof innovationLibrary[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className="relative bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl border border-[var(--border-card)] group overflow-hidden cursor-default"
    >
      {/* Hover glow corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="w-8 h-0.5 bg-[var(--accent-gold)] mb-4 rounded-full group-hover:w-14 transition-all duration-500" />
      <h3 className="text-subheading font-bold text-[var(--text-primary)] mb-3 leading-snug">{item.title}</h3>
      <p className="text-body text-sm leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

/* ─── Study Tag ─── */
function StudyTag({ study, index }: { study: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: (index % 6) * 0.07, duration: 0.45 }}
      whileHover={{ x: 6, transition: { duration: 0.2 } }}
      className="group flex items-center gap-3 p-4 sm:p-5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] hover:border-[var(--accent-gold-dim)] hover:bg-[var(--bg-card-hover)] transition-all duration-300 cursor-default"
    >
      <ChevronRight size={14} className="text-[var(--accent-gold)] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="text-body text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors leading-snug">
        {study}
      </span>
    </motion.div>
  );
}

/* ─── Publication Card ─── */
function PubCard({ pub, index }: { pub: typeof publications[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.45 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="bg-[var(--bg-card)] rounded-xl border border-[var(--border-card)] hover:border-[var(--accent-gold-dim)] transition-colors p-6 flex flex-col h-full gap-4"
    >
      <span className="badge-gold w-fit">{pub.journal}</span>
      <p className="text-body font-semibold text-[var(--text-primary)] leading-snug flex-1" style={{ fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)" }}>
        {pub.title}
      </p>
      <span className="text-caption flex items-center gap-1 hover:text-[var(--accent-gold)] transition-colors cursor-pointer font-bold uppercase tracking-wider">
        Read More ↗
      </span>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function ResearchPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      <Navbar />
      <main
        className="relative"
        style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        {/* ─── HERO ─── */}
        <section
          ref={heroRef}
          className="relative overflow-hidden"
          style={{ paddingTop: "clamp(6rem, 12vw, 10rem)", paddingBottom: "clamp(4rem, 8vw, 7rem)" }}
        >
          {/* Ambient BG */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute rounded-full"
              style={{
                width: "clamp(400px, 60vw, 900px)",
                height: "clamp(400px, 60vw, 900px)",
                top: "-20%",
                right: "-15%",
                background: "radial-gradient(circle, rgba(201,168,76,0.1), transparent 65%)",
                filter: "blur(80px)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: "300px",
                height: "300px",
                bottom: "0",
                left: "-10%",
                background: "radial-gradient(circle, rgba(201,168,76,0.06), transparent 70%)",
                filter: "blur(60px)",
              }}
            />
          </div>

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 px-[var(--section-px)] max-w-[var(--container-max)] mx-auto"
          >
            <motion.p
              className="badge-gold mb-6 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Seshadri Lab Research Hub
            </motion.p>

            <motion.h1
              className="text-display font-bold mb-6 text-[var(--text-primary)] max-w-4xl"
              style={{
                background: "linear-gradient(160deg, #fff 30%, #c9a84c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Driving Innovation in<br />Healthcare Engineering
            </motion.h1>

            <motion.p
              className="text-body max-w-2xl mb-4"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              In the Seshadri Lab, we are dedicated to advancing healthcare through wearable technologies,
              data-driven solutions, and hardware-based systems. By integrating engineering principles with
              clinical insights, our mission is to transform patient care and improve outcomes.
            </motion.p>

            <motion.p
              className="font-semibold"
              style={{ color: "var(--accent-gold)", fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We envision a future where technology bridges gaps in healthcare — enabling personalized,
              accessible, and effective care for all.
            </motion.p>
          </motion.div>
        </section>

        {/* gold rule */}
        <div className="gold-divider" />

        {/* ─── PASSION AREAS ─── */}
        <section style={{ padding: "var(--section-py) var(--section-px)" }}>
          <div className="max-w-[var(--container-max)] mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="badge-gold mb-3 w-fit">Our Focus</p>
              <h2 className="text-heading mb-3">What Are We Passionate About?</h2>
              <div className="h-0.5 w-16 bg-[var(--accent-gold)] rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {passionAreas.map((area, i) => (
                <PassionCard key={area.title} area={area} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* gold rule */}
        <div className="gold-divider" />

        {/* ─── LIBRARY OF INNOVATION ─── */}
        <section
          style={{
            padding: "var(--section-py) var(--section-px)",
            background: "var(--bg-secondary)",
          }}
        >
          <div className="max-w-[var(--container-max)] mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="badge-gold mb-3 w-fit">Research Verticals</p>
              <h2 className="text-heading mb-3">Our Library of Innovation</h2>
              <p className="text-body max-w-2xl" style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}>
                Pioneering different verticals within bioengineering to deliver next-generation healthcare solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {innovationLibrary.map((item, i) => (
                <InnovationCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* gold rule */}
        <div className="gold-divider" />

        {/* ─── ONGOING STUDIES ─── */}
        <section style={{ padding: "var(--section-py) var(--section-px)" }}>
          <div className="max-w-[var(--container-max)] mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="badge-gold mb-3 w-fit">Active Work</p>
              <h2 className="text-heading mb-3">Ongoing Studies &amp; Initiatives</h2>
              <div className="h-0.5 w-16 bg-[var(--accent-gold)] rounded-full mb-4" />
              <p className="text-body max-w-2xl" style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}>
                A selection of our active research projects and clinical trials across various medical disciplines.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {studies.map((study, i) => (
                <StudyTag key={i} study={study} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* gold rule */}
        <div className="gold-divider" />

        {/* ─── WHY IT MATTERS ─── */}
        <section
          className="relative overflow-hidden"
          style={{
            padding: "var(--section-py) var(--section-px)",
            background: "#050505",
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute rounded-full"
              style={{
                width: "500px",
                height: "500px",
                bottom: "-15%",
                right: "-10%",
                background: "radial-gradient(circle, rgba(201,168,76,0.08), transparent 70%)",
                filter: "blur(80px)",
              }}
            />
          </div>

          <div className="max-w-[900px] mx-auto relative z-10">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="badge-gold mb-3 w-fit">The Mission</p>
              <h2 className="text-heading mb-3">Why Does It All Matter?</h2>
              <div className="h-0.5 w-16 bg-[var(--accent-gold)] rounded-full" />
            </motion.div>

            <motion.blockquote
              className="pl-6 border-l-4 border-[var(--accent-gold)]/40 space-y-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <p
                className="text-[var(--text-secondary)] leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}
              >
                &ldquo;The thesis of the Seshadri Lab is to engineer to improve patient outcomes… For me, it&apos;s
                solving the hardest problems in medicine through engineering. It&apos;s so grandkids can play with
                their grandparents, it&apos;s so sons and daughters can give their parents that long-lasting hug…&rdquo;
              </p>
              <p
                className="font-semibold italic"
                style={{ color: "var(--accent-gold)", fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)" }}
              >
                &ldquo;It&apos;s the incessant desire to create value through first principles grounded in data, and
                driven to solve the unmet clinical need.&rdquo;
              </p>
            </motion.blockquote>
          </div>
        </section>

        {/* gold rule */}
        <div className="gold-divider" />

        {/* ─── PUBLICATIONS ─── */}
        <section
          style={{
            padding: "var(--section-py) var(--section-px)",
            background: "var(--bg-secondary)",
          }}
        >
          <div className="max-w-[var(--container-max)] mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="badge-gold mb-3 w-fit">Peer Reviewed</p>
              <h2 className="text-heading mb-3">Our Research in Action</h2>
              <p className="text-body max-w-2xl" style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}>
                Notable publications spanning digital medicine, bioelectric applications, and sports science.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
