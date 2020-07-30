export const LOGIN = 'LOGIN';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const FAIL_LOGIN = 'FAIL_LOGIN';
export const SET_USER = 'SET_USER';
export const AUTOLOG = 'AUTOLOG';
export const IS_LOGGED = 'IS_LOGGED';
export const LOGOUT = 'LOGOUT';
export const UNSET_USER = 'UNSET_USER';

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

export const setUser = (username) => ({
  type: SET_USER,
  username,
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
