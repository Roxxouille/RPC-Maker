import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Order = ({ command, getCommand }) => {
  const { id } = useParams();
  const link = `/backoffice/client/order/edit/${id}`;
  console.log(command);
  if (command.slug !== id ) {
    getCommand(id);
  }

  let total = 0;

  const dataCommand = command.item.map((data) => {
    const price = parseInt(data.price);
    total += price;
    return (
      <div className="order__items__one" key={data.id}>
        {data.category.name}: <a href={data.url}>{data.name}</a> {data.price}€
      </div>
    );
  });

  return (
    <div className="order">
      <div>
        <h3>PC {command.id} pour {command.user.firstname} {command.user.lastname} allias {command.user.username}</h3>
        <div className="order__items">{dataCommand}</div>
        total: {total} €
        <Link to={link}>Modifier</Link>
      </div>
    </div>
  );
};

export default Order;
