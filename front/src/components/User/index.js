import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Command from './Command.js';
import Message from './Message.js';
import Info from './Info.js';
import Pc from './Pc.js';
import './styles.scss';
import { activateLoad } from '../../actions/user';
import {
  Container,
  Jumbotron,
  Image,
  Button,
} from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const User = ({ isLogged, isLoading }) => {
  let load = isLoading;
  if (localStorage.getItem('token')) {
    activateLoad();
  }
  console.log(isLoading);

  return (

    <Container fluid>

      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1>Bienvenu "username"</h1>
          <p>
            Dans cette section vous pouvez gerer tout ce qui vous concerne et aussi contacter nos brillant monteur!
          </p>
          <Button variant="light"><Link to="/user/commands">mes commandes</Link></Button>{' '}
          <Button variant="light"> <Link to="/user/message">Messagerie</Link></Button>{' '}
          <Button variant="light"><Link to="/user/pc">Mon PC</Link></Button>{' '}
        </Container>
      </Jumbotron>


      {isLoading && localStorage.getItem('token') && (
        <p>ça charge gros</p>
      )}

      {isLoading === false && isLogged === false && !localStorage.getItem('token') && (
        <Redirect to={{ pathname: '/login' }} />
      )}

      {isLogged === true && isLoading === false && (
        <div className="user">


          <div className="user__nav">
            <Image src="https://picsum.photos/240" rounded fluid />
            <Link to="/user/pc">"username"</Link>
            <a>"Level"</a>
            <a>"firstname" "lastname"</a>
            <a>"adress"</a>
            <Link to="/user/edit-info">Editer mes infos</Link>
            <a href="#">Changer de mot de passe</a><a href="#">Se deconnecter</a>
          </div>
          <div className="user__body">

            <Switch>
              <Route path="/user/edit-info">
                <Info />

              </Route>


              <Route exact path="/user">
                Bienvenue dans votre espace membre
              </Route>


              <Route path="/user/pc">
                <Pc />
              </Route>

              <Route path="/user/commands">
                <Command />
              </Route>


              <Route path="/user/message">
                <Message />
              </Route>


            </Switch>
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
