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
  SEND_MESSAGE,
  getMessages,
  cleanNewMessage,
} from '../actions/user';
import { GET_COMMANDS } from '../actions/backoffice';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user;
      axios.post('http://54.173.92.69/api/login', { username: email, password, login: true }, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          const idBuilder = response.data.builder === null ? '' : response.data.builder.id;
          console.log('login', response);
          localStorage.setItem('slug', response.data.slug);
          localStorage.setItem('token', response.data.apiToken);
          store.dispatch(setUser(response.data.username, response.data.roles[0], response.data.commands, idBuilder, response.data.id, response.data.level, response.data.firstname, response.data.lastname));
        })
        .catch((error) => {
          console.log(error.repsonse);
          const actionToDispatch = failLogin(error.response);
          store.dispatch(actionToDispatch);
        });
      break;
    }
    case AUTOLOG: {
      const token = localStorage.getItem('token');
      const slug = localStorage.getItem('slug');
      axios.get(`http://54.173.92.69/api/user/${slug}`, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log('autog positiv response:', response);
          const idBuilder = response.data.builder === null ? 0 : response.data.builder.id;
          console.log(idBuilder);
          const commands = response.data.commands;
          store.dispatch(setUser(response.data.username, response.data.roles[0], commands, idBuilder, response.data.id, response.data.level, response.data.firstname, response.data.lastname));
        })
        .catch((error) => {
          console.log('autolog error:', error.response);
          localStorage.clear();
        });

      break;
    }
    case LOGOUT: {
      store.dispatch(unsetUser());
      break;
    }
    case GET_COMMANDS: {
      const slug = localStorage.getItem('slug');
      axios.get(`http://54.173.92.69/api/command/${slug}`)
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
      axios.post(`http:///54.173.92.69/api/user/${slug}/messages`, { builderId }, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
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
      axios.post(`http://54.173.92.69/api/user/${slug}/message`, { content: state.user.newMessage }, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          store.dispatch(getMessages());
          store.dispatch(cleanNewMessage());
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
