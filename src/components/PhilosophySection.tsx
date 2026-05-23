"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Cpu, Bug, Lightbulb } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: BookOpen,
    title: "Learn",
    color: "#1d6fe6",
    tagline: "Deep conceptual understanding",
    desc: "Understand networking concepts deeply — not just the definition, but the 'why' behind every protocol, standard, and design decision. Each concept is introduced with real-world context before any configuration begins.",
    details: ["Structured theory sessions", "Visual protocol walkthroughs", "Real-world scenario framing", "Prerequisite knowledge mapping"],
  },
  {
    num: "02",
    icon: Cpu,
    title: "Build",
    color: "#0d9488",
    tagline: "Hands-on implementation every session",
    desc: "Implement concepts directly through guided labs. Every theory session is paired with a hands-on lab where students configure real devices in simulated or emulated environments — no passive learning.",
    details: ["Guided lab per session", "Cisco Packet Tracer → GNS3 → EVE-NG", "Step-by-step configuration", "Build complexity progressively"],
  },
  {
    num: "03",
    icon: Bug,
    title: "Troubleshoot",
    color: "#f97316",
    tagline: "Structured problem-solving methodology",
    desc: "Solve intentional networking failures using a systematic approach. Students face pre-broken topologies and must diagnose, isolate, and fix issues — developing the muscle memory of a real network engineer.",
    details: ["Pre-broken topology challenges", "OSI-based troubleshooting method", "CLI diagnostic commands", "Document fix & root cause"],
  },
  {
    num: "04",
    icon: Lightbulb,
    title: "Think Like an Engineer",
    color: "#7c3aed",
    tagline: "Design, validate, and document",
    desc: "Analyze requirements, design solutions, validate against constraints, and produce professional documentation. This is the mindset shift from student to practitioner — learning to think before configuring.",
    details: ["Requirements analysis", "Network design methodology", "Solution validation", "Professional documentation"],
  },
];

export default function PhilosophySection() {
  const [active, setActive] = useState(0);

  return (
    <section id="philosophy" style={{ background: "#f8f9fb", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{
            display: "inline-block",
            background: "rgba(37,99,168,0.07)",
            color: "#1d6fe6",
            fontSize: 12, fontWeight: 700,
            letterSpacing: "0.08em",
            padding: "5px 14px",
            borderRadius: 999,
            marginBottom: 16,
            border: "1px solid rgba(37,99,168,0.15)",
          }}>
            LEARNING PHILOSOPHY
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>
            How You Will Learn
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            Our learning model follows a proven 4-stage cycle repeated across every module.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="philosophy-grid">
          {/* Step selectors */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = active === i;
              return (
                <motion.button
                  key={step.title}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "20px 22px",
                    borderRadius: 12,
                    border: isActive ? `1.5px solid ${step.color}` : "1.5px solid #e2e8f0",
                    background: isActive ? `${step.color}08` : "#fff",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s",
                    width: "100%",
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: isActive ? `${step.color}18` : "#f1f4f8",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.2s",
                  }}>
                    <Icon size={18} color={isActive ? step.color : "#94a3b8"} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: isActive ? step.color : "#94a3b8", fontFamily: "monospace" }}>
                        {step.num}
                      </span>
                      <span style={{ fontSize: 15, fontWeight: 700, color: isActive ? "#0f172a" : "#475569" }}>
                        {step.title}
                      </span>
                    </div>
                    <span style={{ fontSize: 13, color: "#94a3b8" }}>{step.tagline}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div style={{ position: "sticky", top: 100 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 16,
                  padding: 36,
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: `${steps[active].color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  {(() => { const Icon = steps[active].icon; return <Icon size={24} color={steps[active].color} />; })()}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: steps[active].color, letterSpacing: "0.06em", marginBottom: 8 }}>
                  STAGE {steps[active].num}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", marginBottom: 14, letterSpacing: "-0.02em" }}>
                  {steps[active].title}
                </h3>
                <p style={{ color: "#64748b", fontSize: 14.5, lineHeight: 1.75, marginBottom: 24 }}>
                  {steps[active].desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {steps[active].details.map((d) => (
                    <div key={d} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: 999, background: steps[active].color, flexShrink: 0 }} />
                      <span style={{ fontSize: 13.5, color: "#334155", fontWeight: 500 }}>{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .philosophy-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
