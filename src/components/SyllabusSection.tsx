"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { curriculumModules, caseStudies } from "@/data";
import { ChevronDown, ChevronUp, BookOpen, Wrench, FlaskConical, Target, Package, Search, Filter, AlertTriangle } from "lucide-react";

const levelColors: Record<string, string> = {
  Beginner: "#16a34a",
  Intermediate: "#2563a8",
  Advanced: "#f97316",
  Capstone: "#7c3aed",
};

export default function SyllabusSection() {
  const [openModule, setOpenModule] = useState<number | null>(1);
  const [openSession, setOpenSession] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWeek, setSelectedWeek] = useState<number | "All">("All");
  const [activeTrack, setActiveTrack] = useState<"network" | "linux">("network");

  // Filtering logic
  const filteredModules = curriculumModules.filter((mod) => {
    if (activeTrack === "network" && mod.id > 100) return false;
    if (activeTrack === "linux" && mod.id < 100) return false;

    const matchesSearch = mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          mod.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;
    
    if (selectedWeek !== "All") {
      return selectedWeek >= mod.weekRange[0] && selectedWeek <= mod.weekRange[1];
    }
    return true;
  });

  const allWeeks = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <section id="network-track" style={{ background: "#fff", padding: "96px 0" }}>
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
          }}>DETAILED SYLLABUS</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.03em", marginBottom: 14 }}>
            Full Curriculum Breakdown
          </h2>
          <p style={{ color: "#64748b", fontSize: 16, maxWidth: 540, margin: "0 auto" }}>
            Every session is structured with objectives, hands-on labs, CLI commands, and troubleshooting challenges.
          </p>
        </motion.div>

        {/* Track Tabs */}
        <div id="linux-track" style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <div style={{ display: "flex", background: "#f8f9fb", padding: 6, borderRadius: 12, border: "1px solid #e2e8f0" }}>
            <button
              onClick={() => { setActiveTrack("network"); setOpenModule(1); }}
              style={{
                padding: "12px 24px",
                background: activeTrack === "network" ? "#fff" : "transparent",
                color: activeTrack === "network" ? "#0f172a" : "#64748b",
                fontWeight: 700, fontSize: 15, border: "none",
                borderRadius: 8, cursor: "pointer",
                boxShadow: activeTrack === "network" ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                transition: "all 0.2s",
              }}
            >
              Network Engineering (PRIMARY)
            </button>
            <button
              onClick={() => { setActiveTrack("linux"); setOpenModule(101); }}
              style={{
                padding: "12px 24px",
                background: activeTrack === "linux" ? "#fff" : "transparent",
                color: activeTrack === "linux" ? "#0f172a" : "#64748b",
                fontWeight: 700, fontSize: 15, border: "none",
                borderRadius: 8, cursor: "pointer",
                boxShadow: activeTrack === "linux" ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                transition: "all 0.2s",
              }}
            >
              Linux Sysadmin (SUPPORTING)
            </button>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32, justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", flex: 1, minWidth: 280 }}>
            <div style={{ position: "relative", flex: 1 }}>
              <Search size={16} color="#94a3b8" style={{ position: "absolute", left: 14, top: 14 }} />
              <input 
                type="text" 
                placeholder="Search curriculum, modules, or tools..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%", padding: "12px 14px 12px 40px",
                  borderRadius: 10, border: "1px solid #e2e8f0",
                  outline: "none", fontSize: 14, color: "#0f172a",
                }}
              />
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Filter size={16} color="#64748b" />
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value === "All" ? "All" : Number(e.target.value))}
              style={{
                padding: "10px 16px", borderRadius: 8, border: "1px solid #e2e8f0",
                background: "#fff", color: "#0f172a", fontSize: 14, outline: "none", cursor: "pointer",
              }}
            >
              <option value="All">All Weeks</option>
              {allWeeks.map((w) => <option key={w} value={w}>Week {w}</option>)}
            </select>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filteredModules.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 0", color: "#64748b" }}>
              <p>No modules found matching your search.</p>
              <button onClick={() => { setSearchQuery(""); setSelectedWeek("All"); }} style={{ marginTop: 12, padding: "8px 16px", background: "#f1f4f8", border: "none", borderRadius: 8, cursor: "pointer" }}>Clear Filters</button>
            </div>
          ) : filteredModules.map((mod, idx) => {
            const isOpen = openModule === mod.id;

            // Group sessions by week to preserve the accordion structure
            const weeksMap = new Map<number, any[]>();
            mod.sessions.forEach((s) => {
              if (!weeksMap.has(s.week)) weeksMap.set(s.week, []);
              weeksMap.get(s.week)!.push(s);
            });
            const weeksList = Array.from(weeksMap.entries()).map(([weekNum, sessions]) => ({
              week: weekNum,
              sessions,
            })).sort((a, b) => a.week - b.week);

            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                style={{
                  border: isOpen ? "1.5px solid #1d6fe6" : "1.5px solid #e2e8f0",
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "#fff",
                  transition: "border-color 0.2s",
                }}
              >
                {/* Module header */}
                <button
                  onClick={() => setOpenModule(isOpen ? null : mod.id)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", padding: "20px 24px",
                    background: isOpen ? "rgba(29,111,230,0.03)" : "#fff",
                    border: "none", cursor: "pointer", textAlign: "left",
                    transition: "background 0.2s",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 0 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                      background: isOpen ? "rgba(29,111,230,0.12)" : "#f1f4f8",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <span style={{
                        fontSize: 12, fontWeight: 800, fontFamily: "monospace",
                        color: isOpen ? "#1d6fe6" : "#94a3b8",
                      }}>{String(mod.id).padStart(2, "0")}</span>
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{mod.title}</span>
                        <span style={{
                          fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999,
                          color: levelColors[mod.level] || "#000", background: `${levelColors[mod.level] || "#000"}12`,
                        }}>{mod.level}</span>
                      </div>
                      <p style={{ fontSize: 12.5, color: "#64748b", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{mod.description}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                    <span style={{ fontSize: 12, color: "#94a3b8", display: "flex", alignItems: "center", gap: 4 }}>
                      <BookOpen size={12} />{mod.durationWeeks} Weeks
                    </span>
                    {isOpen ? <ChevronUp size={16} color="#1d6fe6" /> : <ChevronDown size={16} color="#94a3b8" />}
                  </div>
                </button>

                {/* Module detail */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ padding: "0 24px 24px", borderTop: "1px solid #f1f4f8" }}>
                        {/* Meta row */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, padding: "16px 0 20px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#f8f9fb", borderRadius: 7, padding: "6px 12px", fontSize: 12, color: "#475569", fontWeight: 600 }}>
                            <Target size={12} color="#1d6fe6" /> Objectives: {mod.objectives.length}
                          </div>
                          {mod.tools.map((t) => (
                            <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, background: "#f8f9fb", borderRadius: 7, padding: "6px 12px", fontSize: 12, color: "#475569", fontWeight: 600 }}>
                              <Wrench size={12} color="#0d9488" /> {t}
                            </div>
                          ))}
                          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#f0fdf4", borderRadius: 7, padding: "6px 12px", fontSize: 12, color: "#16a34a", fontWeight: 600 }}>
                            <Package size={12} /> Project: {mod.miniProject.title}
                          </div>
                        </div>

                        {/* Case Study Card */}
                        {(() => {
                          const cs = caseStudies.find(c => c.id === mod.caseStudyId);
                          if (!cs) return null;
                          return (
                            <div style={{
                              marginBottom: 24, padding: "18px 20px", background: "linear-gradient(135deg, #fffbeb, #fef3c7)",
                              borderRadius: 12, border: "1px solid #fde68a",
                            }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                                <AlertTriangle size={14} color="#d97706" />
                                <span style={{ fontSize: 11, fontWeight: 800, color: "#d97706", letterSpacing: "0.06em" }}>{cs.week.toUpperCase()} CASE STUDY</span>
                              </div>
                              <h4 style={{ fontSize: 15, fontWeight: 700, color: "#92400e", marginBottom: 6 }}>{cs.title}</h4>
                              <p style={{ fontSize: 13, color: "#92400e", opacity: 0.9, lineHeight: 1.5, marginBottom: 12 }}>{cs.scenario}</p>
                              
                              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {cs.skills.map(skill => (
                                  <span key={skill} style={{ fontSize: 11, background: "rgba(217,119,6,0.1)", color: "#b45309", padding: "4px 8px", borderRadius: 6, fontWeight: 600 }}>
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          );
                        })()}

                        {/* Sessions */}
                        {weeksList.length > 0 ? (
                          weeksList.map((w) => (
                            <div key={w.week} style={{ marginBottom: 20 }}>
                              <div style={{
                                fontSize: 11, fontWeight: 800, color: "#1d6fe6",
                                letterSpacing: "0.08em", marginBottom: 10,
                                display: "flex", alignItems: "center", gap: 8,
                              }}>
                                <div style={{ width: 20, height: 1, background: "#1d6fe6" }} />
                                WEEK {w.week}
                              </div>
                              {w.sessions.map((s) => {
                                const sKey = `${mod.id}-${s.session}`;
                                const sOpen = openSession === sKey;
                                return (
                                  <div key={s.session} style={{ marginLeft: 8, marginBottom: 8 }}>
                                    <button
                                      onClick={() => setOpenSession(sOpen ? null : sKey)}
                                      style={{
                                        width: "100%", display: "flex", alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "14px 16px",
                                        background: sOpen ? "rgba(29,111,230,0.04)" : "#f8f9fb",
                                        border: sOpen ? "1px solid rgba(29,111,230,0.2)" : "1px solid #e2e8f0",
                                        borderRadius: 9, cursor: "pointer", textAlign: "left",
                                        transition: "all 0.15s",
                                      }}
                                    >
                                      <div>
                                        <span style={{ fontSize: 11, fontFamily: "monospace", color: "#94a3b8", marginRight: 8 }}>
                                          Session {s.session}
                                        </span>
                                        <span style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{s.title}</span>
                                      </div>
                                      {sOpen ? <ChevronUp size={14} color="#1d6fe6" /> : <ChevronDown size={14} color="#94a3b8" />}
                                    </button>

                                    <AnimatePresence initial={false}>
                                      {sOpen && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.25 }}
                                          style={{ overflow: "hidden" }}
                                        >
                                          <div style={{
                                            padding: "16px 16px 20px",
                                            borderLeft: "2px solid rgba(29,111,230,0.15)",
                                            marginLeft: 12,
                                            marginTop: 4,
                                          }}>
                                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="session-grid">
                                              {/* Topics */}
                                              <div>
                                                <p style={{ fontSize: 10, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.08em", marginBottom: 8 }}>TOPICS</p>
                                                {s.topics.map((t: string) => (
                                                  <div key={t} style={{ display: "flex", gap: 7, marginBottom: 5 }}>
                                                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#1d6fe6", marginTop: 7, flexShrink: 0 }} />
                                                    <span style={{ fontSize: 12.5, color: "#334155", lineHeight: 1.5 }}>{t}</span>
                                                  </div>
                                                ))}
                                              </div>
                                              {/* Lab */}
                                              <div>
                                                <p style={{ fontSize: 10, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.08em", marginBottom: 8 }}>HANDS-ON LAB</p>
                                                <div style={{ background: "#f8f9fb", border: "1px solid #e2e8f0", borderRadius: 7, padding: "10px 12px" }}>
                                                  <FlaskConical size={12} color="#0d9488" style={{ marginBottom: 4 }} />
                                                  <p style={{ fontSize: 12.5, color: "#334155" }}>{s.handsOnLab}</p>
                                                </div>
                                              </div>
                                              {/* Commands */}
                                              <div>
                                                <p style={{ fontSize: 10, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.08em", marginBottom: 8 }}>CLI COMMANDS</p>
                                                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                                                  {s.cliCommands.length > 0 ? s.cliCommands.map((c: string) => (
                                                    <code key={c} style={{
                                                      fontSize: 11, background: "#1e293b", color: "#93c5fd",
                                                      padding: "3px 8px", borderRadius: 5, fontFamily: "monospace",
                                                    }}>{c}</code>
                                                  )) : <span style={{ fontSize: 12, color: "#94a3b8" }}>N/A</span>}
                                                </div>
                                              </div>
                                              {/* Troubleshooting */}
                                              <div>
                                                <p style={{ fontSize: 10, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.08em", marginBottom: 8 }}>CHALLENGE</p>
                                                <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 7, padding: "10px 12px" }}>
                                                  <p style={{ fontSize: 12.5, color: "#9a3412" }}>{s.troubleshootingChallenge}</p>
                                                </div>
                                              </div>
                                            </div>
                                            {/* Outcome */}
                                            <div style={{ marginTop: 16, padding: "10px 14px", background: "#f0fdf4", borderRadius: 8, borderLeft: "3px solid #16a34a" }}>
                                              <span style={{ fontSize: 10, fontWeight: 800, color: "#16a34a", letterSpacing: "0.06em" }}>LEARNING OUTCOME — </span>
                                              <span style={{ fontSize: 12.5, color: "#166534" }}>{s.learningOutcome}</span>
                                            </div>
                                            {/* Homework */}
                                            <div style={{ marginTop: 8, padding: "10px 14px", background: "#f8f9fb", borderRadius: 8 }}>
                                              <span style={{ fontSize: 10, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.06em" }}>HOMEWORK — </span>
                                              <span style={{ fontSize: 12.5, color: "#475569" }}>{s.homework}</span>
                                            </div>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
                            </div>
                          ))
                        ) : (
                          <div style={{
                            padding: "20px 16px",
                            background: "#f8f9fb", borderRadius: 9, border: "1px solid #e2e8f0",
                            textAlign: "center", color: "#94a3b8", fontSize: 13,
                          }}>
                            Full session breakdown available in program documentation.
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) { .session-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
