import React from 'react';

import boardImage from '../../assets/board-image.svg';
import studyImage from '../../assets/study-image.svg';

import Header from '../../components/Header';
import JelloInfo from '../../components/JelloInfo';

import {
  Container,
  AboutJelloContainer,
  AboutJelloDetails,
  Courses,
} from './styles';

const AboutJello: React.FC = () => {
  return (
    <Container>
      <Header />

      <AboutJelloContainer>
        <AboutJelloDetails>
          <h1>Sobre a Jello</h1>
          <h3>Saiba mais sobre a melhor plataforma de educação do Brasil</h3>
        </AboutJelloDetails>
      </AboutJelloContainer>

      <Courses>
        <div className="first-description">
          <div className="courses-left-first-description">
            <h2>Como são os cursos?</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{' '}
            </h3>
          </div>

          <div className="courses-right-first-description">
            <img src={boardImage} alt="Quadro de cursos" />
          </div>
        </div>

        <div className="second-description">
          <div className="courses-left-second-description">
            <img src={studyImage} alt="Menina estudando" />
          </div>

          <div className="courses-right-second-description">
            <h2>Como são os cursos?</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{' '}
            </h3>
          </div>
        </div>
      </Courses>

      <JelloInfo />
    </Container>
  );
};

export default AboutJello;
