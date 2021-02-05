import React from 'react';

import  Card  from '../Card';

import { Container } from './styles';

const Cards: React.FC = () => {
  return (
    <Container>
      <Card
        title="Decole sua carreira"
        text="Lorem ipsum nam euismod lobortis sagittis porta quisque, donec eleifend cursus platea quisque accumsan, elit cursus metus sodales libero conubia. sem nec aliquam hac blandit eros ac mi aliquam"
        image={{
          src: "/landingCardRocketIcon",
          altImg: 'icone foguete',
        }}
      />
      <Card
        title="Decole sua carreira"
        text="Lorem ipsum nam euismod lobortis sagittis porta quisque, donec eleifend cursus platea quisque accumsan, elit cursus metus sodales libero conubia. sem nec aliquam hac blandit eros ac mi aliquam"
        image={{
          src: "/landingCardRocketIcon",
          altImg: 'icone foguete',
        }}
      />
      <Card
        title="Decole sua carreira"
        text="Lorem ipsum nam euismod lobortis sagittis porta quisque, donec eleifend cursus platea quisque accumsan, elit cursus metus sodales libero conubia. sem nec aliquam hac blandit eros ac mi aliquam"
        image={{
          src: "/landingCardRocketIcon",
          altImg: 'icone foguete',
        }}
      />
      <Card
        title="Decole sua carreira"
        text="Lorem ipsum nam euismod lobortis sagittis porta quisque, donec eleifend cursus platea quisque accumsan, elit cursus metus sodales libero conubia. sem nec aliquam hac blandit eros ac mi aliquam"
        image={{
          src: "/landingCardRocketIcon",
          altImg: 'icone foguete',
        }}
      />

      <img src="/landing-triangles.svg" alt="triangulos formas" />
    </Container>
  );
};

export default Cards;
