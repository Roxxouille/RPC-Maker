import React from 'react';
import { Form, Button } from 'react-bootstrap';
import StateField from 'src/components/Utils/Field/StateField';
import Field from 'src/components/Utils/Field';
import ErrorField from 'src/components/Utils/Field/ErrorField';

const Edit = ({
  changeProfile, submitProfile, profile, getData,
}) => {
  if (profile.infos.set === false) {
    getData();
  }
  console.log(profile);
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
        <Field handleChange={handleChange} label="Nom" name="lastname" type="text" value={profile.infos.lastname} placeholder="Nom" controlId="lastname" />
        <ErrorField error={profile.error.lastname[0]} />
        <Field handleChange={handleChange} label="Prénom" name="firstname" type="text" value={profile.infos.firstname} placeholder="Prénom" controlId="firstname" />
        <ErrorField error={profile.error.firstname[0]} />
        <Field handleChange={handleChange} label="Email" name="email" type="text" value={profile.infos.email} placeholder="Email" controlId="email" />
        <ErrorField error={profile.error.email[0]} />
        <Field handleChange={handleChange} label="Ville" name="city" type="text" value={profile.infos.city} placeholder="Ville" controlId="city" />
        <ErrorField error={profile.error.city[0]} />
        <Field handleChange={handleChange} label="Code postal" name="zip_code" type="number" value={profile.infos.zip_code} placeholder="Code postal" controlId="zip_code" />
        <ErrorField error={profile.error.zip_code[0]} />
        <Field handleChange={handleChange} label="Adresse" name="adress" type="text" value={profile.infos.adress} placeholder="Adresse" controlId="adress" />
        <ErrorField error={profile.error.adress[0]} />
        <StateField error="" isLoading={profile.infos.loading} />
        <Button variant="primary" type="submit">
          Mettre à jour
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
