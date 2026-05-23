// ─── Core curriculum types ───────────────────────────────────────────────────

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "Capstone";

export interface LearningOutcome {
  id: string;
  description: string;
}

export interface WeeklySession {
  week: number;
  session: number; // global session number 1-32
  sessionInModule: number; // 1-4
  title: string;
  durationMinutes: number;
  objectives: string[];
  topics: string[];
  handsOnLab: string;
  cliCommands: string[];
  troubleshootingChallenge: string;
  homework: string;
  deliverables: string[];
  learningOutcome: string;
  tags: string[];
}

export interface MiniProject {
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface CaseStudy {
  id: string;
  moduleId: number;
  week: string;
  title: string;
  scenario: string;
  requirement: string;
  deliverables: string[];
  skills: string[];
}

export interface ProgramModule {
  id: number;
  title: string;
  slug: string;
  description: string;
  durationWeeks: number;
  weekRange: [number, number];
  level: DifficultyLevel;
  tools: string[];
  objectives: string[];
  learningOutcomes: string[];
  miniProject: MiniProject;
  sessions: WeeklySession[];
  caseStudyId: string;
}

export interface Tool {
  id: string;
  name: string;
  subtitle: string;
  stage: number;
  weekRange: string;
  why: string;
  features: string[];
  color: string;
}

export interface AssessmentComponent {
  label: string;
  percentage: number;
  color: string;
  description: string;
}

export interface ProgramMeta {
  name: string;
  subtitle: string;
  totalWeeks: number;
  totalSessions: number;
  sessionsPerWeek: number;
  sessionDurationMin: number;
  sessionDurationMax: number;
  caseStudyFrequencyWeeks: number;
  learningPhilosophy: string[];
}
