import { COMMANDS_TO_STATE, CLIENTS_TO_STATE, GET_COMMAND, COMMAND_TO_FRONT } from '../actions/backoffice';

export const initialState = {
  commands: [],
  clients: [],
  command: {
    item: [],
    id: 0,
    user: {
      firstname: '',
      lastname: '',
      username: '',
    },
  },
};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case COMMANDS_TO_STATE:
      return {
        ...state,
        commands: action.commands,
      };
    case CLIENTS_TO_STATE:
      return {
        ...state,
        clients: action.clients,
      };
    case GET_COMMAND:
      return {
        ...state,
        oneCommand: {
          slug: action.id,
        },
      };
    case COMMAND_TO_FRONT:
      return {
        ...state,
        command: action.command,
      };
    default:
      return state;
  }
};

export default contact;
