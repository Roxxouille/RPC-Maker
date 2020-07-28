import axios from 'axios';
import {
  LOGIN,
} from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const {email, password} = state;
      console.log(email, password);
      axios.post('http://localhost:3000/api/login', { username: 'shessesl@yahoo.com', password: 'user' }, { headers: {'Content-Type': 'application/json' }})
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
