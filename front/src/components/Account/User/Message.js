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
  if (messages.length === 0) {
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
    <div className="user__body__tchat">
      <Row className="user__body__tchat__title">
        <Col sm={1} className="tchat__title__hr"><hr /></Col>
        <Col sm={4} > <h2>Mes messages</h2> </Col>
        <Col className="user__body__tchat__title__hr"><hr /></Col>
      </Row>

      <Container className="user__body__tchat__body">
        <div className="user__body__tchat__body__messages">
          <Messages messages={messages} username={username} />
          <div className="user__body__tchat__body__messages__new">
            <Form onSubmit={handleSubmitMessage}>
              <Row>
                <Form.Control onChange={handleChange} name='newMessage' type='text' value={newMessage} placeholder='Tapez votre message' />
              </Row>
            </Form>
          </div>
        </div>



      </Container>
    </div>
  );
};

export default Message;
