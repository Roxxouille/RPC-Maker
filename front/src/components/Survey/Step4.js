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
    const { values, handleChange, CheckContent } = this.props;
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
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_proc')} >
              <option>Fait ton choix !</option>
              <option>i9</option>
              <option>i7</option>
              <option>i5</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" onChange={handleChange('config_proc_model')}/>
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" onChange={handleChange('config_proc_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Carte mére</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_board')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" onChange={handleChange('config_board_model')} />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" onChange={handleChange('config_board_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Carte graphique</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_cg')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" onChange={handleChange('config_cg_model')} />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" onChange={handleChange('config_cg_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>RAM</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_ram')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" onChange={handleChange('config_ram_model')} />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" onChange={handleChange('config_ram_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Ventirad / Water cooling</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_refresh')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" onChange={handleChange('config_refresh_model')} />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" onChange={handleChange('config_refresh_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Stockage</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_storage')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" onChange={handleChange('config_storage_model')} />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" onChange={handleChange('config_storage__link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Carte son</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_boardsound')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" onChange={handleChange('config_boardsound_model')} />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" onChange={handleChange('config_boardsound_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Boitier</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_case')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" onChange={handleChange('config_case_model')} />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" onChange={handleChange('config_case_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Alimentation</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_power')}>
              <option>Fait ton choix !</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
            <Form.Label>Un autre modele ?</Form.Label>
            <Form.Control className="Form" placeholder="Preciser" onChange={handleChange('config_power_model')} />
            <Form.Label>Un lien ?</Form.Label>
            <Form.Control className="Form" placeholder="Si non laissez vide" onChange={handleChange('config_power_link')} />
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
