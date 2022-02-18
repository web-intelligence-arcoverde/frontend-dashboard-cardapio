import { call, put } from 'redux-saga/effects';
import api from '../../../service/api';

import { loadSuccess, loadFailure } from './actions';

export function* loadRoles() {
  try {
    const response = yield call(api.get, 'cargo');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
