import React, { Component } from 'react';
import {
    Container,
    Image,
    Button,
    Col,
    Row,
    InputGroup,
    FormControl,
} from 'react-bootstrap';
import './styles.scss';

const Message = () => {
    return (
        <Container className="user__body__messages">
            <div id="center">
                <h1>Vous etes en conversation avec "nom-monteur"</h1>
            </div>
            <Row>
                <Col sm={2}>
                    <Image src="https://picsum.photos/240" rounded fluid id="chat-avatar" />
                </Col>
                <Col sm={10}>
                    <p>
                        "nom-monteur":
            <br />
            Bonjour en quoi puis je vous aider?
            <br />
            le 12/04/2020 a 17h55
           </p>
                </Col>
            </Row>
            <Row id="just-center" >
                <Col sm={{ span: 8, offset: 2 }}>
                    <p>
                        "nom-monteur":
            <br />
            Bonjour en quoi puis je vous aider?
            <br />
            le 12/04/2020 a 17h55
           </p>
                </Col>
                <Col sm={2}>
                    <Image src="https://picsum.photos/240" rounded fluid id="chat-avatar" />
                </Col>
            </Row>
            <Row>
                <Col sm={10}>
                    <InputGroup>

                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                </Col>
                <Col sm={2}>
                    <Button variant="secondary">Envoyer</Button>{' '}
                </Col>
            </Row>
        </Container>
    )
};

export default Message;
