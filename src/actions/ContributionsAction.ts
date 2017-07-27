import MockContributionApi from '../api/MockContributionApi';
import * as interfaces from '../interfaces/contributions.d';
import * as types from '../types';

export type ContributionsAction = interfaces.IContributionsActionProps;

const loadContributionsSuccess = (contributions): interfaces.IContributionsActionProps => {
  return { type: types.LOAD_CONTRIBUTIONS_SUCCESS, contributions };
};

export const loadContributions = () => {
  return ((dispatch) => {
    return MockContributionApi.getAllContributions()
      .then((contributions) => {
        dispatch(loadContributionsSuccess(contributions));
      });
  });
};
