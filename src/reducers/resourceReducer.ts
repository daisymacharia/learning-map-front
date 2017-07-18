import * as types from '../actions/actionTypes';
import initialState from './initialState';

const courseReducer = (state = initialState.resources, action) => {
  switch (action.type) {
    case types.CREATE_RESOURCE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.resources),
      ];

    default:
      return state;
  }
};

export default courseReducer;
