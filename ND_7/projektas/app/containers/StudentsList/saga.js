import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_STUDENTS,
  SET_STUDENTS,
  CREATE_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
} from './constants';
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

function* deleteStudent(action) {
  const result = yield call(studentsService.remove, action.id);
  yield put({
    type: GET_STUDENTS,
  });
  console.log(result.data.message);
}

function* editStudent(action) {
  const result = yield call(studentsService.edit, action.id);
  yield put({
    type: GET_STUDENTS,
  });
  console.log(result.data.message);
}

export default function* getStudentsSaga() {
  yield takeEvery(GET_STUDENTS, getStudents);
  yield takeEvery(CREATE_STUDENT, createStudent);
  yield takeEvery(DELETE_STUDENT, deleteStudent);
  yield takeEvery(EDIT_STUDENT, editStudent);
}
