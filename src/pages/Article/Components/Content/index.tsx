import React from 'react';

import { Container, BlogImage, BlogContent, } from './styles';

import blogImg from '../../../../assets/imgBlogExample.svg';

const Content: React.FC = () => {
  return (
    <Container>
      <BlogImage>
          <img src={blogImg} alt="blogImg"/>
          <p>Fonte da imagem</p>
        </BlogImage>
      <BlogContent />
    </Container>
  );
}

export default Content;