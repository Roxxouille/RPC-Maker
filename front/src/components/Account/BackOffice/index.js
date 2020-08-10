import React, { useEffect } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'; 
import './styles.scss';
import { Image } from 'react-bootstrap';
import Order from 'src/containers/Account/BackOffice/Order';
import Clients from './Clients';
import Loader from 'src/components/Utils/Loader';
import Conversations from 'src/containers/Account/BackOffice/Conversations';

const BackOffice = ({ getClients, clients, user, activateLoad, backLoading, }) => {
    useEffect(() => {
    if (clients.length === 0 && user.isLogged === true) {
      getClients();
    }
  });
  return (
    <div className="">
      { user.isLoading === true && (
        <Loader />
      )}

      { user.isLoading === false && user.role !== 'ROLE_BUILDER' && (
        <Redirect to={{ pathname: '/user' }} />
      )}

      { user.isLoading === false && user.isLogged === true && user.role === 'ROLE_BUILDER' && (
        <div className="user">
          <div className="user__nav">
            <Image src="https://picsum.photos/240" rounded fluid />
            <Link to="/backoffice/clients">Mes clients</Link>
            <Link to="/backoffice/message">Mes conversations</Link>

            <a href="#">Changer de mot de passe</a><a href="#">Se deconnecter</a>
          </div>
          <div className="user__body">
            <Switch>
              <Route exact path="/backoffice">
                backoffice
              </Route>
              <Route path="/backoffice/clients">
                <Clients clients={clients} isLoading={backLoading} />
              </Route>
              <Route path="/backoffice/message">
                <Conversations />
              </Route>
              <Route path="/backoffice/client/order/:id">
                <Order />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackOffice;
