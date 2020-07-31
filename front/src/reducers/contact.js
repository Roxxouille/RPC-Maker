import { CHANGE_CONTACT } from '../actions/contact';

export const initialState = {
  email: '',
  lastname: '',
  firstname: '',
  message: '',
};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT:
      console.log(action);
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default contact;
