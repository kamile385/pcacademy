import {
  GET_STUDENTS,
  SET_STUDENTS,
  CREATE_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
} from './constants';

export function getStudents() {
  return {
    type: GET_STUDENTS,
  };
}

export function setStudents(students) {
  return {
    type: SET_STUDENTS,
    students,
  };
}

export function createStudent(student) {
  return {
    type: CREATE_STUDENT,
    student,
  };
}

export function deleteStudent(id) {
  return {
    type: DELETE_STUDENT,
    id,
  };
}

export function editStudent(id) {
  return {
    type: EDIT_STUDENT,
    id,
  };
}
