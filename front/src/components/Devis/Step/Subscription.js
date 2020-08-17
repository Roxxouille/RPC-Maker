import React from 'react';
import {
  Form, Col, Button, Alert,
} from 'react-bootstrap';
import './styles.scss';
import Field from 'src/components/Utils/Field';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import ChangeStepButton from 'src/components/Devis/Step/ChangeStepButton';

const Subscription = ({ dataSurvey, changeStep, error, changeDevis }) => {
  return (
    <div className="fullform container">
      <div>
        <h2>Entre vous et votre pc, il ne reste qu’un pas !</h2>
        <h1>Merci d’avoir rempli ce formulaire jusqu’au bout, on est conscient que c’était long mais avec ça, rien ne sera laissé au hasard et vous aurez un environnement numérique qui correspond à votre personnage ! =)</h1>
        <h1>Il ne vous reste plus qu’à vous inscrire et votre guide vous contactera au plus vite pour finaliser votre commande, et en plus un avatar personnalisé vous sera attribué, elle est pas belle la vie ?</h1>
      </div>
      <Form className="Form">
        <Field name="lastname" type="text" label="Nom" value={dataSurvey.lastname} placeholder="Entrez votre nom" handleChange={changeDevis} controlId="lastname" />
        <ErrorField error={error.lastname[0]} />
        <Field name="firstname" type="text" label="Prénom" value={dataSurvey.firstname} placeholder="Entrez votre prénom" handleChange={changeDevis} controlId="firstname" />
        <ErrorField error={error.firstname[0]} />
        <Field name="email" type="text" label="Email" value={dataSurvey.email} placeholder="Entrez votre Email" handleChange={changeDevis} controlId="email" />
        <ErrorField error={error.email[0]} />
        <Field name="password" type="password" label="Mot de passe" value={dataSurvey.password} placeholder="Entrez votre mot de passe" handleChange={changeDevis} controlId="password" />
        <ErrorField error={error.password[0]} />
        <Field name="adress" type="text" label="Adresse" value={dataSurvey.adress} placeholder="Entrez votre adresse" handleChange={changeDevis} controlId="adress" />
        <ErrorField error={error.adress[0]} />
        <Field name="city" type="text" label="Ville" value={dataSurvey.city} placeholder="Entrez votre ville" handleChange={changeDevis} controlId="city" />
        <ErrorField error={error.city[0]} />
        <Field name="zip_code" type="number" label="Code postal" value={dataSurvey.zip_code} placeholder="Entrez votre code postal" handleChange={changeDevis} controlId="zip_code" />
        <ErrorField error={error.zip_code[0]} />

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Je ne suis pas un robot" />
        </Form.Group>

        <Form.Group id="formGridCheckbox2">
          <Form.Check type="checkbox" label="J'accepte les CGU" />
        </Form.Group>

        <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
      </Form>
    </div>
  );
};

export default Subscription;
