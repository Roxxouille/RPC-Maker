import React from 'react';
import { ListGroup, Form, Row, Image } from 'react-bootstrap';
import Messages from 'src/components/Account/Messages';
import InfosClient from 'src/components/Account/BackOffice/InfosClient';
import { FaUsers, FaUber, FaUser, FaTv } from 'react-icons/fa';

const Conversations = ({ clients, getMessagesBack, messages, username, newMessage, changeMessageBack, sendMessageBack, activeConv }) => {
  const handleClick = (e) => {
    getMessagesBack(e.target.id, e.target.title);
  };

  const handleChange = (e) => {
    changeMessageBack(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessageBack();
  };


  const dataClients = clients.map((client) => {
    const activate = client.slug === activeConv;
    return (
      <ListGroup.Item className="backoffice__body__tchat__clients__list__client" active={activate} onClick={handleClick} title={client.id} id={client.slug} key={client.slug}>
        {client.username}
      </ListGroup.Item>
    );
  });
  
  const infosClient = clients.map((client) => {
    if (client.slug === activeConv) {
      return (
        <InfosClient client={client} />
      );
    }
  });

  const headerInfosClient = clients.map((client) => {
    if (client.slug === activeConv) {
      return (
        <div className="backoffice__body__tchat__messages__header__info">
          <h2>{client.firstname} {client.lastname}</h2>
          <p>{client.username}</p>
        </div>
      );
    }
  });

  return (
    <div className="backoffice__body__tchat">
      <div className="backoffice__body__tchat__clients" >
        <div className="backoffice__body__tchat__clients__header">
          <h3>Mes clients</h3>
          <h3><FaUsers /></h3>
        </div>
        <div className="backoffice__body__tchat__clients__list">
          {dataClients}
        </div>
      </div>
      <div className="backoffice__body__tchat__messages" >
        <div className="backoffice__body__tchat__messages__header">
          {headerInfosClient}
          <div className="backoffice__body__tchat__messages__header__icons">
            <h3 className="backoffice__body__tchat__messages__header__icons__icon"><FaUser /></h3>
            <h3 className="backoffice__body__tchat__messages__header__icons__icon"><FaTv /></h3>

          </div>


        </div>
        <div className="backoffice__body__tchat__messages__body">
          <div className="backoffice__body__tchat__messages__body__content">
            <div className="backoffice__body__tchat__messages__body__content__messages">
              <Messages messages={messages} username={username} />
            </div>

            <div className="backoffice__body__tchat__messages__body__content__new">
              <Form onSubmit={handleSubmit}>
                <Form.Control onChange={handleChange} name='newMessageBack' type='text' value={newMessage} placeholder='Tapez votre message' />
              </Form>
            </div>

          </div>
          {infosClient}
        </div>
      </div>
    </div>
  );
};

export default Conversations;
