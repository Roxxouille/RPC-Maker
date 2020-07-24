import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__plan">
        <h3>Plan du site</h3>
        <Router>
          <Link className="" to="/">
            Accueil
          </Link>
          <Link to="/survey" className="footer__plan__link">
            Devis
          </Link>
          <Link to="/team" className="footer__plan__link">
            Team
          </Link>
          <Link to="/contact" className="footer__plan__link">
            Contact
          </Link>
          <Switch>
            <Route path="/survey" />
            <Route path="/team" />
            <Route path="/contact" />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Footer;
