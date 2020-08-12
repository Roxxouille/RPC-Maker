import React from 'react';
import './styles.scss';
import { Row, Col, Image } from 'react-bootstrap';

const Messages = ({ messages, username }) => {
  console.log(messages);
  const dataMessages = messages.map((message) => {
    const senderName = message.fromUser.username !== username ? <>{message.fromUser.firstname} {message.fromUser.className} <br /></> : '';
    return (
      <Row key={message.id} className={message.fromUser.username === username ? 'sent message' : 'received message'}>
        <Col sm={6} className="content">
          <div>{message.content}</div>
          <br />
          <div>{message.created_at}</div>




        </Col>
      </Row>
    );
  });
  return (
    <div>
      {dataMessages}
    </div>
  );
};

export default Messages;
