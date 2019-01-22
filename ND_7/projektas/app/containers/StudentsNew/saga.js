import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_STUDENTS, SET_STUDENTS, CREATE_STUDENT } from './constants';
import * as studentsService from '../../api/studentsService';

function* getStudents() {
  const result = yield call(studentsService.get);
  yield put({
    type: SET_STUDENTS,
    students: result.data,
  });
}

function* createStudent(action) {
  yield call(studentsService.create, action.student);
  yield put({
    type: GET_STUDENTS,
  });
}

export default function* getStudentsSaga() {
  yield takeEvery(GET_STUDENTS, getStudents);
  yield takeEvery(CREATE_STUDENT, createStudent);
}
