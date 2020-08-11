import React, { Component } from 'react';
import {
  Accordion,
  Card,
  Table,
  Col,
  Row
} from 'react-bootstrap';
import './styles.scss';
import { FaDownload } from 'react-icons/fa';

const Command = ({ commands }) => {
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
          <td className="download"><FaDownload /></td>
          <td>{oneItem.category.name}</td>
          <td>{oneItem.name}</td>
          <td>{oneItem.price}</td>
        </tr>
      );
    });
    return (
      <Card key={key} className="command">
        <Accordion.Toggle as={Card.Header} eventKey="0" className="command__header">
          "nom de la commande" :
          <FaDownload />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0" className="command__content">
          <Card.Body>
            <Table striped bordered hover size="sm" className="command__content__table">
              <thead className="command__content__table__header">
                <tr>
                  <th className="download" >Facture</th>
                  <th>Composant</th>
                  <th>Model</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody className="command__content__table__body">
                {items}
              </tbody>
              <tfoot className="command__content__table__footer">
                <tr>
                  <th>TOTAL</th>
                  <th></th>
                  <th></th>
                  <th>{total}€</th>
                </tr>
              </tfoot>
            </Table>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  return (
    <div className="commands">
      <Row className="commands__title">
        <Col sm={1} className="commands__title__hr"><hr /></Col>
        <Col sm={3} className="commands__title__text"> <h2>Mes Factures</h2> </Col>
        <Col className="commands__title__hr"><hr /></Col>
      </Row>
      <Accordion defaultActiveKey="0" className="commands__accordion">
        {dataCommands}
      </Accordion>
    </div>
  )
};

export default Command;
