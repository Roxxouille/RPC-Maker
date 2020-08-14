import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const CarouselHome = () => (
  <Carousel className="carou">
    <Carousel.Item className="carou__item">
      <div className="carou__item__img"></div>
      <Carousel.Caption className="carou__item__content">
        <h3>Donnez vie a votre envie.</h3>
        <p>Une iddee, une envi, un besoin? Faite confiance a notre equipe pour vous guider de A a Z dans le monde du montage sur mesure!</p>
        <Button>Guidez moi!</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carou__item">
      <div className="carou__item__img"></div>
      <Carousel.Caption className="carou__item__content">
        <h3>Il y en a pour tout le monde!</h3>
        <p>Que vous soyez neophyte ou experimente nous avons la formule qu'il vous faut. <br />
         Un montage, pas de montage, une idee, un budget, pas d'idee, pas de budget, laissez nous nous adapter!</p>
        <Button>Guidez moi!</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carou__item">
      <div className="carou__item__img"></div>
      <Carousel.Caption className="carou__item__content">
        <h3>Pret a l'emploi!</h3>
        <p>Le bonheur de pouvoir sortie de son carton un ordinateur deja pret a conquerir le monde du web du jeu ou meme du design 3D?<br />
        Si vous le desirez alors cela sera notre volonte!</p>
        <Button>Guidez moi!</Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselHome;
