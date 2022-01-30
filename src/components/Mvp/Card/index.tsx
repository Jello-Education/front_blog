import React from 'react';

import { Container } from './styles';

interface ICardProps {
  title: string;

  image: {
    src: string;
    altImg: string;
  };
}

const Card: React.FC<ICardProps> = ({ image, title }) => {
  return (
    <Container>
      <img src={image.src} alt={image.altImg} />
      <strong>{title}</strong>
    </Container>
  );
};

export default Card;
