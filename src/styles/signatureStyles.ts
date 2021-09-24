import styled from "styled-components";

export const Planos = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 10em;
    }
    .planoBranco {
      margin: 0 1em;
      width: 320px;
      height: 700px;
      
      background: #ffffff;
      box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      
      position: relative;
      left: 1em;
      
    }
    .planoRosa {
      width: 320px;
      height: 700px;

      background: #fd3373;
      box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.25);
      border-radius: 30px;

      position: relative;
      left: 1em;
    }

    @media (min-width: 360px) and (max-width: 600px) {
    }
    .planoBranco,
    .planoRosa {

      left: 8.5em;
    }

    @media (min-width: 768px) and (max-width: 900px) {
      .planoBranco,
      .planoRosa {
        left: 11em;
      }
    }

    @media (min-width: 1000px) {
    
    .planoBranco,
    .planoRosa {
      left: 2.5em;

    }
  }

  }
  .planoTitulo {
    margin-top: 1em;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    /* or 120% */
    text-align: center;
    color: #282828;
  }
  .planoPreco {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    /* or 120% */
    text-align: center;
    color: #44f9bd;
    text-shadow: 0px 2px 1px #000000;
  }
  li {
    margin-top: 0.5em;
    padding-left: 0.5em;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 48px;
    /* or 200% */
    color: #282828;
  }
  img {
    position: relative;
    top: 3.5px;
    margin-right: 0.5em;
  }

  .icon-branco {
    filter: grayscale(100%) contrast(100%) invert(100%) brightness(2);
  }
`;
export const Titulo = styled.div`
  img {
    width: 1350px;

  }
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
      left: 8em;
      width: 18em
}
@media (min-width: 1024px) {
  left: 6em;
}
    }
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
`;

export const Botao = styled.div`
  .button-planos {
      display: block; 
      margin: 3em 0.2em;

      width: 340px;
      height: 80px;

      border: none;
      background: #44f9bd;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
      border-radius: 30px;

      font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
        color: #282828;
   
      @media (max-width: 600px) {
        width: 320px;
        height: 68px;
        
        margin: 2.5em 0;
        
        h2 {
          font-size: 35px
        }
      }
      @media (min-width: 764px) {
        top: 138em;
        width: 300px;
        h2 {
          font-size: 35px;
        }
      }
    }
  }
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

export const Extra = styled.div`
  .extra-01 {
    position: relative;
    width: 380px;
    height: 767px;
    left: -5em;
    top: 2.8em;
    @media (max-width: 600px) {
      left: 9em;
    }
  }
  .extra-02 {
    position: relative;
    width: 380px;
    height: 767px;
    left: 6em;
    top: 5em;
    @media (max-width: 600px) {
      left: 9em;
      top: -1em;
    }
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