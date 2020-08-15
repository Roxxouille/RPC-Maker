import React from 'react';
import { Form, Button } from 'react-bootstrap';
import StateField from 'src/components/Utils/Field/StateField';
import Field from 'src/components/Utils/Field';
import ErrorField from 'src/components/Utils/Field/ErrorField';

const ChangePassword = ({ changeProfile, profile, submitPassword }) => {
  console.log(profile);
  const handleChange = (e) => {
    changeProfile(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPassword();
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Field label="Nouveau mot de passe :" handleChange={handleChange} name="password" value={profile.infos.password} type="password" controlId="password" />
        <ErrorField error={profile.error.password[0]} />
        <Button variant="primary" type="submit">
          Changer de mot de passe
        </Button>
      </Form>
    </div>
  );
};

export default ChangePassword;
