import axios from 'axios';
import CONFIG from './config';
import ENDPOINTS from './endpoints';

export function get() {
  return axios.get(`${CONFIG.URL}${ENDPOINTS.STUDENTS.BASE}`);
}

export function create(student) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.STUDENTS.BASE}`, student);
}

export function remove(id) {
  return axios.delete(`${CONFIG.URL}${ENDPOINTS.STUDENTS.BASE}${id}`);
}

export function edit(id) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.STUDENTS.EDIT}${id}`);
}
