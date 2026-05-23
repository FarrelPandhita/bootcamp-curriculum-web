"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { curriculumModules as modules } from "@/data";
import { ChevronRight, Clock, BarChart2, Wrench, FlaskConical, X } from "lucide-react";

const levelColors: Record<string, string> = {
  Beginner: "#16a34a",
  Intermediate: "#2563a8",
  Advanced: "#f97316",
  Capstone: "#7c3aed",
};

export default function RoadmapSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedModule = selected !== null ? modules.find((m) => m.id === selected) : null;

  // Group sessions by week for the modal
  let weeksList: any[] = [];
  if (selectedModule) {
    const weeksMap = new Map<number, any[]>();
    selectedModule.sessions.forEach((s) => {
      if (!weeksMap.has(s.week)) weeksMap.set(s.week, []);
      weeksMap.get(s.week)!.push(s);
    });
    weeksList = Array.from(weeksMap.entries()).map(([weekNum, sessions]) => ({
      week: weekNum,
      sessions,
    })).sort((a, b) => a.week - b.week);
  }

  return (
    <section id="roadmap" style={{ background: "#f8f9fb", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{
            display: "inline-block", background: "rgba(37,99,168,0.07)", color: "#1d6fe6",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", padding: "5px 14px",
            borderRadius: 999, marginBottom: 16, border: "1px solid rgba(37,99,168,0.15)",
          }}>LEARNING ROADMAP</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>
            Your 16-Week Journey
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            Click any module to explore its detailed curriculum, tools, and project deliverables.
          </p>
        </motion.div>

        {/* Module cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
          {modules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(mod.id)}
              whileHover={{ y: -3, boxShadow: "0 10px 36px rgba(0,0,0,0.09)" }}
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 12,
                padding: "24px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <span style={{
                  fontSize: 11, fontWeight: 800, color: "#94a3b8",
                  fontFamily: "monospace", letterSpacing: "0.06em",
                }}>
                  MODULE {String(mod.id).padStart(2, "0")}
                </span>
                <span style={{
                  fontSize: 11, fontWeight: 700, color: levelColors[mod.level] || "#64748b",
                  background: `${levelColors[mod.level] || "#000"}12`,
                  padding: "3px 10px", borderRadius: 999,
                }}>
                  {mod.level}
                </span>
              </div>

              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 8, lineHeight: 1.4 }}>
                {mod.title}
              </h3>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 18, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {mod.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#64748b", fontSize: 12 }}>
                  <Clock size={12} />{mod.durationWeeks} Weeks
                </div>
                {mod.tools.length > 0 && (
                  <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#64748b", fontSize: 12 }}>
                    <Wrench size={12} />{mod.tools[0]}
                  </div>
                )}
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  fontSize: 11, background: "#f1f4f8",
                  color: "#475569", padding: "4px 10px", borderRadius: 6, fontWeight: 600,
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "80%",
                }}>
                  <FlaskConical size={10} style={{ display: "inline", marginRight: 4 }} />
                  {mod.miniProject.title}
                </div>
                <ChevronRight size={16} color="#94a3b8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Module Detail Modal */}
      <AnimatePresence>
        {selectedModule && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              style={{
                position: "fixed", inset: 0,
                background: "rgba(5,13,26,0.6)",
                zIndex: 200,
                backdropFilter: "blur(4px)",
              }}
            />
            {/* Centering wrapper — no animation here to avoid transform conflict */}
            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 201,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                pointerEvents: "none",
              }}
            >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                width: "min(700px, 95vw)",
                maxHeight: "85vh",
                overflowY: "auto",
                background: "#fff",
                borderRadius: 18,
                padding: 40,
                boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
                pointerEvents: "auto",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: "#94a3b8", fontFamily: "monospace", letterSpacing: "0.06em" }}>
                    MODULE {String(selectedModule.id).padStart(2, "0")}
                  </span>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", marginTop: 4, letterSpacing: "-0.02em" }}>
                    {selectedModule.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  style={{ background: "#f1f4f8", border: "none", borderRadius: 8, padding: 8, cursor: "pointer", flexShrink: 0 }}
                >
                  <X size={18} color="#64748b" />
                </button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
                {[
                  { icon: Clock, text: `${selectedModule.durationWeeks} Weeks` },
                  { icon: BarChart2, text: selectedModule.level },
                  ...selectedModule.tools.map((t) => ({ icon: Wrench, text: t })),
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} style={{
                      display: "flex", alignItems: "center", gap: 6,
                      background: "#f1f4f8", borderRadius: 7, padding: "6px 12px",
                      fontSize: 12, color: "#475569", fontWeight: 600,
                    }}>
                      <Icon size={12} />{item.text}
                    </div>
                  );
                })}
              </div>

              <div style={{ marginBottom: 24 }}>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>Overview</h4>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{selectedModule.description}</p>
              </div>

              <div style={{
                background: "#f8f9fb", borderRadius: 10, padding: "16px 20px", marginBottom: 24,
                border: "1px solid #e2e8f0",
              }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#64748b", marginBottom: 6, letterSpacing: "0.06em" }}>MINI PROJECT</p>
                <p style={{ fontSize: 14, color: "#0f172a", fontWeight: 600 }}>{selectedModule.miniProject.title}</p>
                <p style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>{selectedModule.miniProject.description}</p>
              </div>

              {weeksList.length > 0 ? (
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>Session Breakdown</h4>
                  {weeksList.map((w) => (
                    <div key={w.week} style={{ marginBottom: 24 }}>
                      <div style={{
                        fontSize: 12, fontWeight: 700, color: "#1d6fe6",
                        letterSpacing: "0.06em", marginBottom: 12,
                        display: "flex", alignItems: "center", gap: 8,
                      }}>
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#1d6fe6" }} />
                        WEEK {w.week}
                      </div>
                      {w.sessions.map((s: any) => (
                        <div key={s.session} style={{
                          background: "#fff", border: "1px solid #e2e8f0",
                          borderRadius: 10, padding: 18, marginBottom: 12, marginLeft: 12,
                        }}>
                          <div style={{ fontSize: 11, color: "#94a3b8", fontFamily: "monospace", marginBottom: 4 }}>
                            SESSION {s.session}
                          </div>
                          <h5 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>{s.title}</h5>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                            {[
                              { label: "Topics", items: s.topics },
                              { label: "Hands-on Lab", items: [s.handsOnLab] },
                              { label: "CLI Commands", items: s.cliCommands.length > 0 ? s.cliCommands : ["None"] },
                              { label: "Troubleshooting", items: [s.troubleshootingChallenge] },
                            ].map((block) => (
                              <div key={block.label}>
                                <p style={{ fontSize: 10, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.06em", marginBottom: 6 }}>
                                  {block.label.toUpperCase()}
                                </p>
                                {block.items.map((item) => (
                                  <div key={item} style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 4 }}>
                                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#cbd5e1", marginTop: 6, flexShrink: 0 }} />
                                    <span style={{ fontSize: 12, color: "#475569", lineHeight: 1.5 }}>
                                      {block.label === "CLI Commands" && item !== "None"
                                        ? <code style={{ fontFamily: "monospace", background: "#f1f4f8", padding: "1px 6px", borderRadius: 4 }}>{item}</code>
                                        : item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                          <div style={{ marginTop: 12, padding: "10px 14px", background: "#f0fdf4", borderRadius: 8, borderLeft: "3px solid #16a34a" }}>
                            <span style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", display: "block", marginBottom: 2 }}>OUTCOME</span>
                            <span style={{ fontSize: 12, color: "#166534" }}>{s.learningOutcome}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{
                  background: "#f8f9fb", border: "1px solid #e2e8f0", borderRadius: 10,
                  padding: 24, textAlign: "center",
                }}>
                  <p style={{ color: "#94a3b8", fontSize: 13 }}>
                    Full session details available in the expanded Syllabus section below.
                  </p>
                </div>
              )}
            </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
