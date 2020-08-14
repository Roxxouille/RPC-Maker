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
import { FaTrophy, FaExclamation } from 'react-icons/fa';

const Progress = () => {
  return (
    <div id="timeline-content">
      <Row className="pc__title">
        <Col sm={1} className="pc__title__hr"><hr /></Col>
        <Col sm={4} ><h2>Ma Progression</h2></Col>
        <Col className="pc__title__hr"><hr /></Col>
      </Row>
      <ul className="timeline">

        {/* si le level est strictement superieur au status de l'utilisateur, remplacer event par event-notdone */}
        <li className="event" data-date="Level 1">

          {/* si le level est strictement superieur au status de l'utilisateur, ajouter d-none au classname  */}
          <div className="done">
            <h3>Inscription</h3>
            <p>
              Bienvenue dans l'aventure et merci d'avoir rejoins notre monde!
              <br />
              Vous et vore personnage allez vivre des aventures merveilleuses ensembles.
            </p>
            <FaExclamation /> Quete accomplis: <br />
            <h6>Inscription</h6>

            <br />
            <FaTrophy />  +1 niveau!
            <br />
            <br />
            <p style={{ fontSize: '12px' }}>le : 28/08/2020 a 10h57</p>
          </div>

          {/* si le level est inferieur ou egal au status de l'utilisateur, ajouter d-none au classname  */}
          <div className="notdone d-none">
            <h3>Inscription</h3>
            <FaExclamation /> Quete : inscription
          </div>

        </li>

        {/* si le level est strictement superieur au status de l'utilisateur, remplacer event par event-notdone */}
        <li className="event" data-date="Level 2">

          {/* si le level est strictement superieur au status de l'utilisateur, ajouter d-none au classname  */}
          <div className="done">
            <h3>Envoi du formulaire</h3>
            <p>La premiere etape de la creation de votre personnage fut un succes!
          <br />
          Vous n'avez plus qu'a attendrela reponse de votre guide qui vous aidera tout au long de votre aventure!</p>
            <FaExclamation /> Quete accomplis: <br />
            <h6>Inscritpion</h6>
            <br />
            <FaTrophy />  +1 niveau!
            <br />
            <br />
            <p style={{ fontSize: '12px' }}>le : 28/08/2020 a 10h57</p>
          </div>

          {/* si le level est inferieur ou egal au status de l'utilisateur, ajouter d-none au classname  */}
          <div className="notdone d-none">
            <h3>Envoi du formulaire</h3>
            <FaExclamation /> Quete : inscription
          </div>

        </li>

        {/* si le level est strictement superieur au status de l'utilisateur, remplacer event par event-notdone */}
        <li className="event-notdone" data-date="Level 3">

          {/* si le level est strictement superieur au status de l'utilisateur, ajouter d-none au classname  */}
          <div className="done d-none">
            <h3>Presentation faite</h3>
            <p>Apres moulte ou non moulte discussion avec votre guide vous etes finalement arriver a un accord!</p>
            <FaExclamation /> Quete accomplis: <br />
            <h6>Envoi du formulaire</h6>
            <br />
            <FaTrophy />  +1 niveau!
            <br />
            <br />
            <p style={{ fontSize: '12px' }}>le : 28/08/2020 a 10h57</p>
          </div>

          {/* si le level est inferieur ou egal au status de l'utilisateur, ajouter d-none au classname  */}
          <div className="notdone">
            <h3>Presentation faite</h3>
            <FaExclamation /> Quete : Envoi du formulaire
          </div>

        </li>


        {/* si le level est strictement superieur au status de l'utilisateur, remplacer event par event-notdone */}
        <li className="event-notdone" data-date="Level 4">

          {/* si le level est strictement superieur au status de l'utilisateur, ajouter d-none au classname  */}
          <div className="done d-none">
            <h3>Paiement effectue</h3>
            <p>Bientot votre personnge et vous pourront parcourir le monde ensemble, ayez foi en votre guide qui a trover pour vous les meilleurs artisans!</p>
            <FaExclamation /> Quete accomplis: <br />
            <h6>Paiement effectue</h6>
            <br />
            <FaTrophy />  +1 niveau!
            <br />
            <br />
            <p style={{ fontSize: '12px' }}>le : 28/08/2020 a 10h57</p>
          </div>

          {/* si le level est inferieur ou egal au status de l'utilisateur, ajouter d-none au classname  */}
          <div className="notdone">
            <h3>Paiement effectue</h3>
            <FaExclamation /> Quete : presentation faite
          </div>

        </li>
      </ul>
    </div>
  );
};

export default Progress;
