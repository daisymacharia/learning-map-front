import axios from 'axios';
import MockContributionApi from '../api/MockContributionApi';
import { config } from '../config/index';
import * as interfaces from '../interfaces/contributions.d';
import * as types from '../types';

export type ContributionsAction = interfaces.IContributionsActionProps;

const loadContributionsSuccess = (contributions): interfaces.IContributionsActionProps => {
  return { type: types.LOAD_CONTRIBUTIONS_SUCCESS, contributions };
};

export const loadContributions = () => {
  return ((dispatch) => {
    return axios.get(`${config.API_BASE_URL}/contributions/`)
      .then((contributions) => {
        dispatch(loadContributionsSuccess(contributions.data.contributions));
      });
  });
};
