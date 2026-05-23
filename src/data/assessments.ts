import { AssessmentComponent, ProgramMeta } from "@/types/curriculum";

export const programAssessments: AssessmentComponent[] = [
  {
    label: "Hands-on Labs",
    percentage: 30,
    color: "#0d9488",
    description: "Evaluated based on successful completion of weekly packet tracer and GNS3 topologies.",
  },
  {
    label: "Case Studies",
    percentage: 20,
    color: "#f59e0b",
    description: "Bi-weekly troubleshooting scenarios where you must diagnose and write a resolution report.",
  },
  {
    label: "Mini Projects",
    percentage: 20,
    color: "#2563eb",
    description: "Larger module-end projects that require designing and implementing a specific architecture.",
  },
  {
    label: "Final Capstone",
    percentage: 30,
    color: "#7c3aed",
    description: "Enterprise Infrastructure Project integrating Cisco, MikroTik, Linux, and Omada Wireless.",
  },
];

export const programMeta: ProgramMeta = {
  name: "IntensiveCamp Network Engineering",
  subtitle: "From Fundamentals to Enterprise Networking",
  totalWeeks: 16,
  totalSessions: 32,
  sessionsPerWeek: 2,
  sessionDurationMin: 120,
  sessionDurationMax: 150,
  caseStudyFrequencyWeeks: 2,
  learningPhilosophy: [
    "Learn the Theory",
    "Build the Topology",
    "Break and Troubleshoot",
    "Think Like an Engineer",
  ],
};
