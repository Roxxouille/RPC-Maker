/* eslint-disable default-case */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { Redirect } from 'react-router-dom';
import Step1 from './Step/Step1';
import Step3 from './Step/Step3';
import Step4 from './Step/Step4';
import Step2 from './Step/Step2';
import Step5 from './Step/Step5';
import Step7 from './Step/Step7';
import Step6 from './Step/Step6';
import Subscription from './Step/Subscription';
import Timeline from './Timeline';

import './styles.scss';

const Devis = ({ devis, changeDevis, changeStepState, forceChangeStep, changeArrayDevis, getCategoriesItems, items, submitSurvey }) => {
  const handleChange = (e) => {
    changeDevis(e.target.name, e.target.value);
  };

  const getItems = () => {
    getCategoriesItems();
  };

  const changeStep = (actionStep) => {
    const newStep = actionStep === 'next' ? devis.dataSurvey.step + 1 : devis.dataSurvey.step - 1;
    newStep === 9 ? submitSurvey() : changeStepState(newStep);
  };

  const handleChangeArray = (e) => {
    changeArrayDevis(e.target.name, e.target.value);
  };

  const forceStepUp = () => {
    const newStep = devis.dataSurvey.step + 1;
    forceChangeStep(newStep);
  };

  switch (devis.dataSurvey.step) {
    case 1:
      return (
        <div>
          <Timeline step={devis.dataSurvey.step} />
          <Step1 changeDevis={handleChange} changeStep={changeStep} username={devis.dataSurvey.username} step={devis.dataSurvey.step} error={devis.fail} />
        </div>
      );
    case 2:
      return (
        <div>
          <Timeline step={devis.dataSurvey.step} />
          <Step2 changeDevis={handleChange} changeStep={changeStep} dataSurvey={devis.dataSurvey} step={devis.dataSurvey.step} error={devis.fail} />
        </div>
      );
    case 3:
      return (
        <div>
          <Timeline step={devis.dataSurvey.step} />
          <Step3 changeDevis={handleChange} changeStep={changeStep} handleChangeArray={handleChangeArray} dataSurvey={devis.dataSurvey} error={devis.fail} />
        </div>
      );
    case 4:
      return (
        <div>
          <Timeline step={devis.dataSurvey.step} />
          <Step4 handleChange={handleChange} changeStep={changeStep} getItems={getItems} dataSurvey={devis.dataSurvey} forceStepUp={forceStepUp} items={items} error={devis.fail} />
        </div>
      );
    case 5:
      return (
        <div>
          <Timeline step={devis.dataSurvey.step} />
          <Step5 changeDevis={handleChange} changeStep={changeStep} handleChangeArray={handleChangeArray} dataSurvey={devis.dataSurvey} error={devis.fail} />
        </div>
      );
    case 6:
      return (
        <div>
          <Timeline step={devis.dataSurvey.step} />
          <Step6 changeDevis={handleChange} changeStep={changeStep} dataSurvey={devis.dataSurvey} error={devis.fail} items={items} />
        </div>
      );
    case 7:
      return (
        <div>
          <Timeline step={devis.dataSurvey.step} />
          <Step7 changeDevis={handleChange} changeStep={changeStep} getItems={getItems} dataSurvey={devis.dataSurvey} items={items} error={devis.fail} />
        </div>
      );
    case 8:
      return (
        <div>
          <Timeline step={devis.dataSurvey.step} />
          <Subscription changeDevis={handleChange} changeStep={changeStep} dataSurvey={devis.dataSurvey} error={devis.fail} />
        </div>
      );
    case 9:
      return (
        <div>
          <Redirect to="/login" />
        </div>
      );
  }
};

export default Devis;
