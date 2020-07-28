import React from 'react';
import CarouselHome from './CarouselHome';
import Cards from '../Cards';
import Testimony from './Testimony';
import PresHome from './PresHome';


import './styles.scss';

const Home = () => {
  return (
    <div className="container">
      <CarouselHome />
      <PresHome />
      <div className="home-team">
        <h2>la team</h2>
        <Cards />
      </div>
      <Testimony />
    </div>
  );
};

export default Home;
