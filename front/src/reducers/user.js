import { ACTIVATE_LOAD, CHANGE_FIELD, LOGIN, FAIL_LOGIN, SET_USER, IS_LOGGED, UNSET_USER, IS_LOADING } from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  error: '',
  isLogged: false,
  username: 'Mon compte',
  isLoading: false,
  role: '',
  commands: [],
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case FAIL_LOGIN:
      return {
        ...state,
        error: action.error.data.message,
        isLoading: false,
      };
    case SET_USER:
      console.log('setuser', action);
      return {
        ...state,
        username: action.username,
        isLogged: true,
        isLoading: false,
        role: action.role,
        commands: action.commands,
      };
    case LOGIN:
      return {
        ...state,
        info: {},
      };
    case IS_LOGGED:
      return {
        ...state,
      };
    case UNSET_USER:
      localStorage.clear();
      return {
        ...state,
        username: 'Mon compte',
        role: '',
        isLogged: false,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIVATE_LOAD:
      console.log('reducer activate');
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default user;
