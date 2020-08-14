import React from 'react';
import './styles.scss';
import { Row, Col, Image } from 'react-bootstrap';

const Messages = ({ messages, username }) => {
  console.log(messages);
  const dataMessages = messages.map((message) => {
    const senderName = message.fromUser.username !== username ? <>{message.fromUser.firstname} {message.fromUser.className} <br /></> : '';
    return (
      <div key={message.id} className={message.fromUser.username === username ? 'sent message d-flex w-100' : 'received d-flex w-100'}>
        <div className="content">
          <div className="content__header">{senderName}{message.dateToShow}</div>
          <div className="content__body">{message.content}</div>
        </div>
      </div>

    );
  });
  return (
    <div style={{ height: '90%' }}>
      {dataMessages}
    </div >
  );
};

export default Messages;
