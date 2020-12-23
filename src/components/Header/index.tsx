import React from 'react';

import logoJello from '../../assets/logoJello.png';

import NavLink from '../NavLink';

import { Container, HeaderContent, Title, NavBar } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <Title>
          <img src={logoJello} alt="Logo da Jello" />
          <h1> | Blog</h1>
        </Title>

        <NavBar>
          <NavLink>Sobre</NavLink>
          <NavLink>Conteúdo</NavLink>
          <NavLink>Em breve!</NavLink>
        </NavBar>
      </HeaderContent>
    </Container>
  );
};

export default Header;
