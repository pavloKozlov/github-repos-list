import axios from 'axios';
import { API_ENDPOINT } from '../constants/appConstants.js';

const instance = axios.create({
  baseURL: API_ENDPOINT,
});

/**
 * Fetches the github repos.
 *
 * @returns {Promise<T>}
 */
const fetchRepos = () =>
  instance.get('repositories').then((response) => response.data);

export const gitHuibService = {
  fetchRepos,
};
