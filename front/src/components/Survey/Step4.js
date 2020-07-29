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
          <h2>Question configuration</h2>
        </div>
        <div>
          <h1>Si vous savez ce que vous voulez alors c’est tan mieux ! vous n’avez plus qu’a nous l’indiquer.</h1>
        </div>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Processeur</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !">
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Carte mére</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !">
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Carte graphique</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !">
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>RAM</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !">
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Ventirad / Water cooling</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !">
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Stockage</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !">
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Carte son</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !">
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Boitier</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !">
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Alimentation</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !">
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" />
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
