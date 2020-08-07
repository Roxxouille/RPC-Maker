export const CHANGE_CONTACT = 'CHANGE_CONTACT';
export const SEND_MAIL = 'SEND_MAIL';

export const changeContact = (name, value) => ({
  type: CHANGE_CONTACT,
  name,
  value,
});

export const sendMail = () => ({
  type: SEND_MAIL,
});
