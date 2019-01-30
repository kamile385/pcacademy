import { fromJS } from 'immutable';
import { SET_PROGRAMS, DELETE_PROGRAM, EDIT_PROGRAM } from './constants';

export const initialState = fromJS({ programs: [] });

function programsListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROGRAMS:
      return state.set('programs', action.programs);
    case DELETE_PROGRAM:
      return state.filter(item => item.id !== action.id);
    case EDIT_PROGRAM:
      return state.find(item => item.id === action.id);
    default:
      return state;
  }
}

export default programsListReducer;
