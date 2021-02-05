import React from 'react';

import { Container } from './styles';

interface ICardProps {
  title: string;
  text: string;

  image: {
    src: string;
    altImg: string;
  };
}

const Card: React.FC<ICardProps> = ({ image, title, text }) => {
  return (
    <Container>
      <img src={image.src} alt={image.altImg} />
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </Container>
  );
};

export default Card;
