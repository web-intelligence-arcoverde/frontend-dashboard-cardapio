import { AuthTypes } from './types';

const INITIAL_STATE = {
  token: !localStorage.getItem('token'),
  error: false,
  loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        token: action.payload
      };
    case AuthTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: null
      };

    case AuthTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        loading: false,
        error: false,
        data: null
      };
    default:
      return state;
  }
};

export default reducer;
