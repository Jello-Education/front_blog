import React from "react";

import { Container, Texts, Input, Icon, Background } from "./styles";
import { FiSearch } from "react-icons/fi";

const Section: React.FC = () => {
  return (
    <Container>
      <Background>
        <img src="./courses-bg.png" />
      </Background>
      <Texts>
        <h1>
          Estudar pode <br /> ser <b>divertido!</b>
        </h1>
        <Input>
          <input placeholder="O que você deseja aprender hoje?" type="text" />
          <Icon>
            <FiSearch size={30} color="#fff" />
          </Icon>
        </Input>
      </Texts>
    </Container>
  );
};

export default Section;
