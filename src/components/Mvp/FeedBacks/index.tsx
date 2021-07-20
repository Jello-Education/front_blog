import React from 'react';

import { Container } from './styles';

const FeedBacks: React.FC = () => {
  return (
    <Container>

      <h1>Conteúdo sobre educação</h1>
      <p>Visiste nosso <a>blog</a> e fique por dentro de nossas novidades!</p>


      <img src="./mvp-feed.svg" alt="blogPhoto"/>

      <button>Visitar</button>
    </Container>
  );
}

export default FeedBacks;