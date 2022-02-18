import { RoleTypes } from './types';

export function loadRequest() {
  return { type: RoleTypes.LOAD_REQUEST };
}

export function loadSuccess(data) {
  return {
    type: RoleTypes.LOAD_SUCCCES,
    payload: data
  };
}

export function loadFailure() {
  return {
    type: RoleTypes.LOAD_FAILURE
  };
}
