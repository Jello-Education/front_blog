import React from "react";

import Header from "../components/Shared/Header";
import JelloInfo from "../components/Shared/JelloInfo";
import SEO from "../components/Seo";
import Courses from "../components/About/Courses";

import { Container, Contents, AboutJelloDetails } from "../styles/aboutStyles";

const Home: React.FC = () => {
  const post = {
    author: "Fulano de tal",
    type: "Tipo de conteúdo",
    date: "Data da postagem",
    image:
      "https://images.unsplash.com/photo-1507537064587-464384459bb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    avatar:
      "https://images.unsplash.com/photo-1533435137002-455932c8538f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  };

  return (
    <>
      <Container>
        <Header />

        <SEO title="Sobre" />

        <AboutJelloDetails>
          <img src="/about-banner.svg" alt="banner" />
        </AboutJelloDetails>

        <Contents>
          <Courses />
        </Contents>
      </Container>
      <JelloInfo />
    </>
  );
};

export default Home;
