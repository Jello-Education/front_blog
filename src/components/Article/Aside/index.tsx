import React from 'react';

import { Container, Ad } from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <form action="">
        <h1>Fique por dentro!</h1>

        <input type="text" placeholder="Nome"/>
        <input type="text" placeholder="Email"/>

        <button>Quero receber</button>
      </form>
      <Ad>
        <p>ads</p>
      </Ad>
      <Ad>
        <p>ads</p>
      </Ad>
    </Container>
  );
}

export default Aside;