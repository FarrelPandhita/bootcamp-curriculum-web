"use client";

import { motion } from "framer-motion";
import { Server, Terminal, ArrowRightLeft, Shield, Globe, Network } from "lucide-react";

const integrations = [
  {
    networkConcept: "SSH & Remote Access",
    linuxImplementation: "ssh user@server",
    icon: Terminal,
    color: "#2563eb",
  },
  {
    networkConcept: "DNS Resolution",
    linuxImplementation: "dig google.com",
    icon: Globe,
    color: "#0d9488",
  },
  {
    networkConcept: "Firewall & Security",
    linuxImplementation: "ufw / iptables",
    icon: Shield,
    color: "#f97316",
  },
  {
    networkConcept: "IP Allocation (DHCP)",
    linuxImplementation: "dhclient",
    icon: Network,
    color: "#7c3aed",
  },
];

export default function IntegratedLabsSection() {
  return (
    <section id="integrated-labs" style={{ background: "#f8f9fb", padding: "96px 0", borderTop: "1px solid #f1f4f8", borderBottom: "1px solid #f1f4f8" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(13,148,136,0.08)", color: "#0d9488",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
            padding: "6px 14px", borderRadius: 999, marginBottom: 16,
            border: "1px solid rgba(13,148,136,0.2)",
          }}>
            <ArrowRightLeft size={14} /> INTEGRATED LEARNING EXPERIENCE
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>
            Where Networking Meets Infrastructure
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Students do not only learn abstract networking concepts. They implement those concepts directly in Linux server environments to bridge the gap between network infrastructure and application endpoints.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
          {integrations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.networkConcept}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 12,
                  padding: "24px 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 24,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16, flex: "1 1 200px" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `${item.color}15`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={22} color={item.color} />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.06em", marginBottom: 4 }}>NETWORKING CONCEPT</p>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a" }}>{item.networkConcept}</h3>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 20, flex: "1 1 200px", justifyContent: "flex-end" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#cbd5e1" }}>
                    <div style={{ width: 40, height: 2, background: "repeating-linear-gradient(90deg, #cbd5e1, #cbd5e1 4px, transparent 4px, transparent 8px)" }} />
                    <ArrowRightLeft size={16} />
                    <div style={{ width: 40, height: 2, background: "repeating-linear-gradient(90deg, #cbd5e1, #cbd5e1 4px, transparent 4px, transparent 8px)" }} />
                  </div>

                  <div style={{ background: "#0f172a", padding: "12px 20px", borderRadius: 8, minWidth: 200 }}>
                    <p style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.06em", marginBottom: 6 }}>LINUX IMPLEMENTATION</p>
                    <code style={{ color: "#10b981", fontFamily: "monospace", fontSize: 14, fontWeight: 600 }}>
                      $ {item.linuxImplementation}
                    </code>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: "center", marginTop: 40 }}
        >
          <p style={{ fontSize: 15, fontWeight: 600, color: "#334155" }}>
            The Goal: <span style={{ color: "#1d6fe6" }}>Make networking concepts feel real.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
