import React from 'react';
import Image from 'next/image';

import NavLink from '../NavLink';

import { Container, HeaderContent, Title, NavBar } from './styles';

const Header: React.FC = () => {  

  return (
    <Container>
      <HeaderContent>
        <Title >
          <Image 
            src="/logoJello.png" 
            alt="Logo da Jello" 
            width={150}
            height={44}
            />
          <h1> | Blog</h1>
        </Title>

        <NavBar>
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="">Conteúdo</NavLink>
          <NavLink to="/coming">Em breve!</NavLink>
        </NavBar>
      </HeaderContent>
    </Container>
  );
};

export default Header;
