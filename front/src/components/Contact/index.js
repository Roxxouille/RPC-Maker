import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import "./styles.scss";

const Contact = () => {
  return (
    <div>
      <div className="contact__space">
        <h1>Une Question ? c'est par ici n'hésitez pas ! :D</h1>
      </div>
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
      <Button className="bouton" variant="primary" type="submit"> GO ! </Button>
    </div>
  );
};
export default Contact;
