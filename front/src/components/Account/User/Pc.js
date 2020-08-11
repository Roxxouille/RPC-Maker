import React from 'react';
import {
  Container,
  Image,
  Button,
  Accordion,
  Card,
  Col,
  Row,

} from 'react-bootstrap';
import './styles.scss';
import Item from './Item';
import { FaDownload, FaChevronDown, FaPencilRuler, FaSuitcase } from 'react-icons/fa';

const Pc = ({ commands }) => {
  console.log(commands);
  const items = commands[0].item;
  const dataEquipments = items.map((item) => {
    if (item.category.specs.class === 'component') {
      return (
        <Item key={item.id} item={item} />
      );
    }
  });

  const dataInventory = items.map((item) => {
    if (item.category.specs.class === 'device') {
      return (
        <Item key={item.id} item={item} />
      );
    }
  });



  return (
    <div className="pc">
      <Row className="pc__title">
        <Col sm={1} className="pc__title__hr"><hr /></Col>
        <Col sm={4} > <h2>Mon personnage</h2> </Col>
        <Col className="pc__title__hr"><hr /></Col>
      </Row>
      <Accordion defaultActiveKey="0" className="pc__accordion" >
        <Card className="pc__accordion__card" border="light">
          <Accordion.Toggle as={Card.Header} eventKey="0" className="pc__accordion__card__header">
            <div className="pc__accordion__card__header__content">
              <div className="pc__accordion__card__header__content__info">
                <Image src="https://picsum.photos/500" rounded className="pc__accordion__card__header__content__info__avatar" />
                <h4 className="pc__accordion__card__header__content__info__name">Barbator</h4>
              </div>
              <FaChevronDown className="pc__accordion__card__header__content__chevron" />
              <a href="#">Choisir ce personnage</a>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="pc__accordion__card__body">
              <Container >
                <Row className="pc__accordion__card__body__category">
                  <Col sm={3} className="pc__accordion__card__body__category__title">
                    <FaPencilRuler />
                    <h4>Equipement</h4>
                  </Col>
                  <Col sm={9} className="pc__accordion__card__body__category__list">
                    {dataEquipments}
                  </Col>
                </Row>
                <hr style={{ width: '70%' }} />
                <Row className="pc__accordion__card__body__category">
                  <Col sm={3} className="pc__accordion__card__body__category__title">
                    <FaSuitcase />
                    <h4>Inventaire</h4>
                  </Col>
                  <Col sm={9} className="pc__accordion__card__body__category__list">
                    {dataInventory}
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Pc;
