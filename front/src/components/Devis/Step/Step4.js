import React from 'react';
import './styles.scss';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import ChangeStepButton from './ChangeStepButton';

const Step4 = ({dataSurvey, error, changeStep, forceStepUp}) => {

  if(dataSurvey.preconfiguration === false){
    forceStepUp();
  }

  return (
    <div className="fullform">
      <div>
        <h2>Question pratique</h2>
      </div>
      <div>
        <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur votre idee.</h1>
      </div>
      
      <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
    </div>
  );
};

export default Step4;
