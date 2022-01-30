
import React from 'react';

import { Container, Main, Titles, Section } from '../../styles/articleStyles';

import Profile from '../../components/Article/Profile';
import Content from '../../components/Article/Content';
import Aside from '../../components/Article/Aside';
import Footer from '../../components/Article/Footer';
import Header from '../../components/Shared/Header';
import JelloInfo from '../../components/Shared/JelloInfo';

const Article: React.FC = () => {
  return (
    <Container>
      <Header />
      
      <Section>
        <Main>
          <Titles>
            <p>Tipo de conteúdo (categoria)</p>

            <h1>Titulo título título título</h1>
            <sub>Subtitulo Subtitulo</sub>
          </Titles>

          <Profile />

          <Content />

        </Main>
        
        <Aside />
      </Section>

      <Footer />

      <JelloInfo />
    </Container>
  );
};

export default Article;