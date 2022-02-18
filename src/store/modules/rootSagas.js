import { all, takeLatest } from 'redux-saga/effects';

import { RoleTypes } from './role/types';
import { loadRoles } from './role/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(RoleTypes.LOAD_REQUEST, loadRoles)]);
}
