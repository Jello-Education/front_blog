import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const AboutJelloContainer = styled.div`
  display: flex;
  margin-top: 188px;
  background: rgba(253, 152, 184, 0.5);
  border-radius: 10px;
  width: 100%;
  height: 402px;
  align-items: center;
`;

export const AboutJelloDetails = styled.div`
  display: block;
  width: 100%;
  height: 268px;
  background: #fd98b8;
  border-radius: 10px;

  text-align: center;

  h1 {
    padding-top: 46px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 52px;
    color: #fafafa;
  }

  h3 {
    padding-top: 26px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 36px;
    color: #fafafa;
  }
`;
