import React from 'react';
import ChangeStepButton from './ChangeStepButton';
import './styles.scss';
import Field from 'src/components/Utils/Field';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';

const Step2 = ({ dataSurvey, changeDevis, changeStep, step, error }) => {
  console.log(dataSurvey);
  return (
    <div className="fullform">
      <BinaryButtonField name="budget" label="Pour mieux vous servir un budget pourrait nous servir, En avez vous defini un?" value={dataSurvey.budget} handleChange={changeDevis} />
      <ErrorField error={error.budget[0]} />
      { dataSurvey.budget === true && (
      <div>
        <Field name="amount" type="number" value={dataSurvey.amount} label="Quel serait votre budget ?" placeholder="Budget" handleChange={changeDevis} controlId="amount" />
        <ErrorField error={error.amount[0]} />
        <Field name="gap" type="number" value={dataSurvey.gap} label="Quelle marge supplémentaire pourriez vous apporter à votre budget ?" placeholder="Marge" handleChange={changeDevis} controlId="gap" />
        <ErrorField error={error.gap[0]} />
      </div>
      )}
      <ChangeStepButton step={step} changeStep={changeStep} />
    </div>
  );
};

export default Step2;
