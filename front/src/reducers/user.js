import { CHANGE_FIELD, LOGIN, FAIL_LOGIN, SET_USER, IS_LOGGED } from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  error: '',
  isLogged: false,
  username: '',
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
      };
    case SET_USER:
      console.log(action.username);
      return {
        ...state,
        username: action.username,
        isLogged: true,
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
    default:
      return state;
  }
};

export default user;
