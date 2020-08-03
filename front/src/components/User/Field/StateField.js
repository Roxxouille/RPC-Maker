import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const StateField = ({error, isLoading}) => {
  return (
    <div>
      {error !== '' && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}
      {isLoading === true && (
        <p>ça charge mec</p>
      )}
    </div>
  );
};

StateField.propTypes = {
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default StateField;
