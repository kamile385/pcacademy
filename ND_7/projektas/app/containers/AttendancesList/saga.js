import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_ATTENDANCES,
  SET_ATTENDANCES,
  CREATE_ATTENDANCE,
  DELETE_ATTENDANCE,
  EDIT_ATTENDANCE,
} from './constants';
import * as attendancesService from '../../api/attendancesService';

function* getAttendances() {
  const result = yield call(attendancesService.get);
  yield put({
    type: SET_ATTENDANCES,
    attendances: result.data,
  });
}

function* createAttendance(action) {
  yield call(attendancesService.create, action.attendance);
  yield put({
    type: GET_ATTENDANCES,
  });
}

function* deleteAttendance(action) {
  const result = yield call(attendancesService.remove, action.id);
  yield put({
    type: GET_ATTENDANCES,
  });
  console.log(result.data.message);
}

function* editAttendance(action) {
  const result = yield call(attendancesService.edit, action.id);
  yield put({
    type: GET_ATTENDANCES,
  });
  console.log(result.data.message);
}

export default function* getAttendancesSaga() {
  yield takeEvery(GET_ATTENDANCES, getAttendances);
  yield takeEvery(CREATE_ATTENDANCE, createAttendance);
  yield takeEvery(DELETE_ATTENDANCE, deleteAttendance);
  yield takeEvery(EDIT_ATTENDANCE, editAttendance);
}
