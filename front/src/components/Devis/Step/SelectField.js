import React from 'react';
import { Form } from 'react-bootstrap';

const SelectField = ({label, name, handleChange, options, value}) => {
  const nameConfig = `${name}`;
  const nameConfigModel = `${name}_model`;
  const nameConfigLink = `${name}_link`;

  const dataOptions = options.map((option) => {
    return <option key={option.id} value={option.name} >{option.name}</option>
  });

  return (
    <Form.Group controlId="formGridState">
      <Form.Label>{label}</Form.Label>

      <Form.Control value={value} as="select" name={nameConfig} onChange={handleChange}>
        <option value="">Je ne sais pas</option>
        <option value="autre">Autre</option>
        {dataOptions}
      </Form.Control>
      { value === "autre" && (
        <>
          <Form.Label className="Form__inside">Un autre modele ?</Form.Label>
          <Form.Control placeholder="Preciser" name={nameConfigModel} onChange={handleChange} />
          <Form.Label className="Form__inside">Un lien ?</Form.Label>
          <Form.Control placeholder="Si non laissez vide" name={nameConfigLink} onChange={handleChange} />
        </>
      )}
    </Form.Group>
  );
};

export default SelectField;
