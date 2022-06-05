import axios, {AxiosRequestConfig} from 'axios';

const apiConfig: AxiosRequestConfig = {
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key': '', //TODO: move to dotenv
  },
};

export const apiService = axios.create(apiConfig);
