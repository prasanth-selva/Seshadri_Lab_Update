"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Research", href: "#research" },
  { label: "Gallery", href: "#gallery" },
  { label: "Publications", href: "#publications" },
  { label: "Team", href: "#team" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-card)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "var(--border-card)",
        }}
      />

      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "4rem 1.5rem 2rem",
        }}
      >
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand Column */}
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/df927f55-54c4-4437-b477-4c874ef9932d/Main+Logo.png?format=300w"
              alt="Seshadri Lab"
              style={{ height: "50px", width: "auto", marginBottom: "1.25rem" }}
            />
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                maxWidth: "300px",
              }}
            >
              Advancing wearable bioelectronics and digital health technologies at
              Lehigh University to improve lives through innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--accent-gold)",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    transition: "color 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent-gold)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {link.label}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--accent-gold)",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                }}
              >
                <MapPin size={16} style={{ marginTop: "3px", flexShrink: 0, color: "var(--accent-gold)" }} />
                <span>
                  Lehigh University
                  <br />
                  Bethlehem, PA 18015
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                }}
              >
                <Mail size={16} style={{ color: "var(--accent-gold)" }} />
                <span>seshadri@lehigh.edu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-card)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} Seshadri Lab, Lehigh University. All
            rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/64948e66fcd18846e12021bd/1687457403410-1M81OGJRTNPRO5ALQ6T5/Lehigh_University_Logo.png"
              alt="Lehigh University"
              style={{ height: "24px", width: "auto", opacity: 0.6 }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
