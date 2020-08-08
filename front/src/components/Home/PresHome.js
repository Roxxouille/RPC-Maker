import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaScroll, FaTools } from 'react-icons/fa';

const PresHome = ({ build, quote }) => (
  <div className="pres mb-50">
    <Row className="mb-50">
      <Col className="m-auto"><hr /></Col>
      <Col> <h2>Quelques chiffres</h2> </Col>
      <Col className="m-auto"><hr /></Col>
    </Row>
    <Row>
      <Col>
        <Row className="mb-25">
          <Col><h2>{quote}</h2></Col>
          <Col className="m-auto"><h6>Devis effectués</h6></Col>
          <Col><h2><FaScroll /></h2></Col>
        </Row>
        <Row>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum accusamus amet ipsum numquam! Deleniti, libero. Ipsum qui aperiam laboriosam laudantium totam unde voluptate, ut perspiciatis quis delectus quibusdam ex consequatur labore sunt debitis nemo doloribus.
        </Row>
      </Col>
      <span className="vr"></span>
      <Col>
        <Row className="mb-25">
          <Col> <h2><FaTools /></h2></Col>
          <Col className="m-auto"><h6>PC montés</h6></Col>
          <Col><h2>{build}</h2></Col>
        </Row>
        <Row>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo temporibus ut unde consequuntur facilis esse odio delectus, repellat inventore accusamus deserunt est nobis rem accusantium at nisi ea dolore distinctio, aspernatur illo earum aut quis! Ut maxime porro omnis quia, quo repellendus facilis, minima tenetur voluptate, nostrum adipisci expedita ex!        </Row>
      </Col>
    </Row>
  </div>
);

export default PresHome;
