export const CHANGE_CONTACT = 'CHANGE_CONTACT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const changeContact = (name, value) => ({
  type: CHANGE_CONTACT,
  name,
  value,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

