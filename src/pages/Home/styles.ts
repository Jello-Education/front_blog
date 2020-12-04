import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  position: relative;
  padding: 8px 0;
  background: #fafafa;
  border-radius: 0 0 20px 20px;
  z-index: 2;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-right: 83px;

  img {
    margin-left: 10px;
    margin-right: 11px;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 36px;
    color: #282828;
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;

export const Background = styled.div`
  z-index: -1;

  div {
    position: absolute;
    z-index: 1;
    width: 516px;
    height: 299px;
    background: rgba(214, 214, 214, 0.7);
    margin-left: 24px;
    margin-top: 193px;
  }

  img {
    position: absolute;
    top: 57px;
  }
`;
