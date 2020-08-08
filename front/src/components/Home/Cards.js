import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import "./styles.scss";

const Cards = () => {
  return (
    <div className="show-team mb-75">
      <Row className="mb-50">
        <Col className="m-auto"><hr /></Col>
        <Col> <h2>La Team</h2> </Col>
        <Col className="m-auto"><hr /></Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/160/120" />
            <Card.Body>
              <Card.Title>Alexis</Card.Title>
              <p>Developpeur Symfony</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/160/120" />
            <Card.Body>
              <Card.Title>Raphaël</Card.Title>
              <p>Developpeur Symfony</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/160/120" />
            <Card.Body>
              <Card.Title>Sébastien</Card.Title>
              <p>développeur React</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/160/120" />
            <Card.Body>
              <Card.Title>Paul</Card.Title>
              <p>développeur React</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
