import updateState from 'src/helpers/updateState';
import { RoleTypes } from './types';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,

  role: {}
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
        data: action.payload
      };
    case RoleTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };

    case RoleTypes.CREATE_ROLE_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload]
      };

    case RoleTypes.DELETE_ROLE_SUCCESS:
      return {
        ...state,
        data: [...state.data.filter((elem, idx) => elem.id !== action.payload)]
      };

    case RoleTypes.SELECT_ROLE_UPDATE:
      return {
        ...state,
        role: action.payload
      };

    case RoleTypes.UPDATE_ROLE_SUCCESS:
      return {
        ...state,
        data: updateState(state.data, action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
