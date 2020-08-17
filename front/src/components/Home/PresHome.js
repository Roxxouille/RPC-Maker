import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaScroll, FaTools } from 'react-icons/fa';

const PresHome = ({ build, quote }) => (
  <div className="presHome">
    <Row className="presHome__title">
      <Col className="presHome__title__hr"><hr /></Col>
      <Col> <h2>Quelques chiffres</h2> </Col>
      <Col className="presHome__title__hr"><hr /></Col>
    </Row>
    <Row className="presHome__body">
      <Col>
        <Row className="presHome__body__header">
          <Col><h2>{quote}</h2></Col>
          <Col className="presHome__body__header__title"><h6>Devis effectués</h6></Col>
          <Col><h2><FaScroll /></h2></Col>
        </Row>
        <Row className="presHome__body__content">
          Nos monteurs sont aussi des chercheurs ! Après chaque inscription un guide vous est attibué et il définit avec vous vos besoins pour trouver les composants les plus adaptés pour vous! <br />
          Apres avoir défini vos objectifs avec votre guide attitré, il utilisera toutes ses connaissances et son expérience pour trouver le meilleur rapport qualité-prix sur internet aujourd'hui. <br />
          Le nombre affiché représente les personnes qui nous ont choisies pour leur trouver un ordinateur de qualité pour un prix juste. Nous les remercions pour leur confiance.
        </Row>
      </Col>
      <hr />
      <span className="presHome__body__vr"></span>
      <Col>
        <Row className="presHome__body__header">
          <Col> <h2><FaTools /></h2></Col>
          <Col className="presHome__body__header__title"><h6>PC montés</h6></Col>
          <Col><h2>{build}</h2></Col>
        </Row>
        <Row className="presHome__body__content">
          Nos chercheurs sont aussi des monteurs professionnels, passionnés et consciencieux/rigoureux <br />
          Vous n’y connaissez rien ? Vous n’êtes pas sûr de vous ? Vous n’avez pas le temps de vous en occuper ? N’hésitez plus, faites confiance à notre équipe de monteurs passionnés
        </Row>
      </Col>
    </Row>
  </div>
);

export default PresHome;
