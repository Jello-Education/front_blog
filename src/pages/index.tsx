import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import api from '../services/api';

import Header from '../components/Shared/Header';
import Post from '../components/Home/Post';
import NewsletterSection from '../components/Shared/NewsletterSection';
import JelloInfo from '../components/Shared/JelloInfo';
import SEO from '../components/Seo';

import { FiSearch } from 'react-icons/fi';

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


const Home: React.FC = () => {

  const post = {
    author: "Fulano de tal",
    type: "Tipo de conteúdo",
    date: "Data da postagem",
    image: "https://images.unsplash.com/photo-1507537064587-464384459bb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    avatar: "https://images.unsplash.com/photo-1533435137002-455932c8538f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  }

  return (
    <Container>
      <Header />

      <SEO title="Home" />

      <Background>
        <img 
        src="/homeBackgroundImage.png" 
        alt="Imagem de fundo da Home" 
        />
      </Background>

      <SearchContainer>
        <InputSearchContainer>
          <input placeholder="O que você deseja buscar?" />
          <div>
            <FiSearch color="#fff"/>
          </div>
        </InputSearchContainer>
      </SearchContainer>

      <PostsContainer>
        <Post  post={post} />
        <Post  post={post} />
        <Post  post={post} />
        <Post  post={post} />
        <Post  post={post} />
        <Post  post={post} />
        <Post  post={post} />
        <Post  post={post} />
        <Post  post={post} />
        <Post  post={post} />
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
