import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  padding: 8px 0;
  background: #ffffff;
  border-radius: 0 0 32px 32px;
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
