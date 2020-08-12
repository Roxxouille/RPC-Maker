import axios from 'axios';
import { setItems, desactivateLoader, commandToFront, GET_COMMANDS, commandsToState, clientsToState, GET_CLIENTS, GET_COMMAND, GET_MESSAGES_BACK, setMessagesBack, SEND_MESSAGE_BACK, getMessagesBack, cleanNewMessage, GET_ITEMS, SUBMIT_ITEMS } from '../actions/backoffice';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COMMANDS: {
      const token = localStorage.getItem('token');
      axios.get('http://localhost:3000/commands', { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          store.dispatch(commandsToState(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case GET_CLIENTS: {
      const token = localStorage.getItem('token');
      const slug = localStorage.getItem('slug');
      axios.get(`http://localhost:3000/builder/${slug}/user`, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          store.dispatch(clientsToState(response.data));
          store.dispatch(desactivateLoader());
        })
        .catch((error) => {
          console.log(error.response);
        });
      break;
    }
    case GET_COMMAND: {
      const slug = action.id;
      const token = localStorage.getItem('token');
      axios.get(`http://localhost:3000/command/${slug}`, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          store.dispatch(commandToFront(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case GET_MESSAGES_BACK: {
      const { slug } = action;
      const state = store.getState();
      const { id } = state.user;
      const token = localStorage.getItem('token');
      axios.post(`http:///localhost:3000/user/${slug}/messages`, { id }, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          store.dispatch(setMessagesBack(response.data));
        })
        .catch((error) => {
          console.log(error.response);
        });
      break;
    }
    case SEND_MESSAGE_BACK: {
      const state = store.getState();
      const token = localStorage.getItem('token');
      const {username} = state.user;
      const slug = state.backoffice.activeConv;
      const id = parseInt(state.backoffice.activeConvId);
      axios.post(`http://localhost:3000/user/${username}/message`, { id, content: state.backoffice.newMessage }, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
          store.dispatch(getMessagesBack(slug));
          store.dispatch(cleanNewMessage());
        })
        .catch((error) => {
          console.log(error.response);
        });
      break;
    }
    case GET_ITEMS: {
      axios.get('http://localhost:3000/categories')
        .then((response) => {
          console.log(response);
          store.dispatch(setItems(response.data));
        })
        .catch((error) => {
          console.log(error.response);
        });
      break;
    }
    case SUBMIT_ITEMS: {
      const token = localStorage.getItem('token');
      const state = store.getState();
      axios.put(`http://localhost:3000/command/${state.backoffice.command.id}`, { ...state.backoffice.command }, { headers: { 'X-AUTH-TOKEN': token, 'Content-Type': 'application/json' } })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
      console.log('middleware items', state.backoffice.command);
      break;
    }
    default:
      next(action);
      break;
  }
};
