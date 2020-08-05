import { COMMANDS_TO_STATE } from '../actions/backoffice';

export const initialState = {
  commands: [],
};

const contact = (state = initialState, action = {}) => {
  switch (action.type) {
    case COMMANDS_TO_STATE:
      return {
        ...state,
        commands: action.commands,
      };
    default:
      return state;
  }
};

export default contact;
