import React, { Component } from 'react';
import {
    Accordion,
    Card,
    Table,
} from 'react-bootstrap';
import './styles.scss';
import { FaDownload } from 'react-icons/fa';

const Command = () => {
    return (
        <div>
            <div>
                <h1>Mes Commandes :</h1>
            </div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" id="center">
                        "nom de la commande"
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th id="center">Facture</th>
                                        <th>Composant</th>
                                        <th>Model</th>
                                        <th>Prix</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td id="center"><FaDownload /></td>
                                        <td>Carte graphique</td>
                                        <td>RTX 2080 Ti</td>
                                        <td>350 euros</td>
                                    </tr>
                                    <tr>
                                        <td id="center"><FaDownload /></td>
                                        <td>Processeur</td>
                                        <td>intel i7 9700</td>
                                        <td>450 euros</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">TOTAL</td>
                                        <td>800 euros</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
};

export default Command;