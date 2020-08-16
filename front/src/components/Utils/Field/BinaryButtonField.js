import React from 'react';
import 'src/components/Devis/styles.scss';
import { Form, Col, Button } from 'react-bootstrap';

const BinaryButtonField = ({ dataSurvey, name, handleChange, label, value }) => {
  return (
    <div>
      <Form.Row>
        <Form.Label>{label}</Form.Label>
      </Form.Row>
      <Form.Row>
        <Col>
          <Button name={name} className="binarybutton" variant={value === true ? 'dark' : 'light'} value={true} onClick={handleChange}>Oui</Button>
        </Col>
        <Col>
          <Button name={name} className="binarybutton" variant={value === false ? 'dark' : 'light'} value={false} onClick={handleChange}>Non</Button>
        </Col>
      </Form.Row>
    </div>
  );
};

export default BinaryButtonField;
