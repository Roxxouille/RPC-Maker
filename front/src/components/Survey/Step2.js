import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import "./styles.scss";

const Survey = () => {
  return (
    <div>
      <div>
        <h2>BRRRRRRRRRRR</h2>
        <h1>brrrrrrrrrrrrr</h1>
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
