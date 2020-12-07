import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  padding: 8px 0;
  background: #fafafa;
  border-radius: 0 0 20px 20px;
  z-index: 2;
  /*   border: 1px solid;
  border-color: #d6d6d6; */
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
  position: -webkit-sticky;
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
  }

  img {
    width: 100%;
    position: absolute;
    top: 57px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  height: 195px;
  background: #f2f2f2;
  border-radius: 53px 53px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 660px;
`;

export const InputSearchContainer = styled.div`
  width: 920px;
  background: #fafafa;
  border-radius: 35px;
  display: flex;
  justify-content: space-between;
  padding: 12px 25px 12px 45px;

  input {
    border: none;

    ::placeholder {
      color: #b0a8a8;
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
