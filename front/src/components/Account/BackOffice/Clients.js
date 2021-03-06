import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import {
  Row, Col, Card, Button, ListGroup, ListGroupItem
} from 'react-bootstrap';
import Loader from 'src/components/Utils/Loader';

const Clients = ({ clients, isLoading }) => {

  const dataClients1 = clients.map((client) => {
    const command = client.commands[0];
    const link = `/backoffice/client/order/${command.slug}`;
    return (
      <div className={client.level === 2 ? 'clients' : 'clients d-none'} key={client.id}>
        <Card >
          <Card.Body>
            <Card.Title>{client.firstname} {client.lastname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{client.username}</Card.Subtitle>
            <Link to={link}>Voir</Link>
            <footer className="blockquote-footer"> <cite title="Source Title">le {client.createdAt}</cite></footer>
          </Card.Body>
        </Card>
      </div>
    );
  });
  const dataClients2 = clients.map((client) => {
    const command = client.commands[0];
    const link = `/backoffice/client/order/${command.slug}`;
    return (
      <div className={client.level === 3 ? 'clients' : 'clients d-none'} key={client.id}>
        <Card >
          <Card.Body>
            <Card.Title>{client.firstname} {client.lastname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{client.username}</Card.Subtitle>
            <Link to={link}>Voir</Link>
            <footer className="blockquote-footer"> <cite title="Source Title">le {client.createdAt}</cite></footer>
          </Card.Body>
        </Card>
      </div>
    );
  });
  const dataClients3 = clients.map((client) => {
    const command = client.commands[0];
    const link = `/backoffice/client/order/${command.slug}`;
    return (
      <div className={client.level === 4 ? 'clients' : 'clients d-none'} key={client.id}>
        <Card >
          <Card.Body>
            <Card.Title>{client.firstname} {client.lastname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{client.username}</Card.Subtitle>
            <Link to={link}>Voir</Link>
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
          <Col sm={2} > <h4>A vérifier</h4> </Col>
          <Col className="backoffice__body__clients__title__hr"><hr /></Col>
        </div>
        <p>
          Vous retrouverez ici tous les nouveaux clients qui vous ont été assigné, il est temps pour vous de faire les présentations, vérifier que les demandes des clients soient valables, et les valider pour pouvoir passer à la suite.
        </p>

        <div >
          {isLoading ? (
            <Loader />
          ) : (
              <div className="backoffice__body__clients__verify__body">
                {dataClients1}
              </div>
            )}
        </div>
      </div>
      <div className="backoffice__body__clients__edit">
        <div className="backoffice__body__clients__edit__title">
          <Col sm={2} > <h4>A éditer</h4> </Col>
          <Col className="backoffice__body__clients__title__hr"><hr /></Col>
        </div>
        <p>
          Maintenant que vous vous êtes mis d'accord sur les besoins du client, il est temps de rechercher les composants et de les ajouter à sa commande, puis une fois que le client est d'accord avec ce que vous lui proposer, valider la commande.
        </p>

        <div >
          {isLoading ? (
            <Loader />
          ) : (
              <div className="backoffice__body__clients__edit__body">
                {dataClients2}
              </div>
            )}
        </div>
      </div>
      <div className="backoffice__body__clients__mount">
        <div className="backoffice__body__clients__mount__title">
          <Col sm={2} > <h4>A monter</h4> </Col>
          <Col className="backoffice__body__clients__title__hr"><hr /></Col>
        </div>
        <p>
          Tout a été décidé et la commande a été validé et payé, il faut maintenant monter le pc et l'envoyer au client.
        </p>

        <div >
          {isLoading ? (
            <Loader />
          ) : (
              <div className="backoffice__body__clients__mount__body">
                {dataClients3}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Clients;
