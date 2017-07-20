// src/reducers/skills/index.tsx

/*
 * Skills Reducers
 * */

import { ADD_SKILL } from '../../constants/skills';

export default function skillReducer(state = [], action) {
  switch (action.type) {
    case ADD_SKILL:
      return Object.assign({}, state, {});
    default:
      return state;
  }

}
