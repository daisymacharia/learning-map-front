import axios from 'axios';
import { browserHistory } from 'react-router';
import actionTypes from '../actions/types';
import { IActionProperties } from '../interfaces/ideaFormComponent';

const baseUrl = 'https://private-3b35e-learningmapapi.apiary-mock.com/';
const encodedURI = encodeURI(`${baseUrl}idea/`);

export const newIdea = (details: IActionProperties) => {
  return (dispatch) => {
    return axios.post(encodedURI, {
      description: details.description,
      tags: details.tags,
      title: details.title,
    })
    .then(() => {
      dispatch({
        details,
        type: actionTypes.CREATE_IDEA_SUCCESS,
      });
    })
    .catch((err) => {
      throw (err);
    });
  };
};
