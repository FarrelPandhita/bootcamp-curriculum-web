import { modulesPart1 } from "./modulesPart1";
import { modulesPart2 } from "./modulesPart2";
import { ProgramModule } from "@/types/curriculum";

export const curriculumModules: ProgramModule[] = [
  ...modulesPart1,
  ...modulesPart2,
];

export * from "./caseStudies";
export * from "./tools";
export * from "./assessments";
