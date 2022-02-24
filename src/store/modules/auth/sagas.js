import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import api from '../../../service/api';

import { loadSuccess, loadFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const response = yield call(api.post, 'auth', payload);

    localStorage.setItem('token', response.data.token);
    console.log(response);
    yield put(loadSuccess(response.data.token));
    yield put(push('/dashboard/app'));
    // yield put(push('/dashboard/app'));
  } catch (err) {
    yield put(loadFailure());
  }
}
