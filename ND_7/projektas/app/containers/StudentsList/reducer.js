import { fromJS } from 'immutable';
import { SET_STUDENTS } from './constants';

const initialState = fromJS({
  students: [],
});

export default function studentsListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return state.set('students', action.students);
    default:
      return state;
  }
}
