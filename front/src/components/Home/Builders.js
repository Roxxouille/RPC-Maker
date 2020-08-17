import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import "./styles.scss";

const Builders = () => {
  return (
    <div className="team">
      <Row className="team__title">
        <Col className="team__title__hr"><hr /></Col>
        <Col> <h2>Nos Monteurs</h2> </Col>
        <Col className="team__title__hr"><hr /></Col>
      </Row>
      <div className="team__cards">
        <Card >
          <Card.Img variant="top" src="https://picsum.photos/160/120" />
          <Card.Body>
            <Card.Title>Antoine</Card.Title>
            <p>Monteur</p>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src="https://picsum.photos/160/120" />
          <Card.Body>
            <Card.Title>Patrick</Card.Title>
            <p>Monteur</p>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src="https://picsum.photos/160/120" />
          <Card.Body>
            <Card.Title>Roger</Card.Title>
            <p>Monteur</p>
          </Card.Body>
        </Card>
      </div>

      <p>Notre équipe de monteurs travaille tous les jours pour réaliser le PC de vos réves dans les régles de l'art !</p>
      <Row className="team__title">
        <Col className="team__title__hr"><hr /></Col>
        <Col> <h2>A votre service</h2> </Col>
        <Col className="team__title__hr"><hr /></Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/160/120" />
            <Card.Body>
              <Card.Title>Pierre</Card.Title>
              <p>Responsable commercial</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/160/120" />
            <Card.Body>
              <Card.Title>Sandrine</Card.Title>
              <p>Responsable SAV</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p>Notre super équipe administrative est la tous les jours pour répondre à toutes vos questions en cas de besoins</p>
    </div>
  );
};

export default Builders;
