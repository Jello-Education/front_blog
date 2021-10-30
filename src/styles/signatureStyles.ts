import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  /* width: 50vh; */
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: -150px;

  .TitlePlans {
    margin: 64px 0;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    font-family: Montserrat;
  }
`;

export const Titulo = styled.div`
  width: 100%;

  h2 {
    position: absolute;
    width: 652px;
    height: 45px;
    left: 80px;
    top: 371px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 140.62%;
  
  }
  p {
    position: absolute;
    width: 600px;
    height: 94px;
    left: 80px;
    top: 434px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
  }
  h1 {
    margin: 1em;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    letter-spacing: 0.015em;
    @media (min-width: 764px) {
      margin: 0.5em;
      position: relative;
      left: 9em;
      width: 18em
}
@media (min-width: 1024px) {
  left: 6em;
}
    
    @media (min-width: 1920px) {
  left: 9em;
}
    }
  }

  @media (min-width: 1920px) {
    img {
      height: 122vh;
    }
  }

  @media (min-width: 1080px) {
    img {
    width: 100%;
  }
  

  @media (max-width: 600px) {
    img {
      max-width: 707px; 
    } 
    h2 {
      left: 45px;
      top: 142px;
      width: 434px; 
      font-size: 26px; 
    }
    p {
      left: 45px;
      top: 194px;
      width: 432px;
      font-size: 23px; 
    }
    h1 {
      width: 13em;
      position: relative;
      font-size: 35px;
      left: 5.2em;
    }
  }
`;

export const Botao = styled.div`
  .button-top {
    position: absolute;
    width: 320px;
    height: 80px;
    left: 80px;
    top: 563px;
    border: none;
    background: #fd3373;
    border-radius: 10px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 140.62%;
    color: #ffffff;
    @media (max-width: 600px) {
      width: 193px;
      height: 62px;
      left: 44px;
      top: 364px;
      font-size: 25px;
    }
  }
`;

export const Plans = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
`;

export const Extra = styled.div`
  background-color: red;
  width: 50%;
  display: flex;
  justify-content: space-between;

  .extra-01 {
    /* position: relative; */
    background-color: yellow;
    width: 380px;
    height: 767px;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* left: -5em; */
    /* top: 2.8em; */
    @media (max-width: 600px) {
      left: 9em;
    }
  }
  .extra-02 {
    background-color: blue;
    align-items: center;
    /* position: relative; */
    width: 380px;
    height: 767px;
    /* left: 6em; */
    top: 50px;
    @media (max-width: 600px) {
      left: 9em;
      top: -1em;
    }
  }

  @media (min-width: 768px) {
    .extra-01 {
      width: 320px;
      top: 7em;
      left: 8em;
    }
    .extra-02 {
      width: 320px;
      top: 9em;
      left: 17em;
    }
  }
  @media (min-width: 1024px) {
    .extra-01 {
      width: 325px;
      left: -6em;
    }
    .extra-02 {
      width: 325px;
      left: 11em;
    }
  }
`;
