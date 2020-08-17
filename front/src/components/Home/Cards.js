import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import "./styles.scss";
import seb from 'src/assets/images/seb.png';
import alex from 'src/assets/images/alex.png';
import raph from 'src/assets/images/raph.png';
import paul from 'src/assets/images/paul.jpg';

const Cards = () => {
  return (
    <div className="team">
      <Row className="team__title">
        <Col className="team__title__hr"><hr /></Col>
        <Col> <h2>La Team</h2> </Col>
        <Col className="team__title__hr"><hr /></Col>
      </Row>
      <div className="team__cards">
        <Card>
          <Card.Img variant="top" src={alex} />
          <Card.Body>
            <Card.Title>Alexis</Card.Title>
            <p>Developpeur Symfony</p>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={raph} />
          <Card.Body>
            <Card.Title>Raphaël</Card.Title>
            <p>Developpeur Symfony</p>
          </Card.Body>
        </Card>
      </div>
      <div className="team__cards">
        <Card>
          <Card.Img variant="top" src={seb} />
          <Card.Body>
            <Card.Title>Sébastien</Card.Title>
            <p>développeur React</p>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={paul} />
          <Card.Body>
            <Card.Title>Paul</Card.Title>
            <p>développeur React</p>
          </Card.Body>
        </Card>

      </div>

    </div>
  );
};

export default Cards;
