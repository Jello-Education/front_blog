import React from 'react';

import { FaStar } from 'react-icons/fa';
import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <header>
        <img src="./profile-User-Img.png" alt="profile"/>
        <h2>Maria Edna</h2>
      </header>
      <div>
        <span>Avaliação</span>
        <FaStar color="#FD3373"/>
        <FaStar color="#FD3373"/>
        <FaStar color="#FD3373"/>
        <FaStar color="#FD3373"/>
        <FaStar color="#FD3373"/>
        <span>4.6</span>
      </div>
      <p>Criadora dos cursos: Excel básico, Programação HTML</p>

      <p>Mesmbro desde: Fevereiro de 2021</p>

      <button>
        <p>Estatistica</p>
      </button>
      
      <button>

        <p>Estatistica</p>
      </button>

      <button>
        <p>Estatistica</p>
      </button>
    </Container>
  );
}

export default Profile;