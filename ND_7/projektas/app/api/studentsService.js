import axios from 'axios';
import CONFIG from './config';
import ENDPOINTS from './endpoints';

export function get() {
  return axios.get(`${CONFIG.URL}${ENDPOINTS.GET_STUDENTS}`);
}
