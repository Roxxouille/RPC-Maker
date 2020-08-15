import React from 'react'

const Timeline = () => {
  return (
    <ul className="progressbar">
      {/* si step superieur ou egal a 1, mettre classname active */}
      <li className="active">Bienvenue !</li>
      {/* si step superieur ou egal a 2, mettre classname active */}
      <li className="active" >Budget</li>
      {/* si step superieur ou egal a 3, mettre classname active */}
      <li>add friends</li>
      {/* si step superieur ou egal a 4, mettre classname active */}
      <li>View map</li>
      {/* si step superieur ou egal a 5, mettre classname active */}
      <li >login</li>
      {/* si step superieur ou egal a 6, mettre classname active */}
      <li >choose interest</li>
      {/* si step superieur ou egal a 7, mettre classname active */}
      <li>add friends</li>
      {/* si step superieur ou egal a 8, mettre classname active */}
      <li>View map</li>
    </ul>
  );
};

export default Timeline;
