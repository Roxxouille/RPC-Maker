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

const Progress = () => {
  return (
    <div id="timeline-content">
      <Row className="pc__title">
        <Col sm={1} className="pc__title__hr"><hr /></Col>
        <Col sm={4} > <h2>Ma Progression</h2> </Col>
        <Col className="pc__title__hr"><hr /></Col>
      </Row>
      <ul className="timeline">
        <li className="event" data-date="Level 1">
          <div className="content">
            <h3>Inscription</h3>
            <p>Bienvenue dans l'aventure et merci d'avoir rejoins notre monde!
            <br />
            Vous et vore personnageallez vivre des aventures merveilleuses ensembles.</p>
            Quete accomplis le : date d'Inscription
            recompense +1 niveau!
          </div>
          <div>
            Quete : inscription
          </div>
        </li>
        <li className="event" data-date="level 2">
          <h3>Envoi du formulaire</h3>
          <p>La premiere etape de la creation de votre personnage fut un succes!
          <br />
          Vous n'avez plus qu'a attendrela reponse de votre guide qui vous aidera tout au long de votre aventure!</p>
          <p>Quete date d'Inscription accomplis le :
          <br />
          recompense +1 niveau!</p>
          <div>
            Quete : Confirmer les besoins
          </div>
        </li>
        <li className="event-hidden" id="date" data-date="level 3">
          <h3>Presentation faite</h3>
          <p>Apres moulte ou non moulte discussion avec votre guide vous etes finalement arriver a un accord!</p>
          <p>Quete confirmer les besoins accomplis le :
          <br />
          recompense +1 niveau!</p>
          <div>
            Quete : Confirmer les composants
          </div>
        </li>
        <li className="event-hidden" data-date="level 4">
          <h3>Paiement effectuer</h3>
          <p>Bientot votre personnge et vous pourront parcourir le monde ensemble, ayez foi en votre guide qui a trover pour vous les meilleurs artisans!
          <br />
          Merci beaucoup pour votre confiance !
          <p>
              Quete confirmer les composants accomplis le :
              recompense +1 niveau!
          </p>
          </p>
          <div>
            Quete : Satisfaction
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Progress;
