import React, { Component } from 'react';
import {
    Container,
    Jumbotron,
    Image,
    Button,
    Accordion,
    Card,
    Table,
    Col,
    Row,
    Form,
    Group,
    InputGroup,
    FormControl,
} from 'react-bootstrap';
import './styles.scss';
import { FaDownload } from 'react-icons/fa';

const Pc = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card id="center">
                    <Accordion.Toggle as={Card.Header} eventKey="0" id="center">
                        "nom du pc"
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Container >
                                <Row >
                                    <Col sm={2} > <Image src="https://picsum.photos/240" rounded fluid /></Col>
                                    <Col sm={10}>
                                        <Container>
                                            <Row>
                                                <Col sm={3}>
                                                    <h6>Carte graphique</h6>
                                                    <p>RTX 2080</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <h6>Carte graphique</h6>
                                                    <p>RTX 2080</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <h6>Carte graphique</h6>
                                                    <p>RTX 2080</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <h6>Carte graphique</h6>
                                                    <p>RTX 2080</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <h6>Carte graphique</h6>
                                                    <p>RTX 2080</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <h6>Carte graphique</h6>
                                                    <p>RTX 2080</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <h6>Carte graphique</h6>
                                                    <p>RTX 2080</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <h6>Carte graphique</h6>
                                                    <p>RTX 2080</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <h6>Carte graphique</h6>
                                                    <p>RTX 2080</p>
                                                </Col>
                                            </Row>
                                        </Container>
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