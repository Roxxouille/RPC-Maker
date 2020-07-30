import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './styles.scss';
import { Navbar, Nav } from 'react-bootstrap';
import Home from '../Home';
import User from '../../containers/User';
import Contact from './../Contact';
import Survey from './../Survey';
import Login from '../../containers/User/Login';
import Proptypes from 'prop-types';

const Header = ({ isLogged, logout }) => {

  const handleClick = () => {
    logout();
  };

  console.log(isLogged);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="topbar">
        <div className="container">
          <Navbar.Brand href="/">RPC Maker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="menu">
              <Link className="nav-link menu__link" to="/">
                Accueil
              </Link>
              <Link to="/survey" className="nav-link menu__link">
                Devis
              </Link>
              <Link to="/team" className="nav-link menu__link">
                Team
              </Link>
              <Link to="/contact" className="nav-link menu__link">
                Contact
              </Link>
              <Link to="/user" className="nav-link menu__link">
                { isLogged === true ? (
                  <p onClick={handleClick}>Se déconnecter </p>
                ) : (
                  <p>Connexion</p>
                )}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/survey'>
          <Survey />
        </Route>
        <Route path="/team">
          Team
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

Header.propTypes = {
  isLogged: Proptypes.bool.isRequired,
  logout: Proptypes.func.isRequired,
};

export default Header;
