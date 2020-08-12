export const CHANGE_CONTACT = 'CHANGE_CONTACT';
export const SEND_MAIL = 'SEND_MAIL';
export const ERROR_CONTACT = 'ERROR_CONTACT';
export const CLEAN_ERROR = 'CLEAN_ERROR';
export const ERROR_SUBSCRIPTION = 'ERROR_SUBSCRIPTION';

export const changeContact = (name, value) => ({
  type: CHANGE_CONTACT,
  name,
  value,
});

export const sendMail = () => ({
  type: SEND_MAIL,
});

export const errorContact = (value) => ({
  type: ERROR_CONTACT,
  value,
});

export const cleanError = () => ({
  type: CLEAN_ERROR,
});
