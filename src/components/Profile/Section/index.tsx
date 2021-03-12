import React from 'react';

import { Container, Sobre, CursesBox } from './styles';

const Section: React.FC = () => {
  return (
    <Container>
      <Sobre>
        <h3>Sobre</h3>

        <span>Descrição</span>
      </Sobre>
      <CursesBox>
        <h3>Cursos</h3>
      </CursesBox>
    </Container>
  );
}

export default Section;