import { combineReducers } from 'redux';
import skills from './skillReducer';

const mainReducer = combineReducers({
  skills,
});

export default mainReducer;
