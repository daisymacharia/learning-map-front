// src/interfaces/skills/index.tsx

/**
 * skill shape definition
 */

// representation of a typical skill object

export interface IProps {
  name: string;
  reason: string;
}

export interface IOkbbs {
  behaviours?: string[];
  beliefs?: string[];
  knowledgeUnits?: string[];
  outputs?: string[];
}

export interface ISkill {
  name: string;
  reasonForImplementation: string;
  outputs?: string[];
  knowledgeUnits?: string[];
  behaviours?: string[];
  beliefs?: string[];
}
