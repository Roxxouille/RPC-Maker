import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import axios from 'axios';

export class Step5 extends Component {
  state = {
    oschoice: [],
  }

  componentDidMount() {
    axios.get('http://localhost:3000/category/systeme-d-exploitation/').then((res) => {
      const oschoice = res.data.specs;
      console.log(oschoice);
      this.setState({ oschoice });
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
    const optionOS = this.state.oschoice.map((oschoice) => (
      <option key={`${oschoice}`}>{`${oschoice}`}</option>
    ));
    return (
      <div className="fullform">
        <div>
          <h2>Question Systeme</h2>
        </div>
        <div>
          <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur vos envis.</h1>
        </div>
        <div>
          <h1>Voulez vous qu’on vous install un systeme d’exploitation ?</h1>
        </div>
        <Form.Row>
          <Col>
            <Button name="yes" className="Form__button" variant="primary" type="submit" onClick={CheckContent('os')}> Oui  </Button>
          </Col>
          <Col>
            <Button name="no" className="Form__button" variant="primary" type="submit" onClick={CheckContent('os')}> Non </Button>
          </Col>
        </Form.Row>
        <div>
          <h1 className="Form__config">De quel(s) systeme(s) auriez vous besoin ?</h1>
        </div>
        <Form.Control as="select" defaultValue="OS ?" onChange={handleChange('oschoice')}>
          {optionOS}
        </Form.Control>
        <div>
          <h1>Une autre idée en téte ?</h1>
        </div>
        <Form.Control className="Form__inside" placeholder="Si vous laissez vide, on vous installera un windows allege, windows arium 10." onChange={handleChange('os_name')} />
        <div>
          <h1 className="Form__inside">Voulez vous qu'on vous l'active ?</h1>
        </div>
        <Form.Row>
          <Col>
            <Button className="Form__button" name="yes" variant="primary" type="submit" onClick={CheckContent('os_active')}> Oui </Button>
          </Col>
          <Col>
            <Button className="Form__button" name="no" variant="primary" type="submit" onClick={CheckContent('os_active')}> Non </Button>
          </Col>
        </Form.Row>
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

export default Step5;
