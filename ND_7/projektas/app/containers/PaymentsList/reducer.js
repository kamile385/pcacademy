import { fromJS } from 'immutable';
import { SET_PAYMENTS, DELETE_PAYMENT, EDIT_PAYMENT } from './constants';

export const initialState = fromJS({ payments: [] });

function paymentsListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAYMENTS:
      return state.set('payments', action.payments);
    case DELETE_PAYMENT:
      return state.filter(item => item.id !== action.id);
    case EDIT_PAYMENT:
      return state.find(item => item.id === action.id);
    default:
      return state;
  }
}

export default paymentsListReducer;
