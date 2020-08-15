import axios from 'axios';
import {
  SEND_MAIL,
  changeContact,
  errorContact,
} from '../actions/contact';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MAIL: {
      const state = store.getState();
      axios.post('http://54.173.92.69/api/email', { ...state.contact.infos })
        .then((response) => {
          console.log(response);
          store.dispatch(changeContact('status', response.data.status));
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data)
          store.dispatch(errorContact(error.response.data));
        });
      break;
    }

    default:
      next(action);
      break;
  }
};
