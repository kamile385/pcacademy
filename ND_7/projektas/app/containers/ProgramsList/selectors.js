import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProgramsList = state => state.get('programsList', initialState);

const makeSelectProgramsList = () =>
  createSelector(selectProgramsList, substate => substate.toJS());

export default makeSelectProgramsList;
export { selectProgramsList };
