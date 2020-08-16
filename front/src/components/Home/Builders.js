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
      <div >
        <Row className="team__content">
          <Col>
            <Card className="team__content__card">
              <Card.Img variant="top" src="https://picsum.photos/160/120" />
              <Card.Body>
                <Card.Title>Antoine</Card.Title>
                <p>Monteur</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="team__content__card">
              <Card.Img variant="top" src="https://picsum.photos/160/120" />
              <Card.Body>
                <Card.Title>Patrick</Card.Title>
                <p>Monteur</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="team__content__card">
              <Card.Img variant="top" src="https://picsum.photos/160/120" />
              <Card.Body>
                <Card.Title>Roger</Card.Title>
                <p>Monteur</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <p>Notre equipe de monteurs travaille tout les jours pour réaliser le PC de vous réves dans les régles de l'art !</p>
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
      <p>Notre super equipe administrative est la tout les jours pour repondre a toutes vos questions en cas de besoins</p>
    </div>
  );
};

export default Builders;
