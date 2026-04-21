"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight, ChevronLeft, User } from "lucide-react";

/* ── Shared Definitions ── */
const GOLD = "#c9a84c";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
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
  label: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 12px",
    borderRadius: 4,
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
    color: "#f5f0e8",
    marginBottom: "0.75rem",
  } as React.CSSProperties,
  bodyText: {
    fontSize: "0.95rem",
    lineHeight: 1.75,
    color: "#a69e8e",
    maxWidth: 600,
  } as React.CSSProperties,
  card: {
    background: "#111111",
    border: "1px solid #222222",
    borderRadius: 8,
    padding: "2rem",
  } as React.CSSProperties,
  divider: {
    height: 3,
    width: 48,
    background: GOLD,
    borderRadius: 2,
    marginTop: "0.75rem",
    marginBottom: "1.5rem",
  } as React.CSSProperties,
};

/* ── Content Strategy ── */

const principalInvestigator = {
  name: "Dr. Dhruv Seshadri",
  photo: "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/51bf4f63-3161-47da-9ae3-7af4d323e185/89d89257-0abe-44d0-86ca-855ac650939e.jpeg",
  tagline: "Innovating. Collaborating. Serving.",
  credentials: [
    "📍 Lehigh University — Bioengineering",
    "📍 Geisinger Health System — Orthopedics (Adjunct)",
    "🎓 PhD, Case Western Reserve University, 2022"
  ],
  bio: [
    "Dhruv Seshadri joined the Lehigh University Department of Bioengineering in August 2023 as an Assistant Professor. He received his B.S. in Polymer Science and Engineering in 2014, and M.S. and PhD degrees in Biomedical Engineering in 2018 and 2022 respectively from Case Western Reserve University in Cleveland, Ohio.",
    "His research involves the development, validation, and translation of wearable technology, bioelectronic devices, and digital therapeutics targeting human health and performance. This research has been published in NPJ Digital Medicine, Circulation, Journal of the American Academy of Dermatology, and IEEE, and featured in CNN, Wall Street Journal, Forbes, Fortune, Wired UK, and Nature Outlook.",
    "He has received grants from the Department of Defense, Northwestern University, National Science Foundation, and the American Orthopedic Society for Sports Medicine.",
    "He is also an Adjunct Assistant Professor in the Department of Orthopedics at Geisinger Health System, focusing on wearable technology for post-injury rehabilitation. Dr. Seshadri has a personal interest in developing technologies for neonatal and pediatric populations — an area where medical device innovation is greatly needed.",
    "Outside the lab, he loves to cook, explore new cities, watch Cleveland sports, and spend time with his wife!"
  ]
};

const gradStudents = [
  {
    name: "Hayley Whitney",
    role: "PhD Student",
    photo: "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/e0c92087-5a84-4ec9-9e77-7ba53b797998/profile_hayleywhit.png",
    bio: "PhD student in Bioengineering at Lehigh University with a focus on human performance and women's health optimization through remote sensing and machine learning. She earned a B.S. in Statistics with a minor in Computer Science in 2024. She joined the Seshadri Lab in Fall 2023 and also manages the women's basketball team, giving her a data-driven perspective on athletic support."
  },
  {
    name: "Joseph Amitrano",
    role: "PhD Student",
    photo: "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/0ca93132-f52e-40bb-9ccd-80706f408f0b/IMG_6015.jpeg",
    bio: "Joseph earned his undergraduate degree in Bioengineering at Lehigh University, exploring research on automated cell counting and the effects of graphene oxide on L6 Myoblast proliferation. He completed internships in pharmaceutical and medical device industries before joining the PhD program. Outside the lab, Joe enjoys soccer, powerlifting, movies, and traveling."
  },
  {
    name: "Charles Rulon",
    role: "Masters Student",
    photo: "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/63331ff3-302f-4b04-83a1-459fbd3f7484/IMG_0699.jpeg",
    bio: "Master's student in Bioengineering at Lehigh with a focus in human performance. He earned a B.S. in Biomedical Engineering in 2024 from the University of Maine, where he also played Division One football — giving him a field-level perspective on athletic data analysis and biosensors."
  },
  {
    name: "Tony Del Vecchio",
    role: "Masters Student",
    photo: "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/f01d2ee2-aa3f-4d77-b16f-f27fa9786bfb/Tony.png",
    bio: "Tony is a recent Lehigh Bioengineering graduate now pursuing his Master's degree at the same institution. His interests lie in bioelectronics and biosensor technology for imaging and diagnostics. Outside the lab, he enjoys skateboarding, spending time with friends, and hanging out with his dog, Apollo."
  },
  {
    name: "Anthony Cino",
    role: "Masters Student",
    photo: "https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/956d6531-42f7-414c-baf4-79b32a8460d0/Cino%2C+Anthony-1+%281%29.jpeg",
    bio: "Anthony earned his bachelor's degree in Biology from DeSales University and is now pursuing his Master's in Bioengineering at Lehigh. His goal is to work in medical device manufacturing. He joined Dr. Seshadri's lab to develop hands-on lab skills and contribute to wearable device projects. His favorite sport is ice hockey, which he hopes to incorporate into upcoming research."
  }
];

