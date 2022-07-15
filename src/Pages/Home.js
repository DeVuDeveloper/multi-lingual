/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable prefer-template */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import quote from './images/quote.png';
import 'react-multi-carousel/lib/styles.css';
import './home.css';

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1240, min: 765 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 765, min: 0 },
      items: 1,
    },
  };
  const { t } = useTranslation();
  return (
    <div className="home-text">
      <Carousel
        className="carousel"
        responsive={responsive}
        infinite={true}
        swipeable={false}
        autoPlaySpeed={100}
        draggable={false}
        showDots={true}
        ssr={true}
      >
        {/* <h2>{t('welcome')}</h2> */}
        <div className="app__wrapper_info app__bg textual">
          <h1 className="headtext__cormorant">{t('about')}</h1>

          <div className="app__chef-content">
            <div className="app__chef-content_quote">
              <img src={quote} alt="quote_image" />
              <p className="p__opensans tremo">
                {t('welcome')}
              </p>
            </div>
          </div>

          <div className="app__chef-sign">
            <p>Dejan</p>
            <p className="p__opensans">Developer & Designer</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
