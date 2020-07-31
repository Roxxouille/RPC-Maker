import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';

const Contact = ({ changeContact, message, email, firstname, lastname }) => {
  console.log(message, email, firstname, lastname);
  const handleChange = (e) => {
    changeContact(e.target.name, e.target.value);
  };

  return (
    <div className="container">
      <div className="contact__space">
        <h1>Une Question ? c'est par ici n'hésitez pas ! :D</h1>
      </div>
      <Form className="contact">
        <Form.Row>
          <Col>
            <Form.Control onChange={handleChange} value={lastname} name="lastname" placeholder="Nom" />
          </Col>
          <Col>
            <Form.Control onChange={handleChange} value={firstname} name="firstname" placeholder="Prenom" />
          </Col>
          <Col>
            <Form.Control onChange={handleChange} value={email} name="email" placeholder="Email" />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Control onChange={handleChange} value={message} name="message" as="textarea" placeholder="Message" />
        </Form.Row>
        <Button className="bouton" variant="primary" type="submit"> GO ! </Button>
      </Form>
    </div>
  );
};
export default Contact;
