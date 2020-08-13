import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import {
  Row, Col, Card, Button, ListGroup, ListGroupItem
} from 'react-bootstrap';
import Loader from 'src/components/Utils/Loader';

const Clients = ({ clients, isLoading }) => {
  console.log(clients);
  console.log('loading:', isLoading);

  const dataClients = clients.map((client) => {
    const command = client.commands[0];
    const link = `/backoffice/client/order/${command.slug}`;
    return (
      <div className='clients' key={client.id}>
        <Card >
          <Card.Body>
            <Card.Title>{client.firstname} {client.lastname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{client.username}</Card.Subtitle>
            <Link to={link}>voir</Link>
            <footer className="blockquote-footer"> <cite title="Source Title">le {client.createdAt}</cite></footer>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div className='backoffice__body__clients'>
      <Row className="backoffice__body__clients__title">
        <Col sm={1} className="backoffice__body__clients__title__hr"><hr /></Col>
        <Col sm={2} > <h2>Mes Clients</h2> </Col>
        <Col className="backoffice__body__clients__title__hr"><hr /></Col>
      </Row>
      <div className="backoffice__body__clients__verify">
        <div className="backoffice__body__clients__verify__title">
          <Col sm={2} > <h4>A verfier</h4> </Col>
          <Col className="backoffice__body__clients__title__hr"><hr /></Col>
        </div>
        <div >
          {isLoading ? (
            <Loader />
          ) : (
              <div className="backoffice__body__clients__verify__body">
                {dataClients}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Clients;
