import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarouselHome from './CarouselHome';

import Cards from './Cards';
import Testimony from './Testimony';
import PresHome from './PresHome';
import './styles.scss';

const Home = () => {
  const [dataPres, setDataPres] = useState({ build: '', quote: '' });
  const [dataTestimony, setDataTestimony] = useState({ testimonies: [] });
  useEffect(() => {
    if (dataPres.build === '' && dataPres.quote === '') {
      axios.get('http://localhost:3000/build').then((res) => {
        const dataBuild = res.data.build;
        axios.get('http://localhost:3000/quote').then((response) => {
          const dataQuote = response.data.quote;
          setDataPres({ build: dataBuild, quote: dataQuote });
        });
      });
    }
    if (dataTestimony.testimonies.length === 0) {
      axios.get('http://localhost:3000/testimonies/random').then((res) => {
        const dataTes = res.data;
        setDataTestimony({ testimonies: dataTes });
      });
    }
  }, []);

  return (
    <div className="container">
      <CarouselHome />
      <PresHome build={dataPres.build ? dataPres.build : 0} quote={dataPres.quote ? dataPres.quote : 0} />
      <Cards />
      <Testimony testimonies={dataTestimony} />
    </div>
  );
};

export default Home;
