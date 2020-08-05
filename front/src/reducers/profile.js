import { CHANGE_PROFILE, ERROR_PROFILE } from '../actions/profile';

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
  error: {
    lastname: [''],
    firstname: [''],
    city: [''],
    email: [''],
    age: [''],
    ville: [''],
    zipCode: [''],
    adress: [''],
    adressComplement: [''],
  },
  loading: false,
};

const profile = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROFILE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case ERROR_PROFILE:
      console.log('reducer', action.value);

      return {
        ...state,
        error: { ...state.error, ...action.value },
      };
    default:
      return state;
  }
};

export default profile;
