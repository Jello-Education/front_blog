import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import chevronIcon from '../../assets/chevron-right-icon.svg';
import doubleChevronIcon from '../../assets/double-chevron-right-icon.svg';
import homeBackgroundImage from '../../assets/homeBackgroundImage.png';
import logoJello from '../../assets/logoJello.png';
import logoJelloShort from '../../assets/logoJelloShort.svg';
import searchIcon from '../../assets/search-icon.svg';
import mailImage from '../../assets/mail-image.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import linkedInIcon from '../../assets/linkedin-icon.svg';
import lnstagramIcon from '../../assets/instagram-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import youtubeIcon from '../../assets/youtube-icon.svg';
import playstoreIcon from '../../assets/playstore-icon.svg';
import applestoreIcon from '../../assets/apple-store-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import expandLess from '../../assets/expand-less.svg';

import Post from '../../components/Post';
import NavLink from '../../components/NavLink';

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
  SignNewsletterContainer,
  Input,
  Button,
  JelloInfoContainer,
  JelloRightsReserved,
  Footer,
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

      <SignNewsletterContainer>
        <div className="newsletter-section">
          <div className="newsletter-container">
            <img src={mailImage} alt="Newsletter" />

            <div className="newsletter-right-side">
              <div className="newsletter-top">
                <span>Fique por dentro das nossas novidades!</span>
              </div>

              <div className="newsletter-bottom">
                <p>
                  Assine
                  <span> gratuitamente </span>a Newsletter do nosso blog para
                  receber em primeira mão os
                  <span> melhores conteúdos sobre educação!</span>
                </p>

                <div className="forms">
                  <Input placeholder="Nome" />
                  <Input placeholder="Email" />
                  <Button>Quero receber!</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignNewsletterContainer>

      <JelloInfoContainer>
        <div className="jello-info-top">
          <div className="jello-info-left">
            <p>
              <span>Educação</span>
            </p>
            <p>
              <Link to="/coming">Aprenda novas coisas</Link>
            </p>
            <p>
              <Link to="/coming">Crie seu curso</Link>
            </p>
            <p>
              <Link to="/coming">Programa de afiliados</Link>
            </p>
            <p>
              <Link to="/coming">Comunidade</Link>
            </p>
          </div>
          <div className="jello-info-center">
            <p>
              <span>JELLO</span>
            </p>
            <p>
              <Link to="/coming">A empresa</Link>
            </p>
            <p>
              <Link to="/coming">Seja um patrocinador</Link>
            </p>
            <p>
              <Link to="/coming">Guia de uso da marca</Link>
            </p>
          </div>
          <div className="jello-info-right">
            <p>
              <span>Suporte</span>
            </p>
            <p>
              <Link to="/coming">Central de ajuda</Link>
            </p>
            <p>
              <Link to="/coming">Termos de uso</Link>
            </p>
            <p>
              <Link to="/coming">Termos de compra</Link>
            </p>
            <p>
              <Link to="/coming">Política de privacidade</Link>
            </p>
            <p>
              <Link to="/coming">Política de cookies</Link>
            </p>
          </div>
        </div>

        <div className="jello-info-bottom">
          <div className="jello-social-network">
            <span>Nossas redes e Apps</span>
            <div className="jello-social-network-icons">
              <Link to="/coming">
                <img src={facebookIcon} alt="Logo do Facebook" />
              </Link>

              <Link to="/coming">
                <img src={linkedInIcon} alt="Logo do LinkedIn" />
              </Link>

              <Link to="/coming">
                <img src={lnstagramIcon} alt="Logo do Instragram" />
              </Link>

              <Link to="/coming">
                <img src={twitterIcon} alt="Logo do Twitter" />
              </Link>

              <Link to="/coming">
                <img src={youtubeIcon} alt="Logo do Youtube" />
              </Link>

              <Link to="/coming">
                <img src={playstoreIcon} alt="Logo do Play Store" />
              </Link>

              <Link to="/coming">
                <img src={applestoreIcon} alt="Logo do Apple Store" />
              </Link>
            </div>
          </div>

          <div className="jello-contact">
            <img src={phoneIcon} alt="Símbolo de telefone" />
            <div>
              <p>
                Dúvidas? Sugestões?{' '}
                <p>
                  <span>Entre em contato!</span>
                </p>
              </p>
            </div>
          </div>
          <div className="jello-companies">
            <img src={logoJelloShort} alt="Logo Jello" />
            <div>
              <p>
                Planos para empresas?{' '}
                <p>
                  <span>Saiba mais.</span>
                </p>
              </p>
            </div>
          </div>
        </div>
      </JelloInfoContainer>

      <JelloRightsReserved>
        <span>Jello - 2020 © Todos os direitos reservados</span>
      </JelloRightsReserved>

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
