import React from 'react';
import './styles.scss';
import { Row, Col, Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimony = ({ testimonies }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const aled = testimonies.testimonies.map((testimony) => {
    const stars = testimony.score;
    const html = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        html.push(<span key={i} className="fa fa-star checked" />);
      }
      else {
        html.push(<span key={i} className="fa fa-star" />);
      }
    }
    return (
      <div key={testimony.id} className="testimony">
        <div className="testimony__img"><Image src={testimony.user.avatar.image} roundedCircle /></div>
        <div>
          <h3 className="testimony__name">{testimony.user.username}</h3>
          { html }
          <p className="testimony__content"> {testimony.content}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="testimonies">
      <h2>Les avis de nos clients</h2>
      <Carousel
        showDots
        responsive={responsive}
        infinite
      >
        { aled }
      </Carousel>
    </div>
  );
};

export default Testimony;
