import axios from 'axios';

import { API_URL } from '../config/http-client';

const getConfig = (config = {}) => {
  config.method = config.method || 'get';
  config.responseType = config.responseType || 'json';
  config.headers = config.headers || {};
  config.url = (config.baseURL || API_URL) + (config.url || '');
  // Add CORS credentials on browser side
  config.withCredentials = config.withCredential ? config.withCredentials : true;

  return config;
};

export default async (config = {}) => {
  try {
    const { data } = await axios(getConfig(config));

    return data;
  } catch (error) {
    const {
      response: {
        data
      } = {},
      stack
    } = error;

    throw data || stack;
  }
};
