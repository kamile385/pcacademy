import axios from 'axios';
import CONFIG from './config';
import ENDPOINTS from './endpoints';

export function get() {
  return axios.get(`${CONFIG.URL}${ENDPOINTS.PROGRAMS.BASE}`);
}

export function create(program) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.PROGRAMS.BASE}`, program);
}

export function remove(id) {
  return axios.delete(`${CONFIG.URL}${ENDPOINTS.PROGRAMS.BASE}${id}`);
}

export function edit(id) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.PROGRAMS.EDIT}${id}`);
}
