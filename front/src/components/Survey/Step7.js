import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';

export class Step4 extends Component {
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
          <h2>Question d'options</h2>
        </div>
        <div>
          <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur les services tiers.</h1>
        </div>
        <div>
          <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur les services tiers.</h1>
        </div>
        <Form.Row>
          <Col>
            <Button className="bouton" variant="primary" type="submit"> Oui  </Button>
          </Col>
          <Col>
            <Button className="bouton" variant="primary" type="submit"> Non </Button>
          </Col>
        </Form.Row>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Ecran1</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !">
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un modele en tete ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" />
            <Form.Label>Taille d'ecran</Form.Label>
            <Form.Control as="select" defaultValue="24 pouces !">
              <option>24 pouces</option>
              <option>25</option>
              <option>27</option>
              <option>30</option>
            </Form.Control>
            <Form.Label>Resolution</Form.Label>
            <Form.Control as="select" defaultValue="full HD">
              <option>144hz</option>
              <option>25</option>
              <option>27</option>
              <option>30</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Clavier 1</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !">
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un modele en tete ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" />
            <Form.Label>Taille d'ecran</Form.Label>
            <Form.Control as="select" defaultValue="24 pouces !">
              <option>24 pouces</option>
              <option>25</option>
              <option>27</option>
              <option>30</option>
            </Form.Control>
            <Form.Label>Resolution</Form.Label>
            <Form.Control as="select" defaultValue="full HD">
              <option>144hz</option>
              <option>25</option>
              <option>27</option>
              <option>30</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Clavier></Form.Label>
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="formGridState" />
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" defaultValue="Mecanique" />
                <option>Fait ton choix !</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridState" />
                <Form.Label>Switch</Form.Label>
                <Form.Control as="select" defaultValue="Red" />
                <option>Fait ton choix !</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Col>
            </Form.Row>
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

export default Step4;
