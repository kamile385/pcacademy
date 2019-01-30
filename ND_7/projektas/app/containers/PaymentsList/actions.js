import {
  GET_PAYMENTS,
  SET_PAYMENTS,
  CREATE_PAYMENT,
  DELETE_PAYMENT,
  EDIT_PAYMENT,
} from './constants';

export function getPayments() {
  return {
    type: GET_PAYMENTS,
  };
}

export function setPayments(payments) {
  return {
    type: SET_PAYMENTS,
    payments,
  };
}

export function createPayment(payment) {
  return {
    type: CREATE_PAYMENT,
    payment,
  };
}

export function deletePayment(id) {
  return {
    type: DELETE_PAYMENT,
    id,
  };
}

export function editPayment(id) {
  return {
    type: EDIT_PAYMENT,
    id,
  };
}
