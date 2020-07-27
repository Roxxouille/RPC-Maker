import { CHANGE_FIELD, LOGIN } from '../actions/user';

export const initialState = {
  email: 'exemple@mail.com',
  password: 'mot de passe',
  isLogged: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
   /* case SAVE_USER:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: true,
        infos: {
          pseudo: action.username,
        },
      };*/
    case LOGIN:
      console.log('sa passe')
      return {
        ...state,
        infos: {},
      };
    default:
      return state;
  }
};

export default user;
