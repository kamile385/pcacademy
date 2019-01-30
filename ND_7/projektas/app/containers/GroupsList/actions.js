import {
  GET_GROUPS,
  SET_GROUPS,
  CREATE_GROUP,
  DELETE_GROUP,
  EDIT_GROUP,
} from './constants';

export function getGroups() {
  return {
    type: GET_GROUPS,
  };
}

export function setGroups(groups) {
  return {
    type: SET_GROUPS,
    groups,
  };
}

export function createGroup(group) {
  return {
    type: CREATE_GROUP,
    group,
  };
}

export function deleteGroup(id) {
  return {
    type: DELETE_GROUP,
    id,
  };
}

export function editGroup(id) {
  return {
    type: EDIT_GROUP,
    id,
  };
}
