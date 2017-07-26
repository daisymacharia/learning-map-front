// src/reducers/skills/newskill.tsx
import initialState from './initialState';

/**
 * manage progressive creation of a new skill
 */

function newSkill(state = initialState.skill, action) {
  console.log(state);
  return state;
  // add name
  // add reason
  // add an okbb subsection item
  // delete an okbb subsection item
}

export default newSkill;
