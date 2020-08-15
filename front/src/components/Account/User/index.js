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
import Pc from 'src/containers/Account/User/Pc.js';
import './styles.scss';
import { activateLoad } from 'src/actions/user';
import EditProfile from 'src/containers/Account/User/EditProfile';
import ChangePassword from 'src/containers/Account/User/ChangePassword';
import Loader from 'src/components/Utils/Loader';
import { FaEnvelope, FaScroll, FaRobot } from 'react-icons/fa';
import Progress from 'src/components/Account/User/Progress';

const User = ({
  isLogged, isLoading, username, level, email, role, firstname, lastname
}) => {
  if (localStorage.getItem('token')) {
    activateLoad();
  }

  return (
    <Container fluid>
      {isLoading && localStorage.getItem('token') && (
        <Loader />
      )}

      {isLoading === false && !localStorage.getItem('token') && role !== 'ROLE_USER' && (
        <Redirect to={{ pathname: '/login' }} />
      )}

      {isLogged === true && isLoading === false && role === 'ROLE_USER' ? (
        <div className="profile">
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
                  <a> {firstname} {lastname}</a>
                  <Link to="/user">{username}</Link>
                  <a>level {level}</a>
                  <a>{email}</a>
                </div>
                <div className="user__nav__content__profilelinks">
                  <Link to="/user/commands" className="user__nav__content__profilelinks__icon"><FaScroll fontSize="40" /></Link>
                  <Link to="/user/message" className="user__nav__content__profilelinks__icon"><FaEnvelope fontSize="40" /></Link>
                  <Link to="/user/pc" className="user__nav__content__profilelinks__icon"><FaRobot fontSize="40" /></Link>
                </div>
                <div className="user__nav__content__links">
                  <Link to="/user/edit-info">Editer mes infos</Link>
                  <Link to="/user/change-password">Changer de mot de passe</Link>
                  <a href="#">Se deconnecter</a>
                </div>
              </div>
            </div>
            <div className="user__body container">
              <Switch>
                <Route exact path="/user">
                  <Progress level={level} />
                </Route>
                <Route path="/user/pc">
                  <Pc />
                </Route>
                <Route path="/user/edit-info">
                  <EditProfile />
                </Route>
                <Route path="/user/change-password">
                  <ChangePassword />
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
      ) : (<Redirect to={{ pathname: '/login' }} />)}
    </Container>
  );
};

User.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default User;
