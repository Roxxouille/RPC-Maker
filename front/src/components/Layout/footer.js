import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Image className="footer__img" src="https://picsum.photos/250/150" />
      </div>

      <div className="footer__plan">
        <div className="footer__plan__header">
          <h3>Plan du site</h3>
        </div>

        <div className="footer__plan__content">
          <Link to="/">Accueil</Link>
          <Link to="/devis" >Devis</Link>
          <Link to="/team" >Team</Link>
          <Link to="/contact" >Contact</Link>
        </div>
      </div>

      <div className="footer__legal">
        <div className="footer__legal__header">
          <h3>Informations légales</h3>
        </div>

        <div className="footer__legal__content">
          <Link to="/legal">Mentions légales</Link>
          <Link to="/cookies">Utilisation des cookies</Link>
          <Link to="cgu">CGUs</Link>
          <Link to="condifential">Confidentialité</Link>
        </div>
      </div>

      <div>
        <p>404 rue de l'internet mondiale, 80800, localhost</p>
        <p>Tel : +33 1 10 01 01 00</p>

        <p>Lundi à jeudi : 9h - 3h (du matin)</p>
      </div>
    </div>
  );
};

export default Footer;
