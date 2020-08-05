export const GET_COMMANDS = 'GET_COMMANDS';
export const COMMANDS_TO_STATE = 'COMMANDS_TO_STATE';
export const GET_CLIENTS = 'GET_CLIENTS';
export const CLIENTS_TO_STATE = 'CLIENTS_TO_STATE';
export const GET_COMMAND = 'GET_COMMAND';
export const COMMAND_TO_FRONT = 'COMMAND_TO_FRONT';

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
