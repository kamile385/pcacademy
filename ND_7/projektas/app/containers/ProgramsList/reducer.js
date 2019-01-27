import { fromJS } from 'immutable';
import { SET_PROGRAMS } from './constants';

export const initialState = fromJS({ programs: [] });

function programsListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROGRAMS:
      return state.set('programs', action.programs);
    default:
      return state;
  }
}

export default programsListReducer;
