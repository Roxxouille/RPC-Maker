import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => (
  <Carousel className="carou">
    <Carousel.Item className="carou__item">
      <div className="carou__item__img"></div>
      <Carousel.Caption className="carou__item__content">
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carou__item">
      <div className="carou__item__img"></div>
      <Carousel.Caption className="carou__item__content">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carou__item">
      <div className="carou__item__img"></div>
      <Carousel.Caption className="carou__item__content">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselHome;
