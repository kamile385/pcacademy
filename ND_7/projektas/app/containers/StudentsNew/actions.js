import { GET_STUDENTS, SET_STUDENTS, CREATE_STUDENT } from './constants';

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
