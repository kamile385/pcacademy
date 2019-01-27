import axios from 'axios';
import CONFIG from './config';
import ENDPOINTS from './endpoints';

export function get() {
  return axios.get(`${CONFIG.URL}${ENDPOINTS.PROGRAMS.BASE}`);
}

export function create(program) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.PROGRAMS.BASE}`, program);
}
