import React from 'react';

import { Container, Header, HeaderContent, Title, NavBar } from './styles';

import logoJello from '../../assets/logoJello.png';
import NavLink from '../../components/NavLink';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
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
      </Header>
    </Container>
  );
};

export default Home;
