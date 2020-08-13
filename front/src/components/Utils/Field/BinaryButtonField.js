import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const BinaryButtonField = ({name, handleChange, label}) => {
  return (
    <div>
      <Form.Row>
        <Form.Label>{label}</Form.Label>
      </Form.Row>
      <Form.Row>
        <Col>
          <Button name={name} className="Form__button" variant="primary" value={true} onClick={handleChange}>Oui</Button>
        </Col>
        <Col>
          <Button name={name} className="Form__button" variant="primary" value={false} onClick={handleChange}>Non</Button>
        </Col>
      </Form.Row>
    </div>
  );
};

export default BinaryButtonField;
