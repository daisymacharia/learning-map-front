import actionTypes from '../actions/types';

export default function ideaReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_IDEA_SUCCESS:
      return {
        ...state,
        idea: action.details,
      };
    default:
      return state;
  }
}
