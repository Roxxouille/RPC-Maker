import React from 'react';
import './styles.scss';
import Field from 'src/components/Utils/Field';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import ChangeStepButton from 'src/components/Devis/Step/ChangeStepButton';

const Step1 = ({ changeDevis, username, step, changeStep, error }) => {
  console.log('error:', error);
  return (
    <div className="fullform container">
      <div className="fullform__header">
        <div className="fullform__header__title">
          <h2>Bienvenue voyageur !</h2>
        </div>
        <div className="fullform__header__content">
          <h1>Vous voila rendu au tout debut de votre aventure avec nous !
          <br /> <br />
           Ce guide vous servira a nous donner toutes les informations necessaires pour que nous puissions trouver ce qui vous correspond le plus donc n'hesitez pas a aller dans le detail.
           <br /> <br />
           Nos equipes pourront apres composer avec vos indications, ne vous inquietez pas, ils savent ce qu'ils font ;)
            </h1>
        </div>
      </div>
      <div className="fullform__body">
        <div className="fullform__body__form">
          <Field name="username" type="name" value={username} label="Comme il y a un debut a tout, nous vous invitons a nous donner un nom de compte:" placeholder="Nom de compte" handleChange={changeDevis} controlId="username" />
          <ErrorField error={error.username[0]} />
        </div>

        <div className="fullform__body__hr">
          <hr />
        </div>


        <div className="fullform__body__content">
          <h1>Il est maintenant temps de rentrer dans le vif du sujet, votre personnage!
          <br />
            <br />
          Est par personnage, nous entendons ordinateur sauf que chez nous votre ordinateur aura une identite propre.
          <br />

           un personnage avec qui vous allez vivre plein d'aventure, pour le meilleur et pour le pire !
           </h1>
        </div>
        {/* <Field name="" type="name" value="" label="Quoi de mieux pour creer un personnage que de lui donner un nom?" placeholder="Nom de personnage" handleChange={changeDevis} controlId="username" />
        <ErrorField error={error.username[0]} /> */}
        <div className="fullform__body__changestep">
          <ChangeStepButton step={step} changeStep={changeStep} />
        </div>
      </div>
    </div>
  );
};

export default Step1;
