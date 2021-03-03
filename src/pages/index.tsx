import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import api from '../services/api';

import Header from '../components/Shared/Header';
import Post from '../components/Home/Post';
import NewsletterSection from '../components/Shared/NewsletterSection';
import JelloInfo from '../components/Shared/JelloInfo';
import SEO from '../components/Seo';

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
} from '../styles/homeStyles';


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

      <SEO title="Home" image="logoJelloShort.svg" />

      <Background>
        <div />
        <img 
        src="/homeBackgroundImage.png" 
        alt="Imagem de fundo da Home" 
        />
      </Background>

      <SearchContainer>
        <InputSearchContainer>
          <input placeholder="O que você deseja buscar?" />
          <div>
            <img 
            src="/search-icon.svg" 
            alt="Ícone de pesquisa" 
            />
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
          <Image
            src="/chevron-right-icon.svg"
            alt="Próxima página"
            className="next-page-image"
            width={300}
            height={300}
          />
        </div>

        <div className="last-page">
          <Image
            src="/double-chevron-right-icon.svg"
            alt="Próxima página"
            className="last-page-image"
            width={300}
            height={300}
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
            <Image 
              src="/expand-less.svg" 
              alt="Ocultar formulário" 
              width={30}
              height={30}
            />
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
