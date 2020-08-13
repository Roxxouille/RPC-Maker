import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Row, Col, Card, Button, ListGroup, ListGroupItem
} from 'react-bootstrap';

const Order = ({ command, getCommand }) => {
  const { id } = useParams();
  const link = `/backoffice/client/order/edit/${id}`;
  console.log(command);
  if (command.slug !== id) {
    getCommand(id);
  }

  let total = 0;

  const dataCommand = command.item.map((data) => {
    const price = parseInt(data.price);
    total += price;
    return (

      <div className="backoffice__body__order__items__content__one" key={data.id}>
        <Card >
          <Card.Body>
            <Card.Title>{data.category.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><a href={data.url}>{data.name}</a></Card.Subtitle>
            <footer className="blockquote-footer"> <cite title="Source Title">{data.price} €</cite></footer>
          </Card.Body>
        </Card>
      </div>


    );
  });

  return (
    <div className="backoffice__body__order">
      <div className="backoffice__body__order__title">
        <h3>Commande n°{command.id} :  {command.name}</h3>
      </div>
      <div className="backoffice__body__order__items">
        <div className="backoffice__body__order__items__title">
          <h4>Items :</h4>
          <Button variant="light" ><Link to={link}>Modifier</Link></Button>
        </div>
        <div className="backoffice__body__order__items__content">
          {dataCommand}
        </div>
        <div className="backoffice__body__order__items__footer">
          <h5>Prix Total : {total}€</h5>
        </div>

      </div>
    </div>
  );
};
export default Order;
