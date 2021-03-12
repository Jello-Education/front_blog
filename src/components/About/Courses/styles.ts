import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-top: 40px;

  .first-description {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 74px;

    .courses-left-first-description {
      display: block;
      padding-left: 24px;
      margin-right: 194px;

      h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 42px;
        color: #282828;
        margin-bottom: 26px;
      }

      p {
        width: 635px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 24px;
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
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 697px;

    .courses-left-second-description {
      width: 687px;
      padding-right: 21px;

      img {
        width: 100%;
      }
    }

    .courses-right-second-description {
      text-align: end;

      h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 42px;
        color: #282828;
        margin-bottom: 26px;
      }

      h3 {
        width: 635px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 24px;
        color: #282828;
      }
    }
  }
`;
