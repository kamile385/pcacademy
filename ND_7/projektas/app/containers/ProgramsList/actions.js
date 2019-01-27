import { GET_PROGRAMS, SET_PROGRAMS, CREATE_PROGRAM } from './constants';

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
