import React from 'react';
import Image from 'next/image';

import {
  Container,
  TopContainer,
  ImageContainer,
  Title,
  Description,
  BottomContainer,
} from './styles';


interface IPost {
  author: string;
  type: string;
  date: string;
  image: string;
  avatar: string;
}

interface IProps {
  post: IPost;
}

const Post: React.FC<IProps> = ({ post }: IProps) => {
  return (
    <Container>
      <TopContainer>
        <span>{post.type}</span>
        <span>{post.date}</span>
      </TopContainer>

      <ImageContainer>
        <img 
          src={post.image} 
          alt="Imagem da postagem" 
          className="postImage" 
        />
      </ImageContainer>

      <Title />

      <Description />

      <BottomContainer>
        <div>
          <img src={post.avatar} alt="Foto do autor do post" />
        </div>

        <span>
          Por &nbsp;
          {post.author}
        </span>
      </BottomContainer>
    </Container>
  );
};

export default Post;
