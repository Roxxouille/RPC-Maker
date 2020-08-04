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

export const submitProfile = () => ({
  type: SUBMIT_PROFILE,
});

export const changeProfile = (name, value) => ({
  type: CHANGE_PROFILE,
  name,
  value,
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

export const isLoading = () => ({
  type: IS_LOADING,
});

export const activateLoad = () => ({
  type: ACTIVATE_LOAD,
});
