import React from 'react';

import  Card  from '../Card';

import { Container } from './styles';

const Cards: React.FC = () => {
  return (
    <Container>
      <Card
        title="Decole sua carreira"
        image={{
          src: "/landing-card-rocket-icon.svg",
          altImg: 'icone foguete',
        }}
      />
      <Card
        title="Decole sua carreira"
        image={{
          src: "/mvp-book.svg",
          altImg: 'icone foguete',
        }}
      />
      <Card
        title="Decole sua carreira"
        image={{
          src: "/mvp-clock.svg",
          altImg: 'icone foguete',
        }}
      />
      <Card
        title="Decole sua carreira"
        image={{
          src: "/mvp-certificado.svg",
          altImg: 'icone foguete',
        }}
      />
    </Container>
  );
};

export default Cards;
