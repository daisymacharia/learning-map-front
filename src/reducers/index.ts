import { combineReducers } from 'redux';

import skills from './skills/manageSkill';
import newSkill from './skills/newskill';

const mainReducer = combineReducers({
  newSkill,
  skills,
});

export default mainReducer;
