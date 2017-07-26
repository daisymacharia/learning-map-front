// src/actions/skills/index.tsx

/*
 * Skill action creators
 *
 * ADD_SKILL (submit current state of skill object to backend)
 * ADD_SKILL_SUCCESS (adding skill operation successful)
 * ADD_SKILL_FAILURE (adding skill failed)
 */

import * as constants from '../../constants/skills/index';

// action to request to add a new skill object
export function addSkill(skill) {
  return {
    skill,
    type: constants.ADD_SKILL,
  };
}

export function updateSkill(key, data, operation) {
  return {
    data,
    key,
    operation, // add, delete
    type: constants.UPDATE_SKILL,
  };
}
