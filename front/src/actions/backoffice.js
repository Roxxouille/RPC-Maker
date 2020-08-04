export const GET_COMMANDS = 'GET_COMMANDS';
export const COMMANDS_TO_STATE = 'COMMANDS_TO_STATE';

export const commandsToState = (commands) => ({
  type: COMMANDS_TO_STATE,
  commands,
});

export const getCommands = () => ({
  type: GET_COMMANDS,
});
