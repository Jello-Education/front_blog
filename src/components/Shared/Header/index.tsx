import React from 'react';

import NavLink from '../NavLink';

import { Container, HeaderContent, NavBar } from './styles';
import Link from 'next/link';

const Header: React.FC = () => {  

  return (
    <Container>
      <HeaderContent>
        <Link href="/">
          <img
            src="/novo-logo-jello.svg" 
            alt="Logo da Jello" 
            />
        </Link>


        <NavBar>
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="">Conteúdo</NavLink>
          <NavLink to="/coming">Em breve!</NavLink>
          <NavLink to="/terms">Termos e Politicas</NavLink>
        </NavBar>
      </HeaderContent>
    </Container>
  );
};

export default Header;
