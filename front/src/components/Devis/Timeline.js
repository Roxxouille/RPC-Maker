import React from 'react'

const Timeline = ({ step }) => {
  return (

    <div className={(step === 1) ? 'wrap' : (step === 2) ? 'wrap progstep2' : (step === 3) ? 'wrap progstep3' : (step === 4) ? 'wrap progstep4' : (step === 5) ? 'wrap progstep5' : (step === 6) ? 'wrap progstep6' : 'wrap progstep7'}>
      <ul className="progressbar">
        {/* si step superieur ou egal a 1, mettre classname active */}
        <li className={(step === 1) ? 'active' : (step >= 2) ? 'actived' : ''}>Bienvenue !</li>
        {/* si step superieur ou egal a 2, mettre classname active */}
        <li className={(step === 2) ? 'active' : (step >= 3) ? 'actived' : ''}>Budget</li>
        {/* si step superieur ou egal a 3, mettre classname active */}
        <li className={(step === 3) ? 'active' : (step >= 4) ? 'actived' : ''}>Aventures</li>
        {/* si step superieur ou egal a 4, mettre classname active */}
        <li className={(step === 4) ? 'active' : (step >= 5) ? 'actived' : ''}>Equipement</li>
        {/* si step superieur ou egal a 5, mettre classname active */}
        <li className={(step === 5) ? 'active' : (step >= 6) ? 'actived' : ''}>vos besoin</li>
        {/* si step superieur ou egal a 6, mettre classname active */}
        <li className={(step === 6) ? 'active' : (step >= 7) ? 'actived' : ''}>Historique</li>
        {/* si step superieur ou egal a 7, mettre classname active */}
        <li className={(step === 7) ? 'active' : (step >= 8) ? 'actived' : ''}>sac a dos</li>
        {/* si step superieur ou egal a 8, mettre classname active */}
        <li className={(step === 8) ? 'active' : (step >= 9) ? 'actived' : ''}>Informations personnelles</li>
      </ul>
    </div>

  );
};

export default Timeline;
