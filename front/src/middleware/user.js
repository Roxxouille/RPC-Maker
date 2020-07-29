import axios from 'axios';
import {
  LOGIN,
  failLogin,
  setUser,
  AUTOLOG
} from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('middleware');
      const state = store.getState();
      const { email, password } = state;
      axios.post('http://localhost:3000/api/login', { username: email, password, login: true }, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          // store.dispatch(loged(response));
          console.log(response);
          localStorage.setItem('token', response.data.token);
          store.dispatch(setUser(response.data.username));
        })
        .catch((error) => {
          const actionToDispatch = failLogin(error.response);
          store.dispatch(actionToDispatch);
        });
      break;
    }
    case AUTOLOG: {
      console.log(localStorage.getItem('token'));
      break;
      //axios.post('/', { data }, { headers: { 'Content-type': 'application/json', Authorization: `${localStorage.getItem('token')}` } });
    }
    default:
      next(action);
      break;
  }
};
