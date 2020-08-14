import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import Field from 'src/components/Utils/Field';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonFiels';
import ChangeStepButton from './ChangeStepButton';

const Step6 = ({dataSurvey, changeDevis, error, changeStep}) => {
  return (
    <div>
      <div>
        <h2>Question Systeme</h2>
        <div>
          <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur vos envis.</h1>
        </div>
        <BinaryButtonField label="Voulez vous qu’on vous install un systeme d’exploitation ?" name="os" value={dataSurvey.os} handleChange={changeDevis} />
        <ErrorField error={error.os[0]} />
        TODO: LIST OS

        <Field name="os_name" type="text" value={dataSurvey.os_name} label="Une autre idée ?" placeholder="Si vous laissez vide, on vous installera un windows allege, windows arium 10." handleChange={changeDevis} controlId="os_name" />
        <ErrorField error={error.os_name[0]} />

        <BinaryButtonField label="Voulez vous qu’on vous l'active ?" name="os_active" value={dataSurvey.os_active} handleChange={changeDevis} />
        <ErrorField error={error.os_active[0]} />

        <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
      </div>
    </div>
  );
}

export default Step6;
