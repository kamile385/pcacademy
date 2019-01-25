import axios from 'axios';
import CONFIG from './config';
import ENDPOINTS from './endpoints';

export function create(user) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.SIGNUP.BASE}`, user);
}
