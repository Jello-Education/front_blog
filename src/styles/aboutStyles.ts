import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const AboutJelloContainer = styled.div`
  display: flex;
  margin-top: 188px;
  background: rgba(253, 152, 184, 0.5);
  border-radius: 10px;
  width: 100%;
  height: 402px;
  align-items: center;
`;

export const AboutJelloDetails = styled.div`
  display: block;
  width: 100%;
  height: 268px;
  background: #fd98b8;
  border-radius: 10px;

  text-align: center;

  h1 {
    padding-top: 46px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 52px;
    color: #fafafa;
  }

  h3 {
    padding-top: 26px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 36px;
    color: #fafafa;
  }
`;

export const Courses = styled.div`
  display: block;
  margin-top: 40px;

  border-bottom: 2px solid #fd3373;

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