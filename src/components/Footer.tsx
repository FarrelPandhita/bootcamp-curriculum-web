"use client";

import { Mail, ExternalLink, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#050d1a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* CTA Banner */}
      <div style={{
        background: "linear-gradient(135deg, #0f2040 0%, #162c54 100%)",
        padding: "60px 24px",
        textAlign: "center",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, marginBottom: 12, letterSpacing: "-0.02em" }}>
          Ready to Think Like a Network Engineer?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, marginBottom: 28, maxWidth: 460, margin: "0 auto 28px" }}>
          16 weeks. 32 sessions. Real labs. Real problems. A career-ready outcome.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#roadmap"
            style={{
              background: "#1d6fe6", color: "#fff",
              fontWeight: 700, fontSize: 14,
              padding: "12px 24px", borderRadius: 8,
              textDecoration: "none",
            }}
          >
            View Full Curriculum
          </a>
          <a
            href="mailto:info@netbootcamp.id"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.8)",
              fontWeight: 600, fontSize: 14,
              padding: "12px 24px", borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Footer body */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 36px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}>
                Intensive<span style={{ color: "#5fa5f9" }}>Camp</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, lineHeight: 1.7, maxWidth: 260 }}>
              A structured and practical networking program designed to bridge academic learning and real-world network engineering.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {[
                { icon: Mail, href: "mailto:info@netbootcamp.id" },
                { icon: ExternalLink, href: "#" },
                { icon: Code2, href: "#" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    style={{
                      width: 34, height: 34, borderRadius: 8,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.5)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(29,111,230,0.2)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#5fa5f9";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Curriculum",
              links: [
                { label: "Learning Roadmap", href: "#roadmap" },
                { label: "Detailed Syllabus", href: "#syllabus" },
                { label: "Tools & Labs", href: "#tools" },
                { label: "Case Studies", href: "#cases" },
                { label: "Capstone Project", href: "#capstone" },
              ],
            },
            {
              title: "Program",
              links: [
                { label: "Overview", href: "#overview" },
                { label: "Assessment", href: "#assessment" },
                { label: "Philosophy", href: "#philosophy" },
                { label: "FAQ", href: "#faq" },
              ],
            },
            {
              title: "Topics",
              links: [
                { label: "IP Addressing", href: "#syllabus" },
                { label: "VLAN & Routing", href: "#syllabus" },
                { label: "Network Security", href: "#syllabus" },
                { label: "Automation", href: "#syllabus" },
                { label: "Wireless", href: "#syllabus" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 14 }}>
                {col.title.toUpperCase()}
              </p>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.42)",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 500,
                    marginBottom: 10,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.42)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>
            © 2026 IntensiveCamp. Network Engineering & Infrastructure Bootcamp.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a key={t} href="#" style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, textDecoration: "none" }}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
