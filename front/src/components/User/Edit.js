import React from 'react';
import { Form, Button } from 'react-bootstrap';
import StateField from './Field/StateField';
import Field from './Field';

const Edit = ({ changeProfile, submitProfile, infos }) => {
  const handleChange = (e) => {
    changeProfile(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitProfile();
  };
  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Field handleChange={handleChange} label="Nom" name="lastname" type="text" value={infos.lastname} placeholder="Nom" controlId="lastname" />
        <Field handleChange={handleChange} label="Prénom" name="firstname" type="text" value={infos.firstname} placeholder="Prénom" controlId="firstname" />
        <Field handleChange={handleChange} label="Email" name="email" type="text" value={infos.email} placeholder="Email" controlId="email" />
        <Field handleChange={handleChange} label="Age" name="old" type="text" value={infos.old} placeholder="Age" controlId="old" />
        <Field handleChange={handleChange} label="Ville" name="city" type="text" value={infos.city} placeholder="Ville" controlId="city" />
        <Field handleChange={handleChange} label="Code postal" name="zipCode" type="number" value={infos.zipCode} placeholder="Code postal" controlId="zipCode" />
        <Field handleChange={handleChange} label="Adresse" name="adress" type="text" value={infos.adress} placeholder="Adresse" controlId="adress" />
        <Field handleChange={handleChange} label="Complément d'adresse" name="adressComplement" value={infos.adressComplement} type="text" placeholder="Complément d'adresse" controlId="adressComplement" />
        <StateField error={infos.error} isLoading={infos.loading} />
        <Button variant="primary" type="submit">
          Mettre à jour
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
