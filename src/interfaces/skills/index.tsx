// src/interfaces/skills/index.tsx

/**
 * skill shape definition
 */

// representation of a typical skill object

export interface ISkill {
  name?: string;
  reason?: string;
  behaviours?: string[];
  beliefs?: string[];
  knowledgeUnits?: string[];
  outputs?: string[];
  addSkill?: (name, reason) => void;
  addSkillItem?: (key, item) => void;
  deleteSkillItem?: (key, item) => void;
}
