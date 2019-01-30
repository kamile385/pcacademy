import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGroupsList = state => state.get('groupsList', initialState);

const makeSelectGroupsList = () =>
  createSelector(selectGroupsList, substate => substate.toJS());

export default makeSelectGroupsList;
export { selectGroupsList };
