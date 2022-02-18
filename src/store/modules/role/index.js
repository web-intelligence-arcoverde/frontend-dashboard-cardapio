import { RoleTypes } from './types';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RoleTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RoleTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case RoleTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };
    default:
      return state;
  }
};

export default reducer;
