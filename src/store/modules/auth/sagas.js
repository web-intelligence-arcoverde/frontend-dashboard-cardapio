import { call, put } from 'redux-saga/effects';
import api from '../../../service/api';

import { navigateTo } from '../../../routes';

import { loadSuccess, loadFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const response = yield call(api.post, 'auth', payload);

    localStorage.setItem('token', response.data.token);
    yield put(loadSuccess(response.data.token));

    yield navigateTo('/dashboard');
  } catch (err) {
    yield put(loadFailure());
  }
}
