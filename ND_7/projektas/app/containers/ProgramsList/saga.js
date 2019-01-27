import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_PROGRAMS, SET_PROGRAMS, CREATE_PROGRAM } from './constants';
import * as programsService from '../../api/programsService';

function* getPrograms() {
  const result = yield call(programsService.get);
  yield put({
    type: SET_PROGRAMS,
    programs: result.data,
  });
  console.log('Result', result);
}

function* createProgram(action) {
  const result = yield call(programsService.create, action.program);
  yield put({
    type: GET_PROGRAMS,
  });
  console.log(result);
}

export default function* getProgramsSaga() {
  yield takeEvery(GET_PROGRAMS, getPrograms);
  yield takeEvery(CREATE_PROGRAM, createProgram);
}
