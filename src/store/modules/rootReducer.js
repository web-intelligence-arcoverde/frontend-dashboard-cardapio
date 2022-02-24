import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../service/history';

import role from './role';
import auth from './auth';

export default combineReducers({
  role,
  auth,
  router: connectRouter(history)
});
