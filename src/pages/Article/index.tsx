import React from 'react';

import { Container, Main, Titles, Section } from './styles';

import Profile from './Components/Profile';
import Content from './Components/Content';
import Aside from './Components/Aside';
import Footer from './Components/Footer';

const Article: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Article;
