import { combineReducers } from 'redux';
import contributions from './contributionReducers';
import resourceReducer from './resourceReducer';

const rootReducer = combineReducers({
  contributions,
  resourceReducer,
});

export default rootReducer;
