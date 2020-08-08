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

export const changeActiveConv = (slug) => ({
  type: CHANGE_ACTIVE_CONV,
  slug,
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
