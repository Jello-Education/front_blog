import React from "react";

import Header from "../../components/Shared/Header";
import JelloInfo from "../../components/Shared/JelloInfo";
import SEO from "../../components/Seo";
import Courses from "../../components/About/Courses";

import {
  Container,
  Contents,
  AboutJelloDetails,
} from "../../styles/aboutStyles";

const AboutJello: React.FC = () => {
  return (
    <Container>
      <Header />

      <SEO title="Sobre" />

      <AboutJelloDetails>
        <img src="/about-banner.svg" alt="banner" />
      </AboutJelloDetails>

      <Contents>
        <Courses />
      </Contents>
      <JelloInfo />
    </Container>
  );
};

export default AboutJello;
