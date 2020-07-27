import axios from 'axios';
import {
  LOGIN,
} from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const email = state.email;
      const password = state.password;
      axios.post('http://localhost:3000/api/login', { email: email, password: password })
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
