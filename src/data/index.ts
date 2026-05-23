import { modulesPart1 } from "./modulesPart1";
import { modulesPart2 } from "./modulesPart2";
import { linuxModules } from "./linuxModules";
import { ProgramModule } from "@/types/curriculum";

export const curriculumModules: ProgramModule[] = [
  ...modulesPart1,
  ...modulesPart2,
  ...linuxModules,
];

export * from "./caseStudies";
export * from "./tools";
export * from "./assessments";
export * from "./linuxModules";
