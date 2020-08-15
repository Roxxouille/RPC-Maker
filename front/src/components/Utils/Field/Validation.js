import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const Validation = ({ validate }) => {
  console.log('validation:', validate);
  return (
    <div>
      {validate !== '' && validate !== undefined && validate !== null && (
        <Alert variant="success">
          {validate}
        </Alert>
      )}
    </div>
  );
};

Validation.propTypes = {
  error: PropTypes.string,
};

export default Validation;
