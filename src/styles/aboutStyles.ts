import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  /* width: 50vh; */
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: -150px;
`;

export const Contents = styled.div`
  max-width: 1120px;
  padding: 0 20px;
`;

export const AboutJelloDetails = styled.div`
  img {
    width: 100%;
    min-height: 370px;
    border-radius: 0;
  }

  @media (min-width: 768px) {
    img {
      width: 100%;
      min-height: 381px;
    }
  }

  @media (max-width: 600px) {
    margin-bottom: -40px;
    img {
      min-height: 322px;
      margin-top: -20px;
    }
  }
`;
