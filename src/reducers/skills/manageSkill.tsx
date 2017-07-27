// src/reducers/skills/index.tsx

/**
 * Skills Reducers
 */

import * as constants from '../../constants/skills';
import initialState from './initialState';

/**
 *
 * @param state
 * @param action
 * @returns {any}
 * add a new skill
 * edit a skill
 */

export default function manageSkill(state = initialState.skills, action) {
  switch (action.type) {
    case constants.ADD_SKILL:
      return {...state, skills: [...state.concat(action.skill)]};
    default:
      return state;
  }
}
