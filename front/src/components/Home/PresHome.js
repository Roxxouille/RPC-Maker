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
          Nos monteurs sont aussi des cherheurs! et oui apres chaque inscription un guide vous est attibue et definis avec vous vos besoin pour trouver les composants les plus adapte pour vous! <br />
          Apres avoir definit vos objectifs avec votre guide attitre, il utilisera toutes ses connaissances et son experience pour trouver les meilleurs prix et le meilleur equilibre entre tout ce qui existe sur internet aujourd'hui. <br />
          Et c'es ca que represente ce nombre, les personnes qui a raison nous on fait confiance pour faire un travail long et ereintant mais essentiel a toute personne qui veut un ordinateur de qualite pour un prix juste!
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
          Et nos chercheurs sont aussi des monteurs! Passione et qui ont l'envi de faire un travail propre, professionel et avec l'amour des choses bien faite. <br />
          Que vous n'y connaissiez rien, que vous ne soyez pas sur ou que vous n'ayez juste pas l'envie de mettre les mains dans le camboui, faites comme toutes ces personnes avant vous,  n'hesitez plus et laissez les passionne faire ce qui les passionnes !
        </Row>
      </Col>
    </Row>
  </div>
);

export default PresHome;
