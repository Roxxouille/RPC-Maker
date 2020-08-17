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

const Progress = ({ level }) => {
  return (
    <div id="timeline-content">
      <Row className="pc__title">
        <Col sm={1} className="pc__title__hr"><hr /></Col>
        <Col sm={4} ><h2>Ma Progression</h2></Col>
        <Col className="pc__title__hr"><hr /></Col>
      </Row>
      <ul className="timeline">

        {/* si le level est strictement superieur au status de l'utilisateur, remplacer event par event-notdone */}
        <li className={level < 1 ? 'event-notdone' : 'event'} data-date="Level 1">

          {/* si le level est strictement superieur au status de l'utilisateur, ajouter d-none au classname  */}
          <div className={level < 1 ? 'done d-none' : 'done'}>
            <h3>Inscription</h3>
            <p>
              Bienvenue dans l'aventure et merci d'avoir rejoint notre monde !
              <br />
              Vous et votre personnage allez vivre des aventures merveilleuses ensembles.
            </p>
            <FaExclamation /> Quête accomplie: <br />
            <h6>Inscription</h6>

            <br />
            <FaTrophy />  +1 niveau!
            <br />
            <br />
            <p style={{ fontSize: '12px' }}>le : 28/08/2020 a 10h57</p>
          </div>

          {/* si le level est inferieur ou egal au status de l'utilisateur, ajouter d-none au classname  */}
          <div className={level >= 1 ? 'done d-none' : 'done'}>
            <h3>Inscription</h3>
            <FaExclamation /> <p>Quête : inscription</p>
          </div>

        </li>

        {/* si le level est strictement superieur au status de l'utilisateur, remplacer event par event-notdone */}
        <li className={level < 2 ? 'event-notdone' : 'event'} data-date="Level 2">

          {/* si le level est strictement superieur au status de l'utilisateur, ajouter d-none au classname  */}
          <div className={level < 2 ? 'done d-none' : 'done'}>
            <h3>Envoi du formulaire</h3>
            <p>La première étape de la création de votre personnage fût un succès!
          <br />
          Vous n'avez plus qu'à attendre la réponse de votre guide qui vous aidera tout au long de votre aventure !</p>
            <FaExclamation /> Quête accomplie : <br />
            <h6>Inscription</h6>
            <br />
            <FaTrophy />  +1 niveau!
            <br />
            <br />
            <p style={{ fontSize: '12px' }}>le : 28/08/2020 a 10h57</p>
          </div>

          {/* si le level est inferieur ou egal au status de l'utilisateur, ajouter d-none au classname  */}
          <div className={level >= 2 ? 'done d-none' : 'done'}>
            <h3>Envoi du formulaire</h3>
            <p><FaExclamation /> Quête : inscription</p>
          </div>

        </li>

        {/* si le level est strictement superieur au status de l'utilisateur, remplacer event par event-notdone */}
        <li className={level < 3 ? 'event-notdone' : 'event'} data-date="Level 3">

          {/* si le level est strictement superieur au status de l'utilisateur, ajouter d-none au classname  */}
          <div className={level < 3 ? 'done d-none' : 'done'}>
            <h3>Présentation faite</h3>
            <p>Après discussion avec votre guide vous êtes finalement arrivé à un accord!</p>
            <FaExclamation /> Quête accomplie : <br />
            <h6>Envoi du formulaire</h6>
            <br />
            <FaTrophy />  +1 niveau!
            <br />
            <br />
            <p style={{ fontSize: '12px' }}>le : 28/08/2020 a 10h57</p>
          </div>

          {/* si le level est inferieur ou egal au status de l'utilisateur, ajouter d-none au classname  */}
          <div className={level >= 3 ? 'done d-none' : 'done'}>
            <h3>Présentation faite</h3>
            <p><FaExclamation /> Quête : Envoi du formulaire</p>
          </div>

        </li>


        {/* si le level est strictement superieur au status de l'utilisateur, remplacer event par event-notdone */}
        <li className={level < 4 ? 'event-notdone' : 'event'} data-date="Level 4">

          {/* si le level est strictement superieur au status de l'utilisateur, ajouter d-none au classname  */}
          <div className={level < 4 ? 'done d-none' : 'done'}>
            <h3>Paiement effectué</h3>
            <p>Bientôt votre personnge et vous pourront parcourir le monde ensemble, ayez foi en votre guide qui a trouver pour vous les meilleurs artisans !</p>
            <FaExclamation /> Quete accomplie : <br />
            <h6>Paiement effectué</h6>
            <br />
            <FaTrophy />  +1 niveau!
            <br />
            <br />
            <p style={{ fontSize: '12px' }}>le : 28/08/2020 a 10h57</p>
          </div>

          {/* si le level est inferieur ou egal au status de l'utilisateur, ajouter d-none au classname  */}
          <div className={level >= 4 ? 'done d-none' : 'done'}>
            <h3>Paiement effectué</h3>
            <p><FaExclamation /> Quête : présentation faite</p>
          </div>

        </li>
      </ul>
    </div>
  );
};

export default Progress;
