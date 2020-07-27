import { CHANGE_FIELD, SIGNIN } from '../actions/user';

export const initialState = {
  email: 'exemple@mail.com',
  password: 'mot de passe',
  isLogged: false,
};

const user = (state = initialState, action = {}) => {
console.log('ça réduce');

  switch (action.type) {
    case CHANGE_FIELD:
      console.log('entrée reducer');
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
   /* case SIGNIN:
      return {
        ...state,
        isLogged: true,
        infos: {},
      };*/
    default:
      return state;
  }
};

export default user;
