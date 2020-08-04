import React, { Component } from 'react';
import {
    Container,
    Button,
    Col,
    Form,
} from 'react-bootstrap';
import './styles.scss';
import { FaDownload } from 'react-icons/fa';

const Info = () => {
    return (
        <Container>
            <div>
                <h1>Mes Informations :</h1>
            </div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstname">
                        <Form.Label>Prenom</Form.Label>
                        <Form.Control placeholder="firstname" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control placeholder="lastname" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="adress" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="adress precision" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="city" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control placeholder="zipcode" />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Submit
                  </Button>
            </Form>
        </Container>
    )
};

export default Info;