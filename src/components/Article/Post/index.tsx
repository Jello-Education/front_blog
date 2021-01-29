import React from 'react';
import Image from 'next/image';

import { Container, Title, Content, Profile } from './styles';


const Posts: React.FC = () => {
  return (
    <Container>
      <header>
        <p>Tipo de conteudo</p>

        <p>Data de postagem</p>
      </header>

      <Title />

      <Content />

      <Profile>
        <Image 
          src="/userFoto.svg" 
          alt="userFoto"
          width={30}
          height={30}
          />
        <p>Por <b>Fulano de tal</b></p>
      </Profile>
    </Container>
  );
}

export default Posts;