// src/actions/skills/index.tsx

/*
 * Skill action creators
 *
 * ADD_SKILL (submit current state of skill object to backend)
 * ADD_SKILL_SUCCESS (adding skill operation successful)
 * ADD_SKILL_FAILURE (adding skill failed)
 */

import * as constants from '../../constants/skills';
import {ISkill} from '../../interfaces/skills';

export interface IAddSkill {
  name;
  reason;
  type: constants.ADD_SKILL;
}

export type SkillAction = IAddSkill;

// action to request to add a new skill object
export function addSkill(skill: ISkill) {
  return {
    skill,
    type: constants.ADD_SKILL,
  };
}

export function addSkillItem(key, item) {
  return {
    item,
    key,
    type: constants.ADD_SKILL_ITEM,
  };
}

export function deleteSkillItem(key, item) {
  // console.log('delete skill action fired');
  return {
    item,
    key,
    type: constants.DELETE_SKILL_ITEM,
  };
}
