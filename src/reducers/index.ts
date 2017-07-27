import { combineReducers } from 'redux';
import contributions from './contributionReducers';

const rootReducer = combineReducers({
  contributions,
});

export default rootReducer;
