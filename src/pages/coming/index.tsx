import React from "react";

import Header from "../../components/Shared/Header";
import NewsletterSection from "../../components/Shared/NewsletterSection";
import JelloInfo from "../../components/Shared/JelloInfo";
import SEO from "../../components/Seo";

import { Container, ComingSoonContainer } from "../../styles/comingStyles";

const Coming: React.FC = () => {
  return (
    <>
      <Container>
        <Header />

        <SEO title="Em breve" />

        <ComingSoonContainer>
          <img src="/em-breve.svg" alt="Imagem ilustrativa para 'Em breve'" />

          <h2>
            Um novo jeito de aprender está <br /> chegando, em breve...
          </h2>
          <NewsletterSection />
        </ComingSoonContainer>
      </Container>
      <JelloInfo />
    </>
  );
};

export default Coming;
