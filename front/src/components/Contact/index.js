import React from 'react';
import { Form, Col } from 'react-bootstrap';
import "./styles.scss";

const Contact = () => {
  return (
    <div>
      <h1>Une Question ? c'est par ici n'hésitez pas ! :D</h1>
      <Form>
        <Form className="contact">
          <Form.Row>
            <Col>
              <Form.Control placeholder="Nom" />
          </Col>
            <Col>
              <Form.Control placeholder="Prenom" />
            </Col>
            <Col>
              <Form.Control placeholder="Email" />
            </Col>
          </Form.Row>
        </Form>
        <Form className="contact__1">
          <Form.Row className="contact" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" Rows="3" placeholder="Message" />
          </Form.Row>
        </Form>
      </Form>
    </div>
  );
};
export default Contact;
