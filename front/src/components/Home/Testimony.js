import React from 'react';
import './styles.scss';
import { Row, Col, Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

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
        <div className="testimony__img"><Image src={`http://54.173.92.69/api/assets/gifs/${testimony.user.avatar.image}`} rounded /></div>
        <div>
          {html}
          <div>
            <div className="testimony__quote">
              <FaQuoteLeft className="testimony__quote__left" />
              <FaQuoteRight className="testimony__quote__right" />
            </div>
            <div>
              <p className="testimony__content"> {testimony.content}</p>
            </div>

          </div>

          <h6 className="testimony__name">{testimony.user.username}</h6>
        </div>
      </div>
    );
  });

  return (
    <div className="testimonies">
      <Row className="testimonies__title">
        <Col className="testimonies__title__hr"><hr /></Col>
        <Col> <h2>L'avis de nos clients</h2> </Col>
        <Col className="testimonies__title__hr"><hr /></Col>
      </Row>
      <Carousel
        showDots
        arrows={false}
        responsive={responsive}
        infinite
      >
        {aled}
      </Carousel>
    </div>
  );
};

export default Testimony;
