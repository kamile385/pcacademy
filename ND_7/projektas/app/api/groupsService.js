import axios from 'axios';
import CONFIG from './config';
import ENDPOINTS from './endpoints';

export function get() {
  return axios.get(`${CONFIG.URL}${ENDPOINTS.GROUPS.BASE}`);
}

export function create(group) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.GROUPS.BASE}`, group);
}

export function remove(id) {
  return axios.delete(`${CONFIG.URL}${ENDPOINTS.GROUPS.BASE}${id}`);
}

export function edit(id) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.GROUPS.EDIT}${id}`);
}
