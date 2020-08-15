import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const ChangeStepButton = ({ step, changeStep }) => {
  const handleClick = (e) => {
    changeStep(e.target.value);
  };
  return (
    <Form.Row className="Form__button">
      {step > 1 && (
        <Col>
          <Button className="Form__button" value="previous" variant="primary" onClick={handleClick}> Precedent </Button>
        </Col>
      )}
      {step < 8 && (
        <Col>
          <Button className="Form__button" value="next" variant="primary" onClick={handleClick}> Suivant </Button>
        </Col>
      )}
      {step === 8 && (
        <Col>
          <Button className="Form__button" value="next" variant="primary" onClick={handleClick}> Partir a l'aventure ! </Button>
        </Col>
      )}
    </Form.Row>
  );
};

export default ChangeStepButton;
