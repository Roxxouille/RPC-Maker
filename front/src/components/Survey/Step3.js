import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';

export class Step3 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div>
        <div>
          <h2>Question pratique</h2>
        </div>
        <div>
          <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur votre idee.</h1>
          <h2>Auriez vous une configuration en tete?</h2>
        </div>
        <Form className="Form">
          <Form.Row>
            <Col>
              <Button className="bouton" variant="primary" type="submit"> Oui </Button>
            </Col>
            <Col>
              <Button className="bouton" variant="primary" type="submit"> Non </Button>
            </Col>
          </Form.Row>
        </Form>
        <h2>Ce serait pour quel utilisation ?</h2>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline label="Gaming" type={type} id={`inline-${type}-1`} />
              <Form.Check inline label="Graphisme" type={type} id={`inline-${type}-2`} />
              <Form.Check inline label="Multimedia" type={type} id={`inline-${type}-3`} />
              <Form.Check inline label="3D" type={type} id={`inline-${type}-4`} />
              <Form.Check inline label="Autres" type={type} id={`inline-${type}-5`} />
              <Form.Control className="Form" placeholder="Preciser" />
            </div>
          ))}
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

export default Step3;
