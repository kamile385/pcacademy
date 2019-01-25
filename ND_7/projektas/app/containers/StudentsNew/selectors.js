import { createSelector } from 'reselect';

const selectStudentsNew = state => state.get('studentsNew');

const makeSelectStudentsNew = () =>
  createSelector(selectStudentsNew, subState => subState.toJS());

export default makeSelectStudentsNew;
export { selectStudentsNew };
