import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_STUDENTS, SET_STUDENTS } from './constants';
import * as studentsService from '../../api/studentsService';

function* getStudents() {
  const result = yield call(studentsService.get);
  yield put({
    type: SET_STUDENTS,
    students: result.data,
  });
}

export default function* getStudentsSaga() {
  yield takeEvery(GET_STUDENTS, getStudents);
}
