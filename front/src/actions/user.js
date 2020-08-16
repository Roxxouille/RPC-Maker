export const LOGIN = 'LOGIN';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const FAIL_LOGIN = 'FAIL_LOGIN';
export const SET_USER = 'SET_USER';
export const AUTOLOG = 'AUTOLOG';
export const IS_LOGGED = 'IS_LOGGED';
export const LOGOUT = 'LOGOUT';
export const UNSET_USER = 'UNSET_USER';
export const IS_LOADING = 'IS_LOADING';
export const ACTIVATE_LOAD = 'ACTIVATE_LOAD';
export const CHANGE_PROFILE = 'CHANGE_PROFILE';
export const SUBMIT_PROFILE = 'SUBMIT_PROFILE';
export const GET_COMMANDS = 'GET_COMMANDS';
export const GET_MESSAGES = 'GET_MESSAGES';
export const SET_MESSAGES = 'SET_MESSAGES';
export const CHANGE_NEW_MESSAGE = 'CHANGE_NEW_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CLEAN_NEW_MESSAGE = 'CLEAN_NEW_MESSAGE';
export const DESACTIVATE_LOADER = 'DESACTIVATE_LOADER';

export const desactivateLoader = () => ({
  type: DESACTIVATE_LOADER,
});

export const cleanNewMessage = () => ({
  type: CLEAN_NEW_MESSAGE,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const changeNewMessage = (value) => ({
  type: CHANGE_NEW_MESSAGE,
  value,
});

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages,
});

export const getMessages = () => ({
  type: GET_MESSAGES,
});

export const getCommands = () => ({
  type: GET_COMMANDS,
});

export const autoLog = () => ({
  type: AUTOLOG,
});

export const changeField = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const failLogin = (error) => ({
  type: FAIL_LOGIN,
  error,
});

export const setUser = (username, role, commands, builderId, id, level, firstname, lastname) => ({
  type: SET_USER,
  username,
  role,
  commands,
  builderId,
  id,
  level,
  firstname,
  lastname
});

export const logout = () => ({
  type: LOGOUT,
});

export const isLogged = () => ({
  type: IS_LOGGED,
});

export const unsetUser = () => ({
  type: UNSET_USER,
});

export const isLoading = () => ({
  type: IS_LOADING,
});

export const activateLoad = () => ({
  type: ACTIVATE_LOAD,
});

