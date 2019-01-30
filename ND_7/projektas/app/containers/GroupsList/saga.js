import { takeEvery, call, put } from 'redux-saga/effects';
import {
  GET_GROUPS,
  SET_GROUPS,
  CREATE_GROUP,
  DELETE_GROUP,
  EDIT_GROUP,
} from './constants';
import * as groupsService from '../../api/groupsService';

function* getGroups() {
  const result = yield call(groupsService.get);
  yield put({
    type: SET_GROUPS,
    groups: result.data,
  });
}

function* createGroup(action) {
  yield call(groupsService.create, action.group);
  yield put({
    type: GET_GROUPS,
  });
}

function* deleteGroup(action) {
  const result = yield call(groupsService.remove, action.id);
  yield put({
    type: GET_GROUPS,
  });
  console.log(result.data.message);
}

function* editGroup(action) {
  const result = yield call(groupsService.edit, action.id);
  yield put({
    type: GET_GROUPS,
  });
  console.log(result.data.message);
}

export default function* getGroupsSaga() {
  yield takeEvery(GET_GROUPS, getGroups);
  yield takeEvery(CREATE_GROUP, createGroup);
  yield takeEvery(DELETE_GROUP, deleteGroup);
  yield takeEvery(EDIT_GROUP, editGroup);
}
