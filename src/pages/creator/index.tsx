import React from "react";

import { Container, Left, Right, Content, Ad, Screen } from '../../styles/creatorStyles';

import Profile from "../../components/Creator/Profile";
import Header from "../../components/Shared/Header";
import JelloInfo from "../../components/Shared/JelloInfo";

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
          <Screen>
      
          </Screen>
        </Right>
      </Content>
      <JelloInfo />
    </Container>
  )
}

export default Creator;