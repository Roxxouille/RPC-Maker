import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

const Collap = ({content, label}) => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={label}>
        {label}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={label}>
        {content}
      </Accordion.Collapse>
    </Card>
  );
};

export default Collap;
