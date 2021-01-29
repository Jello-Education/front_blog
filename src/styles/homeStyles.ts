import styled from 'styled-components';

import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

export const Container = styled.div`
  position: relative;
  display: block;
  height: 100vh;
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
    height: 731px;
    top: 37px;
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
  margin-bottom: 14px;
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

export const PostsContainer = styled.section`
  padding-right: 24px;
  padding-left: 24px;
  width: 100%;
  margin: auto;
  background: #fafafa;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
`;

export const PagesNavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 68px;
  padding-bottom: 77px;
  background: #fafafa;

  .selected-page {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #fd3373;
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #282828;
  }

  .next-page {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #fd3373;
    margin-left: 17px;
  }

  .last-page {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #fd3373;
    margin-left: 7px;
    align-items: center;
  }
`;

export const Input = styled(InputComponent)``;

export const Button = styled(ButtonComponent)``;

export const Footer = styled.footer`
  padding: 18px 24px;
  background: #e6e6e6;
  border-radius: 53px 53px 0px 0px;

  .footer-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 18px;
      color: #282828;
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;

    .footer-bottom-inputs {
      display: flex;
      width: 84%;
    }

    .footer-bottom-button {
      display: flex;
      width: 16%;
    }
  }
`;