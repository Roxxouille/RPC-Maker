import React from 'react';
import './styles.scss';

const Loader = () => {
  const divStyle = {
    color: '#edb948',
  };
  return (
    <div style={divStyle} className="la-pacman">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
