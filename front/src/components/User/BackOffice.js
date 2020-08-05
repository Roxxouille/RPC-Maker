import React, { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom'; 
import './styles.scss';
import { Image } from 'react-bootstrap';
import Orders from './Orders';
import Clients from './Clients';
import {
  Redirect,
} from 'react-router-dom';

const BackOffice = ({ getClients, clients, user }) => {
  useEffect(() => {
    if (clients.length === 0 && user.isLogged === true) {
      console.log('useefectbackoffice');
      getClients();
    }
  });
  return (
    <div className="user">
      <div className="user__nav">
        <Image src="https://picsum.photos/240" rounded fluid />
        <Link to="/backoffice/commands">Mes clients</Link>
        <Link to="/backoffice/message">Mes conversations</Link>

        <a href="#">Changer de mot de passe</a><a href="#">Se deconnecter</a>
      </div>
      <div className="user__body">

        <Switch>
          <Route exact path="/backoffice">
            backoffice
          </Route>
          <Route path="/backoffice/commands">
            <Clients clients={clients} />
          </Route>
          <Route path="/backoffice/message">
            Vos conversations
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default BackOffice;
