import React from 'react';
import Image from 'next/image';


import Header from '../../components/Header';
import NewsletterSection from '../../components/NewsletterSection';
import JelloInfo from '../../components/JelloInfo';

import { Container, ComingSoonContainer } from '../../styles/comingStyles';

const Coming: React.FC = () => {
  return (
    <Container>
      <Header />

      <ComingSoonContainer>
        <Image 
          src="/coming-page-image.svg" 
          alt="Imagem ilustrativa para 'Em breve'" 
          width={756}
          height={520}
          />

        <h2>Em breve...</h2>
      </ComingSoonContainer>

      <NewsletterSection />

      <JelloInfo />
    </Container>
  );
};

export default Coming;