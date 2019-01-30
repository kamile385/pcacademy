import {
  GET_PROGRAMS,
  SET_PROGRAMS,
  CREATE_PROGRAM,
  DELETE_PROGRAM,
  EDIT_PROGRAM,
} from './constants';

export function getPrograms() {
  return {
    type: GET_PROGRAMS,
  };
}

export function setPrograms(programs) {
  return {
    type: SET_PROGRAMS,
    programs,
  };
}

export function createProgram(program) {
  return {
    type: CREATE_PROGRAM,
    program,
  };
}

export function deleteProgram(id) {
  return {
    type: DELETE_PROGRAM,
    id,
  };
}

export function editProgram(id) {
  return {
    type: EDIT_PROGRAM,
    id,
  };
}
