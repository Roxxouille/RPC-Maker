import { CHANGE_ONE_ITEM, SET_ITEMS, COMMANDS_TO_STATE, CLIENTS_TO_STATE, GET_COMMAND, COMMAND_TO_FRONT, SET_MESSAGES_BACK, CHANGE_MESSAGE_BACK, CHANGE_ACTIVE_CONV, DESACTIVATE_LOADER } from '../actions/backoffice';
import { CLEAN_NEW_MESSAGE } from '../actions/user';

export const initialState = {
  commands: [],
  clients: [],
  items: [],
  command: {
    item: [],
    id: 0,
    user: {
      firstname: '',
      lastname: '',
      username: '',
    },
  },
  messages: [],
  newMessage: '',
  activeConv: '',
  activeConvId: '',
  isLoading: true,
};

const backoffice = (state = initialState, action = {}) => {
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
    case SET_MESSAGES_BACK:
      return {
        ...state,
        messages: action.data,
      };
    case CHANGE_MESSAGE_BACK:
      return {
        ...state,
        newMessage: action.value,
      };
    case CHANGE_ACTIVE_CONV:
      return {
        ...state,
        activeConv: action.slug,
        activeConvId: action.id,
      };
    case CLEAN_NEW_MESSAGE:
      return {
        ...state,
        newMessage: '',
      };
    case DESACTIVATE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case SET_ITEMS:
      return {
        ...state,
        items: action.data,
      };
    case CHANGE_ONE_ITEM:
      let oldItems = state.command.item;
      const index = oldItems.findIndex(oldItem => oldItem.category.name === action.nameCat );
      oldItems.splice(index, 1, { id: action.id, category: { name: action.nameCat } });
      return {
        ...state,
        command: {
          ...state.command,
          item: oldItems,
        },
      };
    default:
      return state;
  }
};

export default backoffice;
