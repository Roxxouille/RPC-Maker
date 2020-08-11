import React from 'react';

const Progress = () => {
  return (
    <div id="timeline-content">
      <h1>Ma progression</h1>

      <ul className="timeline">
        <li className="event" data-date="Level 1">
          <h3>T'es vraiment un bg</h3>
          <p>Bah oui t'as réussi a remplir un formulaire gros</p>
        </li>
        <li className="event" data-date="level 2">
          <h3>Doublement BG</h3>
          <p>t'as dû faire un truc en +</p>    
        </li>
        <li className="event" id="date" data-date="level 3">
          <h3>J'ai plus d'inspiration</h3>
          <p>rien à dire</p>    
        </li>
        <li className="event" data-date="level 4">
          <h3>Squareflair Today</h3>
          <p>voilavoila</p>
        </li>
      </ul>
    </div>
  );
};

export default Progress;
