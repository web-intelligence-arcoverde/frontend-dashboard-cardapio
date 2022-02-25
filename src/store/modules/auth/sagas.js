import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../../service/api';

import { navigateTo } from '../../../routes';

import { loadSuccess, loadFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const response = yield call(api.post, 'auth', payload);

    localStorage.setItem('token', response.data.token);
    yield put(loadSuccess(response.data.token));

    yield call(navigateTo('/dashboard'));
    // yield put(navigate('/dashboard/app'));
  } catch (err) {
    yield put(loadFailure());
  }
}
