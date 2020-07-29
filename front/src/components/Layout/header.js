import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './styles.scss';
<<<<<<< HEAD
import { Navbar, Nav } from 'react-bootstrap';
import Home from '../Home';
import Login from '../../containers/User/Login';
import User from '../../containers/User';
=======
import Home from './../Home';
import Contact from './../Contact';
import Survey from './../Survey';

import { Navbar, Nav } from 'react-bootstrap/';
>>>>>>> Survey

const Header = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" className="topbar">
        <div className="container">
          <Link to="/" className="menu__link navbar-brand">
            RPC Maker
          </Link>
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
            <Link to="/login" className="nav-link menu__link">
              Connexion
            </Link>
          </Nav>
<<<<<<< HEAD
        </div>
=======
          </div>
>>>>>>> Survey
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
<<<<<<< HEAD
        <Route path="/survey">
          Devis
=======
        <Route path='/survey'>
          <Survey />
>>>>>>> Survey
        </Route>
        <Route path="/team">
          Team
        </Route>
<<<<<<< HEAD
        <Route path="/contact">
          Contact
=======
        <Route path='/contact'>
          <Contact />
>>>>>>> Survey
        </Route>
        <Route path="/login">
          <User />
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
