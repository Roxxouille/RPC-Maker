import { CHANGE_CONTACT, ERROR_CONTACT, CLEAN_ERROR } from '../actions/contact';

export const initialState = {
  infos: {
    email: '',
    lastname: '',
    firstname: '',
    content: '',
    status: '',
  },
  error: {
    email: [''],
    lastname: [''],
    firstname: [''],
    content: [''],
  },
};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT:
      return {
        ...state,
        infos: { ...state.infos, [action.name]: action.value },
      };
    case ERROR_CONTACT:
      return {
        ...state,
        error: { ...state.error, ...action.value },
      };
    case CLEAN_ERROR:
      return {
        ...state,
        error: { ...initialState.error },
      };
    default:
      return state;
  }
};

export default contact;
