import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: block;
  height: 100vh;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  padding: 8px 0;
  background: #fafafa;
  border-radius: 0 0 20px 20px;
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
  position: relative;
  top: 57px;
  z-index: -1;
  width: 100%;

  div {
    position: absolute;
    z-index: 1;
    width: 516px;
    height: 299px;
    background: rgba(214, 214, 214, 0.7);
    margin-left: 24px;
    margin-top: 193px;
    overflow: hidden;
  }

  img {
    width: 100%;
    top: 57px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 195px;
  background: #f2f2f2;
  border-radius: 53px 53px 0 0;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const InputSearchContainer = styled.div`
  display: flex;
  width: 920px;
  background: #fafafa;
  border-radius: 35px;
  justify-content: space-between;
  padding: 12px 25px 12px 25px;

  input {
    border: none;
    background: transparent;
    width: 400px;

    ::placeholder {
      color: #b0a8a8;
      font-size: 24px;
      overflow: visible;
    }
  }

  div {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: #44f9bd;
    box-shadow: 0px 4px 4px rgba(253, 51, 115, 0.2);
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;
