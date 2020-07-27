import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import "./styles.scss";

const Survey = () => {
  return (
<div>
  <div>
    <h2>Bienvenu voyageur !</h2>
    <h1>A travers ce processus nous allons pouvoir comprendre quels sont vos besoin pour pouvoir y repondre aumieux.</h1>    
  </div>
  <div>
    <h1>Premierement veuillez nous indiquez un nom d’utilisateur :</h1>
  </div>
  <Form className="Form">
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Control type="name" placeholder="Ton petit nom :)" />
    </Form.Group>
  </Form>
  <Button className="bouton" variant="primary" type="submit"> Suivant </Button>
</div>
  );
};

export default Survey;
