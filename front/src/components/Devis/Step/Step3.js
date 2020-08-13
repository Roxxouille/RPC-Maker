import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import ChangeStepButton from './ChangeStepButton';

const Step3 = ({ changeDevis, dataSurvey, changeStep, error }) => {
  return (
    <div className="fullform">
      <div>
        <h2>Question pratique</h2>
      </div>
      <div>
        <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur votre idee.</h1>
      </div>
      <BinaryButtonField label="Auriez vous une configuration en tete?" name="preconfiguration" value={dataSurvey.preconfiguration} handleChange={changeDevis} />
      <ErrorField error={error.preconfiguration[0]} />
      <Form.Row>
        <Form.Label>Ce serait pour quelle utilisation ?</Form.Label>
      </Form.Row>
      <Form.Row>
        <Form.Check inline name="utilisation" onChange={changeDevis} value={"Gaming"} label="Gaming" type="checkbox" />
        <Form.Check inline name="utilisation" onChange={changeDevis} value={"Graphisme"} label="Graphisme" type="checkbox" />
        <Form.Check inline name="utilisation" onChange={changeDevis} value={"Multimedia"} label="Multimédia" type="checkbox" />
        <Form.Check inline name="utilisation" onChange={changeDevis} value={"3D"} label="3D" type="checkbox" />
        <Form.Check inline name="utilisation" onChange={changeDevis} value={"Autres"} label="Autres" type="checkbox" />
      </Form.Row>
      <ErrorField error={error.utilisation[0]} />
      <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
    </div>
  );
};

export default Step3;
