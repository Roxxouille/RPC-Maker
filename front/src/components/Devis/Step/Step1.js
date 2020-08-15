import React from 'react';
import './styles.scss';
import Field from 'src/components/Utils/Field';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import ChangeStepButton from 'src/components/Devis/Step/ChangeStepButton';

const Step1 = ({ changeDevis, username, step, changeStep, error }) => {
  console.log('error:', error);
  return (
    <div className="fullform">
      <div className="fullform__header">
        <div className="fullform__header__title">
          <h2>Bienvenue voyageur !</h2>
        </div>
        <div className="fullform__header__content">
          <h5></h5>
        </div>


      </div>
      <Field name="username" type="name" value={username} label="Pour commencer, quel sera votre pseudonyme ?" placeholder="Entrez votre pseudonyme" handleChange={changeDevis} controlId="username" />
      <ErrorField error={error.username[0]} />
      <ChangeStepButton step={step} changeStep={changeStep} />
    </div>
  );
};

export default Step1;
