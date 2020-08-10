import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  Jumbotron,
  Image,
  Button,
} from 'react-bootstrap';
import Commands from 'src/containers/Account/User/Commands';
import Message from 'src/containers/Account/User/Message';
import Pc from './Pc.js';
import './styles.scss';
import { activateLoad } from 'src/actions/user';
import EditProfile from 'src/containers/Account/User/EditProfile';
import Loader from 'src/components/Utils/Loader';

const User = ({
  isLogged, isLoading, username, level, firstname, email,
}) => {
  if (localStorage.getItem('token')) {
    activateLoad();
  }

  return (
    <Container fluid>
      {isLoading && localStorage.getItem('token') && (
        <Loader />
      )}

      {isLoading === false && isLogged === false && !localStorage.getItem('token') && (
        <Redirect to={{ pathname: '/login' }} />
      )}

      {isLogged === true && isLoading === false && (
        <div>
          <Jumbotron fluid className="jumbotron">
            <Container className="jumbotron__containr">
              <h1>Bienvenu {username}</h1>
              <p>
                Dans cette section vous pouvez gerer tout ce qui vous concerne et aussi contacter nos brillant monteur!
              </p>
              <div className="jumbotron__containr__links">
                <Link to="/user/commands" className="jumbotron__containr__links__icon"><FaScroll fontSize="40" /></Link>
                <Link to="/user/message" className="jumbotron__containr__links__icon"><FaEnvelope fontSize="40" /></Link>
                <Link to="/user/pc" className="jumbotron__containr__links__icon"><FaRobot fontSize="40" /></Link>
              </div>
            </Container>
          </Jumbotron>
          <div className="user">
            <div className="user__nav">
              <Image className="user__nav__avatar" src="https://picsum.photos/240" rounded />
              <div className="user__nav__content">
                <div className="user__nav__content__infos">
                  <Link to="/user">{username}</Link>
                  <a>level {level}</a>
                  <a>{email}</a>
                  <a>"firstname" "lastname"</a>
                  <a>"adress"</a>
                </div>

                <div className="user__nav__content__links">
                  <Link to="/user/edit-info">Editer mes infos</Link>
                  <a href="#">Changer de mot de passe</a>
                  <a href="#">Se deconnecter</a>
                </div>
              </div>
            </div>
            <div className="user__body container">
              <Switch>
                <Route exact path="/user">
                  Bienvenue dans votre espace membre
                </Route>
                <Route path="/user/pc">
                  <Pc />
                </Route>
                <Route path="/user/edit-info">
                  <EditProfile />
                </Route>
                <Route path="/user/commands">
                  <Commands />
                </Route>
                <Route path="/user/message">
                  <Message />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

User.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default User;
