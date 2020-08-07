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

  const dataMessages = messages.map((message) => {
    const senderName = message.fromUser.username !== username ? <>{message.fromUser.firstname} {message.fromUser.className} <br /></> : '';
    return (
      <Row key={message.id} className={message.fromUser.username === username ? 'sent message' : 'received message'}>
        <Col sm={1}>
            <Image src="https://picsum.photos/240" rounded fluid id="chat-avatar" />
        </Col>
        <Col sm={5}>
            <p>
              {senderName}
                {message.content}
              <br />
              {message.created_at}
            </p>
        </Col>
      </Row>
    );
  });

    return (
        <Container className="user__body__messages">
            <div id="center">
                <h1>Vous etes en conversation avec votre monteur</h1>
            </div>
            {dataMessages}
            <Form onSubmit={handleSubmitMessage}>
              <Row>
                <Form.Control onChange={handleChange} name='newMessage' type='text' value={newMessage} placeholder='Tapez votre message' />
              </Row>
            </Form>
        </Container>
    )
};

export default Message;
