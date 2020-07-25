import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles.scss';
import Home from './../Home';
import Contact from './../Contact';
import { Navbar, Nav } from 'react-bootstrap/';

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
          </div>
      </Navbar>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/survey'>
          Devis
        </Route>
        <Route path='/team'>
          Team
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/login'>
          Mon compte
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
