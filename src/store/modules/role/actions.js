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

export function createRoleRequest(data) {
  return {
    type: RoleTypes.CREATE_ROLE_REQUEST,
    payload: data
  };
}

export function createRoleSuccess(data) {
  return {
    type: RoleTypes.CREATE_ROLE_SUCCESS,
    payload: data
  };
}

export function deleteRoleRequest(data) {
  return {
    type: RoleTypes.DELETE_ROLE_REQUEST,
    payload: data
  };
}

export function deleteRoleSuccess(data) {
  return {
    type: RoleTypes.DELETE_ROLE_SUCCESS,
    payload: data
  };
}

export function selectRoleUpdate(data) {
  return {
    type: RoleTypes.SELECT_ROLE_UPDATE,
    payload: data
  };
}

export function updateRoleRequest(data) {
  return {
    type: RoleTypes.UPDATE_ROLE_REQUEST,
    payload: data
  };
}

export function updateRoleSuccess(data) {
  return {
    type: RoleTypes.UPDATE_ROLE_SUCCESS,
    payload: data
  };
}
