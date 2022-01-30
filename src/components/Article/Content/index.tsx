import React from 'react';
import Image from 'next/image';

import { Container, BlogImage, BlogContent, } from './styles';


const Content: React.FC = () => {
  return (
    <Container>
      <BlogImage>
          <Image 
            src="/imgBlogExample.svg" 
            alt="blogImg"
            width={1038}
            height={616}
            />
          <p>Fonte da imagem</p>
        </BlogImage>
      <BlogContent />
    </Container>
  );
}

export default Content;