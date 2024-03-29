import styled from "styled-components";
import { BackgroundColor } from "./index";

export const Container = styled.div<BackgroundColor>`
  width: 330px;
  margin: 0 10px;

  li {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 48px;
    color: #f1f1f1;
    color: ${({ variant }) =>
      variant === "primary"
        ? "#282828"
        : variant === "dafault"
        ? "#FFFFFF"
        : "#FFFFFF"};
  }

  img {
    position: relative;
    top: 3.5px;
    margin-right: 0.5em;
  }

  .ContainerList {
    margin: 10px;
  }

  .icon-branco {
    filter: grayscale(100%) contrast(100%) invert(100%) brightness(2);
  }

  .planoBranco {
    padding: 10px;

    background: ${({ variant }) =>
      variant === "primary"
        ? "#FFFFFF"
        : variant === "dafault"
        ? "#FD3373"
        : "#FFFFFF"};
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }

  .planoTitulo {
    margin-top: 1em;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    text-align: center;
    color: ${({ variant }) =>
      variant === "primary"
        ? "#282828"
        : variant === "dafault"
        ? "#FFFFFF"
        : "#FFFFFF"};
  }
  .planoPreco {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #44f9bd;
    text-shadow: 0px 2px 1px #000000;
    margin-bottom: 20px;
  }

  @media (max-width: 1100px) {
    width: 270px;

    .planoTitulo {
      font-size: 38px;
    }
    .planoPreco {
      font-size: 38px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 890px) {
    width: 330px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 0.3 em;
    }
  }
`;

export const Botao = styled.div`
  margin-top: 20px;

  button {
    display: block;

    width: 100%;
    height: 80px;

    border: none;
    background: #44f9bd;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: #282828;
  }

  @media (max-width: 890px) {
    margin-top: 10px;
    button {
      margin-bottom: 30px;
      font-size: 28px;
    }
  }
`;
