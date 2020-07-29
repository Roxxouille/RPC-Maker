import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Login = ({
  email, password, changeField, login, error,
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
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={handleChange} name="email" type="email" value={email} placeholder="Entrez votre email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control onChange={handleChange} name="password" type="password" value={password} placeholder="********" />
        </Form.Group>
        {error !== '' && (
          <Alert variant="danger">
            {error}
          </Alert>
        )}
        <Button variant="primary" type="submit">
          Se connecter
        </Button>
      </Form>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default Login;
