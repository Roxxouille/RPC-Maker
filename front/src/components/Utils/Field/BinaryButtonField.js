import React from 'react';
import 'src/components/Devis/styles.scss';
import { Form, Col, Button } from 'react-bootstrap';

const BinaryButtonField = ({ name, handleChange, label, value }) => {
  return (
    <div>
      <Form.Row>
        <Col md={6}>
          <Form.Label>{label}</Form.Label>
        </Col>
        <Col md="auto">
          <Button name={name} className="binarybutton" variant="light" value={true} onClick={handleChange}>Oui</Button>
        </Col>
        <Col md="auto">
          <Button name={name} className="binarybutton" variant="light" value={false} onClick={handleChange}>Non</Button>
        </Col>
      </Form.Row>
    </div>
  );
};

export default BinaryButtonField;
