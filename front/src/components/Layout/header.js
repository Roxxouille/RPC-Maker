import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Home from '../Home';
import User from 'src/containers/Account/User';
import Contact from 'src/containers/Contact';
import Survey from '../Survey';
import Login from 'src/containers/Account/Login';
import BackOffice from 'src/containers/Account/BackOffice';
import NoMatch from './NoMatch';
import Subscription from 'src/containers/Account/Subscription';

const Header = ({ isLogged, logout, username, role }) => {
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

          <span className="vr-header" ></span>

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
              <Link to="/subscribe" className="nav-link menu__link">
                Subscribe
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
                  <h6>Espace utilisateur</h6>
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
              {isLogged === true && role === 'ROLE_BUILDER' && (
                <>
                  <NavDropdown.Divider />
                  <h6>Back office</h6>
                  <Link to="/backoffice/message" className="dropdown-item">
                    Messagerie
                  </Link>
                  <Link to="/backoffice/clients" className="dropdown-item">
                    Mes Clients
                  </Link>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

Header.propTypes = {
  isLogged: Proptypes.bool.isRequired,
  logout: Proptypes.func.isRequired,
  username: Proptypes.string.isRequired,
};

export default Header;
