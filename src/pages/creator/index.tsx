import React from "react";

import { Container, Left, Right, Content, Ad } from '../../styles/creatorStyles';

import Profile from "../../components/Creator/Profile";
import Header from "../../components/Shared/Header";
import JelloInfo from "../../components/Shared/JelloInfo";
import Calendar from "../../components/Creator/Calendar";

const Creator:React.FC = () => {
  return (
    <Container>
      <Header />
      <img src="./creator-banner .svg" alt="banner"/>
      <Content>
        <Left>
          <Profile />
        </Left>
        <Right>
          <Ad>
            <span>Anuncio</span>
          </Ad>
          <Calendar />
        </Right>
      </Content>
      <JelloInfo />
    </Container>
  )
}

export default Creator;

export const getServerSideProps=  () => {
  const creatorToken = ""

  if (!creatorToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}