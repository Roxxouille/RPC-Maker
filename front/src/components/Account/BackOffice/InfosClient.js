import React from 'react';
import { Image } from 'react-bootstrap';

const InfosClient = ({ client }) => {
  return (
    <div className="backoffice__body__tchat__messages__body__profile">
      <Image className="backoffice__body__tchat__messages__body__profile__image" src="https://picsum.photos/240" rounded />
      <p className="backoffice__body__tchat__messages__body__profile__name">{client.lastname} {client.firstname}</p>
      <p className="backoffice__body__tchat__messages__body__profile__username">{client.username}</p>
      <hr />
      <p className="backoffice__body__tchat__messages__body__profile__email">{client.email}</p>
      <hr />
      <p className="backoffice__body__tchat__messages__body__profile__dataform">dataform</p>
    </div>
  );
};

export default InfosClient;
