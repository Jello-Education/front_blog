import styled from "styled-components";

export const Container = styled.div`
  .title {
    position: relative;
    width: 302px;
    height: 36px;
    left: 569px;
    top: 152px;

    font-weight: bold;
    font-size: 48px;
    line-height: 59px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #fd3373;
  }

  @media (min-width: 950px) and (max-width: 1500px) {
    .title {
      left: 40%;
    }
  }

  @media (min-width: 700px) and (max-width: 900px) {
    .title {
      left: 229px;
    }
  }
  @media (max-width: 600px) {
    .title {
      left: 59px;
      top: 120px;
      font-size: 28px;
      width: 177px;
    }
  }
`;

export const Input = styled.div`
  .container {
    display: block-inline;
    position: relative;
    width: 80px;
    height: 21px;
    left: 36rem;
    top: 12.1rem;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .student {
    position: relative;
    left: 1.5rem;
  }

  .prof {
    position: relative;
    left: 10rem;
    top: -1.2rem;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0.2rem;
    left: -2rem;
    height: 21px;
    width: 21px;
    border: 2px solid #fd3373;
    border-radius: 50%;
  }

  .container input:checked ~ .checkmark {
    background-color: white;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    top: 1px;
    left: 1px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fd3373;
  }

  .lineText {
    position: relative;
    width: 690px;
    height: 0px;
    left: 340px;
    top: 10rem;

    padding: 12px 20px;
    margin: 8px 0;
    border: none;
    border-bottom: 2px solid #fd98b8;

    ::placeholder {
      font-size: 20px;
      line-height: 15px;
      color: #bdbdbd;

      /* identical to box height */
    }
  }
  .flag {
    position: absolute;
    width: 22px;
    height: 22px;
    top: 43.6rem;
    left: 21rem;
    z-index: 99;

    background-size: 22px 22px;
    background-image: url("bandeira.svg");
    background-repeat: no-repeat;
  }

  h1 {
    position: relative;
    width: 276.86px;
    height: 25px;
    left: 340px;
    top: 10rem;
    margin-top: 3rem;

    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #fd3373;
  }

  @media (min-width: 1440px) {
    .container {
      width: 93px;
      height: 21px;
      left: 44rem;
      top: 10.1rem;
    }

    .lineText {
      width: 65%;
      left: 20%;
    }
    h1 {
      left: 20%;
    }

    .student {
      left: -106%;
    }

    .prof {
      left: 50%;

      top: -19px;
    }
  }
  }

  @media (min-width: 950px) and (max-width: 1400px) {
    .container {
      left: 49%;
    }
    
    .lineText {
      width: 65%;
      left: 20%;
    }
    h1 {
      left: 20%;
    }

    .student {
      left: -106%;
    }

    .prof {
      left: 96%;
      top: -19px;
    }
  }

  @media (min-width: 700px) and (max-width: 900px) {
    .lineText {
      width: 71%;

      left: 105px;
    }

    h1 {
      left: 106px;
    }

    .flag {
      left: 7rem;
    }

    .student {
      left: -18.5rem;
    }
    .prof {
      top: -1.3rem;
      left: -7rem;
    }
  }

  @media (max-width: 600px) {
    .container {
      left: 6rem;
    }

    .lineText {
      left: 24px;
      width: 80%;

      ::placeholder {
        font-size: 10px;
      }
    }

    h1 {
      left: 26px;
      font-size: 18px;
    }

    .flag {
      top: 42.6rem;
      left: 2rem;
    }

    .student {
      left: -1.5rem;
    }

    .prof {
      left: 12rem;
      top: -1.8rem;
    }
  }
`;
export const Button = styled.div`
  a {
    position: relative;
    width: 325.71px;
    height: 56px;
    left: 549px;
    top: 11rem;

    background: #44f9bd;
    box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.5);
    border-radius: 50px;

    cursor: pointer;
    font-weight: bold;
    font-size: 34px;
    line-height: 59px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 1rem 6rem;

    margin-bottom: 15rem;
    margin-top: 35px;
  }

  @media (min-width: 950px) and (max-width: 1400px) {
    a {
      left: 38%;
    }
  }
  @media (min-width: 700px) and (max-width: 900px) {
    a {
      left: 210px;
    }
  }
  @media (max-width: 600px) {
    a {
      width: 214.71px;
      height: 46px;
      left: 51px;
      font-size: 23px;
    }
  }
`;
