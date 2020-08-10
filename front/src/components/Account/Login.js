import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import Field from 'src/components/Utils/Field';
import StateField from 'src/components/Utils/Field/StateField';

const Login = ({
  email, password, changeField, login, error, isLogged, isLoading,
}) => {
  const handleChange = (e) => {
    changeField(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="container">
      { isLogged === false ? (
        <Form onSubmit={handleSubmit}>
          <Field name="email" type="email" label="Email" value={email} placeholder="Entrez votre email" handleChange={handleChange} controlId="email" />
          <Field name="password" type="password" label="Mot de passe" value={password} placeholder="********" handleChange={handleChange} controlId="password" />
          <StateField error={error} isLoading={isLoading} />
          <Button variant="primary" type="submit">
            Se connecter
          </Button>
        </Form>
      ) : (
        <Redirect to="/user" />
      )}

    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Login;
