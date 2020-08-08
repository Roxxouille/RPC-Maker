import React from 'react';
import {
  Form, Col, Button, Alert,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';
import ErrorField from '../User/Field/ErrorField';

const Contact = ({
  changeContact, contactSubmit, contact,
}) => {
  console.log('component', contact);
  console.log('component error', `${contact.error}[email]`);
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
            <Form.Control onChange={handleChange} value={contact.infos.lastname} name="lastname" placeholder="Nom" />
            <ErrorField error={contact.error.lastname[0]}/>
          </Col>
          <Col>
            <Form.Control onChange={handleChange} value={contact.infos.firstname} name="firstname" placeholder="Prenom" />
            <ErrorField error={contact.error.firstname[0]}/>
          </Col>
          <Col>
            <Form.Control onChange={handleChange} value={contact.infos.email} name="email" placeholder="Email" />
            <ErrorField error={contact.error.email[0]}/>
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Control onChange={handleChange} value={contact.infos.content} name="content" as="textarea" placeholder="Message" />
          <ErrorField error={contact.error.content[0]}/>
        </Form.Row>
        {contact.status && (
          <Alert variant="dark">
            { contact.infos.status }
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
  /*
  content: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  */
};

export default Contact;
