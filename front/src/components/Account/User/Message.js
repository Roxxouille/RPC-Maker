import React, { Component } from 'react';
import {
    Container,
    Image,
    Button,
    Col,
    Row,
    InputGroup,
    FormControl,
    Form
} from 'react-bootstrap';
import './styles.scss';
import Messages from 'src/components/Account/Messages';

const Message = ({ getMessages, messages, username, changeNewMessage, sendMessage, newMessage }) => {
  console.log(messages);
  if(messages.length === 0) {
    getMessages();
  }

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleChange = (e) => {
    changeNewMessage(e.target.value);
  };

  return (
    <Container className="user__body__messages">
      <div id="center">
        <h1>Vous etes en conversation avec votre monteur</h1>
      </div>
      <Messages messages={messages} username={username}/>
      <Form onSubmit={handleSubmitMessage}>
        <Row>
          <Form.Control onChange={handleChange} name='newMessage' type='text' value={newMessage} placeholder='Tapez votre message' />
        </Row>
      </Form>
    </Container>
  );
};

export default Message;
