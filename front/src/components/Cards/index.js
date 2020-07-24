import React from 'react';
import { Card } from 'react-bootstrap';
import "./styles.scss";

const Cards = () => {
    return (
        <div className="show-team">
            <Card className="show-team__one" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Alexis</Card.Title>
                </Card.Body>
            </Card>
            <Card className="show-team__one" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Raphaël</Card.Title>
                </Card.Body>
            </Card>
            <Card className="show-team__one" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Sébastien</Card.Title>
                </Card.Body>
            </Card>
            <Card className="show-team__one" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Paul</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;
