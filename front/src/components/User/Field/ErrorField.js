import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const ErrorField = ({ error }) => {
  return (
    <div>
      {error !== '' && error !== undefined && (
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
