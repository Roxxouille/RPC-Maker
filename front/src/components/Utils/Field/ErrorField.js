import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const ErrorField = ({ error }) => {
  console.log('error:', error);
  return (
    <div>
      {error !== '' && error !== undefined && error !== null && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}
    </div>
  );
};

ErrorField.propTypes = {
  error: PropTypes.string,
};

export default ErrorField;
