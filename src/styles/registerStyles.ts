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

  @media (min-width: 1440px) {
    .title {
      top: 9rem;
      left: 36rem;
    }
  }

  @media (min-width: 920px) and (max-width: 1400px) {
    .title {
      top: 9rem;
      left: 40%;
    }
  }
  @media (min-width: 700px) and (max-width: 900px) {
    .title {
      top: 8rem;
      left: 16rem;
    }
  }
  @media (max-width: 600px) {
    .title {
      left: 59px;
      top: 104px;
      font-size: 28px;
      width: 177px;
    }
  }
`;

export const Input = styled.div`
  .container {
    display: inline-flex;
    position: relative;
    width: 130px;
    height: 21px;
    left: 36rem;
    top: 5.8rem;
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
      padding: 0.5rem;
      /* identical to box height */
    }
  }
  .flag {
    position: absolute;
    width: 22px;
    height: 22px;
    top: 187%;
    left: 20%;
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
    top: 9.2rem;
    margin-top: 3rem;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #fd3373;
  }

  small {
    font-size: 10px;
  }

  @media (min-width: 1440px) {
    .container {
      left: 18.7rem;
      top: 5.5rem;
    }
    .lineText {
      width: 65%;
      left: 20%;
    }
    h1 {
      left: 22%;
    }
    .flag {
      top:168%;
    }
   
  }
  }
  @media (min-width: 950px) and (max-width: 1400px) {
    .container {
      top: 5rem;
      left: 38%;
    }
    
    .lineText {
      width: 65%;
      left: 20%;
    }
    h1 {
      left: 22%;
    }
 
  }
  @media (min-width: 700px) and (max-width: 900px) {
    .container {
      top: 5rem;
      left: 9rem;
    }
    .lineText {
      width: 71%;
      left: 105px;
    }
    h1 {
      left: 131px;
    }
    .flag {
      left: 14%;
      top: 42.2rem;
    }
  }
  @media (max-width: 600px) {
    .container {
      top: 5.5rem;
      left: 1.5rem;
    }
    .lineText {
      left: 24px;
      width: 80%;
      ::placeholder {
        font-size: 10px;
      }
    }
    h1 {
      left: 47px;;
      font-size: 18px;
    }
    .flag {
      top: 50.1rem;
      left: 2rem;
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
