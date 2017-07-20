// src/types/skills/actionTypes.tsx

/**
 * skill shape definition
 */

export interface IOkbb {
  outputs: string[];
  knowledgeUnits: string[];
  behaviours: string[];
  beliefs: string[];
  addOutputItem?: (item: string) => void;
  addKnowledgeUnitItem?: (item: string) => void;
  addBehaviourItem?: (item: string) => void;
  addBeliefItem?: (item: string) => void;
}

// representation of a typical skill object
export interface ISkill {
  name: string;
  reasonForImplementation: string;
  okbbs: IOkbb;
}

// store representation of a collection of skills
export interface ISkills {
  skills: ISkill[];
}
