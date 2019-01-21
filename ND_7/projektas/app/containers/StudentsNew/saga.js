import { call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import { GET_STUDENTS } from './constants';
import * as studentsService from '../../api/studentsService';

function* getStudents(action) {
  console.log('My saga!');
  const result = yield call(studentsService.get);
  console.log('Result', result);
}

export default function* getStudentsSaga() {
  yield takeEvery(GET_STUDENTS, getStudents);
}
