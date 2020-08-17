import React from 'react';
import './styles.scss';
import Field from 'src/components/Utils/Field';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import ChangeStepButton from 'src/components/Devis/Step/ChangeStepButton';

const Step1 = ({
  changeDevis, username, step, changeStep, error, name,
}) => {
  console.log('error:', error);
  return (
    <div className="fullform container">
      <div className="fullform__header">
        <div className="fullform__header__title">
          <h2>Bienvenue voyageur !</h2>
        </div>
        <div className="fullform__header__content">
          <h1>Vous voila rendu au tout début de votre aventure avec nous !
            <br /> <br />
            Ce guide vous servira à nous donner toutes les informations nécessaires pour que nous puissions trouver ce qui vous correspond le plus donc n'hésitez pas à aller dans le detail.
            <br /> <br />
            Nos équipes pourront composer avec vos indications, ne vous inquiétez pas, ils savent ce qu'ils font ;)
          </h1>
        </div>
      </div>
      <div className="fullform__body">
        <div className="fullform__body__form">
          <Field name="username" type="name" value={username} label="Comme il y a un début à tout, nous vous invitons à nous donner un nom de compte :" placeholder="Nom de compte" handleChange={changeDevis} controlId="username" />
          <ErrorField error={error.username[0]} />
        </div>

        <div className="fullform__body__hr">
          <hr />
        </div>

        <div className="fullform__body__content">
          <h1>Il est maintenant temps de rentrer dans le vif du sujet, votre personnage!
            <br />
            <br />
            Par personnage, nous entendons ordinateur sauf que chez nous votre ordinateur aura une identité propre.
            <br />

            Avec ce personnage, vous allez vivre plein d'aventures, pour le meilleur et pour le pire !
          </h1>
        </div>
        <Field name="name" type="text" value={name} label="Quoi de mieux pour créer un personnage que de lui donner un nom ?" placeholder="Nom de personnage" handleChange={changeDevis} controlId="username" />
        <ErrorField error={error.name[0]} />
        <div className="fullform__body__changestep">
          <ChangeStepButton step={step} changeStep={changeStep} />
        </div>
      </div>
    </div>
  );
};

export default Step1;
