import axios from 'axios';
import CONFIG from './config';
import ENDPOINTS from './endpoints';

export function get() {
  return axios.get(`${CONFIG.URL}${ENDPOINTS.PAYMENTS.BASE}`);
}

export function create(payment) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.PAYMENTS.BASE}`, payment);
}

export function remove(id) {
  return axios.delete(`${CONFIG.URL}${ENDPOINTS.PAYMENTS.BASE}${id}`);
}

export function edit(id) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.PAYMENTS.EDIT}${id}`);
}
