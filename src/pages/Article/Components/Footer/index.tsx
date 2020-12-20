import React from 'react';

import { Container, Posts } from './styles';

import Post from '../Post';
import News from '../../../../components/Mail';

const Footer: React.FC = () => {
  return (
    <Container>
      <h1>Temas Relacionados</h1>

      <Posts>
        <Post />
        <Post />
        <Post />
      </Posts>

      <News />
    </Container> 
  );
}

export default Footer;