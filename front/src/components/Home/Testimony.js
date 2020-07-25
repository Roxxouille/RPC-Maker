import React from 'react';
import './styles.scss';
import { Row, Col, Image } from 'react-bootstrap';

const Testimony = () => {
  return (
    <div className="home-testimony">
      <h2>Les avis de nos clients</h2>
        <Row>
          <Col className="home-one-testimony">
            <div className="home-one-testimony__img"><Image src="https://picsum.photos/171/180" roundedCircle /></div>    
            <div>
              <h3>Robert</h3>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <p className="home-one-testimony__content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </Col>
          <Col className="home-one-testimony">
            <div className="home-one-testimony__img"><Image src="https://picsum.photos/171/180" roundedCircle /></div>
              <div>
                <h3 className="home-one-testimony__name">Robert</h3>      
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <p className="home-one-testimony__content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </Col>   
        </Row>
    </div>
  );
};

export default Testimony;
