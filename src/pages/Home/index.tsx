import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import chevronIcon from '../../assets/chevron-right-icon.svg';
import doubleChevronIcon from '../../assets/double-chevron-right-icon.svg';
import homeBackgroundImage from '../../assets/homeBackgroundImage.png';
import searchIcon from '../../assets/search-icon.svg';
import expandLess from '../../assets/expand-less.svg';

import Header from '../../components/Header';
import Post from '../../components/Post';
import NewsletterSection from '../../components/NewsletterSection';
import JelloInfo from '../../components/JelloInfo';

import {
  Container,
  Background,
  SearchContainer,
  InputSearchContainer,
  PostsContainer,
  PagesNavContainer,
  Footer,
  Input,
  Button,
} from './styles';

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
      <Header />

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

      <NewsletterSection />

      <JelloInfo />

      <Footer>
        <div>
          <div className="footer-top">
            <span>
              Fique por dentro das nossas novidades! Não se preocupe, odiamos
              Spam.
            </span>
            <img src={expandLess} alt="Ocultar formulário" />
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-inputs">
              <Input placeholder="Nome" />
              <Input placeholder="Email" />
            </div>

            <div className="footer-bottom-button">
              <Button>Quero receber!</Button>
            </div>
          </div>
        </div>
      </Footer>
    </Container>
  );
};

export default Home;
