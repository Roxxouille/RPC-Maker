import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';

export class Inscription extends Component {
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
          <h2>Entre vous et votre pc il ne reste qu’un pas!</h2>
          <h1>Merci d’avoir rempli ce formulaire jusqu’au bout, on est conscient que c’etait long mais avec ca rien ne sera laisser au hasard et vous aurez un environnement numerique qui vous correspond =)</h1>
          <h1>Il ne vous reste plus qu’a vous inscrire et le  monteur vous contactera au plus vite pourfinaliser votre commande, et en plus un avatar personnaliser vous sera attribue, elle est pas belle la vie?</h1>
        </div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="Nom" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Prenom</Form.Label>
              <Form.Control type="Prenom" placeholder="Le nom de ton chat ?" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="E-Mail" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Rue de la patate ?" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address complement</Form.Label>
            <Form.Control placeholder="Apartment, studio, cage ?" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ville</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Departement</Form.Label>
              <Form.Control as="select" defaultValue="Choisi">
                <option>Choisi...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Code Postale</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Je ne suis pas un robot" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="J'accepte les CGU" />
          </Form.Group>

          <Button variant="primary" type="submit">
            C'est parti
          </Button>
        </Form>
        <Form.Row>
          <Col>
            <Button className="bouton" variant="primary" type="submit" onClick={this.back}> Precedent </Button>
          </Col>
          <Col>
            <Button className="bouton" variant="primary" type="submit" onClick={this.continue}> Ha ba non c'est fini ! </Button>
          </Col>
        </Form.Row>
      </div>
    );
  }
}

export default Inscription;
