"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#network-track", label: "Network Engineering" },
  { href: "#linux-track", label: "Linux Sysadmin" },
  { href: "#integrated-labs", label: "Integrated Labs" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#capstone", label: "Capstone" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s",
        backgroundColor: scrolled ? "rgba(5,13,26,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}>
              Intensive<span style={{ color: "#5fa5f9" }}>Camp</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 4, alignItems: "center" }} className="hidden-mobile">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(255,255,255,0.72)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "6px 14px",
                  borderRadius: 6,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#fff";
                  (e.target as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.72)";
                  (e.target as HTMLAnchorElement).style.backgroundColor = "transparent";
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#roadmap"
              style={{
                marginLeft: 8,
                background: "#1d6fe6",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                padding: "8px 18px",
                borderRadius: 7,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.background = "#1558c0")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.background = "#1d6fe6")}
            >
              Enroll Now
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "rgba(5,13,26,0.98)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: "16px 24px 24px",
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 500,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#roadmap"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                marginTop: 16,
                background: "#1d6fe6",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                padding: "12px 0",
                borderRadius: 8,
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
