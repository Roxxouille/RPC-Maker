export const SUBMIT_PROFILE = 'SUBMIT_PROFILE';
export const CHANGE_PROFILE = 'CHANGE_PROFILE';
export const ERROR_PROFILE = 'ERROR_PROFILE';

export const errorProfile = (value) => ({
  type: ERROR_PROFILE,
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
