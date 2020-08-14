import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import Field from 'src/components/Utils/Field';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import ChangeStepButton from './ChangeStepButton';
import SelectField from './SelectField';

const Step6 = ({ dataSurvey, changeDevis, error, changeStep, items}) => {
  let listos = [];

  items.map((item) => {
    if (item.name === "Systeme d'exploitation") {
      listos = item.items;
    }
  });
  return (
    <div>
      <div>
        <h2>Question Systeme</h2>
        <div>
          <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur vos envis.</h1>
        </div>
        <BinaryButtonField label="Voulez vous qu’on vous install un systeme d’exploitation ?" name="os" value={dataSurvey.os} handleChange={changeDevis} />
        <ErrorField error={error.os[0]} />

        { os && (
          <>
            <SelectField label='OS' name='os_choice' options={listos} value={dataSurvey.os_choice} handleChange={changeDevis} />
            <ErrorField error={error.oschoice[0]} />

            <Field name="os_name" type="text" value={dataSurvey.os_name} label="Une autre idée ?" placeholder="Si vous laissez vide, on vous installera un windows allege, windows arium 10." handleChange={changeDevis} controlId="os_name" />
            <ErrorField error={error.osName[0]} />

            <BinaryButtonField label="Voulez vous qu’on vous l'active ?" name="os_active" value={dataSurvey.os_active} handleChange={changeDevis} />
            <ErrorField error={error.osActive[0]} />
          </>
        ) }

        <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
      </div>
    </div>
  );
};

export default Step6;
