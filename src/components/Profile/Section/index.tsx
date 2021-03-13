import React from 'react';

import { Container, Sobre, CursesBox, CourseBox, CourseList, Icon } from './styles';
import { FiEdit2 } from 'react-icons/fi';

const Section: React.FC = () => {
  return (
    <Container>
      <Sobre>
        <h3>Sobre</h3>

        <Icon>
          <FiEdit2 color="#fff" size={20}/>
        </Icon>

        <span>Descrição</span>
      </Sobre>
      <CursesBox>
        <h3>Cursos</h3>

        <CourseList>
          <div>
            <CourseBox>
              <img src="/profile-course-Img.png" alt=""/>

              <h3>Figma - Introdução</h3>
            </CourseBox>

            <p>Acessado em 21/02 às 21:00</p>
          </div>
          <div>
            <CourseBox>
              <img src="/profile-course-Img.png" alt=""/>

              <h3>HTML5 para iniciantes</h3>
            </CourseBox>

            <p>Acessado em 10/02 às 21:00</p>
          </div>
          <span>Ver mais</span>
        </CourseList>
      </CursesBox>
    </Container>
  );
}

export default Section;