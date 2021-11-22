import styled from "styled-components";

export const Container = styled.div`
  display: block;
  /* margin-top: 10px; */

  */ h2 {
    font-size: 2.5rem;
  }

  p,
  h3 {
    font-size: 1.3rem;
  }

  .first-description {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 34px;

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

    img {
      height: 400px;
      width: 300px;
    }

    @media (max-width: 1100px) {
      justify-content: center;
      /* text-align: center; */
      display: inline;

      h2 {
        margin-bottom: 16px;
      }

      p {
        width: 100%;
      }
    }

    @media (max-width: 500px) {
      img {
        /* margin-top: -90px; */
      }
    }

    .courses-left-first-description {
      display: block;
      /* padding-left: 24px;
      margin-right: 194px; */
    }

    .courses-right-first-description {
      padding-right: 24px;
      text-align: center;

      img {
        /* width: 403px;
        height: 173px; */
      }

      /* @media (max-width: 1100px) {
        width: 0;
        height: 0;
      } */
    }

    .courses-img {
      padding-right: 24px;
      text-align: center;

      img {
        width: 403px;
        height: 173px;
      }

      @media (max-width: 500px) {
        img {
          width: 303px;
          height: 173px;
        }
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
        width: 500px;
        height: 328px;
      }

      @media (max-width: 1100px) {
        width: 0px;
        padding-right: 0px;
      }
    }

    .courses-left-img {
      width: 687px;
      padding-right: 21px;

      img {
        width: 500px;
        height: 328px;
      }

      @media (max-width: 1100px) {
        width: 0px;
        padding-right: 0px;
      }
    }

    .courses-right-second-description {
      text-align: right;
      display: flex;
      flex-direction: column;

      h2 {
        margin-top: 30px;
      }

      @media (max-width: 1100px) {
        text-align: justify;
      }

      h2 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        color: #282828;
        margin-bottom: 26px;
        position: relative;
        /* left: -2rem; */
      }

      h3 {
        width: 635px;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        color: #282828;
        align-self: flex-end;
      }
    }
  }

  @media (max-width: 1100px) {
    h2 {
      font-size: 2.5rem;
      margin-bottom: 16px;
    }

    p {
      width: 100%;
      text-align: justify;
      line-height: 32px;
      font-size: 1.5rem;
    }
  }
`;
