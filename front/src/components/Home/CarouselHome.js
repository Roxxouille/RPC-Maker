import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

const CarouselHome = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite
      className="carou"
    >
      <div className="carou__item">
        <div className="carou__item__img">
          <div className="carou__item__img__content">
            <h3>Donnez vie a votre envie.</h3>
            <p>Une idée, une envie un besoin? Faite confiance a notre équipe pour vous guider de A a Z dans le monde du montage sur mesure !</p>
            <Button><Link to="/devis" className="nav-link" style={{ color: '#ffffff' }}>
              Guidez-moi !
                    </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="carou__item">
        <div className="carou__item__img">
          <div className="carou__item__img__content">
            <h3>Il y en a pour tout le monde !</h3>
            <p>Que vous soyez néophyte ou expérimenté, nous avons la formule qu'il vous faut. <br />
              Un montage, une idee, un budget, ou pas ? laissez nous nous adapter !
            </p>
            <Button><Link to="/devis" className="nav-link" style={{ color: '#ffffff' }}>
              Guidez-moi !
                    </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="carou__item">
        <div className="carou__item__img">
          <div className="carou__item__img__content">
            <h3>Prêt à l'emploi !</h3>
            <p>Le bonheur de pouvoir sortir de son carton un ordinateur déjà pret à conquérir le monde du web du jeu ou même du design 3D ?<br />
              Si vous le désirez alors cela sera notre volonté !
            </p>
            <Button><Link to="/devis" className="nav-link" style={{ color: '#ffffff' }}>
              Guidez-moi!
                    </Link>
            </Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselHome;
