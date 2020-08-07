import axios from 'axios';
import {
  LOGIN,
  failLogin,
  setUser,
  AUTOLOG,
  unsetUser,
  LOGOUT,
  GET_MESSAGES,
  setMessages,
  SEND_MESSAGE
} from '../actions/user';
import { GET_COMMANDS } from '../actions/backoffice';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user;
      axios.post('http://localhost:3000/login', { username: email, password, login: true }, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          const idBuilder = response.data.builder === null ? '' : response.data.builder.id;
          console.log('login', response);
          localStorage.setItem('slug', response.data.slug);
          localStorage.setItem('token', response.data.apiToken);
          store.dispatch(setUser(response.data.username, response.data.roles[0], response.data.commands, idBuilder));
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
      const slug = localStorage.getItem('slug');
      axios.get(`http://localhost:3000/user/${slug}`, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          const idBuilder = response.data.builder.id === null ? '' : response.data.builder.id;
          const commands = response.data.commands;
          console.log('autologcommands:', commands);
          store.dispatch(setUser(response.data.username, response.data.roles[0], commands, idBuilder));
        })
        .catch((error) => {
          localStorage.clear();
          console.log(error.response);
        });

      break;
    }
    case LOGOUT: {
      store.dispatch(unsetUser());
      break;
    }
    case GET_COMMANDS: {
      const slug = localStorage.getItem('slug');
      axios.get(`http://localhost:3000/command/${slug}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
      break;
    }
    case GET_MESSAGES: {
      const slug = localStorage.getItem('slug');
      const state = store.getState();
      const { builderId } = state.user;
      const token = localStorage.getItem('token');
      axios.post(`http:///localhost:3000/user/${slug}/messages`, { builderId }, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          store.dispatch(setMessages(response.data));
        })
        .catch((error) => {
          console.log(error.response);
        });
      break;
    }
    case SEND_MESSAGE: {
      const state = store.getState();
      const token = localStorage.getItem('token');
      const slug = localStorage.getItem('slug');
      axios.post(`http://localhost:3000/user/${slug}/message`, { content: state.user.newMessage }, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
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
