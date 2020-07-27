import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { signIn } from '../../actions/user';
import axios from 'axios';

const SignIn = ({ email, password, changeField, signIn }) => {

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    changeField(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test back');
    axios.get('http://localhost:3000/api/user')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleChange} name="email" type="email" value={email} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handleChange} name="password" type="password" value={password} placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Se connecter
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
