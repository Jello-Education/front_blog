import React from 'react';

import comingImage from '../../assets/coming-page-image.svg';

import Header from '../../components/Header';
import NewsletterSection from '../../components/NewsletterSection';
import JelloInfo from '../../components/JelloInfo';

import { Container, ComingSoonContainer } from './styles';

const Coming: React.FC = () => {
  return (
    <Container>
      <Header />

      <ComingSoonContainer>
        <img src={comingImage} alt="Imagem ilustrativa para 'Em breve'" />

        <h2>Em breve...</h2>
      </ComingSoonContainer>

      <NewsletterSection />

      <JelloInfo />
    </Container>
  );
};

export default Coming;
