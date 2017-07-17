// src/actions/skills/index.tsx

/*
* Skill action creators
* */

import * as actions from '../../constants/skills/index';

export function createSkill(skill) {
  return {
    skill,
    type: actions.ADDSKILL,
  };
}
