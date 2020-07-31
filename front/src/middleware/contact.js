import axios from 'axios';
import {
  SEND_MESSAGE,
  changeContact,
} from '../actions/contact';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const state = store.getState();
      axios.post('http://localhost:3000/email', { ...state.contact })
        .then((response) => {
          console.log(response);
          store.dispatch(changeContact('status', response.data.status));
        })
        .catch((error) => {
          console.log(error.response);
        });
      break;
    }

    default:
      next(action);
      break;
  }
};
