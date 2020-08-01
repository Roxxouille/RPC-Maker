import React from 'react';
import { Form, Col, Button, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';

const Contact = ({ changeContact, contactSubmit, content, email, firstname, lastname, status }) => {
  const handleChange = (e) => {
    changeContact(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contactSubmit();
  };

  return (
    <div className="container">
      <div className="contact__space">
        <h1>Une Question ? c'est par ici n'hésitez pas ! :D</h1>
      </div>
      <Form onSubmit={handleSubmit} className="contact">
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
          <Form.Control onChange={handleChange} value={content} name="content" as="textarea" placeholder="Message" />
        </Form.Row>
        {status && (
          <Alert variant="dark">
            { status }
          </Alert>
        )}
        <Button className="bouton" variant="primary" type="submit"> GO ! </Button>
      </Form>
    </div>
  );
};

Contact.propTypes = {
  changeContact: PropTypes.func.isRequired,
  contactSubmit: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Contact;
