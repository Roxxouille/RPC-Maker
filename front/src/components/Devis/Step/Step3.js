import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import Field from 'src/components/Utils/Field';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import ChangeStepButton from './ChangeStepButton';

const Step3 = ({ changeDevis, dataSurvey, changeStep, error }) => {
  return (
    <div className="fullform container">
      <div>
        <h2>Un equipement ? J'ai! .. ou pas.</h2>
      </div>
      <div>
        <h1>Avoir un budget c'est bien ! Mais peut etre savez vous deja quel equipement fournir a votre personnage?
        <br />
          <br />
          une epee particuliere ou un bouclier precis, vous savez peut etre meme deja tout les equipements necessaire a votre personnage!
          <br />
          <br />
          Si c'est le cas dites le a votre guide et son travail de recherche n'en sera que plus rapide :)
        </h1>
      </div>
      <BinaryButtonField label="J'ai deja des idees d'equipements !" name="preconfiguration" value={dataSurvey.preconfiguration} handleChange={changeDevis} />
      <ErrorField error={error.preconfiguration[0]} />
      <div>

        <hr />

        <h1>Il est temps pour votre guide d'en connaitre un peu plus sur les aventures que va vivre votre personnage.
        <br />
          <br />
        Sera t il un explorateur des terres nouvelles? Un artiste peintre inveterre? Un gladiateur de la nouvelle heure ? Un monde de possibilitees s'offrent a vous!
        </h1>
      </div>
      <Form.Row>
        <Form.Label>Quels seront les aventures de votre personnage?</Form.Label>
      </Form.Row>
      <Form.Row style={{ justifyContent: 'flex-start' }}>
        <Form.Check inline name="utilisation" onChange={changeDevis} value={"Gaming"} label="Gaming" type="radio" />
        <Form.Check inline name="utilisation" onChange={changeDevis} value={"Graphisme"} label="Graphisme" type="radio" />
        <Form.Check inline name="utilisation" onChange={changeDevis} value={"Multimedia"} label="Multimédia" type="radio" />
        <Form.Check inline name="utilisation" onChange={changeDevis} value={"3D"} label="3D" type="radio" />
        <Form.Check inline name="utilisation" onChange={changeDevis} value={"Autres"} label="Autres" type="radio" />
      </Form.Row>
      <ErrorField error={error.utilisation[0]} />
      {dataSurvey.utilisation === "Autres" && ( 
        <>
          <Field name="utilisation_details" type="text" value={dataSurvey.utilisation_details} label="De quel taille serait votre bourse?" placeholder="Pour quelle utilisation ?" handleChange={changeDevis} controlId="utilisation_details" />
          <ErrorField error={error.utilisationDetails[0]} />
        </>
      ) }

      <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
    </div>
  );
};

export default Step3;
