import React, {useEffect} from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import { activateLoad } from '../../actions/user';

const User = ({ isLogged, isLoading }) => {
  let load = isLoading;
  if (localStorage.getItem('token')) {
    activateLoad();
  }
  console.log(isLoading);

  return (
    <div className="container">

      {isLoading && localStorage.getItem('token') && (
        <p>ça charge gros</p>
      )}

      {isLoading === false && isLogged === false && !localStorage.getItem('token') && (
        <Redirect to={{ pathname: '/login' }} />
      )}

      {isLogged === true && isLoading === false && (
        <div className="user">
          <div className="user__nav">
            <span>AVATAR</span>
            <Link to="/user/pc">Mon PC</Link>
            <Link to="/user/infos">mes informations</Link>
            <Link to="/user/message">Messagerie</Link>
          </div>
          <div className="user__body">
            <Switch>
              <Route exact path="/user">
                Bienvenue dans votre espace membre
              </Route>
              <Route path="/user/pc">
                Votre pc
              </Route>
              <Route path="/user/infos">
                vos infos
              </Route>
              <Route path="/user/message">
                Vos messages
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
};

User.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default User;
