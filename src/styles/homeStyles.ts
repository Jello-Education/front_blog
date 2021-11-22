import styled from "styled-components";

import InputComponent from "../components/Shared/InputComponent";
import ButtonComponent from "../components/Shared/ButtonComponent";

export const Container = styled.div`
  position: relative;
  display: block;
  height: 100vh;

  @media (max-width: 320px) {
    width: 95vh;
  }
`;

export const Background = styled.div`
  position: relative;
  top: 57px;
  z-index: -1;
  width: 100%;

  img {
    width: 100%;
    height: 40rem;
    top: 37px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 12rem;
  background: #f2f2f2;
  border-radius: 53px 53px 0 0;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 14px;
`;

export const InputSearchContainer = styled.div`
  display: flex;
  width: 45%;
  height: 5rem;
  background: #fafafa;
  border-radius: 35px;
  justify-content: space-between;
  padding: 12px 25px 12px 25px;

  @media (max-width: 1000px) {
    width: 90%;
  }

  input {
    border: none;
    background: transparent;
    width: 90%;

    ::placeholder {
      color: #b0a8a8;
      font-size: 1.2rem;
      overflow: visible;
    }
  }

  div {
    width: 3rem;
    height: 3rem;
    border-radius: 30px;
    background: #44f9bd;
    box-shadow: 0px 4px 4px rgba(253, 51, 115, 0.2);
    display: flex;
    justify-content: center;
    align-content: center;

    svg {
      height: 2.5rem;
      width: 2.5rem;
      margin-top: 1.5px;
    }
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
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: #fd3373;
  }

  span {
    font-family: "Poppins", sans-serif;
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
  width: 100%;
  padding: 18px 24px;
  background: #e6e6e6;
  border-radius: 53px 53px 0px 0px;

  .footer-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 18px;
      color: #282828;
    }
  }

  .footer-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1000px) {
      justify-content: center;
      align-items: center;

      .footer-bottom-inputs {
        width: 95% !important;
      }
    }

    .footer-bottom-inputs {
      display: flex;
      flex-wrap: wrap;
      width: 100rem;
    }

    .footer-bottom-button {
      display: flex;
      width: 15rem;
    }
  }
`;
