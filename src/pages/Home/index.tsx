import React from 'react';

import homeBackgroundImage from '../../assets/homeBackgroundImage.png';

import {
  Container,
  Header,
  HeaderContent,
  Title,
  NavBar,
  Background,
} from './styles';

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

      <Background>
        <div />
        <img src={homeBackgroundImage} alt="Imagem de fundo da Home" />
      </Background>
    </Container>
  );
};

export default Home;
