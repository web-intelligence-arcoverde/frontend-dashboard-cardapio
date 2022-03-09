import { call, put } from 'redux-saga/effects';
import api from '../../../service/api';

import {
  loadSuccess,
  loadFailure,
  createRoleSuccess,
  deleteRoleSuccess,
  updateRoleSuccess
} from './actions';

import { navigateTo } from '../../../helpers/navigate';

export function* loadRoles() {
  try {
    const response = yield call(api.get, 'cargo');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* createRole({ payload }) {
  try {
    yield call(api.post, 'cargo', payload);
    yield put(createRoleSuccess(payload));
    yield navigateTo('/dashboard/role');
  } catch (err) {
    console.log(err);
  }
}

export function* deleteRole({ payload }) {
  try {
    yield call(api.delete, `cargo/${payload}`);

    yield put(deleteRoleSuccess(payload));
  } catch (error) {
    console.log(error);
  }
}

export function* updateRole({ payload }) {
  try {
    console.log(payload);
    yield call(api.put, `cargo/${payload.id}`, payload);

    yield put(updateRoleSuccess(payload));

    yield navigateTo('/dashboard/role');
  } catch (error) {
    console.log(error);
  }
}
