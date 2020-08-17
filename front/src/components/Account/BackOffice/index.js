import React, { useEffect } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './styles.scss';
import { Image, NavbarBrand } from 'react-bootstrap';
import Order from 'src/containers/Account/BackOffice/Order';
import Clients from './Clients';
import Loader from 'src/components/Utils/Loader';
import Conversations from 'src/containers/Account/BackOffice/Conversations';
import OrderEdit from 'src/containers/Account/BackOffice/OrderEdit';
import { FaComments, FaUser, FaUsers } from 'react-icons/fa';


const BackOffice = ({ getClients, clients, user, activateLoad, backLoading, }) => {
  useEffect(() => {
    if (clients.length === 0 && user.isLogged === true) {
      getClients();
    }
  }, []);
  return (
    <div className="">
      {user.isLoading === true && (
        <Loader />
      )}

      {user.isLoading === false && user.role !== 'ROLE_BUILDER' && (
        <Redirect to={{ pathname: '/user' }} />
      )}

      {user.isLoading === false && user.isLogged === true && user.role === 'ROLE_BUILDER' && (
        <div className="backoffice">
          <div className="backoffice__body">
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
              <Route path="/backoffice/client/order/edit/:id">
                <OrderEdit />
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
