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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum accusamus amet ipsum numquam! Deleniti, libero. Ipsum qui aperiam laboriosam laudantium totam unde voluptate, ut perspiciatis quis delectus quibusdam ex consequatur labore sunt debitis nemo doloribus.
        </Row>
      </Col>
      <span className="presHome__body__vr"></span>
      <Col>
        <Row className="presHome__body__header">
          <Col> <h2><FaTools /></h2></Col>
          <Col className="presHome__body__header__title"><h6>PC montés</h6></Col>
          <Col><h2>{build}</h2></Col>
        </Row>
        <Row className="presHome__body__content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo temporibus ut unde consequuntur facilis esse odio delectus, repellat inventore accusamus deserunt est nobis rem accusantium at nisi ea dolore distinctio, aspernatur illo earum aut quis! Ut maxime porro omnis quia, quo repellendus facilis, minima tenetur voluptate, nostrum adipisci expedita ex!        </Row>
      </Col>
    </Row>
  </div>
);

export default PresHome;
