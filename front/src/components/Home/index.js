import React from 'react';
import CarouselHome from './CarouselHome';
import Cards from '../Cards';
import { Row, Col, Image } from 'react-bootstrap';


import './styles.scss';

const Home = () => {
  return (
    <div className="container">
        <CarouselHome />
        <div className="pres">
            <Row>
                <Col className='short-text'>5856 Devis effectués</Col>
                <Col className='long-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Col>
            </Row>
            <Row>
                <Col>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Col>
                <Col className='short-text'>685 PC montés</Col>
            </Row>
        </div>
        <div className="home-team">
            <h2>la team</h2>
            <Cards />
        </div>
        <div className="home-testimony">
            <h2>Les avis de nos clients</h2>
            <Row>
                <Col className="home-one-testimony">
                    <div className="home-one-testimony__img"><Image src="https://picsum.photos/171/180" roundedCircle /></div>
                    
                    <div>
                        <h3>Robert</h3>     
                        <p className="home-one-testimony__content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </Col>
                <Col className="home-one-testimony">
                    <div className="home-one-testimony__img"><Image src="https://picsum.photos/171/180" roundedCircle /></div>
                    <div>
                        <h3 className="home-one-testimony__name">Robert</h3>      
                        <p className="home-one-testimony__content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </Col>   
            </Row>
        </div>
    </div>
  );
};

export default Home;
