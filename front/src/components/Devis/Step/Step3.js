import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import ChangeStepButton from './ChangeStepButton';

const Step3 = ({ changeDevis, dataSurvey, changeStep, error }) => {
  return (
    <div className="fullform container">
      <div className="fullform__header">
        <div className="fullform__header__title">
          <h2>Un equipement a favoriser?</h2>
        </div>
        <div className="fullform__header__content">
          <h6>
            Pour que votre guide puisse negocier avec les artisans pour vous il a besoin de savoir combien il peut depenser !
          <br /> <br />
           Mais si vous n'avez aucune idee des prix, ou que votre bourse est vraiment bien rempli, vous pouvez juste le preciser et votre guide fera au mieux en fonction de vos besoins =)
          </h6>
        </div>
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
