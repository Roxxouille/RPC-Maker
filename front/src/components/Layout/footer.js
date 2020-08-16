import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Row>
          <Col><Image className="img-footer" src="https://picsum.photos/250/150" /></Col>
          <Col xs={6} className="footer__pages">
            <div className="footer__pages__plan-site">
              <h3>Plan du site</h3>
              <Link className="link" to="/">
                Accueil
              </Link>
              <Link to="/devis" className="link">
                Devis
              </Link>
              <Link to="/team" className="link">
                Team
              </Link>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </div>

            <div className="footer__pages__legal-data">
              <h3>Informations légales</h3>
              <Link className="link" to="/legal">
                Mentions légales
              </Link>
              <Link className="link" to="/cookies">
                Utilisation des cookies
              </Link>
              <Link className="link" to="cgu">
                CGUs
              </Link>
              <Link className="link" to="condifential">
                Confidentialité
              </Link>
            </div>
          </Col>
          <Col>
            <p>1 Rue de la patatate, immeuble 3, Rennes</p>
            <p>Tel : 06 66 66 66 66</p>

            <p>Lundi à jeudi : 9h 18h
            <br />
            Vendredi: 9h - 17h
            <br />
            Spmedi: 10h - 17h
            <br />
            Dimpnche 10h - 17h</p>

          </Col>
        </Row>
        <Switch>
          <Route path="/legal" />
          <Route path="/team" />
          <Route path="/contact" />
        </Switch>
      </div>
    </div>
  );
};

export default Footer;
