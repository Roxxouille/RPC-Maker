import React, { useEffect } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import SelectField from 'src/components/Devis/Step/SelectField';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import ChangeStepButton from './ChangeStepButton';

const Step7 = ({dataSurvey, error, changeStep, items, changeDevis, getItems}) => {
  console.log(items);

  if (items.length === 0) {
    getItems();
  }

  let screen = [];
  let keyboard = [];
  let mouse = [];
  let mousepad = [];
  let headphone = [];
  let speakers = [];
  let cam = [];
  let printer = [];
  let dataScreenSizes = [];
  let dataScreenResolutions = [];
  let screenSizes = [];
  let screenResolutions = [];
  
  items.map((item) => {
    if (item.name === 'Ecran') {
      screen = item.items;
      screenSizes = item.specs.size;
      screenResolutions = item.specs.resolution;
    }
    if (item.name === 'Clavier') {
      keyboard = item.items;
    }
    if (item.name === 'Souris') {
      mouse = item.items;
    }
    if (item.name === 'Tapis') {
      mousepad = item.items;
    }
    if (item.name === 'Micro-Casque') {
      headphone = item.items;
    }
    if (item.name === 'Enceintes') {
      speakers = item.items;
    }
    if (item.name === 'Webcam') {
      cam = item.items;
    }
    if (item.name === 'Imprimante') {
      printer = item.items;
    }
  });

  dataScreenSizes = screenSizes.map((size) => {
    return <option value={size}>{size}</option>;
  });
  dataScreenResolutions = screenResolutions.map((resolution) => {
    return <option value={resolution}>{resolution}</option>;
  });
  

  return (
    <div className="fullform">
      <div>
        <h2>Question d'options</h2>
      </div>
      <div>
        <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur les services tiers.</h1>
      </div>
      <BinaryButtonField label="Souhaitez vous des périphériques ?" name="device" value={dataSurvey.device} handleChange={changeDevis} />
      <ErrorField error={error.device[0]} />
      { dataSurvey.device && (
        <>
          <SelectField label='Ecran' name='device_screen' options={screen} value={dataSurvey.device_screen} valueModel={dataSurvey.device_screen_model} valueLink={dataSurvey.device_screen_link} errorLink={error.deviceScreenLink[0]} handleChange={changeDevis} />
          <Form.Label>Taille de l'écran</Form.Label>
          <Form.Control name='device_screen_size' as="select" onChange={changeDevis} value={dataSurvey.device_screen_size}>
            {dataScreenSizes}
          </Form.Control>
          <Form.Label>Résolution de l'écran</Form.Label>
          <Form.Control name='device_screen_resolution' as="select" onChange={changeDevis} value={dataSurvey.device_screen_resolution}>
            {dataScreenResolutions}
          </Form.Control>


          <SelectField label='Clavier' name='device_keyboard' options={keyboard} value={dataSurvey.device_keyboard} valueModel={dataSurvey.device_keyboard_model} valueLink={dataSurvey.device_keyboard_link} errorLink={error.deviceKeyboardLink[0]} handleChange={changeDevis} />
          <SelectField label='Souris' name='device_mouse' options={mouse} value={dataSurvey.device_mouse} valueModel={dataSurvey.device_mouse_model} valueLink={dataSurvey.device_mouse_link} errorLink={error.deviceMouseLink[0]} handleChange={changeDevis} />
          <SelectField label='Tapis' name='device_mousepad' options={mousepad} value={dataSurvey.device_mousepad} valueModel={dataSurvey.device_mousepad_model} valueLink={dataSurvey.device_mousepad_link} errorLink={error.deviceMousepadLink[0]} handleChange={changeDevis} />
          <SelectField label='Casque' name='device_headphone' options={headphone} value={dataSurvey.device_headphone} valueModel={dataSurvey.device_headphone_model} valueLink={dataSurvey.device_headphone_link} errorLink={error.deviceHeadphoneLink[0]} handleChange={changeDevis} />
          <SelectField label='Enceintes' name='device_enceinte' options={speakers} value={dataSurvey.device_enceinte} valueModel={dataSurvey.device_enceinte_model} valueLink={dataSurvey.device_enceinte_link} errorLink={error.deviceEnceinteLink[0]} handleChange={changeDevis} />
          <SelectField label='Webcam' name='device_webcam' options={cam} value={dataSurvey.device_webcam} valueModel={dataSurvey.device_webcam_model} valueLink={dataSurvey.device_webcam_link} errorLink={error.deviceWebcamLink[0]} handleChange={changeDevis} />
          <SelectField label='Imprimante' name='device_printer' options={printer} value={dataSurvey.device_printer} valueModel={dataSurvey.device_printer_model} valueLink={dataSurvey.device_printer_link} errorLink={error.devicePrinterLink[0]} handleChange={changeDevis} />
        </>
      )}

      <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
    </div>
  );
};

export default Step7;
