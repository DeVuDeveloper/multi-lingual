/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable prefer-template */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useTranslation } from 'react-i18next';
import './home.css';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home-text">
      <h2>{t('welcome')}</h2>
    </div>
  );
};

export default Home;
