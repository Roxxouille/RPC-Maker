import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import axios from 'axios';

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
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/category/ecran/').then((res) => {
      const screen = res.data.itanguageems;
      console.log(screen);
      this.setState({screen});
    });
    axios.get('http://localhost:3000/api/category/ecran/').then((res) => {
      const inch = res.data.specs.size;
      console.log(inch);
      this.setState({inch});
    });
    axios.get('http://localhost:3000/api/category/ecran/').then((res) => {
      const reso = res.data.specs.resolution;
      console.log(reso);
      this.setState({reso});
    });
    axios.get('http://localhost:3000/api/category/clavier/').then((res) => {
      const keyboard = res.data.items;
      console.log(keyboard);
      this.setState({keyboard});
    });
    axios.get('http://localhost:3000/api/category/clavier/').then((res) => {
      const type = res.data.specs.type;
      console.log(type);
      this.setState({type});
    });
    axios.get('http://localhost:3000/api/category/clavier/').then((res) => {
      const swytch = res.data.specs.switch;
      console.log(swytch);
      this.setState({swytch});
    });
    axios.get('http://localhost:3000/api/category/clavier/').then((res) => {
      const language = res.data.specs.language;
      console.log(language);
      this.setState({language});
    });
    axios.get('http://localhost:3000/api/category/souris/').then((res) => {
      const mouse = res.data.items;
      console.log(mouse);
      this.setState({mouse});
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
    const { values, handleChange, CheckContent } = this.props;
    const optionScreen = this.state.screen.map((screen) => {
      return (
        <option key={`${screen.id}`}>{`${screen.name}`}</option>
      );
    });
    const optionSize = this.state.inch.map((inch) => {
      return (
        <option key={`${inch}`}>{`${inch}`}</option>
      );
    });
    const optionResolution = this.state.reso.map((reso) => {
      return (
        <option key={`${reso}`}>{`${reso}`}</option>
      );
    });
    const optionKeyboard = this.state.keyboard.map((keyboard) => {
      return (
        <option key={`${keyboard.id}`}>{`${keyboard.name}`}</option>
      );
    });
    const optionType = this.state.type.map((type) => {
      return (
        <option key={`${type}`}>{`${type}`}</option>
      );
    });
    const optionSwitch = this.state.swytch.map((swytch) => {
      return (
        <option key={`${swytch}`}>{`${swytch}`}</option>
      );
    });
    const optionLanguage = this.state.language.map((language) => {
      return (
        <option key={`${language}`}>{`${language}`}</option>
      );
    });
    const optionMouse = this.state.mouse.map((mouse) => {
      return (
        <option key={`${mouse.id}`}>{`${mouse.name}`}</option>
      );
    });
    return (
      <div>
        <div>
          <h2>Question d'options</h2>
        </div>
        <div>
          <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur les services tiers.</h1>
        </div>
        <Form.Row>
          <Col>
            <Button name="yes" className="bouton" variant="primary" type="submit" onClick={CheckContent('option')}> Oui  </Button>
          </Col>
          <Col>
            <Button name="no" className="bouton" variant="primary" type="submit" onClick={CheckContent('option')}> Non </Button>
          </Col>
        </Form.Row>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Ecran1</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('option_screen')}>
              {optionScreen}
            </Form.Control>
            <Form.Label>Un modele en tete ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" onChange={handleChange('option_screen_model')} />
            <Form.Label>Taille d'ecran</Form.Label>
            <Form.Control as="select" defaultValue="24 pouces !" onChange={handleChange('option_screen_size')}>
              {optionSize}
            </Form.Control>
            <Form.Label>Resolution</Form.Label>
            <Form.Control as="select" defaultValue="full HD" onChange={handleChange('option_screen_res')}>
              {optionResolution}
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Clavier</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('option_keyboard')}>
              {optionKeyboard}
            </Form.Control>
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Type</Form.Label>
                  <Form.Control as="select" defaultValue="Mecanique" onChange={handleChange('option_keyboard_type')}>
                    {optionType}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Switch</Form.Label>
                  <Form.Control as="select" defaultValue="Red" onChange={handleChange('option_keyboard_switch')}>
                    {optionSwitch}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Label>Langue</Form.Label>
          <Form.Control as="select" defaultValue="azerty" onChange={handleChange('option_keyboard_language')}>
            {optionLanguage}
          </Form.Control>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Sourie</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('option_mouse')}>
              {optionMouse}
            </Form.Control>
            <Form.Label>Un modele en tete ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laisser vide" onChange={handleChange('option_mouse_model')}/>
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" defaultValue="laser" onChange={handleChange('option_mouse_type')}>
              <option>Optique</option>
              <option>laser</option>
            </Form.Control>
            <Form.Label>Filaire</Form.Label>
            <Form.Control as="select" defaultValue="oui" onChange={handleChange('option_mouse_filaire')}>
              <option>Non</option>
              <option>Oui</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Tapis</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('option_mousepad')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un modele en tete ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laisser vide" onChange={handleChange('option_mousepad_model')} />
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" defaultValue="rugueux" onChange={handleChange('option_mousepad_type')}>
              <option>dur</option>
            </Form.Control>
            <Form.Label>Taille</Form.Label>
            <Form.Control as="select" defaultValue="Petit" onChange={handleChange('option_mousepad_size')}>
              <option>Moyen</option>
              <option>Grand</option>
              <option>Petit</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Casque-micro</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('option_headphone')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un modele en tete ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laisser vide" onChange={handleChange('option_headphone_model')} />
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" defaultValue="Supra auriculaire" option_headphone_model onChange={handleChange('option_headphone_type')}>
              <option>Supra auriculaire</option>
              <option>isolant</option>
              <option>Ouvert</option>
            </Form.Control>
            <Form.Label>Taille</Form.Label>
            <Form.Control as="select" defaultValue="Petit" onChange={handleChange('option_headphone_size')}>
              <option>Petit</option>
              <option>Moyen</option>
              <option>Grand</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Enceinte</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('option_enceinte')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un modele en tete ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laisser vide" onChange={handleChange('option_enceinte_model')}/>
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" defaultValue="1 enceinte" onChange={handleChange('option_enceinte_type')}>
              <option>1 enceinte</option>
              <option>2 enceintes</option>
              <option>3 enceintes</option>
            </Form.Control>
            <Form.Label>Caisson de basses</Form.Label>
            <Form.Control as="select" defaultValue="oui" onChange={handleChange('option_enceinte_bass')}>
              <option>Non</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Webcam</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('option_webcam')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un modele en tete ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laisser vide" onChange={handleChange('option_webcam_model')} />
            <Form.Label>Resolution</Form.Label>
            <Form.Control as="select" defaultValue="720p" onChange={handleChange('option_webcam_res')}>
              <option>1080p</option>
              <option>720p</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Imprimante</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('option_printer')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un modele en tete ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laisser vide" onChange={handleChange('option_printer_model')} />
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" defaultValue="Laser" onChange={handleChange('option_printer_type')}>
              <option>Laser</option>
              <option>Encre</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Form.Row>
          <Col>
            <Button className="bouton" variant="primary" type="submit" onClick={this.back}> Precedent </Button>
          </Col>
          <Col>
            <Button className="bouton" variant="primary" type="submit" onClick={this.continue}> Suivant </Button>
          </Col>
        </Form.Row>
      </div>
    );
  }
}

export default Step7;
