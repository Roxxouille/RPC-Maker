export const SUBMIT_PROFILE = 'SUBMIT_PROFILE';
export const CHANGE_PROFILE = 'CHANGE_PROFILE';
export const ERROR_PROFILE = 'ERROR_PROFILE';
export const ERROR_SUBSCRIPTION = 'ERROR_SUBSCRIPTION';
export const GET_DATA = 'GET_DATA';
export const SET_DATA = 'SET_DATA';


export const setData = (data) => ({
  type: SET_DATA,
  data,
});

export const getData = () => ({
  type: GET_DATA,
});

export const errorProfile = (value) => ({
  type: ERROR_PROFILE,
  value,
});

export const errorSubscription = (value) => ({
  type: ERROR_SUBSCRIPTION,
  value,
});

export const submitProfile = () => ({
  type: SUBMIT_PROFILE,
});

export const changeProfile = (name, value) => ({
  type: CHANGE_PROFILE,
  name,
  value,
});
