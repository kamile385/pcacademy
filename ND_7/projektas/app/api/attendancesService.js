import axios from 'axios';
import CONFIG from './config';
import ENDPOINTS from './endpoints';

export function get() {
  return axios.get(`${CONFIG.URL}${ENDPOINTS.ATTENDANCES.BASE}`);
}

export function create(attendance) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.ATTENDANCES.BASE}`, attendance);
}

export function remove(id) {
  return axios.delete(`${CONFIG.URL}${ENDPOINTS.ATTENDANCES.BASE}${id}`);
}

export function edit(id) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.ATTENDANCES.EDIT}${id}`);
}
