// src/reducers/skills/newskill.tsx

import * as constants from '../../constants/skills';
import initialState from './initialState';

/**
 * manage progressive creation of a new skill
 */

function newSkill(state = initialState.skill, action) {
  // add okbb sub item
  // remove okbb sub item
  switch (action.type) {
    case constants.ADD_SKILL_ITEM:
      return handleAddSkillItem(state, action);
    case constants.DELETE_SKILL_ITEM:
      return state;
    default:
      return state;
  }
}

export default newSkill;

function handleAddSkillItem(state, action) {
  switch (action.key) {
    case 'name':
      return {...state, name: action.item};
    case 'reasonForImplementation':
      return {...state, reasonForImplementation: action.item};
    case 'Behaviours':
      return {...state, behaviours: [...state.behaviours, action.item]};
    case 'Beliefs':
      return {...state, beliefs: [...state.beliefs, action.item]};
    case 'Knowledge Units':
      return {...state, knowledgeUnits: [...state.knowledgeUnits, action.item]};
    case 'Outputs':
      return {...state, outputs: [...state.outputs, action.item]};
    default:
      return state;
  }
}
