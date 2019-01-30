import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_PROGRAMS,
  SET_PROGRAMS,
  CREATE_PROGRAM,
  DELETE_PROGRAM,
  EDIT_PROGRAM,
} from './constants';
import * as programsService from '../../api/programsService';

function* getPrograms() {
  const result = yield call(programsService.get);
  yield put({
    type: SET_PROGRAMS,
    programs: result.data,
  });
}

function* createProgram(action) {
  yield call(programsService.create, action.program);
  yield put({
    type: GET_PROGRAMS,
  });
}

function* deleteProgram(action) {
  const result = yield call(programsService.remove, action.id);
  yield put({
    type: GET_PROGRAMS,
  });
  console.log(result.data.message);
}

function* editProgram(action) {
  const result = yield call(programsService.edit, action.id);
  yield put({
    type: GET_PROGRAMS,
  });
  console.log(result.data.message);
}

export default function* getProgramsSaga() {
  yield takeEvery(GET_PROGRAMS, getPrograms);
  yield takeEvery(CREATE_PROGRAM, createProgram);
  yield takeEvery(DELETE_PROGRAM, deleteProgram);
  yield takeEvery(EDIT_PROGRAM, editProgram);
}
