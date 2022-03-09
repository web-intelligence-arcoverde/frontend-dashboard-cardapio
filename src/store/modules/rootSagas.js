import { all, takeLatest } from 'redux-saga/effects';

import { RoleTypes } from './role/types';
import { loadRoles, createRole, deleteRole, updateRole } from './role/sagas';
import { AuthTypes } from './auth/types';
import { signIn } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),

    takeLatest(RoleTypes.LOAD_REQUEST, loadRoles),
    takeLatest(RoleTypes.CREATE_ROLE_REQUEST, createRole),
    takeLatest(RoleTypes.DELETE_ROLE_REQUEST, deleteRole),
    takeLatest(RoleTypes.UPDATE_ROLE_REQUEST, updateRole)
  ]);
}
