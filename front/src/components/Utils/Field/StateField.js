import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import Loader from 'src/components/Utils/Loader';

const StateField = ({error, isLoading}) => {
  return (
    <div>
      {error !== '' && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}
      {isLoading === true && (
        <Loader />
      )}
    </div>
  );
};

StateField.propTypes = {
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default StateField;