const consultants = [
  {
    name: "Bruce Muff",
    role: "Consultant",
    photo: "https://ui-avatars.com/api/?name=Bruce+Muff&background=111111&color=c9a84c&size=256",
    bio: "Bruce is an experienced and trusted advisor with deep expertise in semiconductor solutions, embedded processors, wireless technologies, and IoT sensor architectures. He is passionate about the electronic hardware industry and supporting small and startup companies, as well as Maker, R&D, and STEM initiatives. A proud Lehigh University alumnus, Bruce is consulting with the Seshadri Lab on projects relating to remote sensing for smart rehabilitation."
  }
];

const undergrads = [
  { classOf: "2025", students: ["Austin Alcantara", "Hope Flanegin", "Jack Grotke", "Ryan Gross", "Johnny Lin", "Colin Pancehlli"] },
  { classOf: "2026", students: ["Marina Falzone", "Malayna Leopold", "Lorraine Rwasoka", "Emmaly Seyam", "Megan Sheerin", "Jeff Wang", "Milad Zarrinfar"] },
  { classOf: "2027", students: ["Lizzy Jenulis"] },
  { classOf: "2028", students: ["Yuki Asako", "Travis Brady", "Kailey Miller", "Brooke Ogilvie", "Gerald Rashkovsky"] },
];

const visiting = "Sri Lakshmi Sriya Palaparty";
const interns = ["Ian Chang", "Aditi Ramamurthi"];

