import axios from 'axios';

const baseUrl = 'https://private-3b35e-learningmapapi.apiary-mock.com/';

export default {
  saveResource: (resource) => {
    const encodedURI = encodeURI(`${baseUrl}resources/`);

    return axios.post(encodedURI, resource)
      .then((response) => {
        return response.data;
      });
  },
};
