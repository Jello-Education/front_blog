import styled from "styled-components";

export const Container = styled.div`
  display: block;
  margin-top: 40px;

/*

  @media (max-width: 600px) {
    width: 0vh;
  }


  */
  h2 {
    font-size: 2.5rem;
  }

  p,
  h3 {
    font-size: 1.3rem;
  }

 /* @media (max-width: 768px) {
    p,
    h3 {
      font-weight: 200;
      font-size: 2.3rem;
    }
  }

  h2 {
    font-size: 3rem;
  }
  img {
    width: 17rem;
    height: 16rem;
  }

  @media (max-width: 600px) {
    p,
    h3 {
      width: 400px !important;
    }

  }

  @media (min-width: 768px) {
    .courses h3 {
      display: contents;

      p,
      h2,
      courses-right-second-description {
        position: relative;
        left: 5rem;
      }
    }
     
    */
    .first-description {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 74px;

      @media (max-width: 1100px) {
        justify-content: center;
        text-align: center;

        img {
          display: none;
        }

        .courses-left-first-description {
          margin: 0 !important;
          padding: 0 !important;
        }
      }

      .courses-left-first-description {
        display: block;
        padding-left: 24px;
        margin-right: 194px;

        h2 {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          color: #282828;
          margin-bottom: 26px;
        }

        p {
          width: 635px;
          font-family: "Montserrat", sans-serif;
          font-weight: 400;
          color: #282828;
        }
      }

      .courses-right-first-description {
        padding-right: 24px;

        img {
          width: 100%;
        }
      }
    }

    .second-description {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 74px;

      @media (max-width: 1100px) {
        justify-content: center;
        text-align: center;

        img {
          display: none;
        }
      }

      .courses-left-second-description {
        width: 687px;
        padding-right: 21px;

        img {
          width: 100%;
        }
      }

      .courses-right-second-description {
        text-align: right;
        display: flex;
        flex-direction: column;

        @media (max-width: 1100px) {
          text-align: center;
        }

        h2 {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          color: #282828;
          margin-bottom: 26px;
          position: relative;
          left: -2rem;
        }

        h3 {
          width: 635px;
          font-family: "Montserrat", sans-serif;
          font-weight: 400;
          color: #282828;
          align-self: flex-end;
        }

`;
