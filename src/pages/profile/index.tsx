import React from 'react';

import Section from '../../components/Profile/Section';
import Aside from '../../components/Profile/Aside';
import SEO from '../../components/Seo';
import Header from '../../components/Shared/Header';

import { Container, Top, Main } from '../../styles/profileStyles';

const profile: React.FC = () => {
  return (
    <Container>
      <Header />
      <SEO title="profile"/>
      <Top>
        <img src="/profileImage.png"/>
      </Top>
      <Main>
        <Aside />
        <Section />
      </Main>
    </Container>
  );
}

export default profile;