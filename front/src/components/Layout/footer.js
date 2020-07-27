import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__plan">
       <Router>
          <Row>
            <Col><Image className="img-footer" src="https://picsum.photos/300/150" /></Col>
            <Col xs={6}>
              <div className="plan-site">
                <h3>Plan du site</h3>
                <Link className="footer_plan__link" to="/">
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
              </div>
            </Col>
            <Col>
              <p>1 Rue de la patatate, immeuble 3, Rennes</p>
              <p>Tel : 06 66 66 66 66</p>
              <ul>
                <li>Lundi a jeudi : 9h 18h</li>
                <li>Vendre: 9h - 17h</li>
                <li>Samedi: 10h - 17h</li>
                <li>Dimanche 10h - 17h</li>
              </ul>
            </Col>
          </Row>
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
