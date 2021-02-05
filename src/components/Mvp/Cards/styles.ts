import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 128px 254px;

  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  position: relative;

  > img {
    position: absolute;
    bottom: 32px;
    left: 64px;
  }

  @media (max-width: 1170px) {
    grid-template-columns: 50% 50%;
  }
`;
