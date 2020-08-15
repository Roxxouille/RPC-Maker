import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const Header = ({ isLogged, logout, username, role }) => {
  const handleClick = () => {
    if (isLogged === true) {
      logout();
    }
  };
  const textlogging = isLogged === false ? 'Se connecter' : 'Se déconnecter';

  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header__navbar">

        <div className="header__navbar__navbrand"><Navbar.Brand href="/" >RPC Maker</Navbar.Brand></div>

        <span className="header__navbar__vr" ></span>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header__navbar__burger" />
        <Navbar.Collapse id="responsive-navbar-nav" bg="dark">
          <Nav className="header__navbar__menu">
            <Link className="nav-link header__navbar__menu__link" to="/">
              Accueil
              </Link>
            <Link to="/team" className="nav-link header__navbar__menu__link">
              Team
              </Link>
            <Link to="/contact" className="nav-link header__navbar__menu__link">
              Contact
              </Link>
            <Link to="/devis" className="nav-link header__navbar__menu__link">
              Devis
            </Link>
          </Nav>
        </Navbar.Collapse>

        <NavDropdown title={username} alignRight id="collasible-nav-dropdown">
          <Link onClick={handleClick} to="/user" className="dropdown-item">
            {textlogging}
          </Link>
          {isLogged === true && role === "ROLE_USER" && (
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
