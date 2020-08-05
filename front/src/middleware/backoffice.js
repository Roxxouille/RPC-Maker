import axios from 'axios';
import { commandToFront, GET_COMMANDS, commandsToState, clientsToState, GET_CLIENTS, GET_COMMAND } from '../actions/backoffice';

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
    default:
      next(action);
      break;
  }
};
