import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_PAYMENTS,
  SET_PAYMENTS,
  CREATE_PAYMENT,
  DELETE_PAYMENT,
  EDIT_PAYMENT,
} from './constants';
import * as paymentsService from '../../api/paymentsService';

function* getPayments() {
  const result = yield call(paymentsService.get);
  yield put({
    type: SET_PAYMENTS,
    payments: result.data,
  });
}

function* createPayment(action) {
  yield call(paymentsService.create, action.payment);
  yield put({
    type: GET_PAYMENTS,
  });
}

function* deletePayment(action) {
  const result = yield call(paymentsService.remove, action.id);
  yield put({
    type: GET_PAYMENTS,
  });
  console.log(result.data.message);
}

function* editPayment(action) {
  const result = yield call(paymentsService.edit, action.id);
  yield put({
    type: GET_PAYMENTS,
  });
  console.log(result.data.message);
}

export default function* getPaymentsSaga() {
  yield takeEvery(GET_PAYMENTS, getPayments);
  yield takeEvery(CREATE_PAYMENT, createPayment);
  yield takeEvery(DELETE_PAYMENT, deletePayment);
  yield takeEvery(EDIT_PAYMENT, editPayment);
}
