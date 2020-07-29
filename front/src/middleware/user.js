import axios from 'axios';
import {
  LOGIN,
  failLogin,
  setUser,
  AUTOLOG,
} from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state;
      axios.post('http://localhost:3000/api/login', { username: email, password, login: true }, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          // store.dispatch(loged(response));
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('id', response.data.id);
          store.dispatch(setUser(response.data.username));
        })
        .catch((error) => {
          console.log(error.response);
          const actionToDispatch = failLogin(error.response);
          store.dispatch(actionToDispatch);
        });
      break;
    }
    case AUTOLOG: {
      const token = localStorage.getItem('token');
      //const token = 'd6081bdf250ec5c06a1bc2dd28bba8b0';
      const id = localStorage.getItem('id');
      console.log(token);
      axios.get(`http://localhost:3000/api/user/1`, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });

      break;
      //axios.post('/', { data }, { headers: { 'Content-type': 'application/json', Authorization: `${localStorage.getItem('token')}` } });
    }
    default:
      next(action);
      break;
  }
};
