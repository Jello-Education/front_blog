import styled from "styled-components";

export const Container = styled.div`
  

  .progress {
    position: absolute;
    top: 15% ;
    left: 31%;
  }
  .title {
    position: relative;
    width: 40rem;
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

  .subTitle {
    position: relative;
    width: 26rem;
    font-size: 1rem;
    left: 29.5rem;
    top: 10rem;
    color: #fd3373;
  }

  .container {
    position: relative;
    width: 25em;
    top: 13rem;
    left: 30rem;
    padding-bottom: 5rem;
    
  }

  .icon {
    padding: 25px;
    cursor: pointer ;
  }

  .background {
    position: absolute;
    width: 22px;
    height: 22px;
    top: 187%;
    left: 20%;
    background-size: 100%
    background-image: url("image-horizontal.svg");
    background-repeat: no-repeat;
  }

  .footer {
    position: relative;
    top: 11.7rem;
    width: 100%;
  }

  @media (min-width: 950px) and (max-width: 1500px) {
    .title {
      top: 9rem;
      left: 23rem;
    }
  }

  @media (min-width: 700px) and (max-width: 900px) {
    .title {
      top: 8rem;
      left: 229px;
    }
  }
  @media (max-width: 600px) {
    .title {
      left: -13px;
     top: 104px;
     font-size: 15px;
     margin-left: 68px;
     width: 177px;
    }
    .subTitle {
      width: 13rem;
      font-size: 1rem;
      left: 7.5rem;
    }
    .container {
      width: 19em;
     left: -1rem;
     padding-bottom: 3rem;
     margin-left: 57px;
    }
  }
`;

export const Input = styled.div`
  .container {
    display: inline-flex;
    position: relative;
    width: 37rem;
    left: 36rem;
    top: 5.8rem;
    margin: 10px 10px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .select {
    position: relative;
    left: 250px;
    top: 10rem;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    margin-bottom: 15px;
  }
  .select select {
    font-family: "Arial";
    display: inline-block;
    width: 830px;
    cursor: pointer;
    padding: 8px 17px;
    outline: 0;
    border: 1px solid #fd98b8;
    border-radius: 33px;
    background: #ffffff;
    color: #c5c5c5;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .select select::-ms-expand {
    display: none;
  }
  .select select:hover,
  .select select:focus {
    color: #a6a6a6;
    background: #ffffff;
  }
  .select select:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  .select_arrow {
    position: absolute;
    top: 14px;
    right: 4rem;
    width: 18px;
    height: 18px;
    border: solid #ff8eb2;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  .select select:hover ~ .select_arrow,
  .select select:focus ~ .select_arrow {
    border-color: #f084a6;
  }
  .select select:disabled ~ .select_arrow {
    border-top-color: #cccccc;
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

  h1 {
    position: relative;
    width: 28rem;
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
  }

  @media (min-width: 950px) and (max-width: 1400px) {
    .container {
      top: 8rem;
      left: 10.8rem;
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
      left: 8.5rem;
    }

    .lineText {
      width: 71%;
      left: 105px;
    }

    h1 {
      left: 131px;
    }
  }

  @media (max-width: 600px) {
    .container {
      width: 19rem;
      top: 6.5rem;
      left: 0.5rem;
      font-size: 14px;
    }

    .select select {
      width: 174%;
    }

    .select {
      left: 1px;
      top: 10rem;
    }

    .select_arrow {
      right: -7rem;
    }
    .lineText {
      left: 24px;
      width: 80%;

      ::placeholder {
        font-size: 10px;
      }
    }

    h1 {
      width: 24rem;
      left: 47px;
      font-size: 18px;
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
    padding: 1rem 5rem;

    margin-bottom: 15rem;
    margin-top: 35px;
  }

  @media (min-width: 950px) and (max-width: 1400px) {
    a {
      left: 38%;
      top: 8rem;
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
