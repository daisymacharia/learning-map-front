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
      return handledeleteSkillItem(state, action);
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
      return (state.behaviours.indexOf(action.item) > -1 || action.item.length === 0) ?
        state : {...state, behaviours: [...state.behaviours, action.item]};
    case 'Beliefs':
      return (state.beliefs.indexOf(action.item) > -1 || action.item.length === 0) ?
        state : {...state, beliefs: [...state.beliefs, action.item]};
    case 'Knowledge Units':
      return (state.knowledgeUnits.indexOf(action.item) > -1 || action.item.length === 0) ?
        state : {...state, knowledgeUnits: [...state.knowledgeUnits, action.item]};
    case 'Outputs':
      return (state.outputs.indexOf(action.item) > -1 || action.item.length === 0) ?
        state : {...state, outputs: [...state.outputs, action.item]};
    default:
      return state;
  }
}

function handledeleteSkillItem(state, action) {
  switch (action.key) {
    case 'Behaviours':
      return state.behaviours.indexOf(action.item) > -1 ?
        state : {...state, behaviours: [...state.behaviours, action.item]};
    case 'Beliefs':
      return state.beliefs.indexOf(action.item) > -1 ? state : {...state, beliefs: [...state.beliefs, action.item]};
    case 'Knowledge Units':
      return state.knowledgeUnits.indexOf(action.item) > -1 ?
        state : {...state, knowledgeUnits: [...state.knowledgeUnits, action.item]};
    case 'Outputs':
      return state.outputs.indexOf(action.item) > -1 ? state : {...state, outputs: [...state.outputs, action.item]};
    default:
      return state;
  }
}
