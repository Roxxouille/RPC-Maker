import { CHANGE_PROFILE } from '../actions/profile';

export const initialState = {
  email: '',
  lastname: '',
  firstname: '',
  old: '',
  city: '',
  adress: '',
  zipCode: 75015,
  status: '',
  adressComplement: '',
  error: {},
  loading: false,
};

const profile = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROFILE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default profile;
