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
  addSkill?: (skill) => void;
  addSkillItem?: (key, item) => void;
  deleteSkillItem?: (key, item) => void;
}

export interface IProp {
  name?: string;
  reason?: string;
  addSkill?: (skill) => void;
  addSkillItem?: (key, item) => void;
  skill: ISkill;
}
