import axios, {AxiosRequestConfig} from 'axios';
import {env} from '../../config';

const apiConfig: AxiosRequestConfig = {
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key': env.apiKey,
  },
};

export const apiService = axios.create(apiConfig);
