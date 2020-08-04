export const SUBMIT_PROFILE = 'SUBMIT_PROFILE';
export const CHANGE_PROFILE = 'CHANGE_PROFILE';


export const submitProfile = () => ({
  type: SUBMIT_PROFILE,
});

export const changeProfile = (name, value) => ({
  type: CHANGE_PROFILE,
  name,
  value,
});
