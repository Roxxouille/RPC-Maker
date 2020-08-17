import React from 'react';
import Cards from 'src/components/Home/Cards';
import Builders from 'src/components/Home/Builders';
import './styles.scss';

const Team = () => {
  return (
    <div className="container">
      <Cards />
      <p>RPC maker est venu d'un besoin. Celui d'avoir une plateforme permettant de proposer aux plus grand nombre des conseils sur le montage d'un environnement multimédia efficace et en adéquation avec la personnalité de chacun.</p>
      <Builders />
    </div>

  );
};

export default Team;
