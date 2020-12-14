import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import chevronIcon from '../../assets/chevron-right-icon.svg';
import doubleChevronIcon from '../../assets/double-chevron-right-icon.svg';
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
  PostsContainer,
  PagesNavContainer,
} from './styles';

import logoJello from '../../assets/logoJello.png';
import searchIcon from '../../assets/search-icon.svg';

import Post from '../../components/Post';
import NavLink from '../../components/NavLink';

interface IPost {
  id: number;
  author: string;
  type: string;
  date: string;
  image: string;
  avatar: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    async function loadPosts(): Promise<void> {
      const response = await api.get('/posts');

      setPosts(response.data);
    }

    loadPosts();
  }, []);

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

      <PostsContainer>
        {posts && posts.map(post => <Post key={post.id} post={post} />)}
      </PostsContainer>

      <PagesNavContainer>
        <span className="selected-page">1 &nbsp;</span>
        <span>2 &nbsp;</span>
        <span>3 &nbsp;</span>
        <span>...</span>

        <div className="next-page">
          <img
            src={chevronIcon}
            alt="Próxima página"
            className="next-page-image"
          />
        </div>

        <div className="last-page">
          <img
            src={doubleChevronIcon}
            alt="Próxima página"
            className="last-page-image"
          />
        </div>
      </PagesNavContainer>
    </Container>
  );
};

export default Home;
