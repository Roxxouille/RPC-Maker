import React from 'react';
import { Card } from 'react-bootstrap';
import "./styles.scss";

const Cards = () => {
  return (
    <div className="show-team">
      <Card className="show-team__one" style={{ width: '16rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/160/120" />
        <Card.Body>
          <Card.Title>Alexis</Card.Title>
          <p>Developpeur Symfony</p>
        </Card.Body>
      </Card>
      <Card className="show-team__one" style={{ width: '16rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/160/120" />
        <Card.Body>
          <Card.Title>Raphaël</Card.Title>
          <p>Developpeur Symfony</p>
        </Card.Body>
      </Card>
      <Card className="show-team__one" style={{ width: '16rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/160/120" />
        <Card.Body>
          <Card.Title>Sébastien</Card.Title>
          <p>développeur React</p>
        </Card.Body>
      </Card>
      <Card className="show-team__one" style={{ width: '16rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/160/120" />
        <Card.Body>
          <Card.Title>Paul</Card.Title>
          <p>développeur React</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
