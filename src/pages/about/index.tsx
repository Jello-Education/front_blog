import React from 'react';

import Header from '../../components/Shared/Header';
import JelloInfo from '../../components/Shared/JelloInfo';
import SEO from '../../components/Seo';
import Courses from '../../components/About/Courses';

import {
  Container,
  AboutJelloContainer,
  AboutJelloDetails,
} from '../../styles/aboutStyles';


const AboutJello: React.FC = () => {
  return (
    <Container>
      <Header />

      <SEO title="Sobre"/>

      <AboutJelloContainer>
        <AboutJelloDetails>
          <h1>Sobre a Jello</h1>
          <h3>Saiba mais sobre a melhor plataforma de educação do Brasil</h3>
        </AboutJelloDetails>
      </AboutJelloContainer>

      <Courses />

      <JelloInfo />
    </Container>
  );
};

export default AboutJello;