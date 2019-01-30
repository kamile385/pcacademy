import { fromJS } from 'immutable';
import {
  SET_ATTENDANCES,
  DELETE_ATTENDANCE,
  EDIT_ATTENDANCE,
} from './constants';

export const initialState = fromJS({ attendances: [] });

function attendancesListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ATTENDANCES:
      return state.set('attendances', action.attendances);
    case DELETE_ATTENDANCE:
      return state.filter(item => item.id !== action.id);
    case EDIT_ATTENDANCE:
      return state.find(item => item.id === action.id);
    default:
      return state;
  }
}

export default attendancesListReducer;
