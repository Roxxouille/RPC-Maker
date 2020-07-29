import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';

export class Step5 extends Component {
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
            <Button className="bouton" variant="primary" type="submit"> Oui  </Button>
          </Col>
          <Col>
            <Button className="bouton" variant="primary" type="submit"> Non </Button>
          </Col>
        </Form.Row>
        <div>
          <h1>De quel(s) systeme(s) auriez vous besoin ?</h1>
        </div>
        <Form.Control className="Form" placeholder="Si vous laissez vide, on vous installera un windows allege, windows arium 10." />
        <div>
          <h1>Voulez vous qu'on vous l'active ?</h1>
        </div>
        <Form.Control className="Form" placeholder="Si oui precisez la version" />
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

export default Step5;
