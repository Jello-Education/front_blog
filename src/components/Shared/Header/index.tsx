import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
          <div className="wrapper">
            <input type="checkbox" id="btn" hidden />
            <label htmlFor="btn" className="menu-btn">
              <i className="fas fa-bars">
                <FaBars />
              </i>
              <i className="fas fa-times">
                <FaTimes />
              </i>
            </label>
            <nav id="sidebar">
              <div className="title">Menu</div>
              <ul className="list-items">
                <NavLink to="/coming">
                  <li>Comece a Aprender</li>
                </NavLink>
                <NavLink to="/coming">
                  <li>Conteúdos</li>
                </NavLink>
                <NavLink to="/about">
                  <li>Sobre a Jello</li>
                </NavLink>
              </ul>
            </nav>
          </div>
        </NavBar>
      </HeaderContent>
    </Container>
  );
};

export default Header;
