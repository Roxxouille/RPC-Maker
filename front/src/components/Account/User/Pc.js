import React, { Component } from 'react';
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
import { FaDownload, FaChevronDown, FaPencilRuler, FaSuitcase } from 'react-icons/fa';

const Pc = () => {
    return (
        <div className="pc">
            <Row className="mb-50">
                <Col sm={1} className="m-auto"><hr /></Col>
                <Col sm={4} > <h2>Mon personnage</h2> </Col>
                <Col className="m-auto"><hr /></Col>
            </Row>
            <Accordion defaultActiveKey="0" className="pc__accordion" >
                <Card id="center" className="pc__accordion__card" border="light">
                    <Accordion.Toggle as={Card.Header} eventKey="0" id="center" className="pc__accordion__card__header" style={{ backgroundColor: 'white', border: 'none' }}>
                        <div className="pc__accordion__card__header__content">
                            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                <Image src="https://picsum.photos/500" rounded className="pc__accordion__card__header__content__avatar" />
                                <h4 className="pc__accordion__card__header__content__name">Barbator</h4>
                            </div>
                            <FaChevronDown style={{ color: '#dddddd' }} className="pc__accordion__card__header__content__chevron" />
                            <a href="#">Choisir ce personnage</a>
                        </div>

                        <hr />
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
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaPencilRuler className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">Carte Graphique</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaPencilRuler className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">Processeur</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaPencilRuler className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">carte mere</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaPencilRuler className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">Ram</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaPencilRuler className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">boitier</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaPencilRuler className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">alimentation</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaPencilRuler className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">HDD</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaPencilRuler className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">SSD</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaPencilRuler className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">ventirad</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaPencilRuler className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">carte wifi</p>
                                        </div>
                                    </Col>
                                </Row>
                                <hr style={{ width: '70%' }} />
                                <Row className="pc__accordion__card__body__category">
                                    <Col sm={3} className="pc__accordion__card__body__category__title">
                                        <FaSuitcase />
                                        <h4>Inventaire</h4>
                                    </Col>
                                    <Col sm={9} className="pc__accordion__card__body__category__list">
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaSuitcase className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">Ecran</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaSuitcase className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">souris</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaSuitcase className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">tapis</p>
                                        </div>
                                        <div className="pc__accordion__card__body__category__list__item">
                                            <FaSuitcase className="pc__accordion__card__body__category__list__item__icon" />
                                            <h5 className="pc__accordion__card__body__category__list__item__model">"model de l'item"</h5>
                                            <p className="pc__accordion__card__body__category__list__item__category">clavier</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
};

export default Pc;
