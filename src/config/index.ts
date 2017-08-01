const allConfig = {
  development: {
    ANDELA_API_BASE_URL: 'https://api.andela.com',
    API_BASE_URL: 'https://private-3b35e-learningmapapi.apiary-mock.com',
    BASE_URL: 'http://learningmap-dev.andela.com:3000',
  },
  production: {
    ANDELA_API_BASE_URL: 'https://api.andela.com',
    API_BASE_URL: 'https://private-3b35e-learningmapapi.apiary-mock.com',
    BASE_URL: 'https://learning-map.herokuapp.com/',
  },
  staging: {
    ANDELA_API_BASE_URL: 'https://api.andela.com',
    API_BASE_URL: 'https://private-3b35e-learningmapapi.apiary-mock.com',
    BASE_URL: 'https://learning-map.herokuapp.com',
  },
  testing: {
    ANDELA_API_BASE_URL: 'https://api.andela.com',
    API_BASE_URL: 'https://private-3b35e-learningmapapi.apiary-mock.com',
    BASE_URL: 'http://learningmap-dev.andela.com:3000',
  },
};

export const config = allConfig[process.env.NODE_ENV || 'development'];
