import React from 'react';
import {
  Form, Col, Button, Alert,
} from 'react-bootstrap';
import './styles.scss';

const Subscription = ({ changeSubscription, infos, submitSubscription, subscription}) => {
  console.log(infos);
  const handleChange = (e) => {
    changeSubscription(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitSubscription();
  };

  return (
    <div className="fullform">
      <div>
        <h2>Entre vous et votre pc il ne reste qu’un pas!</h2>
        <h1>Merci d’avoir rempli ce formulaire jusqu’au bout, on est conscient que c’etait long mais avec ca rien ne sera laisser au hasard et vous aurez un environnement numerique qui vous correspond =)</h1>
        <h1>Il ne vous reste plus qu’a vous inscrire et le  monteur vous contactera au plus vite pourfinaliser votre commande, et en plus un avatar personnaliser vous sera attribue, elle est pas belle la vie?</h1>
      </div>
      <Form onSubmit={handleSubmit} className="Form">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="Nom" name="lastname" placeholder="Ton nom ?" value={infos.lastname} onChange={handleChange} />
            <Alert variant="danger" error={subscription.error.lastname[0]} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Prenom</Form.Label>
            <Form.Control name="firstname" placeholder="TOn prénom ?" value={infos.firstname} onChange={handleChange} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail2">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="E-Mail" value={infos.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword2">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" value={infos.password} onChange={handleChange} />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control name="adress" placeholder="Rue de la patate ?" value={infos.adress} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address complement</Form.Label>
          <Form.Control name="inscr_adress2" placeholder="Apartment, studio, cage ?" value={infos.inscr_adress2} onChange={handleChange} />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ville</Form.Label>
            <Form.Control name="city" placeholder="Apartment, studio, cage ?" value={infos.city} onChange={handleChange} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Code Postale</Form.Label>
            <Form.Control name="zip_code" type="number" placeholder="Apartment, studio, cage ?" value={infos.zip_code} onChange={handleChange} />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Je ne suis pas un robot" />
        </Form.Group>

        <Form.Group id="formGridCheckbox2">
          <Form.Check type="checkbox" label="J'accepte les CGU" />
        </Form.Group>

        <Button variant="primary" type="submit">
          C'est parti
        </Button>
      </Form>
    </div>
  );
};

export default Subscription;
