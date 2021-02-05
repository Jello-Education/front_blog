import React from 'react';
import Image from 'next/image';

import { Container, Box } from './styles';

const Content: React.FC = () => {
  return (
    <Container>
      <h1>Conteúdo sobre educação</h1>
      <p>Visite nosso <b>blog</b> e fique por dentro de nossas novidades?</p>
      <Box>
        <Image 
          src="/Mpv_box.svg" 
          alt=""
          width={684}
          height={460}
          />
        <button>Visitar</button>
      </Box>

      <h1 style={{ color: "#fd3373"}}>Em breve!</h1>
    </Container>
  );
}

export default Content;