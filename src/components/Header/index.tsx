import React from 'react';
import { useHistory } from 'react-router-dom';

import logoJello from '../../assets/logoJello.png';

import NavLink from '../NavLink';

import { Container, HeaderContent, Title, NavBar } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  function handleLogoClick() {
    history.push('/');
  }

  return (
    <Container>
      <HeaderContent>
        <Title onClick={handleLogoClick}>
          <img src={logoJello} alt="Logo da Jello" />
          <h1> | Blog</h1>
        </Title>

        <NavBar>
          <NavLink to="/about-jello">Sobre</NavLink>
          <NavLink to="">Conteúdo</NavLink>
          <NavLink to="/coming">Em breve!</NavLink>
        </NavBar>
      </HeaderContent>
    </Container>
  );
};

export default Header;
