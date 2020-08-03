import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import { activateLoad } from '../../actions/user';
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
import { FaDownload } from 'react-icons/fa';

const User = ({ isLogged, isLoading }) => {
  let load = isLoading;
  if (localStorage.getItem('token')) {
    activateLoad();
  }
  console.log(isLoading);

  return (

    <Container fluid>

      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1>Bienvenu "username"</h1>
          <p>
            Dans cette section vous pouvez gerer tout ce qui vous concerne et aussi contacter nos brillant monteur!
          </p>
          <Button variant="light"><Link to="/user/commands">mes commandes</Link></Button>{' '}
          <Button variant="light"> <Link to="/user/message">Messagerie</Link></Button>{' '}
          <Button variant="light"><Link to="/user/pc">Mon PC</Link></Button>{' '}
        </Container>
      </Jumbotron>


      {isLoading && localStorage.getItem('token') && (
        <p>ça charge gros</p>
      )}

      {isLoading === false && isLogged === false && !localStorage.getItem('token') && (
        <Redirect to={{ pathname: '/login' }} />
      )}

      {isLogged === true && isLoading === false && (
        <div className="user">


          <div className="user__nav">
            <Image src="https://picsum.photos/240" rounded fluid />
            <Link to="/user/pc">"username"</Link>
            <a>"Level"</a>
            <a>"firstname" "lastname"</a>
            <a>"adress"</a>
            <Link to="/user/edit-info">Editer mes infos</Link>
            <a href="#">Changer de mot de passe</a><a href="#">Se deconnecter</a>
          </div>
          <div className="user__body">

            <Switch>
              <Route path="/user/edit-info">
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

              </Route>


              <Route exact path="/user">
                Bienvenue dans votre espace membre
              </Route>


              <Route path="/user/pc">
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
              </Route>
              <Route path="/user/commands">
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
              </Route>


              <Route path="/user/message">

                <Container classname="user__body__messages">
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
              </Route>


            </Switch>
          </div>
        </div>
      )}
    </Container>
  );
};

User.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default User;
