export const GET_COMMANDS = 'GET_COMMANDS';
export const COMMANDS_TO_STATE = 'COMMANDS_TO_STATE';
export const GET_CLIENTS = 'GET_CLIENTS';
export const CLIENTS_TO_STATE = 'CLIENTS_TO_STATE';
export const GET_COMMAND = 'GET_COMMAND';
export const COMMAND_TO_FRONT = 'COMMAND_TO_FRONT';
export const GET_MESSAGES_BACK = 'GET_MESSAGES_BACK';
export const SET_MESSAGES_BACK = 'SET_MESSAGES_BACK';
export const CHANGE_MESSAGE_BACK = 'CHANGE_MESSAGE_BACK';
export const SEND_MESSAGE_BACK = 'SEND_MESSAGE_BACK';
export const CHANGE_ACTIVE_CONV = 'CHANGE_ACTIVE_CONV';
export const CLEAN_NEW_MESSAGE = 'CLEAN_NEW_MESSAGE';
export const DESACTIVATE_LOADER = 'DESACTIVATE_LOADER';
export const GET_ITEMS = 'GET_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';
export const CHANGE_ONE_ITEM = 'CHANGE_ONE_ITEM';
export const SUBMIT_ITEMS = 'SUBMIT_ITEMS';

export const submitItems = () => ({
  type: SUBMIT_ITEMS,
});

export const changeOneItem = (id, index, nameCat) => ({
  type: CHANGE_ONE_ITEM,
  id,
  index,
  nameCat,
});

export const setItems = (data) => ({
  type: SET_ITEMS,
  data,
});

export const getItems = () => ({
  type: GET_ITEMS,
});

export const desactivateLoader = () => ({
  type: DESACTIVATE_LOADER,
});

export const cleanNewMessage = () => ({
  type: CLEAN_NEW_MESSAGE,
});

export const changeActiveConv = (slug, id) => ({
  type: CHANGE_ACTIVE_CONV,
  slug,
  id,
});

export const sendMessageBack = () => ({
  type: SEND_MESSAGE_BACK,
});

export const changeMessageBack = (value) => ({
  type: CHANGE_MESSAGE_BACK,
  value,
});

export const setMessagesBack = (data) => ({
  type: SET_MESSAGES_BACK,
  data,
});

export const getMessagesBack = (slug) => ({
  type: GET_MESSAGES_BACK,
  slug,
});

export const commandToFront = (command) => ({
  type: COMMAND_TO_FRONT,
  command,
});

export const getCommand = (id) => ({
  type: GET_COMMAND,
  id,
});


export const clientsToState = (clients) => ({
  type: CLIENTS_TO_STATE,
  clients,
});

export const getClients = () => ({
  type: GET_CLIENTS,
});

export const commandsToState = (commands) => ({
  type: COMMANDS_TO_STATE,
  commands,
});

export const getCommands = () => ({
  type: GET_COMMANDS,
});
