import React, { Component } from 'react';
import {
  Accordion,
  Card,
  Table,
} from 'react-bootstrap';
import './styles.scss';
import { FaDownload } from 'react-icons/fa';

const Command = ({commands}) => {
  console.log('composant:', commands);
  let key = 0;
  const dataCommands = commands.map((command) => {
    let total = 0;
    key += 1;
    console.log(command);
    const items = command.item.map((oneItem) => {
      const price = parseInt(oneItem.price);
      total += price;
      return (
        <tr key={oneItem.name}>
          <td id="center"><FaDownload /></td>
          <td>{oneItem.category.name}</td>
          <td>{oneItem.name}</td>
          <td>{oneItem.price}</td>
        </tr>
      );
    });
    return (
      <Card key={key}>
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
                {items}
              </tbody>
            </Table>
            total: {total}€
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  return (
    <div>
      <div>
        <h1>Mes Commandes : </h1>
      </div>
      <Accordion defaultActiveKey="0">
        {dataCommands}
      </Accordion>
    </div>
  )
};

export default Command;
