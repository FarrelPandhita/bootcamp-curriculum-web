"use client";

import { motion } from "framer-motion";
import { Trophy, CheckSquare } from "lucide-react";

const capstoneRequirements = [
  { area: "Multi-Vendor Routing", desc: "Integrate Cisco Core and MikroTik Edge with static/dynamic routing" },
  { area: "VLAN Segmentation", desc: "Segment network by department with proper tagging across vendors" },
  { area: "Linux Services", desc: "Deploy and secure internal DNS, DHCP, and Web services on Linux VMs" },
  { area: "Firewall & ACL", desc: "Implement perimeter defense on MikroTik and internal ACLs on Cisco" },
  { area: "QoS Policy", desc: "Classify and prioritize critical traffic across the entire topology" },
  { area: "Enterprise Wireless", desc: "Integrate Omada Wireless controllers into the enterprise network" },
];

const deliverables = [
  "Comprehensive network topology diagram (Visio/draw.io)",
  "Detailed IP addressing and VLAN schema",
  "Full device configuration backup files (Cisco, MikroTik, Linux, Omada)",
  "Architecture explanation and technical rationale",
  "Troubleshooting report documenting resolutions to intentional failures",
];

export default function CapstoneSection() {
  return (
    <section id="capstone" style={{ background: "#fff", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{
            display: "inline-block", background: "rgba(124,58,237,0.07)", color: "#7c3aed",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
            padding: "5px 14px", borderRadius: 999, marginBottom: 16,
            border: "1px solid rgba(124,58,237,0.18)",
          }}>FINAL CAPSTONE</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>
            Enterprise Infrastructure Project
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
            The final proof of competency. Students design, build, and troubleshoot a complete multi-vendor topology: Internet → MikroTik Edge → Cisco Core → Linux Services → Enterprise Wireless.
          </p>
        </motion.div>

        {/* Dark banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(135deg, #050d1a 0%, #0f2040 100%)",
            borderRadius: 18,
            padding: "48px 48px 48px",
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 12,
              background: "rgba(124,58,237,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Trophy size={24} color="#a78bfa" />
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em" }}>FINAL CAPSTONE</p>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 800 }}>Multi-Vendor Infrastructure Design</h3>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {capstoneRequirements.map((r, i) => (
              <motion.div
                key={r.area}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10,
                  padding: "18px 20px",
                }}
              >
                <p style={{ fontSize: 13, fontWeight: 700, color: "#a78bfa", marginBottom: 6 }}>{r.area}</p>
                <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: "#f8f9fb",
            border: "1px solid #e2e8f0",
            borderRadius: 14,
            padding: "36px 40px",
          }}
        >
          <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0f172a", marginBottom: 24 }}>
            Required Deliverables
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="deliverables-grid">
            {deliverables.map((d) => (
              <div key={d} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <CheckSquare size={16} color="#7c3aed" style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 13.5, color: "#334155", lineHeight: 1.55 }}>{d}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 640px) { .deliverables-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
