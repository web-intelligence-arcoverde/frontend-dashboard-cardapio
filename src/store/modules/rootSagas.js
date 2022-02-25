import { all, takeLatest } from 'redux-saga/effects';

import { RoleTypes } from './role/types';
import { loadRoles } from './role/sagas';
import { AuthTypes } from './auth/types';
import { signIn } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RoleTypes.LOAD_REQUEST, loadRoles),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)
  ]);
}
