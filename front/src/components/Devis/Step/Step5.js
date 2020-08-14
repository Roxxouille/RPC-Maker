import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import ChangeStepButton from 'src/components/Devis/Step/ChangeStepButton';
import Field from 'src/components/Utils/Field';

const Step5 = ({ changeDevis, dataSurvey, changeStep, error, step }) => {
  console.log('error:', error);
  return (
    <div className="fullform">
      <div>
        <h2>Question Specifique</h2>
      </div>
      <div>
        <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur vos besoin.</h1>
      </div>
      <div>
        <h2>Quel est le plus important pour vous ?</h2>
      </div>
      <Form>
        {['checkbox'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline name="spec_important" label="Le silence" value={"spec_important"} type={type} id={`inline-${type}-1`} onChange={changeDevis} />
            <Form.Check inline name="spec_important" label="Un juste milieux" value={"spec_important"} type={type} id={`inline-${type}-2`} onChange={changeDevis} />
            <Form.Check inline name="spec_important" label="Les performances" value={"spec_important"} type={type} id={`inline-${type}-3`} onChange={changeDevis} />
          </div>
        ))}
      </Form>
      <ErrorField error={error.specImportant[0]} />
      <BinaryButtonField label="Voulez vous faire un SLI?" name="spec_sli" value={dataSurvey.spec_sli} handleChange={changeDevis} />
      <ErrorField error={error.specSli[0]} />
      <BinaryButtonField label="Voulez vous pouvoir effectuer de l'overclocking ?" name="specOverclock" value={dataSurvey.spec_overclock} handleChange={changeDevis} />
      <ErrorField error={error.specOverclock[0]} />
      <Form>
        <ErrorField error={error.specStorage[0]} />
        <Form.Label>Parlons stockage voulez vous ?</Form.Label>
        {['checkbox'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check name="spec_storage" inline label="HDD" type={type} id={`inline-${type}-1`} value={"spec_storage"} onChange={changeDevis} />
            <Form.Check name="spec_storage" inline label="SSD" type={type} id={`inline-${type}-2`} value={"spec_storage"} onChange={changeDevis} />
            <Form.Check name="spec_storage" inline label="SSHD" type={type} id={`inline-${type}-3`} value={"spec_storage"} onChange={changeDevis} />
            <Form.Check name="spec_storage" inline label="NVME" type={type} id={`inline-${type}-4`} value={"spec_storage"} onChange={changeDevis} />
          </div>
        ))}
        <Form.Row>
          <Col>
            <Form.Label>Combien ?</Form.Label>
          </Col>
          <Col>
            <Field name="spec_storage_quantity" value={dataSurvey.spec_storage_quantity} type="number" placeholder="- GO" handleChange={changeDevis} controlId="spec_storage_quantity" />
          </Col>
        </Form.Row>
        <ErrorField error={error.specStorageQuantity[0]} />
      </Form>
      <BinaryButtonField label="En ce qui concerne le wi-fi, voulez vous une carte ?" name="spec_wifi" value={dataSurvey.spec_wifi} handleChange={changeDevis} />
      <ErrorField error={error.specWifi[0]} />
      <BinaryButtonField label="Si oui, etes vous dans la meme piece que le router ?" name="spec_wifi_room" value={dataSurvey.spec_wifi_room} handleChange={changeDevis} />
      <ErrorField error={error.specWifiRoom[0]} />
      <BinaryButtonField label="Si oui, avez vous la fibre optique ?" name="spec_fiber" value={dataSurvey.spec_fiber} handleChange={changeDevis} />
      <ErrorField error={error.specFiber[0]} />
      <BinaryButtonField label="En ce qui concerne le son, voulez vous une carte ?" name="spec_sound" value={dataSurvey.spec_sound} handleChange={changeDevis} />
      <ErrorField error={error.specSound[0]} />
      <Form>
        <Form.Label>Pour quel utilisation ?</Form.Label>
        <ErrorField error={error.specSoundUtilisation[0]} />
        {['checkbox'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check name="spec_sound_utilisation" inline label="Jeux" type={type} id={`inline-${type}-1`} onChange={changeDevis} />
            <Form.Check name="spec_sound_utilisation" inline label="Home cinéma" type={type} id={`inline-${type}-2`} onChange={changeDevis} />
            <Form.Check name="spec_sound_utilisation" inline label="Musique" type={type} id={`inline-${type}-3`} onChange={changeDevis} />
            <Form.Check name="spec_sound_utilisation" inline label="Autres" type={type} id={`inline-${type}-4`} onChange={changeDevis} />
            <Field name="spec_sound_utilisation" value={dataSurvey.spec_sound_utilisation_other} type="name" placeholder="Précisez" handleChange={changeDevis} controlId="spec_sound_utilisation_other" />
          </div>
        ))}
      </Form>

      <Form>
        <Form.Label>Voulez vous un design particulier sur votre tour ? (lumieres,led,couleur harmonieuse, ..)</Form.Label>
        <Field name="spec_light" type="name" value={dataSurvey.spec_light} placeholder="Message" handleChange={changeDevis} controlId="spec_light" />
      </Form>

      <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />

    </div>
  );
};

export default Step5;
