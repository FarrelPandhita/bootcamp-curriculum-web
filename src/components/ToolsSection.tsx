"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tools = [
  {
    stage: "01",
    name: "Cisco Packet Tracer",
    subtitle: "Foundation Learning",
    color: "#1d6fe6",
    tag: "Weeks 1–8",
    why: "Packet Tracer provides a risk-free, accessible environment to learn and practice networking concepts without needing physical hardware. Students focus on the protocol, not the infrastructure.",
    features: ["Free & accessible to all students", "Supports CCNA-level concepts", "Simulation mode for protocol inspection", "Multi-device topologies", "Integrated scoring for labs"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width={28} height={28}>
        <rect width="48" height="48" rx="10" fill="rgba(29,111,230,0.12)" />
        <rect x="10" y="20" width="28" height="4" rx="2" fill="#1d6fe6" />
        <rect x="10" y="28" width="20" height="4" rx="2" fill="rgba(29,111,230,0.5)" />
        <circle cx="38" cy="12" r="5" fill="#1d6fe6" />
        <circle cx="10" cy="12" r="5" fill="#2563a8" />
        <line x1="15" y1="12" x2="33" y2="12" stroke="#1d6fe6" strokeWidth="2" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    stage: "02",
    name: "GNS3 / EVE-NG",
    subtitle: "Real Enterprise Simulation",
    color: "#0d9488",
    tag: "Weeks 9–14",
    why: "GNS3 and EVE-NG run actual Cisco IOS images, giving students a near-identical experience to configuring real hardware. This is where the complexity of real enterprise networks is introduced.",
    features: ["Real IOS/IOSv images", "Complex multi-vendor topologies", "Integration with real interfaces", "Advanced protocol support", "Enterprise topology templates"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width={28} height={28}>
        <rect width="48" height="48" rx="10" fill="rgba(13,148,136,0.12)" />
        <rect x="8" y="10" width="32" height="20" rx="3" fill="none" stroke="#0d9488" strokeWidth="1.5" />
        <rect x="8" y="34" width="32" height="6" rx="2" fill="rgba(13,148,136,0.2)" />
        <circle cx="14" cy="20" r="3" fill="#0d9488" />
        <circle cx="24" cy="20" r="3" fill="#0d9488" />
        <circle cx="34" cy="20" r="3" fill="#0d9488" />
      </svg>
    ),
  },
  {
    stage: "03",
    name: "Omada SDN",
    subtitle: "Enterprise Awareness",
    color: "#7c3aed",
    tag: "Weeks 11–12",
    why: "Omada introduces students to Software-Defined Networking principles in the context of enterprise wireless and network management — reflecting how modern enterprise IT departments operate.",
    features: ["Cloud-managed network overview", "SDN controller concepts", "Enterprise WiFi management", "VLAN & policy management", "Real-world SME/enterprise use case"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width={28} height={28}>
        <rect width="48" height="48" rx="10" fill="rgba(124,58,237,0.12)" />
        <circle cx="24" cy="24" r="10" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="24" r="4" fill="#7c3aed" />
        <line x1="24" y1="14" x2="24" y2="8" stroke="#7c3aed" strokeWidth="1.5" />
        <line x1="24" y1="40" x2="24" y2="34" stroke="rgba(124,58,237,0.4)" strokeWidth="1.5" />
        <line x1="14" y1="24" x2="8" y2="24" stroke="rgba(124,58,237,0.4)" strokeWidth="1.5" />
        <line x1="40" y1="24" x2="34" y2="24" stroke="rgba(124,58,237,0.4)" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ToolsSection() {
  return (
    <section id="tools" style={{ background: "#f8f9fb", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{
            display: "inline-block", background: "rgba(37,99,168,0.07)", color: "#1d6fe6",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
            padding: "5px 14px", borderRadius: 999, marginBottom: 16,
            border: "1px solid rgba(37,99,168,0.15)",
          }}>TOOLS & LAB ENVIRONMENT</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>
            Progressive Lab Stack
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            We deliberately progress through tools that match increasing levels of complexity — mirroring real career growth.
          </p>
        </motion.div>

        {/* Tool progression timeline */}
        <div style={{ position: "relative" }}>
          {/* Horizontal connector (desktop) */}
          <div style={{
            position: "absolute",
            top: 48, left: "16.5%", right: "16.5%",
            height: 2,
            background: "linear-gradient(90deg, #1d6fe6, #0d9488, #7c3aed)",
            opacity: 0.3,
            zIndex: 0,
          }} className="tool-connector" />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, position: "relative" }} className="tools-grid">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.09)" }}
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 14,
                  padding: 28,
                  position: "relative",
                  transition: "all 0.2s",
                  zIndex: 1,
                }}
              >
                {/* Stage badge */}
                <div style={{
                  position: "absolute", top: -12, left: 24,
                  background: tool.color,
                  color: "#fff",
                  fontSize: 11, fontWeight: 800, fontFamily: "monospace",
                  padding: "3px 12px", borderRadius: 999,
                }}>
                  STAGE {tool.stage}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8, marginBottom: 16 }}>
                  {tool.icon}
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: "#0f172a" }}>{tool.name}</h3>
                    <p style={{ fontSize: 12, color: tool.color, fontWeight: 600 }}>{tool.subtitle}</p>
                  </div>
                </div>

                <div style={{
                  display: "inline-block",
                  background: `${tool.color}10`,
                  color: tool.color,
                  fontSize: 11, fontWeight: 700,
                  padding: "3px 10px", borderRadius: 999,
                  marginBottom: 14, border: `1px solid ${tool.color}25`,
                }}>
                  {tool.tag}
                </div>

                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, marginBottom: 20 }}>{tool.why}</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {tool.features.map((f) => (
                    <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: tool.color, marginTop: 7, flexShrink: 0 }} />
                      <span style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>

                {i < tools.length - 1 && (
                  <div style={{
                    position: "absolute", right: -18, top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 36, height: 36,
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "50%",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }} className="tool-arrow">
                    <ArrowRight size={14} color="#94a3b8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .tools-grid { grid-template-columns: 1fr !important; }
          .tool-connector { display: none !important; }
          .tool-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
