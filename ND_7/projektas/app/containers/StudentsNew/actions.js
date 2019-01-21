import { GET_STUDENTS, SET_STUDENTS } from './constants';

export function getStudents() {
  return {
    type: GET_STUDENTS,
  };
}

export function setStudents() {
  return {
    type: SET_STUDENTS,
  };
}
