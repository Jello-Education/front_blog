import React from 'react';
import Image from 'next/image';

import Header from '../../components/Shared/Header';
import JelloInfo from '../../components/Shared/JelloInfo';

import {
  Container,
  AboutJelloContainer,
  AboutJelloDetails,
  Courses,
} from '../../styles/aboutStyles';

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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{' '}
            </p>
          </div>

          <div className="courses-right-first-description">
            <Image 
              src="/board-image.svg" 
              alt="Quadro de cursos" 
              width={506}
              height={320}
            />     
          </div>
        </div>

        <div className="second-description">
          <div className="courses-left-second-description">
            <Image 
              src="/study-image.svg" 
              alt="Menina estudando" 
              width={506}
              height={320}
              />
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