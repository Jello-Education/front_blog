import React from 'react';
import Image from 'next/image';

import { Container, Title, Cards, Card, Bottom, Stars } from './styles';
import { FaStar } from 'react-icons/fa';

const Courses: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1><b>C</b>ursos</h1>
      </Title>
      <Cards>
        <Card>
          <Image 
            src="/courses-card-img.svg" 
            width={448}
            height={254}
            />
          <Bottom>
            <h3>Excel 2016 basico</h3>
            <nav>
              <Stars> 
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <small>5.0</small>
              </Stars>
              <span>Categorias</span>
            </nav>

            <b>Grátis</b>
          </Bottom>
        </Card>
        <Card>
          <Image 
            src="/courses-card-img.svg" 
            width={448}
            height={254}
            />
          <Bottom>
            <h3>Excel 2016 basico</h3>
            <nav>
              <Stars> 
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <small>5.0</small>
              </Stars>
              <span>Categorias</span>
            </nav>

            <b>Grátis</b>
          </Bottom>
        </Card>
        <Card>
          <Image 
            src="/courses-card-img.svg" 
            width={448}
            height={254}
            />
          <Bottom>
            <h3>Excel 2016 basico</h3>
            <nav>
              <Stars> 
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <FaStar color="#FD3373"/>
                <small>5.0</small>
              </Stars>
              <span>Categorias</span>
            </nav>

            <b>Grátis</b>
          </Bottom>
        </Card>
      </Cards>

      <button>Ver todos os cursos</button>
    </Container>
  );
}

export default Courses;