import { CHANGE_FIELD, LOGIN } from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN:
      return {
        ...state,
        infos: {},
      };
    default:
      return state;
  }
};

export default user;
