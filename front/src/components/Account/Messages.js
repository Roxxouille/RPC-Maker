import React from 'react';
import './styles.scss';
import {Row, Col, Image} from 'react-bootstrap';

const Messages = ({ messages, username }) => {
  console.log(messages);
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
    <div>
      {dataMessages}
    </div>
  );
};

export default Messages;