import React from 'react';
import Proptypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './styles.scss';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Home from '../Home';
import User from '../../containers/User';
import Contact from '../../containers/Contact';
import Survey from '../Survey';
import Login from '../../containers/User/Login';
import BackOffice from '../../containers/BackOffice';
import NoMatch from './NoMatch';

const Header = ({ isLogged, logout, username }) => {
  const handleClick = () => {
    if (isLogged === true) {
      logout();
    }
  };
  const textlogging = isLogged === false ? 'Se connecter' : 'Se déconnecter';

  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="topbar">
        <Container fluid >

          <div className="logo"><Navbar.Brand href="/" >RPC Maker</Navbar.Brand></div>

          <span className="vr" ></span>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="burger" />
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
            </Nav>
          </Navbar.Collapse>

          <Nav >
            <NavDropdown title={username} id="collasible-nav-dropdown">
              <Link onClick={handleClick} to="/user" className="dropdown-item">
                {textlogging}
              </Link>
              {isLogged === true && (
                <>
                  <NavDropdown.Divider />
                  <Link to="/user/pc" className="dropdown-item">
                    Mon PC
                  </Link>
                  <Link to="/user/message" className="dropdown-item">
                    Messagerie
                  </Link>
                  <Link to="/user/infos" className="dropdown-item">
                    Mes informations
                  </Link>
                </>
              )}
              {isLogged === true && (
                <>
                  <NavDropdown.Divider />
                  <Link to="/user/pc" className="dropdown-item">
                    Mon PC
                  </Link>
                  <Link to="/user/message" className="dropdown-item">
                    Messagerie
                  </Link>
                  <Link to="/user/infos" className="dropdown-item">
                    Mes informations
                  </Link>
                </>
              )}
            </NavDropdown>
          </Nav>

        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey">
          <Survey />
        </Route>
        <Route path="/team">
          Team
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/backoffice">
          <BackOffice />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
};

Header.propTypes = {
  isLogged: Proptypes.bool.isRequired,
  logout: Proptypes.func.isRequired,
  username: Proptypes.string.isRequired,
};

export default Header;
