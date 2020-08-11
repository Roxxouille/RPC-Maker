import { CHANGE_PROFILE, ERROR_PROFILE, SET_DATA, INPUT_SUBSCRIPTION } from '../actions/profile';

export const initialState = {
  infos: {
    email: '',
    lastname: '',
    firstname: '',
    city: '',
    adress: '',
    zip_code: 75015,
    status: '',
    loading: false,
    set: false,
    username: '',
  },
  error: {
    lastname: [''],
    firstname: [''],
    city: [''],
    email: [''],
    ville: [''],
    zip_code: [''],
    adress: [''],
  },
};

const profile = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROFILE:
      return {
        ...state,
        infos: {
          ...state.infos,
          [action.name]: action.value,
        },
      };
    case ERROR_PROFILE:
      return {
        ...state,
        error: { ...state.error, ...action.value },
      };
    case SET_DATA:
      return {
        ...state,
        infos: { ...state.infos, ...action.data, set: true },
      };
    case INPUT_SUBSCRIPTION:
      console.log('reduceur ');
      return {
        ...state,
        infos: { ...state.infos, [action.name]: action.value },
      };
    default:
      return state;
  }
};

export default profile;
