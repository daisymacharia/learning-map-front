// src/actions/skills/index.tsx

/*
 * Skill action creators
 *
 * ADD_SKILL (submit current state of skill object to backend)
 * ADD_SKILL_SUCCESS (adding skill operation successful)
 * ADD_SKILL_FAILURE (adding skill failed)
 */

import * as actions from '../../constants/skills/index';

// action to request to add a new skill object
export function createSkill(skill) {
  return {
    type: actions.ADD_SKILL,
    skill,
  };
}

// action adding new skill successful
export function addSkillSucess(message) {
  return {
    type: actions.ADD_SKILL_SUCCESS,
    message,
  };
}

// action adding new skill failed
export function addSkillFailure(message) {
  return {
    type: actions.ADD_SKILL_FAILURE,
    message,
  };
}
