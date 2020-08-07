import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.scss';

export class Step1 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChange } = this.props;
    return (
      <div className="fullform">
        <div>
          <h2>Bienvenu voyageur !</h2>
          <h1>A travers ce processus nous allons pouvoir comprendre quels sont vos besoin pour pouvoir y repondre aumieux.</h1>
        </div>
        <div>
          <h1>Premierement veuillez nous indiquez un nom d’utilisateur :</h1>
        </div>
        <Form className="Form">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="name" placeholder="Ton petit nom :)" onChange={handleChange('username')} />
          </Form.Group>
        </Form>
        <Button className="Form_button" variant="primary" type="submit" onClick={this.continue}> Suivant </Button>
      </div>
    );
  }
}

export default Step1;
 