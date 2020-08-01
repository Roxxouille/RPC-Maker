import { CHANGE_CONTACT } from '../actions/contact';

export const initialState = {
  email: '',
  lastname: '',
  firstname: '',
  content: '',
  status: '',
};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default contact;
