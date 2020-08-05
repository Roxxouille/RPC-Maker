import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Clients = ({ clients }) => {
  console.log('client:', clients);

  const dataClients = clients.map((client) => {
    return (
      <div className='clients__row' key={client.id}>
        <div className='clients__row__cell'>{client.lastname}</div>
        <div className='clients__row__cell'>{client.firstname}</div>
        <div className='clients__row__cell'>{client.username}</div>
        <div className='clients__row__cell'>{client.commands[0].id}</div>
        <div className='clients__row__cell'>{clients.createdAt}</div>
        <div className='clients__row__cell'><Link to='/backoffice/client/order/21'>Voir</Link></div>
        <div className='clients__row__cell'>lien messagerie</div>
        <div className='clients__row__cell'>liens infos sur client</div>
      </div>
    );
  });

  return (
    <div className='clients'>
      <h3>Mes clients</h3>
      <div className='clients__row'>
        <div className='clients__row__cell'>Nom</div>
        <div className='clients__row__cell'>Prénom</div>
        <div className='clients__row__cell'>Pseudo</div>
        <div className='clients__row__cell'>n° PC</div>
        <div className='clients__row__cell'>Date de commencement</div>
        <div className='clients__row__cell'>PC</div>
        <div className='clients__row__cell'>Contact</div>
        <div className='clients__row__cell'>informations</div>
      </div>
      {dataClients}
    </div>
  );
};

export default Clients;
