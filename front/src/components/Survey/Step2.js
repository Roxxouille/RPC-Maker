import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';

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
    const { values, handleChange } = this.props;
    return (
      <div className="fullform">
        <div>
          <h2>Question budget</h2>
        </div>
        <div>
          <h1>Pour mieux vous servir un budget pourrait nous servir, En avez vous defini un?</h1>
        </div>
        <Form className="Form">
          <Form.Row className="Form__button">
            <Col>
              <Button className="Form__button" variant="primary" type="submit"> Oui </Button>
            </Col>
            <Col>
              <Button className="Form__button" variant="primary" type="submit"> Non </Button>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Control type="name" placeholder="Budget" defaultValue={values.budget} onChange={handleChange('budget')} />
            </Col>
            <Col>
              <Form.Control type="name" placeholder="Marge" defaultValue={values.gap} onChange={handleChange('gap')} />
            </Col>
          </Form.Row>
        </Form>
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
