import React from 'react';

import { 
  Container,
  Main, 
  Titles, 
  Profile, 
  User, 
  Icons,
  Icon
} from './styles';

import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter  } from "react-icons/fa";

import userFoto from '../../assets/userFoto.svg';

const Article: React.FC = () => {
  return (
    <Container>
      <Main>
        <Titles>
          <p>Tipo de conteúdo (categoria)</p>

          <h1>Titulo título título título</h1>
          <sub>Subtitulo Subtitulo</sub>
        </Titles>
        <Profile>
          <User>
            <img src={userFoto} alt="userFoto"/>
            <p>Por <b>Fulano de Tal</b></p>
          </User>
          <Icons>
            <Icon>
              <FaWhatsapp color="#fff" size={25}/>
            </Icon>

            <Icon>
              <FaFacebookF color="#fff" size={25}/>
            </Icon>

            <Icon>
              <FaInstagram color="#fff" size={25}/>
            </Icon>

            <Icon>
              <FaLinkedinIn color="#fff" size={25}/>
            </Icon>

            <Icon>
              <FaTwitter color="#fff" size={25}/>
            </Icon>
            
          </Icons>
        </Profile>
      </Main>
    </Container>
  );
};

export default Article;
