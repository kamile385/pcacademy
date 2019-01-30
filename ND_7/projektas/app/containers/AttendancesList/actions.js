import {
  GET_ATTENDANCES,
  SET_ATTENDANCES,
  CREATE_ATTENDANCE,
  DELETE_ATTENDANCE,
  EDIT_ATTENDANCE,
} from './constants';

export function getAttendances() {
  return {
    type: GET_ATTENDANCES,
  };
}

export function setAttendances(attendances) {
  return {
    type: SET_ATTENDANCES,
    attendances,
  };
}

export function createAttendance(attendance) {
  return {
    type: CREATE_ATTENDANCE,
    attendance,
  };
}

export function deleteAttendance(id) {
  return {
    type: DELETE_ATTENDANCE,
    id,
  };
}

export function editAttendance(id) {
  return {
    type: EDIT_ATTENDANCE,
    id,
  };
}
