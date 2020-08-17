import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import "./styles.scss";

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
          <Card.Img variant="top" src="https://picsum.photos/160/120" />
          <Card.Body>
            <Card.Title>Alexis</Card.Title>
            <p>Développeur Symfony</p>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="https://picsum.photos/160/120" />
          <Card.Body>
            <Card.Title>Raphaël</Card.Title>
            <p>Développeur Symfony</p>
          </Card.Body>
        </Card>
      </div>
      <div className="team__cards">
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/160/120" />
          <Card.Body>
            <Card.Title>Sébastien</Card.Title>
            <p>Développeur React</p>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="https://picsum.photos/160/120" />
          <Card.Body>
            <Card.Title>Paul</Card.Title>
            <p>Développeur React</p>
          </Card.Body>
        </Card>

      </div>

    </div>
  );
};

export default Cards;
