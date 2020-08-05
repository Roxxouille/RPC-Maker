import { COMMANDS_TO_STATE, CLIENTS_TO_STATE } from '../actions/backoffice';

export const initialState = {
  commands: [],
  clients: [],
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
    default:
      return state;
  }
};

export default contact;
