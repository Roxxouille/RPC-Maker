import React, { useEffect } from 'react';
import { Form, Col, Button, Accordion, Card } from 'react-bootstrap';
import './styles.scss';
import Collap from 'src/components/Utils/Collap';
import SelectField from 'src/components/Devis/Step/SelectField';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import ChangeStepButton from './ChangeStepButton';

const Step7 = ({ dataSurvey, error, changeStep, items, changeDevis, getItems }) => {
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
  let screenSizes = [];
  let screenResolutions = [];
  let keyboardLanguage = [];
  let keyboardSwitch = [];
  let keyboardType = [];
  let mouseType = [];
  let mousepadType = [];
  let mousepadSize = [];
  let headphoneType = [];
  let camResolution = [];
  let printerType = [];

  items.map((item) => {
    if (item.name === 'Ecran') {
      screen = item.items;
      screenSizes = item.specs.size;
      screenResolutions = item.specs.resolution;
    }
    if (item.name === 'Clavier') {
      keyboard = item.items;
      keyboardLanguage = item.specs.language;
      keyboardSwitch = item.specs.switch;
      keyboardType = item.specs.type;
    }
    if (item.name === 'Souris') {
      mouse = item.items;
      mouseType = item.specs.type;
    }
    if (item.name === 'Tapis') {
      mousepad = item.items;
      mousepadType = item.specs.type;
      mousepadSize = item.specs.size;
    }
    if (item.name === 'Micro-Casque') {
      headphone = item.items;
      headphoneType = item.specs.type;
    }
    if (item.name === 'Enceintes') {
      speakers = item.items;
    }
    if (item.name === 'Webcam') {
      cam = item.items;
      camResolution = item.specs.resolution;
    }
    if (item.name === 'Imprimante') {
      printer = item.items;
      printerType = item.specs.type;
    }
  });

  const dataScreenSizes = screenSizes.map((size) => {
    return <option value={size}>{size}</option>;
  });
  const dataScreenResolutions = screenResolutions.map((resolution) => {
    return <option value={resolution}>{resolution}</option>;
  });
  const dataKeyboardLanguages = keyboardLanguage.map((language) => {
    return <option value={language}>{language}</option>;
  });

  const dataKeyboardSwitchs = keyboardSwitch.map((oneSwitch) => {
    return <option value={oneSwitch}>{oneSwitch}</option>;
  });

  const dataKeyboardtypes = keyboardType.map((type) => {
    return <option value={type}>{type}</option>;
  });

  const dataMouseTypes = mouseType.map((type) => {
    return <option value={type}>{type}</option>;
  });

  const dataMousepadTypes = mousepadType.map((type) => {
    return <option value={type}>{type}</option>;
  });

  const dataMousepadSizes = mousepadSize.map((size) => {
    return <option value={size}>{size}</option>;
  });

  const dataHeadphoneTypes = headphoneType.map((type) => {
    return <option value={type}>{type}</option>;
  });

  const dataWebcamResolutions = camResolution.map((resolution) => {
    return <option value={resolution}>{resolution}</option>;
  });

  const dataPrinterTypes = printerType.map((type) => {
    return <option value={type}>{type}</option>;
  });

  const screenForm = (
    <Card.Body>
      <SelectField label='Modèle' name='device_screen' options={screen} value={dataSurvey.device_screen} valueModel={dataSurvey.device_screen_model} valueLink={dataSurvey.device_screen_link} errorLink={error.deviceScreenLink[0]} handleChange={changeDevis} />
      {dataSurvey.device_screen === 'noidea' && (
        <>
          <Form.Label>Taille de l'écran</Form.Label>
          <Form.Control name='device_screen_size' as="select" onChange={changeDevis} value={dataSurvey.device_screen_size}>
            {dataScreenSizes}
          </Form.Control>
          <Form.Label>Résolution de l'écran</Form.Label>
          <Form.Control name='device_screen_resolution' as="select" onChange={changeDevis} value={dataSurvey.device_screen_resolution}>
            {dataScreenResolutions}
          </Form.Control>
        </>
      )}
    </Card.Body>
  );

  const keyboardForm = (
    <Card.Body>
      <SelectField label='Modèle' name='device_keyboard' options={keyboard} value={dataSurvey.device_keyboard} valueModel={dataSurvey.device_keyboard_model} valueLink={dataSurvey.device_keyboard_link} errorLink={error.deviceKeyboardLink[0]} handleChange={changeDevis} />
      {dataSurvey.device_keyboard === 'noidea' && (
        <>
          <Form.Label>Langue</Form.Label>
          <Form.Control name='device_keyboard_language' as="select" onChange={changeDevis} value={dataSurvey.device_keyboard_language}>
            {dataKeyboardLanguages}
          </Form.Control>
          <Form.Label>Type</Form.Label>
          <Form.Control name='device_keyboard_type' as="select" onChange={changeDevis} value={dataSurvey.device_keyboard_type}>
            {dataKeyboardtypes}
          </Form.Control>
          <Form.Label>Switch</Form.Label>
          <Form.Control name='device_keyboard_switch' as="select" onChange={changeDevis} value={dataSurvey.device_keyboard_switch}>
            {dataKeyboardSwitchs}
          </Form.Control>
        </>
      )}
    </Card.Body>
  );

  const mouseForm = (
    <Card.Body>
      <SelectField label='Souris' name='device_mouse' options={mouse} value={dataSurvey.device_mouse} valueModel={dataSurvey.device_mouse_model} valueLink={dataSurvey.device_mouse_link} errorLink={error.deviceMouseLink[0]} handleChange={changeDevis} />
      {dataSurvey.device_mouse === 'noidea' && (
        <>
          <Form.Label>Type de capteurs</Form.Label>
          <Form.Control name='device_mouse_type' as="select" onChange={changeDevis} value={dataSurvey.device_keyboard_type}>
            {dataMouseTypes}
          </Form.Control>
          <BinaryButtonField label="Filaire ?" name="device_mouse_filaire" value={dataSurvey.device_mouse_filaire} handleChange={changeDevis} />
        </>
      )}
    </Card.Body>
  );

  const mousepadForm = (
    <Card.Body>
      <SelectField label='Tapis' name='device_mousepad' options={mousepad} value={dataSurvey.device_mousepad} valueModel={dataSurvey.device_mousepad_model} valueLink={dataSurvey.device_mousepad_link} errorLink={error.deviceMousepadLink[0]} handleChange={changeDevis} />
      {dataSurvey.device_mousepad === 'noidea' && (
        <>
          <Form.Label>Type</Form.Label>
          <Form.Control name='device_mousepad_type' as="select" onChange={changeDevis} value={dataSurvey.device_mousepad_type}>
            {dataMousepadTypes}
          </Form.Control>
          <Form.Label>Taille</Form.Label>
          <Form.Control name='device_mousepad_size' as="select" onChange={changeDevis} value={dataSurvey.device_mousepad_size}>
            {dataMousepadSizes}
          </Form.Control>
        </>
      )}
    </Card.Body>
  );

  const headphoneForm = (
    <Card.Body>
      <SelectField label='Casque' name='device_headphone' options={headphone} value={dataSurvey.device_headphone} valueModel={dataSurvey.device_headphone_model} valueLink={dataSurvey.device_headphone_link} errorLink={error.deviceHeadphoneLink[0]} handleChange={changeDevis} />
      {dataSurvey.device_headphone === 'noidea' && (
        <>
          <Form.Label>Type</Form.Label>
          <Form.Control name='device_headphone_type' as="select" onChange={changeDevis} value={dataSurvey.device_headphone_type}>
            {dataHeadphoneTypes}
          </Form.Control>
        </>
      )}
    </Card.Body>
  );
  const speakerForm = (
    <Card.Body>
      <SelectField label='Enceintes' name='device_enceinte' options={speakers} value={dataSurvey.device_enceinte} valueModel={dataSurvey.device_enceinte_model} valueLink={dataSurvey.device_enceinte_link} errorLink={error.deviceEnceinteLink[0]} handleChange={changeDevis} />
    </Card.Body>
  );
  const webcamForm = (
    <Card.Body>
      <SelectField label='Webcam' name='device_webcam' options={cam} value={dataSurvey.device_webcam} valueModel={dataSurvey.device_webcam_model} valueLink={dataSurvey.device_webcam_link} errorLink={error.deviceWebcamLink[0]} handleChange={changeDevis} />
      {dataSurvey.device_webcam === 'noidea' && (
        <>
          <Form.Label>Résolution</Form.Label>
          <Form.Control name='device_webcam_resolution' as="select" onChange={changeDevis} value={dataSurvey.device_webcam_resolution}>
            {dataWebcamResolutions}
          </Form.Control>
        </>
      )}
    </Card.Body>
  );
  const printerForm = (
    <Card.Body>
      <SelectField label='Imprimante' name='device_printer' options={printer} value={dataSurvey.device_printer} valueModel={dataSurvey.device_printer_model} valueLink={dataSurvey.device_printer_link} errorLink={error.devicePrinterLink[0]} handleChange={changeDevis} />
      {dataSurvey.device_printer === 'noidea' && (
        <>
          <Form.Label>Type</Form.Label>
          <Form.Control name='device_printer_type' as="select" onChange={changeDevis} value={dataSurvey.device_printer_type}>
            {dataPrinterTypes}
          </Form.Control>
        </>
      )}
    </Card.Body>
  );

  return (
    <div className="fullform container">
      <div>
        <h2>Quelques indispensables dans votre sac à dos?</h2>
      </div>
      <div>
        <h1>
          La création de votre personnage est presque fini !
                  <br />
          <br />
          Pour partir à l'aventure sa force et ses jambes ne suffisent pas, de la corde, une tente, une plume sont tant d'éléments qui peuvent rendre une épopée plus facile !
          <br />
          <br />
          Comme pour son histoire, ce qu'il y a dans le sac à dos de votre personnage peuvent-être choisis entièrement par vous, ou votre guide peut vous accompagner dans cette quete !
          <br />
          <br />
          À vous de voir.
        </h1>
      </div>
      <BinaryButtonField label="Souhaitez vous des périphériques ?" name="device" value={dataSurvey.device} handleChange={changeDevis} />
      <ErrorField error={error.device[0]} />
      {dataSurvey.device && (
        <>
          <Accordion defaultActiveKey="0">
            <Collap label="Ecran(s)" content={screenForm} />
            <Collap label="Clavier" content={keyboardForm} />
            <Collap label="Souris" content={mouseForm} />
            <Collap label="Tapis" content={mousepadForm} />
            <Collap label="Casque" content={headphoneForm} />
            <Collap label="Enceintes" content={speakerForm} />
            <Collap label="Webcam" content={webcamForm} />
            <Collap label="Imprimante" content={printerForm} />
          </Accordion>
        </>
      )}

      <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
    </div>
  );
};

export default Step7;
