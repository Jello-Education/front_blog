import React from 'react';
import Image from 'next/image';

import { Container, Texts, Input, Icon  } from './styles';
import { FiSearch } from 'react-icons/fi';

const Section: React.FC = () => {
  return (
    <Container>
      <Texts>
        <h1>Estudar pode ser <b>divertido!</b></h1>

        <Input>
          <input placeholder="O que você deseja aprender hoje?" type="text"/>
          <Icon>
            <FiSearch size={30} color="#fff"/>
          </Icon>
        </Input>
        </Texts>
        <Image 
          src="/courses-example-img.svg"
          width={440}
          height={600}
        />
    </Container>
  );
}

export default Section;