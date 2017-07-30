const allConfig =  {
  development: {
    ANDELA_API_BASE_URL: 'https://api.andela.com',
    API_BASE_URL: '',
    BASE_URL: 'http://learningmap-dev.andela.com:3000',
  },
  production: {},
  staging: {
    ANDELA_API_BASE_URL: 'https://api.andela.com',
    API_BASE_URL: '',
    BASE_URL: 'http://learning-map-staging.herokuapp.com',
  },
  testing: {
    ANDELA_API_BASE_URL: 'https://api.andela.com',
    API_BASE_URL: '',
    BASE_URL: 'http://learning-map-staging.herokuapp.com',
  },
};

export const config = allConfig[process.env.NODE_ENV];
