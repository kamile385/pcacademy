import { fromJS } from 'immutable';
import { SET_GROUPS, DELETE_GROUP, EDIT_GROUP } from './constants';

export const initialState = fromJS({ groups: [] });

function groupsListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUPS:
      return state.set('groups', action.groups);
    case DELETE_GROUP:
      return state.filter(item => item.id !== action.id);
    case EDIT_GROUP:
      return state.find(item => item.id === action.id);
    default:
      return state;
  }
}

export default groupsListReducer;
