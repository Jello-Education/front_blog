import React from "react";

import NavLink from "../NavLink";

import { Container, HeaderContent, NavBar } from "./styles";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <Link href="/">
          <img src="/novo-logo-jello.svg" alt="Logo da Jello" />
        </Link>

        <NavBar>
          <a href="/" className="home">Home</a>
          <NavLink to="/coming">Comece a Aprender</NavLink>
          <NavLink to="/coming">Conteúdos</NavLink>
          <NavLink to="/about">Sobre a Jello</NavLink>
        </NavBar>
      </HeaderContent>
    </Container>
  );
};

export default Header;
