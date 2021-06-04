import React from 'react';

import Header from '../../components/Shared/Header';
import NewsletterSection from '../../components/Shared/NewsletterSection';
import JelloInfo from '../../components/Shared/JelloInfo';
import SEO from '../../components/Seo';

import { Container, ComingSoonContainer } from '../../styles/comingStyles';


const Coming: React.FC = () => {
  return (
    <Container>
      <Header />

      <SEO title="Em breve"/>

      <ComingSoonContainer>
        <img
          src="/em-breve.png" 
          alt="Imagem ilustrativa para 'Em breve'" 
          />

        <h2>Em breve...</h2>
      </ComingSoonContainer>

      <NewsletterSection />

      <JelloInfo />
    </Container>
  );
};

export default Coming;