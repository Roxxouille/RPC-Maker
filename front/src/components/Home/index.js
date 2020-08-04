import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarouselHome from './CarouselHome';
import Cards from './Cards';
import Testimony from './Testimony';
import PresHome from './PresHome';
import './styles.scss';

const Home = () => {
  const [dataPres, setDataPres] = useState({ build: '', quote: '' });
  useEffect(() => {
    console.log(dataPres);
    if (dataPres.build === '' && dataPres.quote === '') {
      axios.get('http://localhost:3000/build').then((res) => {
        const dataBuild = res.data.build;
        axios.get('http://localhost:3000/quote').then((response) => {
          const dataQuote = response.data.quote;
          setDataPres({ build: dataBuild, quote: dataQuote });
        });
      });
    }
  });
  return (
    <div className="container">
      <CarouselHome />
      <PresHome build={dataPres.build ? dataPres.build : 0} quote={dataPres.quote ? dataPres.quote : 0} />
      <div className="home-team">
        <h2>la team</h2>
        <Cards />
      </div>
      <Testimony />
    </div>
  );
};

export default Home;