function GradStudentsCarousel({ students }: { students: typeof gradStudents }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % students.length);
  };
  
  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + students.length) % students.length);
  };

  const current = students[index];

  return (
    <div style={{ ...S.card, maxWidth: 600, margin: "0 auto", position: "relative", overflow: "hidden", minHeight: 380, display: "flex", flexDirection: "column" }}>
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ y: direction === 1 ? 80 : -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: direction === 1 ? -80 : 80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <img 
              src={current.photo} 
              alt={current.name} 
              style={{ width: 96, height: 96, borderRadius: "50%", objectFit: "cover", objectPosition: "top center", border: `2px solid ${GOLD}`, flexShrink: 0 }} 
            />
            <div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f5f0e8", marginBottom: "0.25rem" }}>{current.name}</h3>
              <div style={{ fontSize: "0.8rem", color: GOLD, fontWeight: 600 }}>{current.role}</div>
            </div>
          </div>
          <p style={{ ...S.bodyText, fontSize: "0.9rem", width: "100%" }}>
            {current.bio}
          </p>
        </motion.div>
      </AnimatePresence>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem", borderTop: "1px solid #222", paddingTop: "1.5rem" }}>
        <button 
          onClick={prev}
          style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#a69e8e", cursor: "pointer", fontWeight: 600 }}
        >
          <ChevronLeft size={18} /> Prev
        </button>
        <div style={{ color: "#a69e8e", fontSize: "0.85rem", fontWeight: 600 }}>
          {index + 1} / {students.length}
        </div>
        <button 
          onClick={next}
          style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#a69e8e", cursor: "pointer", fontWeight: 600 }}
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main style={S.page}>

        {/* ══════════════════ HERO ══════════════════ */}
        <section style={{ ...S.section(), minHeight: "40vh", paddingTop: "7rem", paddingBottom: "3rem" }}>
          <div style={S.container}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <motion.div style={{ ...S.label, justifyContent: "center" }} initial="hidden" animate="show" variants={fadeUp} custom={0}>
                Seshadri Lab
              </motion.div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                style={{
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "1rem",
                  color: "#f5f0e8",
                }}
              >
                Meet Our Team
              </motion.h1>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                style={{ ...S.bodyText, fontSize: "1.1rem" }}
              >
                A multidisciplinary group driven by curiosity, collaboration, and service
              </motion.p>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />


        {/* ══════════════════ PRINCIPAL INVESTIGATOR ══════════════════ */}
        <section style={S.section("#0b0b0b")}>
          <div style={S.container}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div style={S.label}>Lab Director</div>
              <h2 style={S.h2}>Principal Investigator</h2>
              <div style={S.divider} />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{
                ...S.card,
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "3rem",
                marginTop: "2rem",
              }}
              className="lg:grid-cols-[40%_1fr]"
            >
              {/* Image Column */}
              <div style={{ width: "100%", borderRadius: 4, overflow: "hidden", display: "flex", justifyContent: "center" }}>
                <img 
                  src={principalInvestigator.photo} 
                  alt={principalInvestigator.name} 
                  style={{ width: "100%", height: "100%", maxHeight: 600, objectFit: "cover", objectPosition: "top center", borderRadius: 8 }} 
                />
              </div>

              {/* Bio Column */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "#f5f0e8", marginBottom: "0.25rem" }}>
                  {principalInvestigator.name}
                </h3>
                <p style={{ color: GOLD, fontSize: "1rem", fontWeight: 600, marginBottom: "1.5rem" }}>
                  {principalInvestigator.tagline}
                </p>

                {principalInvestigator.bio.map((paragraph, idx) => (
                  <p key={idx} style={{ ...S.bodyText, maxWidth: "none", marginBottom: "1rem" }}>
                    {paragraph}
                  </p>
                ))}

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem", marginBottom: "2rem" }}>
                  {principalInvestigator.credentials.map((cred, idx) => (
                    <span 
                      key={idx}
                      style={{ 
                        fontSize: "0.75rem", background: "#1a1a1a", color: "#a69e8e", padding: "0.4rem 0.8rem", borderRadius: 4, border: "1px solid #333" 
                      }}
                    >
                      {cred}
                    </span>
                  ))}
                </div>

                <a 
                  href="https://scholar.google.com/citations?hl=en&sortby=pubdate&user=jVOCHjAAAAAJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ width: "fit-content" }}
                >
                  Scholar Profile <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

        {/* ══════════════════ GRADUATE STUDENTS ══════════════════ */}
        <section style={S.section()}>
          <div style={S.container}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ ...S.label, justifyContent: "center" }}>Research Output</div>
              <h2 style={{ ...S.h2 }}>Graduate Students</h2>
              <div style={{ ...S.divider, margin: "0.75rem auto 0 auto" }} />
            </div>

            <GradStudentsCarousel students={gradStudents} />
          </div>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

        {/* ══════════════════ CONSULTANTS ══════════════════ */}
        <section style={S.section("#0b0b0b")}>
          <div style={S.container}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div style={S.label}>Industry Experts</div>
              <h2 style={S.h2}>Consultants</h2>
              <div style={S.divider} />
            </motion.div>

            {consultants.map((consultant, i) => (
              <motion.div
                key={consultant.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ ...S.card, marginTop: "2rem", display: "flex", gap: "2rem", alignItems: "flex-start" }}
                className="flex-col md:flex-row"
              >
                <div 
                  style={{ 
                    width: 100, height: 100, borderRadius: "50%", background: "#1a1a1a", border: "1px solid #333", 
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden"
                  }}
                >
                  <img src={consultant.photo} alt={consultant.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#f5f0e8", marginBottom: "0.25rem" }}>{consultant.name}</h3>
                  <div style={{ fontSize: "0.85rem", color: GOLD, fontWeight: 600, marginBottom: "1rem" }}>{consultant.role}</div>
                  <p style={{ ...S.bodyText, maxWidth: "none" }}>{consultant.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

        {/* ══════════════════ UNDERGRADS & INTERNS ══════════════════ */}
        <section style={S.section()}>
          <div style={S.container}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }} className="md:grid-cols-2">
              
              {/* Undergrads */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h2 style={{ ...S.h2, fontSize: "1.75rem" }}>Undergraduate Students</h2>
                <div style={S.divider} />
                
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {undergrads.map((cohort) => (
                    <div key={cohort.classOf}>
                      <h4 style={{ fontSize: "0.95rem", color: "#f5f0e8", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em" }}>Class of {cohort.classOf}</h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {cohort.students.map(student => (
                          <span key={student} style={{ padding: "0.4rem 0.8rem", background: "#111", border: "1px solid #222", borderRadius: 4, fontSize: "0.8rem", color: "#a69e8e" }}>
                            {student}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div>
                    <h4 style={{ fontSize: "0.95rem", color: "#f5f0e8", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em" }}>Visiting Researcher</h4>
                    <span style={{ padding: "0.4rem 0.8rem", background: "#111", border: "1px solid #222", borderRadius: 4, fontSize: "0.8rem", color: "#a69e8e" }}>
                      {visiting}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* High School Interns */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h2 style={{ ...S.h2, fontSize: "1.75rem" }}>High School Interns</h2>
                <div style={S.divider} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {interns.map(intern => (
                    <span key={intern} style={{ padding: "0.4rem 0.8rem", background: "#111", border: "1px solid #222", borderRadius: 4, fontSize: "0.8rem", color: "#a69e8e" }}>
                      {intern}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

        {/* ══════════════════ CTA ══════════════════ */}
        <section style={{ ...S.section("#0b0b0b"), padding: "8rem 0" }}>
          <div style={S.container}>
            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              style={{
                background: "#c9a84c", // High contrast gold box
                borderRadius: 8,
                padding: "4rem 2rem",
                textAlign: "center"
              }}
            >
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#000", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                Join Our Team
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#111", maxWidth: 700, margin: "0 auto 2.5rem auto", lineHeight: 1.6, fontWeight: 500 }}>
                We are always looking for motivated individuals who resonate with our core values: integrity, curiosity, community, and excellence. We offer a highly collaborative environment for undergraduate students, graduate researchers, and postdoctoral fellows.
              </p>
              
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a 
                  href="mailto:dhs223@lehigh.edu" 
                  style={{ 
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.8rem 2rem", background: "#000", color: "#fff", 
                    fontWeight: 700, borderRadius: 4, textDecoration: "none" 
                  }}
                >
                  Email Us <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
