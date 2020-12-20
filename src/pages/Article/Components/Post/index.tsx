import React from 'react';

import { Container, Title, Content, Profile } from './styles';


import userFoto from '../../../../assets/userFoto.svg';

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
        <img src={userFoto} alt="userFoto"/>
        <p>Por <b>Fulano de tal</b></p>
      </Profile>
    </Container>
  );
}

export default Posts;