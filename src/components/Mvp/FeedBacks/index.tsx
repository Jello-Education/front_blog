import React from 'react';

import { Container, BoxText, BoxSection, CarousellDots, Dots } from './styles';

const FeedBacks: React.FC = () => {
  return (
    <Container>
      <h1>
        O que as  pessoas estão
        falando sobre a Jello  
      </h1>

      <line />

      <BoxSection>
        <BoxText className="first">

        </BoxText>

        <BoxText className="second">

        </BoxText>
      </BoxSection>

      <CarousellDots>
        <Dots active/>
        <Dots />
        <Dots />
      </CarousellDots>
    </Container>
  );
}

export default FeedBacks;