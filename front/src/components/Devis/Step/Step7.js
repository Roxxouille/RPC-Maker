import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import axios from 'axios';
import ErrorField from '../Utils/Field/ErrorField';

export class Step7 extends Component {
  state = {
    screen: [],
    inch: [],
    reso: [],
    keyboard: [],
    type: [],
    swytch: [],
    language: [],
    mouse: [],
    mouseType: [],
    pad: [],
    padType: [],
    padSize: [],
    hifi: [],
    headset: [],
    webcam: [],
    webcamRes: [],
    imprimante: [],
    imprimanteType: [],
  }

  componentDidMount() {
    axios.get('http://localhost:3000/category/ecran/').then((res) => {
      const screen = res.data.items;
      console.log(screen);
      this.setState({ screen });
    });
    axios.get('http://localhost:3000/category/ecran/').then((res) => {
      const inch = res.data.specs.size;
      console.log(inch);
      this.setState({ inch });
    });
    axios.get('http://localhost:3000/category/ecran/').then((res) => {
      const reso = res.data.specs.resolution;
      console.log("resolution", reso);
      this.setState({reso});
    });
    axios.get('http://localhost:3000/category/clavier/').then((res) => {
      const keyboard = res.data.items;
      console.log(keyboard);
      this.setState({ keyboard });
    });
    axios.get('http://localhost:3000/category/clavier/').then((res) => {
      const { type } = res.data.specs;
      console.log(type);
      this.setState({ type });
    });
    axios.get('http://localhost:3000/category/clavier/').then((res) => {
      const swytch = res.data.specs.switch;
      console.log(swytch);
      this.setState({ swytch });
    });
    axios.get('http://localhost:3000/category/clavier/').then((res) => {
      const { language } = res.data.specs;
      console.log(language);
      this.setState({ language });
    });
    axios.get('http://localhost:3000/category/souris/').then((res) => {
      const mouse = res.data.items;
      console.log('mouse', mouse);
      this.setState({ mouse });
    });
    axios.get('http://localhost:3000/category/souris/').then((res) => {
      const mouseType = res.data.specs.type;
      this.setState({ mouseType });
    });
    axios.get('http://localhost:3000/category/tapis/').then((res) => {
      const pad = res.data.items;
      this.setState({ pad });
    });
    axios.get('http://localhost:3000/category/tapis/').then((res) => {
      const pad = res.data.items;
      this.setState({ pad });
    });
    axios.get('http://localhost:3000/category/tapis/').then((res) => {
      const padType = res.data.specs.type;
      this.setState({ padType });
    });
    axios.get('http://localhost:3000/category/tapis/').then((res) => {
      const padSize = res.data.specs.size;
      this.setState({ padSize });
    });
    axios.get('http://localhost:3000/category/enceintes/').then((res) => {
      const hifi = res.data.items;
      this.setState({ hifi });
    });
    axios.get('http://localhost:3000/category/micro-casque/').then((res) => {
      const headset = res.data.items;
      this.setState({ headset });
    });
    axios.get('http://localhost:3000/category/webcam/').then((res) => {
      const webcam = res.data.items;
      this.setState({ webcam });
    });
    axios.get('http://localhost:3000/category/webcam/').then((res) => {
      const webcamRes = res.data.specs.resolution;
      this.setState({ webcamRes });
    });
    axios.get('http://localhost:3000/category/imprimante/').then((res) => {
      const imprimante = res.data.items;
      this.setState({ imprimante });
    });
    axios.get('http://localhost:3000/category/imprimante/').then((res) => {
      const imprimanteType = res.data.specs.type;
      this.setState({ imprimanteType });
    });
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChange, CheckContentTrue, CheckContentFalse, CheckContent, sendData } = this.props;
    const optionScreen = this.state.screen.map((screen) => (
      <option key={`${screen.id}`}>{`${screen.name}`}</option>
    ));
    const optionSize = this.state.inch.map((inch) => (
      <option key={`${inch}`}>{`${inch}`}</option>
    ));
    const optionResolution = this.state.reso.map((reso) => (
      <option key={`${reso}`}>{`${reso}`}</option>
    ));
    const optionKeyboard = this.state.keyboard.map((keyboard) => (
      <option key={`${keyboard.id}`}>{`${keyboard.name}`}</option>
    ));
    const optionType = this.state.type.map((type) => (
      <option key={`${type}`}>{`${type}`}</option>
    ));
    const optionSwitch = this.state.swytch.map((swytch) => (
      <option key={`${swytch}`}>{`${swytch}`}</option>
    ));
    const optionLanguage = this.state.language.map((language) => (
      <option key={`${language}`}>{`${language}`}</option>
    ));
    const optionMouse = this.state.mouse.map((mouse) => (
      <option key={`${mouse.id}`}>{`${mouse.name}`}</option>
    ));
    const optionMouseType = this.state.mouseType.map((mouseType) => (
      <option key={`${mouseType}`}>{`${mouseType}`}</option>
    ));
    const optionPad = this.state.pad.map((pad) => (
      <option key={`${pad.id}`}>{`${pad.name}`}</option>
    ));
    const optionPadType = this.state.padType.map((padType) => (
      <option key={`${padType}`}>{`${padType}`}</option>
    ));
    const optionPadSize = this.state.padSize.map((padSize) => (
      <option key={`${padSize}`}>{`${padSize}`}</option>
    ));
    const optionHiFi = this.state.hifi.map((hifi) => (
      <option key={`${hifi.id}`}>{`${hifi.name}`}</option>
    ));
    const optionHeadSet = this.state.headset.map((headset) => (
      <option key={`${headset.id}`}>{`${headset.name}`}</option>
    ));
    const optionWebCam = this.state.webcam.map((webcam) => (
      <option key={`${webcam.id}`}>{`${webcam.name}`}</option>
    ));
    const optionWebCamResolution = this.state.webcamRes.map((webcamRes) => (
      <option key={`${webcamRes}`}>{`${webcamRes}`}</option>
    ));
    const optionPrinter = this.state.imprimante.map((imprimante) => (
      <option key={`${imprimante.id}`}>{`${imprimante.name}`}</option>
    ));
    const optionPrinterType = this.state.imprimanteType.map((imprimanteType) => (
      <option key={`${imprimanteType}`}>{`${imprimanteType}`}</option>
    ));
    return (
      <div className="fullform">
        <div>
          <h2>Question d'options</h2>
        </div>
        <div>
          <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur les services tiers.</h1>
        </div>
        <Form.Row>
          <Col>
            <Button name="yes" className="bouton" variant="primary" type="select" onClick={CheckContentTrue('device')}> Oui  </Button>
          </Col>
          <Col>
            <Button name="no" className="bouton" variant="primary" type="select" onClick={CheckContentFalse('device')}> Non </Button>
          </Col>
        </Form.Row>
        { sendData().device !== undefined && <ErrorField error={sendData().device[0]} /> }

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Ecran1</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('device_screen')}>
              {optionScreen}
            </Form.Control>
            <Form.Label className="Form__inside">Un modele en tete ?</Form.Label>
            <Form.Control placeholder="Preciser" onChange={handleChange('device_screen_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('device_screen_link')} />
            { sendData().deviceScreenLink !== undefined && <ErrorField error={sendData().deviceScreenLink[0]} /> }
            <Form.Label className="Form__inside">Taille d'ecran</Form.Label>
            <Form.Control as="select" defaultValue="24 pouces !" onChange={handleChange('device_screen_size')}>
              {optionSize}
            </Form.Control>
            <Form.Label className="Form__inside">Resolution</Form.Label>
            <Form.Control as="select" defaultValue="full HD" onChange={handleChange('device_screen_res')}>
              {optionResolution}
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Clavier</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('device_keyboard')}>
              {optionKeyboard}
            </Form.Control>
            <Form.Label className="Form__inside">Un Modéle en téte ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('device_keyboard_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('device_keyboard_link')} />
            { sendData().deviceKeyboardLink !== undefined && <ErrorField error={sendData().deviceKeyboardLink[0]} /> }
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="Form__inside">Type</Form.Label>
                  <Form.Control as="select" defaultValue="Mecanique" onChange={handleChange('device_keyboard_type')}>
                    {optionType}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="Form__inside">Switch</Form.Label>
                  <Form.Control as="select" defaultValue="Red" onChange={handleChange('device_keyboard_switch')}>
                    {optionSwitch}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Label className="Form__inside">Langue</Form.Label>
          <Form.Control as="select" defaultValue="azerty" onChange={handleChange('device_keyboard_language')}>
            {optionLanguage}
          </Form.Control>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Sourie</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('device_mouse')}>
              {optionMouse}
            </Form.Control>
            <Form.Label className="Form__inside">Un modele en tete ?</Form.Label>
            <Form.Control placeholder="Si non laisser vide" onChange={handleChange('device_mouse_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laisser vide" onChange={handleChange('device_mouse_link')} />
            { sendData().deviceMouseLink !== undefined && <ErrorField error={sendData().deviceMouseLink[0]} /> }
            <Form.Label className="Form__inside">Type</Form.Label>
            <Form.Control as="select" defaultValue="laser" onChange={handleChange('device_mouse_type')}>
              {optionMouseType}
            </Form.Control>
            <Form.Label className="Form__inside">Filaire</Form.Label>
            <Form.Control as="select" defaultValue="oui" onChange={handleChange('device_mouse_filaire')}>
              <option>Non</option>
              <option>Oui</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Tapis</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('device_mousepad')}>
              {optionPad}
            </Form.Control>
            <Form.Label className="Form__inside">Un modele en tete ?</Form.Label>
            <Form.Control placeholder="Si non laisser vide" onChange={handleChange('device_mousepad_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('device_mousepad_link')} />
            { sendData().deviceMousepadLink !== undefined && <ErrorField error={sendData().deviceMousepadLink[0]} /> }
            <Form.Label className="Form__inside">Type</Form.Label>
            <Form.Control as="select" defaultValue="rugueux" onChange={handleChange('device_mousepad_type')}>
              {optionPadType}
            </Form.Control>
            <Form.Label className="Form__inside">Taille</Form.Label>
            <Form.Control as="select" defaultValue="Petit" onChange={handleChange('device_mousepad_size')}>
              {optionPadSize}
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Casque-micro</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('device_headphone')}>
              {optionHeadSet}
            </Form.Control>
            <Form.Label className="Form__inside">Un modele en tete ?</Form.Label>
            <Form.Control placeholder="Si non laisser vide" onChange={handleChange('device_headphone_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('device_headphone_link')} />
            { sendData().deviceHeadphoneLink !== undefined && <ErrorField error={sendData().deviceHeadphoneLink[0]} /> }
            <Form.Label className="Form__inside">Type</Form.Label>
            <Form.Control as="select" defaultValue="Supra auriculaire" onChange={handleChange('device_headphone_type')}>
              <option>Supra auriculaire</option>
              <option>isolant</option>
              <option>Ouvert</option>
            </Form.Control>
            <Form.Label className="Form__inside">Taille</Form.Label>
            <Form.Control as="select" defaultValue="Petit" onChange={handleChange('device_headphone_size')}>
              <option>Petit</option>
              <option>Moyen</option>
              <option>Grand</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Enceinte</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('device_enceinte')}>
              {optionHiFi}
            </Form.Control>
            <Form.Label className="Form__inside">Un modele en tete ?</Form.Label>
            <Form.Control placeholder="Si non laisser vide" onChange={handleChange('device_enceinte_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('device_enceinte_link')} />
            { sendData().deviceEnceinteLink !== undefined && <ErrorField error={sendData().deviceEnceinteLink[0]} /> }
            <Form.Label className="Form__inside">Type</Form.Label>
            <Form.Control as="select" defaultValue="1 enceinte" onChange={handleChange('device_enceinte_type')}>
              <option>1 enceinte</option>
              <option>2 enceintes</option>
              <option>3 enceintes</option>
            </Form.Control>
            <Form.Label className="Form__inside">Caisson de basses</Form.Label>
            <Form.Control as="select" defaultValue="oui" onChange={handleChange('device_enceinte_bass')}>
              <option>Non</option>
              <option>Oui</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Webcam</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('device_webcam')}>
              {optionWebCam}
            </Form.Control>
            <Form.Label className="Form__inside">Un modele en tete ?</Form.Label>
            <Form.Control placeholder="Si non laisser vide" onChange={handleChange('device_webcam_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('device_webcam_link')} />
            { sendData().deviceWebcamLink !== undefined && <ErrorField error={sendData().deviceWebcamLink[0]} /> }
            <Form.Label className="Form__inside">Resolution</Form.Label>
            <Form.Control as="select" defaultValue="720p" onChange={handleChange('device_webcam_res')}>
              {optionWebCamResolution}
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Imprimante</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('device_printer')}>
              {optionPrinter}
            </Form.Control>
            <Form.Label className="Form__inside">Un modele en tete ?</Form.Label>
            <Form.Control placeholder="Si non laisser vide" onChange={handleChange('device_printer_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('device_printer_link')} />
            { sendData().devicePrinterLink !== undefined && <ErrorField error={sendData().devicePrinterLink[0]} /> }
            <Form.Label className="Form__inside">Type</Form.Label>
            <Form.Control as="select" defaultValue="Laser" onChange={handleChange('device_printer_type')}>
              {optionPrinterType}
            </Form.Control>
          </Form.Group>
        </Form>
        <Form.Row>
          <Col>
            <Button className="Form__button" variant="primary" type="submit" onClick={this.back}> Precedent </Button>
          </Col>
          <Col>
            <Button className="Form__button" variant="primary" type="submit" onClick={this.continue}> Suivant </Button>
          </Col>
        </Form.Row>
      </div>
    );
  }
}

export default Step7;
