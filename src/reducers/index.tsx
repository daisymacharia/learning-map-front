import { combineReducers } from 'redux';
import contributions from './contributionReducers';
import ideaReducer from './ideaReducer';

const rootReducer = combineReducers({
  contributions,
  ideaReducer,
});

export default rootReducer;
