import React, { Component } from 'react';
import {
  Form, Col, Button, ToggleButton, ToggleButtonGroup, Collapse,
} from 'react-bootstrap';
import './styles.scss';
import ErrorField from '../Utils/Field/ErrorField';

export class Step2 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      handleChange, CheckContentFalse, CheckContentTrue, sendData, sendDataReturn,
    } = this.props;

    return (
      <div className="fullform">
        <div>
          <h2>Question budget</h2>
        </div>
        <div>
          <h1>Pour mieux vous servir un budget pourrait nous servir, En avez vous defini un?</h1>
        </div>
        <Form.Row>
          <Col>
            <Button name="yes" className="Form__button" variant="primary" type="submit" value={true} onClick= {CheckContentTrue('budget')}> Oui </Button>
          </Col>
          <Col>
            <Button name="no" className="Form__button" variant="primary" type="submit" value={false} onClick={CheckContentFalse('budget')}> Non </Button>
          </Col>
        </Form.Row>
        { sendData().budget !== undefined && <ErrorField error={sendData().budget[0]} /> }
            <Form.Row>
              <Col>
                <Form.Control type="name" defaultValue={sendDataReturn().amount} placeholder="Budget" onChange={handleChange('amount')} />
                { sendData().amount !== undefined && <ErrorField error={sendData().amount[0]} /> }
              </Col>
              <Col>
                <Form.Control type="name" defaultValue={sendDataReturn().gap} placeholder="Marge" onChange={handleChange('gap')} />
                { sendData().gap !== undefined && <ErrorField error={sendData().gap[0]} /> }
              </Col>
            </Form.Row>
        <Form.Row className="Form__button">
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

export default Step2;
