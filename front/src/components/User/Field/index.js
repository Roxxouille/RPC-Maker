import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Field = ({ label, name, type, value, placeholder, handleChange, controlId }) => {
  const val = value === null ? '' : value;
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control onChange={handleChange} name={name} type={type} value={val} placeholder={placeholder} />
    </Form.Group>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  controlId: PropTypes.string.isRequired,
};

export default Field;
