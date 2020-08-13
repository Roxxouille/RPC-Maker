import React from 'react';
import './styles.scss';
import Field from 'src/components/Utils/Field';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import ChangeStepButton from 'src/components/Devis/Step/ChangeStepButton';

const Step1 = ({ changeDevis, username, step, changeStep, error }) => {
  console.log('error:', error);
  return (
    <div className="fullform">
      <div>
        <h4>Bienvenu voyageur !</h4>
        <h5>A travers ce processus nous allons pouvoir comprendre quels sont vos besoins pour pouvoir y repondre au mieux.</h5>
      </div>
      <Field name="username" type="name" value={username} label="Pour commencer, quel est votre nom d'utilisateur ?" placeholder="Entrez votre pseudonyme" handleChange={changeDevis} controlId="username" />
      <ErrorField error={error.username[0]} />
      <ChangeStepButton step={step} changeStep={changeStep} />
    </div>
  );
};

export default Step1;
 