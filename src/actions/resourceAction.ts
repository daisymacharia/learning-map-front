import { ICreateResourceSuccess } from '../interfaces/resources.d';
import resourceApi from '../utils/api';
import * as types from './actionTypes';

const createResourceSuccess = (resource): ICreateResourceSuccess => {
  return {type: types.CREATE_RESOURCE_SUCCESS, resource};
};

export const saveResource = (resource) => {
  return (dispatch) => resourceApi.saveResource(resource).then((newResource) => {
    dispatch(createResourceSuccess(newResource));
    }).catch((error) => {
      throw(error);
    });
};
