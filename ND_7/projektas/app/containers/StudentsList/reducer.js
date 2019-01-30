import { fromJS } from 'immutable';
import { SET_STUDENTS, DELETE_STUDENT, EDIT_STUDENT } from './constants';

export const initialState = fromJS({ students: [] });

function studentsListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return state.set('students', action.students);
    case DELETE_STUDENT:
      return state.filter(item => item.id !== action.id);
    case EDIT_STUDENT:
      return state.find(item => item.id === action.id);
    default:
      return state;
  }
}

export default studentsListReducer;
