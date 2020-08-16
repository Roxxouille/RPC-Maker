import React from 'react'

const Timeline = ({ step }) => {
  return (
    <ul className="progressbar">
      {/* si step superieur ou egal a 1, mettre classname active */}
      <li className={step >= 1 ? 'active' : ''}>Bienvenue !</li>
      {/* si step superieur ou egal a 2, mettre classname active */}
      <li className={step >= 2 ? 'active' : ''}>Budget</li>
      {/* si step superieur ou egal a 3, mettre classname active */}
      <li className={step >= 3 ? 'active' : ''}>Aventures</li>
      {/* si step superieur ou egal a 4, mettre classname active */}
      <li className={step >= 4 ? 'active' : ''}>Equipement</li>
      {/* si step superieur ou egal a 5, mettre classname active */}
      <li className={step >= 5 ? 'active' : ''}>vos besoin</li>
      {/* si step superieur ou egal a 6, mettre classname active */}
      <li className={step >= 6 ? 'active' : ''}>Historique</li>
      {/* si step superieur ou egal a 7, mettre classname active */}
      <li className={step >= 7 ? 'active' : ''}>sac a dos</li>
      {/* si step superieur ou egal a 8, mettre classname active */}
      <li className={step >= 8 ? 'active' : ''}>Informations personnelles</li>
    </ul>
  );
};

export default Timeline;
