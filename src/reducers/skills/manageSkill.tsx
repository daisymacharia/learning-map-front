// src/reducers/skills/index.tsx

/**
 * Skills Reducers
 */

import * as Actions from '../../actions/skills/index';
import * as constants from '../../constants/skills/index';
import initialState from './initialState';

// helper functions for updating skill appState.
function updateSkill(skill, action) {
  const updatedSkill = skill.map((section) => {
    if ((section === action.key) && (action.operation === 'ADD')) {
      // update okbb array
      section.concat(action.data);
    }else if ((section === action.key) && (action.operation === 'DELETE')) {
      // remove item matching data
      section = section.filter((item) => item !== action.data);
    }
  });

  return updatedSkill;
}

/**
 *
 * @param state
 * @param action
 * @returns {any}
 * add a new skill
 * edit a skill
 */

export default function manageSkill(state = initialState.skills, action: any) {
  console.log(state);
  return state;
  // switch (action.type) {
  //   case constants.ADD_SKILL:
  //     return Object.assign({}, state, { skills: state.skills.concat(action.skill)});
  //   case constants.UPDATE_SKILL:
  //     return Object.assign({}, state, { skill: updateSkill(state.skill, action)});
  //   default:
  //     return state;
  // }
}
