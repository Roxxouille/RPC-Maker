import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import { activateLoad } from '../../actions/user';
import {
  Container,
  Jumbotron,
  Image,
  Tabs,
  Tab,
} from 'react-bootstrap';

const User = ({ isLogged, isLoading }) => {
  let load = isLoading;
  if (localStorage.getItem('token')) {
    console.log('ça rentre');
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
            <Image src="https://picsum.photos/240" roundedCircle fluid />
            <Link to="/user/pc">"username"</Link>
            <a>"Level"</a>
            <a>"firstname" "lastname"</a>
            <a>"adress"</a>
            <a href="#">Editer mon profil</a>
            <a href="#">Changer de mot de passe</a><a href="#">Se deconnecter</a>
            {/* <Link to="/user/infos">mes informations</Link>
            <Link to="/user/message">Messagerie</Link> */}
          </div>
          <div className="user__body">

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="PC">

              </Tab>
              <Tab eventKey="profile" title="commandes">

              </Tab>
              <Tab eventKey="contact" title="messagerie">

              </Tab>
            </Tabs>
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
    </Container>
  );
};

User.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default User;
