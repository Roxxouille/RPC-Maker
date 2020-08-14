/* eslint-disable default-case */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import Step1 from './Step/Step1';
import Step3 from './Step/Step3';
import Step4 from './Step/Step4';
import Step5 from './Step/Step5';
import Step2 from './Step/Step2';/*
import Step6 from './Step/Step6';
import Step7 from './Step/Step7';
import Inscription from './inscription';*/
import './styles.scss';
import axios from 'axios';

const Devis = ({ devis, changeDevis, changeStepState, forceChangeStep, changeArrayDevis }) => {
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    changeDevis(e.target.name, e.target.value);
  };

  const changeStep = (actionStep) => {
    const newStep = actionStep === 'next' ? devis.dataSurvey.step + 1 : devis.dataSurvey.step - 1;
    changeStepState(newStep);
  };

  const handleChangeArray = (e) => {
    changeArrayDevis(e.target.name, e.target.value);
  };

  const forceStepUp = () => {
    const newStep = devis.dataSurvey.step + 1;
    forceChangeStep(newStep);
  };

  console.log(devis);

  switch (devis.dataSurvey.step) {
    case 1:
      return (
      <Step1 changeDevis={handleChange} changeStep={changeStep} username={devis.dataSurvey.username} step={devis.dataSurvey.step} error={devis.fail} />
      );
    case 2:
      return (
        <Step2 changeDevis={handleChange} changeStep={changeStep} dataSurvey={devis.dataSurvey} step={devis.dataSurvey.step} error={devis.fail} />
      );
    case 3:
      return (
        <Step3 changeDevis={handleChange} changeStep={changeStep} handleChangeArray={handleChangeArray} dataSurvey={devis.dataSurvey} error={devis.fail}/>
      );
    case 4:
      return (
        <Step4 changeDevis={handleChange} changeStep={changeStep} dataSurvey={devis.dataSurvey} forceStepUp={forceStepUp} error={devis.fail}/>
      );
    case 5:
      return (
        <Step5 changeDevis={handleChange} changeStep={changeStep} dataSurvey={devis.dataSurvey} forceStepUp={forceStepUp} error={devis.fail} />
      )
  }
}

export default Devis;
