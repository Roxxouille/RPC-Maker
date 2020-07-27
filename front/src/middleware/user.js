import axios from 'axios';
import {
  SIGNIN,
} from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNIN: {
      const state = store.getState();
      const email = state.email;
      const password = state.password;

      axios.get('http://localhost:3000/api/user')
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      next(action);
      break;
  }
};
