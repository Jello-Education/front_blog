import React from 'react';

import homeBackgroundImage from '../../assets/homeBackgroundImage.png';

import {
  Container,
  Header,
  HeaderContent,
  Title,
  NavBar,
  Background,
  SearchContainer,
  InputSearchContainer,
} from './styles';

import logoJello from '../../assets/logoJello.png';
import searchIcon from '../../assets/search-icon.svg';

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

      <SearchContainer>
        <InputSearchContainer>
          <input placeholder="O que você deseja buscar?" />
          <div>
            <img src={searchIcon} alt="Ícone de pesquisa" />
          </div>
        </InputSearchContainer>
      </SearchContainer>
    </Container>
  );
};

export default Home;
