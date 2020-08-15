import React from 'react';
import Cards from 'src/components/Home/Cards';
import Builders from 'src/components/Home/Builders';
import './styles.scss';

const Team = () => {
  return (
    <div className="container">
      <Cards />
      <p>RPC maker est venu d'un besoin. Celui d'avoir une plateforme permettant de proposer aux plus grand nombre des conseilles sur le montage d'un environement multimedia efficace et en adquation avec la personnalité de chacun.</p>
      <Builders />
    </div>

  );
};

export default Team;
