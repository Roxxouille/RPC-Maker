export const CHANGE_DEVIS = 'CHANGE_DEVIS';
export const CHANGE_STEP_STATE = 'CHANGE_STEP_STATE';
export const SUBMIT_STEP = 'SUBMIT_STEP';
export const SET_ERROR_STEP = 'SET_ERROR_STEP';
export const CHANGE_ARRAY_DEVIS = 'CHANGE_ARRAY_DEVIS';
export const SUBMIT_SURVEY = 'SUBMIT_SURVEY';

export const submitSurvey = () => ({
  type: SUBMIT_SURVEY,
});

export const changeArrayDevis = (name, value) => ({
  type: CHANGE_ARRAY_DEVIS,
  name,
  value,
});

export const setErrorStep = (error) => ({
  type: SET_ERROR_STEP,
  error,
});

export const submitStep = (step) => ({
  type: SUBMIT_STEP,
  step,
});

export const changeStepState = (step) => ({
  type: CHANGE_STEP_STATE,
  step,
});

export const changeDevis = (name, value) => ({
  type: CHANGE_DEVIS,
  name,
  value,
});
