import { combineReducers } from 'redux';
import skills from './skills/skillReducer';

const mainReducer = combineReducers({
  skills,
});

export default mainReducer;
