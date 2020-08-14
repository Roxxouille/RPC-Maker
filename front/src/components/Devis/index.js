/* eslint-disable default-case */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import Step1 from './Step/Step1';
import Step3 from './Step/Step3';
import Step4 from './Step/Step4';
import Step2 from './Step/Step2';
import Step5 from './Step/Step5';
import Step7 from './Step/Step7';
import Step6 from './Step/Step6';/*
import Inscription from './inscription'; */
import './styles.scss';
import axios from 'axios';

const Devis = ({ devis, changeDevis, changeStepState, forceChangeStep, changeArrayDevis, getCategoriesItems, items }) => {
  const handleChange = (e) => {
    console.log('handlechange:', e.target.name, e.target.value);
    changeDevis(e.target.name, e.target.value);
  };

  console.log(items);

  const getItems = () => {
    getCategoriesItems();
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

  const setDefaultItems = () => {
    setDefaultItemsState();
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
        <Step3 changeDevis={handleChange} changeStep={changeStep} handleChangeArray={handleChangeArray} dataSurvey={devis.dataSurvey} error={devis.fail} />
      );
    case 4:
      return (
        <Step4 handleChange={handleChange} changeStep={changeStep} getItems={getItems} dataSurvey={devis.dataSurvey} forceStepUp={forceStepUp} items={items} error={devis.fail}/>
      );
    case 5:
      return (
        <Step5 changeDevis={handleChange} changeStep={changeStep} handleChangeArray={handleChangeArray} dataSurvey={devis.dataSurvey} error={devis.fail} />
      );
    case 6:
      return (
        <Step6 />
      );
    case 7: 
    return (
      <Step7 changeDevis={handleChange} changeStep={changeStep} getItems={getItems} getItems={getItems} dataSurvey={devis.dataSurvey} items={items} error={devis.fail} />
    );
  }
};

export default Devis;
