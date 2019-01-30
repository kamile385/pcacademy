import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPaymentsList = state => state.get('paymentsList', initialState);

const makeSelectPaymentsList = () =>
  createSelector(selectPaymentsList, substate => substate.toJS());

export default makeSelectPaymentsList;
export { selectPaymentsList };
