import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import Field from 'src/components/Utils/Field';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import ChangeStepButton from './ChangeStepButton';
import SelectField from './SelectField';

const Step6 = ({ dataSurvey, changeDevis, error, changeStep, items }) => {
  let listos = [];

  items.map((item) => {
    if (item.name === "Systeme d'exploitation") {
      listos = item.items;
    }
  });
  return (
    <div className="fullform container">
      <div>
        <div>
          <h2>Qui est votre personnage?</h2>
        </div>
        <div>
          <h1>
            Aaah on arrive a un moment tres important dans la vie de votre personnage, qui est il? que peut il faire? quel sera son histoire? pour quelles types d'aventures sera t il taille?
          <br />
            <br />
          Tan t de question sans reponse, mais qui en auront bientot pour que l'on puisse creer votre perssonnage et qu'il corresponde au mieux a vous et a ce que vous avez imagine pour lui!
          <br />
            <br />
          Plus vous mettrez d'information et plus votre personnage sera a l'effigie de ce que vous pensez etre le mieux pour lui, donc allez y franco, n'ayez pas peur!
        </h1>
        </div>
        <BinaryButtonField label="Voulez vous qu’on vous install un systeme d’exploitation ?" name="os" value={dataSurvey.os} handleChange={changeDevis} />
        <ErrorField error={error.os[0]} />

        {dataSurvey.os && (
          <>
            <SelectField label='OS' name='os_choice' options={listos} value={dataSurvey.os_choice} handleChange={changeDevis} />
            <ErrorField error={error.oschoice[0]} />

            <Field name="os_name" type="text" value={dataSurvey.os_name} label="Une autre idée ?" placeholder="Si vous laissez vide, on vous installera un windows allege, windows arium 10." handleChange={changeDevis} controlId="os_name" />
            <ErrorField error={error.osName[0]} />

            <BinaryButtonField label="Voulez vous qu’on vous l'active ?" name="os_active" value={dataSurvey.os_active} handleChange={changeDevis} />
            <ErrorField error={error.osActive[0]} />
          </>
        )}

        <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
      </div>
    </div>
  );
};

export default Step6;
