import React from 'react';
import { ListGroup, Form, Row, Image } from 'react-bootstrap';
import Messages from 'src/components/Account/Messages';
import { FaUsers, FaUber, FaUser, FaTv } from 'react-icons/fa';

const Conversations = ({ clients, getMessagesBack, messages, username, newMessage, changeMessageBack, sendMessageBack, activeConv }) => {
  console.log('Clients component conv', clients);
  console.log('messages conv: ', messages);
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
          <div className="backoffice__body__tchat__messages__header__info">
            <h2>Jean Dupont</h2>
            <p>username</p>
          </div>
          <div className="backoffice__body__tchat__messages__header__icons">
            <h3 className="backoffice__body__tchat__messages__header__icons__icon"><FaUser /></h3>
            <h3 className="backoffice__body__tchat__messages__header__icons__icon"><FaTv /></h3>

          </div>


        </div>
        <div className="backoffice__body__tchat__messages__body">
          <div className="backoffice__body__tchat__messages__body__content">
            <Messages messages={messages} username={username} />
            <Form onSubmit={handleSubmit}>
              <Form.Control onChange={handleChange} name='newMessageBack' type='text' value={newMessage} placeholder='Tapez votre message' />
            </Form>
          </div>
          <div className="backoffice__body__tchat__messages__body__profile">
            <Image src="https://picsum.photos/240" rounded />
            <p>Nom Prenom</p>
            <p>username</p>
            <hr />
            <p>email</p>
            <hr />
            <p>adress</p>
            <hr />
            <p>dataform</p>

          </div>
        </div>
      </div>
    </div >

  );
};

export default Conversations;
