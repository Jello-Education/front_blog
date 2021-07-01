import React from 'react';
import Image from 'next/image';

import { Container } from './styles';

const Courses: React.FC = () => {
  return (
    <Container>
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
            <img 
              src="/sobre-cursos.svg" 
              alt="Quadro de cursos" 
            />     
          </div>
        </div>

        <div className="second-description">
          <div className="courses-left-second-description">
            <img 
              src="/study-image.svg" 
              alt="Menina estudando" 
              />
          </div>

          <div className="courses-right-second-description">
            <h2>Quantos cursos eu posso fazer?</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{' '}
            </h3>
          </div>
        </div>

        <div className="first-description">
          <div className="courses-left-first-description">
            <h2>Os cursos dão direito a certificado?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{' '}
            </p>
          </div>

          <div className="courses-right-first-description">
            <img 
              src="/about-curso.svg" 
              alt="Quadro de cursos" 
            />     
          </div>
        </div>

        <div className="second-description">
          <div className="courses-left-second-description">
            <img 
              src="/about-prof.svg" 
              alt="Menina estudando" 
              />
          </div>

          <div className="courses-right-second-description">
            <h2>Quem são os professores dos cursos?</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{' '}
            </h3>
          </div>
        </div>
    </Container>
  );
}

export default Courses;

