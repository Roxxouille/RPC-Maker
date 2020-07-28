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
          <h2>Question Specifique</h2>
        </div>
        <div>
          <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur vos besoin.</h1>
        </div>
        <div>
          <h2>Quel est le plus important pour vous ?</h2>
        </div>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline label="Le silence" type={type} id={`inline-${type}-1`} />
              <Form.Check inline label="Un juste milieux" type={type} id={`inline-${type}-2`} />
              <Form.Check inline label="Les performances" type={type} id={`inline-${type}-3`} />
            </div>
          ))}
        </Form>
        <div>
          <h2>Voulez vous faire un SLI</h2>
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
          <h2>Voulez vous pouvoir effectuer de l'overclocking ?</h2>
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
          <h2>Parlons stockage voulez vous ?</h2>
        </div>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline label="HDD" type={type} id={`inline-${type}-1`} />
              <Form.Check inline label="SSD" type={type} id={`inline-${type}-2`} />
              <Form.Check inline label="SSHD" type={type} id={`inline-${type}-3`} />
              <Form.Check inline label="NVME" type={type} id={`inline-${type}-4`} />
            </div>
          ))}
          <Form.Row>
            <Col>
              <Form.Label>Combien ?</Form.Label>
            </Col>
            <Col>
              <Form.Control className="Form" placeholder="- GO" />
            </Col>
          </Form.Row>
        </Form>

        <div>
          <h2>En ce qui concerne le wi-fi, voulez vous une carte ?</h2>
        </div>
        <Form.Row>
          <Col>
            <Button className="bouton" variant="primary" type="submit"> Oui </Button>
          </Col>
          <Col>
            <Button className="bouton" variant="primary" type="submit"> Non </Button>
          </Col>
        </Form.Row>

        <div>
          <h2>Si oui, etes vous dans la meme piece que le router ?</h2>
        </div>
        <Form.Row>
          <Col>
            <Button className="bouton" variant="primary" type="submit"> Oui </Button>
          </Col>
          <Col>
            <Button className="bouton" variant="primary" type="submit"> Non </Button>
          </Col>
        </Form.Row>

        <div>
          <h2>Si oui, avez vous la fibre optique ?</h2>
        </div>
        <Form.Row>
          <Col>
            <Button className="bouton" variant="primary" type="submit"> Oui </Button>
          </Col>
          <Col>
            <Button className="bouton" variant="primary" type="submit"> Non </Button>
          </Col>
        </Form.Row>

        <div>
          <h2>En ce qui concerne le son, voulez vous une carte ?</h2>
        </div>
        <Form.Row>
          <Col>
            <Button className="bouton" variant="primary" type="submit"> Oui </Button>
          </Col>
          <Col>
            <Button className="bouton" variant="primary" type="submit"> Non </Button>
          </Col>
        </Form.Row>

        <Form>
          <Form.Label>Parlons stockage voulez vous ?</Form.Label>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline label="Jeux" type={type} id={`inline-${type}-1`} />
              <Form.Check inline label="Home cinéma" type={type} id={`inline-${type}-2`} />
              <Form.Check inline label="Musique" type={type} id={`inline-${type}-3`} />
              <Form.Check inline label="Autres" type={type} id={`inline-${type}-4`} />
              <Form.Control className="Form" placeholder="Précisez" />
            </div>
          ))}
        </Form>

        <Form>
          <Form.Label>Voulez vous un design particulier sur votre tour ? (lumieres,led,couleur harmonieuse, ..)</Form.Label>
          <Form.Row className="contact" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" Rows="3" placeholder="Message" />
          </Form.Row>
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

export default Step5;
