import React from 'react';
import Image from 'next/image';

import NavLink from '../NavLink';

import { Container, HeaderContent, Title, NavBar } from './styles';
import Link from 'next/link';

const Header: React.FC = () => {  

  return (
    <Container>
      <HeaderContent>
        <Title >
          <Link href="/">
            <Image 
              src="/novo-logo-jello.svg" 
              alt="Logo da Jello" 
              width={150}
              height={44}
              />
          </Link>
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
