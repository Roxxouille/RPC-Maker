import React, { Component } from 'react';
import {
  Form, Col, Button,
} from 'react-bootstrap';
import './styles.scss';
import ErrorField from '../Utils/Field/ErrorField';

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
    const {
      values, handleChange, CheckContent, handleSubmit, handleAsNumber, sendData
    } = this.props;
    console.log(sendData());
    return (
      <div className="fullform">
        <div>
          <h2>Entre vous et votre pc il ne reste qu’un pas!</h2>
          <h1>Merci d’avoir rempli ce formulaire jusqu’au bout, on est conscient que c’etait long mais avec ca rien ne sera laisser au hasard et vous aurez un environnement numerique qui vous correspond =)</h1>
          <h1>Il ne vous reste plus qu’a vous inscrire et le  monteur vous contactera au plus vite pourfinaliser votre commande, et en plus un avatar personnaliser vous sera attribue, elle est pas belle la vie?</h1>
        </div>
        <Form className="Form">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="Nom" placeholder="Ton nom ?" onChange={handleChange('lastname')} />
              { sendData().lastname !== undefined && <ErrorField error={sendData().lastname[0]} /> }
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Prenom</Form.Label>
              <Form.Control type="Prenom" placeholder="TOn prénom ?" onChange={handleChange('firstname')} />
              { sendData().firstname !== undefined && <ErrorField error={sendData().firstname[0]} /> }
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="E-Mail" onChange={handleChange('email')} />
              { sendData().email !== undefined && <ErrorField error={sendData().email[0]} /> }
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword2">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handleChange('password')} />
              { sendData().password !== undefined && <ErrorField error={sendData().password[0]} /> }
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Rue de la patate ?" onChange={handleChange('adress')} />
            { sendData().adress !== undefined && <ErrorField error={sendData().adress[0]} /> }
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ville</Form.Label>
              <Form.Control placeholder="Apartment, studio, cage ?" onChange={handleChange('city')} />
              { sendData().city !== undefined && <ErrorField error={sendData().city[0]} /> }
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Code Postale</Form.Label>
              <Form.Control type="number" placeholder="Apartment, studio, cage ?" onChange={handleAsNumber('zip_code')} />
              { sendData().zip_code !== undefined && <ErrorField error={sendData().zip_code[0]} /> }
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Je ne suis pas un robot" />
          </Form.Group>

          <Form.Group id="formGridCheckbox2">
            <Form.Check type="checkbox" label="J'accepte les CGU" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
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
