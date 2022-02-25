import { AuthTypes } from './types';

export function loadRequest(user) {
  return { type: AuthTypes.SIGN_IN_REQUEST, payload: user };
}

export function loadSuccess(data) {
  return {
    type: AuthTypes.SIGN_IN_SUCCESS,
    payload: data
  };
}

export function loadFailure() {
  return {
    type: AuthTypes.SIGN_IN_FAILURE
  };
}

export function signOut() {
  return {
    type: AuthTypes.SIGN_OUT_REQUEST
  };
}
