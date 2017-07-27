import * as types from '../types';

import { ContributionsAction } from '../actions/ContributionsAction';

import initialState from './initialState';

/**
 * @export
 * @param {object} [state=initialState.contributions]
 * @param {ContributionsAction} action
 * @returns {object} state
 */
const contributionReducers = (state = initialState.contributions, action: ContributionsAction) => {
  switch (action.type) {
    case types.LOAD_CONTRIBUTIONS_SUCCESS:
      return action.contributions;
    default:
      return state;
  }
};

export default contributionReducers;
