// src/reducers/skills/index.tsx

/*
 * Skills Reducers
 * */

export default function skillReducer(state = [], action) {
  switch (action.type) {
    case 'ADDOUTPUTITEM':
      return [ ...state,
        Object.assign({}, action.output),
      ];
    case 'ADDSKILL':
      return [
      //
      ];
    default:
      return state;
  }

}
